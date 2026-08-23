import { Product } from '../types';

export const RELEASED_PRODUCTS: Product[] = [
  {
    id: 'lm-shorts-001',
    slug: 'lm-shorts-001',
    code: 'LMS-001-BLK',
    name: 'LM SHORTS 001',
    release: 'RELEASE 001 / ACTIVE',
    price: 165.00,
    currency: 'USD',
    status: 'ACTIVE',
    stockCount: 14,
    badge: 'ACTIVE RELEASE',
    colors: [
      { name: 'Pitch Black', code: 'BLK', hex: '#0A0A0A', borderHex: '#303030' },
      { name: 'Bone White', code: 'BNE', hex: '#E7E1D7', borderHex: '#9A958D' },
    ],
    selectedColorDefault: 'Pitch Black',
    sizes: [
      { size: 'S', available: true, stock: 3 },
      { size: 'M', available: true, stock: 5 },
      { size: 'L', available: true, stock: 4 },
      { size: 'XL', available: true, stock: 2 },
    ],
    shortDescription: 'Heavyweight 480GSM French terry architectural short with elongated tubular drawstrings and custom brushed antique gold hardware.',
    story: 'Engineered as the foundational pillar of Release 001. Built with an uncompromising focus on structural silhouette, substantial hand-feel, and enduring repeat wear. The custom double-faced weave drapes with intentional rigidity, resisting collapse while adapting to dynamic motion.',
    fit: [
      'Relaxed boxy architectural silhouette',
      'Dropped crotch with structured gusset for unrestricted movement',
      'Sits comfortably at the natural waist or relaxed on hips',
      'Hits just above the knee with clean proportioned hem',
      'True to size for intended draped fit; size down for standard slim taper'
    ],
    construction: [
      '480 GSM ultra-heavyweight combed French terry',
      'High-density ribbed waistband with reinforced 4-needle stitching',
      'Custom elongated tubular drawstrings with debossed antique gold aglets',
      'Deep side welt pockets with concealed interior device sleeve',
      'Rear welt pocket secured with reinforced gold-thread bartacks',
      'Discreet tonal monogram embroidery at lower left hem'
    ],
    fabricAndCare: [
      '100% Organic Heavyweight Combed Cotton (480 GSM)',
      'Pre-shrunk and garment-washed for broken-in softness without loss of structure',
      'Machine wash cold inside out with like colors',
      'Do not bleach or tumble dry hot',
      'Line dry in shade to preserve deep tone and fiber integrity',
      'Cool iron inside out if necessary'
    ],
    shippingAndReturns: [
      'Ships within 2–4 business days via carbon-neutral priority courier',
      'Complimentary global standard delivery on all Release 001 orders',
      'Private archive presentation box with numbered authentication card',
      '14-day return window in pristine unworn condition with intact tags and packaging'
    ],
    heroImage: '/images/shorts-001-cutout.jpg',
    cutoutImage: '/images/shorts-001-cutout.jpg',
    images: [
      {
        id: 'img-1',
        url: '/images/shorts-001-cutout.jpg',
        label: 'Front',
        alt: 'LM Shorts 001 - Front silhouette in pitch black',
        type: 'cutout'
      },
      {
        id: 'img-2',
        url: '/images/campaign-hero-motion.jpg',
        label: 'On Body',
        alt: 'LM Shorts 001 - Cropped on-body motion view',
        type: 'lifestyle'
      },
      {
        id: 'img-3',
        url: '/images/campaign-contact-hardware.jpg',
        label: 'Detail',
        alt: 'LM Shorts 001 - Antique gold eyelet and drawstring aglet detail',
        type: 'detail'
      },
      {
        id: 'img-4',
        url: '/images/shorts-001-back.jpg',
        label: 'Back',
        alt: 'LM Shorts 001 - Back view with reinforced pocket structure',
        type: 'cutout'
      },
      {
        id: 'img-5',
        url: '/images/campaign-contact-fabric.jpg',
        label: 'Fabric',
        alt: 'LM Shorts 001 - 480GSM French terry macro texture',
        type: 'macro'
      }
    ]
  },
  {
    id: 'lm-shorts-002',
    slug: 'lm-shorts-002',
    code: 'LMS-002-BNE',
    name: 'LM SHORTS 002',
    release: 'RELEASE 001 / ACTIVE',
    price: 165.00,
    currency: 'USD',
    status: 'ACTIVE',
    stockCount: 9,
    badge: 'EDITION DUAL',
    colors: [
      { name: 'Bone White', code: 'BNE', hex: '#E7E1D7', borderHex: '#9A958D' },
      { name: 'Pitch Black', code: 'BLK', hex: '#0A0A0A', borderHex: '#303030' },
    ],
    selectedColorDefault: 'Bone White',
    sizes: [
      { size: 'S', available: true, stock: 2 },
      { size: 'M', available: true, stock: 3 },
      { size: 'L', available: true, stock: 3 },
      { size: 'XL', available: true, stock: 1 },
    ],
    shortDescription: 'Raw bone cotton twill architectural short with contrast charcoal drawstrings and brushed antique gold hardware.',
    story: 'A stark tonal inverse crafted from raw-pigment bone cotton. The high-contrast graphite hardware and custom braided cords accentuate the geometric lines of the garment, celebrating the pure architecture of fabric and negative space.',
    fit: [
      'Relaxed boxy architectural silhouette',
      'Tailored dropped crotch for ease of movement',
      'Elasticized waistband with long custom contrast cords',
      'Clean above-the-knee hemline',
      'True to size for signature drape'
    ],
    construction: [
      '480 GSM raw natural pigment combed cotton twill',
      'Contrasting washed graphite tubular drawstrings with antique gold tips',
      'Reinforced side seam split with interior twill tape binding',
      'Deep dual front welt pockets and secure rear pocket',
      'Custom stamped edition number interior label'
    ],
    fabricAndCare: [
      '100% Unbleached Raw Combed Cotton (480 GSM)',
      'Natural raw tone with subtle organic fleck variations',
      'Machine wash gentle cold inside out',
      'Dry flat in shade; do not tumble dry',
      'Warm iron inside out'
    ],
    shippingAndReturns: [
      'Ships within 2–4 business days in serialized packaging',
      'Complimentary priority delivery included',
      'Includes serialized LM Certificate of Authenticity',
      '14-day return privilege on unworn items'
    ],
    heroImage: '/images/shorts-002-cutout.jpg',
    cutoutImage: '/images/shorts-002-cutout.jpg',
    images: [
      {
        id: 'img-bne-1',
        url: '/images/shorts-002-cutout.jpg',
        label: 'Front',
        alt: 'LM Shorts 002 - Front silhouette in raw bone',
        type: 'cutout'
      },
      {
        id: 'img-bne-2',
        url: '/images/campaign-contact-stride.jpg',
        label: 'On Body',
        alt: 'LM Shorts 002 - On-body lower stride crop',
        type: 'lifestyle'
      },
      {
        id: 'img-bne-3',
        url: '/images/shorts-002-detail.jpg',
        label: 'Detail',
        alt: 'LM Shorts 002 - Seam and fabric macro detail',
        type: 'detail'
      },
      {
        id: 'img-bne-4',
        url: '/images/campaign-contact-hardware.jpg',
        label: 'Fabric',
        alt: 'LM Shorts 002 - Custom hardware and cord construction',
        type: 'macro'
      }
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return RELEASED_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
};
