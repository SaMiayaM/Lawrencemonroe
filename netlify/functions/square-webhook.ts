import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import crypto from 'crypto';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY;
  const signature = event.headers['x-square-hmacsha256-signature'];
  const siteUrl = process.env.SITE_URL || 'https://lawrencemonroe.com';
  const webhookUrl = `${siteUrl}/.netlify/functions/square-webhook`;

  // Verify HMAC signature if signatureKey is configured
  if (signatureKey && signature) {
    try {
      const payload = webhookUrl + (event.body || '');
      const hmac = crypto.createHmac('sha256', signatureKey);
      hmac.update(payload);
      const hash = hmac.digest('base64');

      if (hash !== signature) {
        return {
          statusCode: 403,
          body: JSON.stringify({ error: 'Invalid webhook signature' }),
        };
      }
    } catch (err) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Error calculating signature verification' }),
      };
    }
  }

  try {
    const webhookData = JSON.parse(event.body || '{}');
    const { type, data } = webhookData;

    // Handle event types
    switch (type) {
      case 'payment.updated':
      case 'payment.created': {
        const payment = data?.object?.payment;
        // Inventory synchronization, client email dispatch, packaging queue record
        break;
      }
      case 'refund.updated':
      case 'refund.created': {
        // Handle refund telemetry
        break;
      }
      default:
        break;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err: any) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid webhook event payload format' }),
    };
  }
};
