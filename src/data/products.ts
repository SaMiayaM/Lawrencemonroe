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
    badge: 'ARCHIVE BLACK',
    colors: [
      { name: 'Pitch Black / White Arch', code: 'BLK', hex: '#0A0A0A', borderHex: '#303030' },
      { name: 'Heather Grey / Blue Arch', code: 'GRY', hex: '#C0BFBB', borderHex: '#9A958D' },
    ],
    selectedColorDefault: 'Pitch Black / White Arch',
    sizes: [
      { size: 'S', available: true, stock: 3 },
      { size: 'M', available: true, stock: 5 },
      { size: 'L', available: true, stock: 4 },
      { size: 'XL', available: true, stock: 2 },
    ],
    shortDescription: 'Heavyweight black cotton architectural shorts featuring the signature vertical Lawrence arch graphic on the left leg, upper thigh badge, and raw cut hem.',
    story: 'Engineered as the definitive silhouette of Release 001. Cut with an uncompromising boxy streetwear drop, raw edge knee finish, and screenprinted with the high-contrast distressed Lawrence arch pill. Designed to hold its structural shape through continuous movement.',
    fit: [
      'Relaxed boxy streetwear silhouette hitting right at the knee',
      'Dropped crotch with spacious leg opening for natural drape',
      'Elasticized waistband with internal heavy drawstrings',
      'Raw cut unfinished hem with interior lockstitch to prevent fraying',
      'True to size for signature drape; size down for standard above-knee taper'
    ],
    construction: [
      '480 GSM ultra-heavyweight combed cotton jersey',
      'High-density distressed screenprinted vertical Lawrence arch graphic (left leg)',
      'Subtle LawrenceMonroe oval insignia print (right upper thigh)',
      'High-density 4-needle elastic waistband',
      'Deep side seam pockets and secure rear welt pocket',
      'Raw cut hemline designed to naturally roll slightly with wear'
    ],
    fabricAndCare: [
      '100% Organic Heavyweight Cotton (480 GSM)',
      'Garment washed and pre-shrunk to preserve exact graphic alignment',
      'Machine wash cold inside out with like darks',
      'Do not bleach or dry clean',
      'Line dry in shade to preserve deep pitch black tone and screenprint integrity',
      'Cool iron inside out if desired (avoid direct contact with graphic)'
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
        alt: 'LM Shorts 001 - Front full look with white arch graphic on left leg',
        type: 'cutout'
      },
      {
        id: 'img-2',
        url: '/images/campaign-hero-motion.jpg',
        label: 'On Body',
        alt: 'LM Shorts 001 - 3/4 standing angle showing silhouette drape',
        type: 'lifestyle'
      },
      {
        id: 'img-3',
        url: '/images/shorts-001-back.jpg',
        label: 'Detail',
        alt: 'LM Shorts 001 - Studio seated study',
        type: 'detail'
      },
      {
        id: 'img-4',
        url: '/images/campaign-contact-hardware.jpg',
        label: 'Fabric',
        alt: 'LM Shorts 001 - Heavyweight cotton weave and waistband detail',
        type: 'macro'
      }
    ]
  },
  {
    id: 'lm-shorts-002',
    slug: 'lm-shorts-002',
    code: 'LMS-002-GRY',
    name: 'LM SHORTS 002',
    release: 'RELEASE 001 / ACTIVE',
    price: 165.00,
    currency: 'USD',
    status: 'ACTIVE',
    stockCount: 9,
    badge: 'ARCHIVE HEATHER',
    colors: [
      { name: 'Heather Grey / Blue Arch', code: 'GRY', hex: '#C0BFBB', borderHex: '#9A958D' },
      { name: 'Pitch Black / White Arch', code: 'BLK', hex: '#0A0A0A', borderHex: '#303030' },
    ],
    selectedColorDefault: 'Heather Grey / Blue Arch',
    sizes: [
      { size: 'S', available: true, stock: 2 },
      { size: 'M', available: true, stock: 3 },
      { size: 'L', available: true, stock: 3 },
      { size: 'XL', available: true, stock: 1 },
    ],
    shortDescription: 'Heavyweight athletic heather grey cotton shorts with electric cobalt blue Lawrence arch graphic and raw cut hem.',
    story: 'The tonal dual iteration in athletic heather grey. Accented by a vibrant electric blue vertical Lawrence arch on the left thigh and matching mini oval insignia. Delivers vintage athletic character grounded in contemporary streetwear proportions.',
    fit: [
      'Relaxed boxy streetwear silhouette hitting right at the knee',
      'Dropped crotch with spacious leg opening for natural drape',
      'Elasticized waistband with internal heavy drawstrings',
      'Raw cut unfinished hem with interior lockstitch to prevent fraying',
      'True to size for signature drape'
    ],
    construction: [
      '480 GSM athletic heather combed cotton',
      'Cobalt blue distressed screenprinted vertical Lawrence arch graphic (left leg)',
      'Matching cobalt blue LawrenceMonroe oval insignia (right upper thigh)',
      'High-density 4-needle elastic waistband',
      'Deep dual front welt pockets and secure rear pocket',
      'Raw cut hemline designed to naturally roll slightly with wear'
    ],
    fabricAndCare: [
      '100% Organic Combed Athletic Cotton (480 GSM)',
      'Heather melange weave with subtle natural shade variations',
      'Machine wash gentle cold inside out',
      'Line dry in shade to preserve crisp graphic color',
      'Warm iron inside out if needed'
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
        alt: 'LM Shorts 002 - Front full look with electric blue arch graphic on left leg',
        type: 'cutout'
      },
      {
        id: 'img-bne-2',
        url: '/images/campaign-contact-stride.jpg',
        label: 'On Body',
        alt: 'LM Shorts 002 - 3/4 standing view showing blue graphic and drape',
        type: 'lifestyle'
      },
      {
        id: 'img-bne-3',
        url: '/images/shorts-002-detail.jpg',
        label: 'Detail',
        alt: 'LM Shorts 002 - Heather weave and raw hem detail',
        type: 'detail'
      }
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return RELEASED_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
};
