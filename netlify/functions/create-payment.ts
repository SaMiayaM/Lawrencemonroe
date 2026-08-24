import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

// Server-authoritative catalog to prevent client price tampering
const AUTHORITATIVE_CATALOG: Record<string, { name: string; priceCents: number; available: boolean; maxStock: number }> = {
  'lm-shorts-001': {
    name: 'LM SHORTS 001',
    priceCents: 16500, // $165.00 in integer cents
    available: true,
    maxStock: 14,
  },
  'lm-shorts-002': {
    name: 'LM SHORTS 002',
    priceCents: 16500, // $165.00 in integer cents
    available: true,
    maxStock: 9,
  },
};

const VALID_SIZES = ['S', 'M', 'L', 'XL'];

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { sourceId, customer, items, idempotencyKey } = body;

    // Validate payload existence
    if (!sourceId || !customer || !items || !Array.isArray(items) || items.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid payment request payload. Missing sourceId, customer, or items.',
        }),
      };
    }

    // Server-side inventory & price validation
    let totalCents = 0;
    const validatedItems = [];

    for (const item of items) {
      const productSpec = AUTHORITATIVE_CATALOG[item.productId];

      if (!productSpec) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: `Unreleased or unrecognized product identifier: ${item.productId}. Only released Release 001 shorts are purchasable.`,
          }),
        };
      }

      if (!productSpec.available) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: `Product ${productSpec.name} is currently out of stock.`,
          }),
        };
      }

      if (!VALID_SIZES.includes(item.size)) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: `Invalid size selected: ${item.size}`,
          }),
        };
      }

      const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
      if (qty > productSpec.maxStock) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: `Requested quantity exceeds available inventory allocation for ${productSpec.name}.`,
          }),
        };
      }

      const itemTotalCents = productSpec.priceCents * qty;
      totalCents += itemTotalCents;

      validatedItems.push({
        productId: item.productId,
        name: productSpec.name,
        color: item.color,
        size: item.size,
        quantity: qty,
        unitPriceCents: productSpec.priceCents,
        lineTotalCents: itemTotalCents,
      });
    }

    // Calculate shipping in integer cents
    const shippingCents = customer.shippingOption === 'express' ? 2500 : 0;
    const taxCents = Math.round(totalCents * 0.0825);
    const finalAmountCents = totalCents + shippingCents + taxCents;

    // Square API Integration
    const squareAccessToken = process.env.SQUARE_ACCESS_TOKEN;
    const squareLocationId = process.env.SQUARE_LOCATION_ID;
    const squareEnv = process.env.SQUARE_ENVIRONMENT || 'sandbox';

    const orderId = `LM-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    if (squareAccessToken && squareLocationId) {
      // Connect to live or sandbox Square Payments endpoint
      const squareBaseUrl =
        squareEnv === 'production'
          ? 'https://connect.squareup.com/v2/payments'
          : 'https://connect.squareupsandbox.com/v2/payments';

      const squareResponse = await fetch(squareBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${squareAccessToken}`,
          'Square-Version': '2023-10-18',
        },
        body: JSON.stringify({
          source_id: sourceId,
          idempotency_key: idempotencyKey || (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `lm-${Date.now()}`),
          amount_money: {
            amount: finalAmountCents,
            currency: 'USD',
          },
          location_id: squareLocationId,
          buyer_email_address: customer.email,
          note: `LAWRENCE MONROE Release 001 - Order ${orderId}`,
        }),
      });

      const squareData = await squareResponse.json();

      if (!squareResponse.ok) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: squareData.errors?.[0]?.detail || 'Square payment processing failed.',
          }),
        };
      }

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          paymentId: squareData.payment?.id,
          status: squareData.payment?.status === 'COMPLETED' ? 'COMPLETED' : 'PENDING',
          totalAmount: finalAmountCents / 100,
          currency: 'USD',
          items: validatedItems,
          customer,
          createdAt: new Date().toISOString(),
        }),
      };
    }

    // Default Sandbox / Fallback response for development/testing
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId,
        paymentId: `sq_sandbox_${Math.random().toString(36).substring(2, 12)}`,
        status: 'COMPLETED',
        totalAmount: finalAmountCents / 100,
        currency: 'USD',
        items: validatedItems,
        customer,
        createdAt: new Date().toISOString(),
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error?.message || 'Internal server error while processing payment transaction.',
      }),
    };
  }
};
