export interface ProductVisual {
  id: string;
  src: string;
  alt: string;
  productId: string;
  originalWidth: number;
  originalHeight: number;
  label: 'FULL LOOK' | 'SHORTS FOCUS' | 'CAMPAIGN VIEW 02' | 'ALTERNATE LOOK' | 'SEATED STUDY';
  badgeAsset?: string;
  crop: {
    desktop: {
      objectPosition: string;
      scale: number;
    };
    mobile: {
      objectPosition: string;
      scale: number;
    };
  };
  annotations?: {
    id: number;
    label: string;
    description: string;
    top: string; // percentage
    left: string; // percentage
  }[];
  focus: 'full-look' | 'shorts-focus' | 'shirt-teaser' | 'headwear-teaser';
}

export const brandAssets = {
  wordmark: '/assets/lawrence-monroe-wordmark.svg',
  wordmarkOutline: '/assets/lawrence-monroe-outline.svg',
  whiteBadge: '/assets/lawrence-monroe-white-badge.svg',
  blueBadge: '/assets/lawrence-monroe-blue-badge.svg',
  monogram: '/assets/lm-monogram.svg',
  archBadgeWhite: '/assets/lawrence-arch-badge-white.svg',
  archBadgeBlue: '/assets/lawrence-arch-badge-blue.svg',
  capMark: '/assets/lawrence-monroe-cap-mark.svg',
};

// LM SHORTS 001 (Pitch Black with White Arch Graphic & White Pill Badge)
export const SHORTS_001_VISUALS: ProductVisual[] = [
  {
    id: 'lm-001-full-look',
    src: '/images/shorts-001-cutout.jpg',
    alt: 'LM Shorts 001 in Pitch Black with white distressed arch graphic shown on model in studio',
    productId: 'lm-shorts-001',
    badgeAsset: brandAssets.whiteBadge,
    originalWidth: 1200,
    originalHeight: 1500,
    label: 'FULL LOOK',
    focus: 'full-look',
    crop: {
      desktop: {
        objectPosition: '50% 68%',
        scale: 1.85,
      },
      mobile: {
        objectPosition: '50% 65%',
        scale: 1.55,
      },
    },
    annotations: [
      {
        id: 1,
        label: '01 / ELASTICATED WAIST',
        description: 'Reinforced 4-needle waistband with internal tubular drawstrings.',
        top: '48%',
        left: '50%',
      },
      {
        id: 2,
        label: '02 / ARCH GRAPHIC',
        description: 'Distressed white screenprinted vertical Lawrence arch pill on left leg.',
        top: '62%',
        left: '58%',
      },
      {
        id: 3,
        label: '03 / WHITE PILL BADGE',
        description: 'Official LawrenceMonroe double-bordered pill badge insignia on right hip.',
        top: '52%',
        left: '38%',
      },
      {
        id: 4,
        label: '04 / RAW CUT HEM',
        description: 'Clean raw edge finish hitting at knee with anti-fray stay stitch.',
        top: '76%',
        left: '42%',
      },
    ],
  },
  {
    id: 'lm-001-campaign-02',
    src: '/images/campaign-hero-motion.jpg',
    alt: 'LM Shorts 001 3/4 standing angle showing silhouette drape',
    productId: 'lm-shorts-001',
    badgeAsset: brandAssets.whiteBadge,
    originalWidth: 1200,
    originalHeight: 1500,
    label: 'CAMPAIGN VIEW 02',
    focus: 'full-look',
    crop: {
      desktop: {
        objectPosition: '50% 66%',
        scale: 1.8,
      },
      mobile: {
        objectPosition: '50% 64%',
        scale: 1.5,
      },
    },
  },
  {
    id: 'lm-001-seated-study',
    src: '/images/shorts-001-back.jpg',
    alt: 'LM Shorts 001 seated study in studio chair',
    productId: 'lm-shorts-001',
    badgeAsset: brandAssets.whiteBadge,
    originalWidth: 1200,
    originalHeight: 1500,
    label: 'SEATED STUDY',
    focus: 'full-look',
    crop: {
      desktop: {
        objectPosition: '50% 55%',
        scale: 1.7,
      },
      mobile: {
        objectPosition: '50% 55%',
        scale: 1.45,
      },
    },
  },
];

// LM SHORTS 002 (Heather Grey with Electric Blue Graphic & Blue Pill Badge)
export const SHORTS_002_VISUALS: ProductVisual[] = [
  {
    id: 'lm-002-full-look',
    src: '/images/shorts-002-cutout.jpg',
    alt: 'LM Shorts 002 in Heather Grey with electric blue Lawrence arch graphic shown on model in studio',
    productId: 'lm-shorts-002',
    badgeAsset: brandAssets.blueBadge,
    originalWidth: 1200,
    originalHeight: 1500,
    label: 'FULL LOOK',
    focus: 'full-look',
    crop: {
      desktop: {
        objectPosition: '50% 68%',
        scale: 1.85,
      },
      mobile: {
        objectPosition: '50% 65%',
        scale: 1.55,
      },
    },
    annotations: [
      {
        id: 1,
        label: '01 / HEATHER WEAVE',
        description: 'Heavyweight athletic grey cotton knit with soft fleck texture.',
        top: '48%',
        left: '50%',
      },
      {
        id: 2,
        label: '02 / COBALT BLUE ARCH',
        description: 'High-contrast cobalt blue screenprinted Lawrence graphic on left leg.',
        top: '62%',
        left: '58%',
      },
      {
        id: 3,
        label: '03 / BLUE PILL BADGE',
        description: 'Electric blue LawrenceMonroe double-bordered pill badge on right hip.',
        top: '52%',
        left: '38%',
      },
      {
        id: 4,
        label: '04 / RELAXED HEM',
        description: 'Raw-cut knee opening for natural streetwear drape.',
        top: '76%',
        left: '42%',
      },
    ],
  },
  {
    id: 'lm-002-campaign-02',
    src: '/images/campaign-contact-stride.jpg',
    alt: 'LM Shorts 002 3/4 standing view showing blue graphic and drape',
    productId: 'lm-shorts-002',
    badgeAsset: brandAssets.blueBadge,
    originalWidth: 1200,
    originalHeight: 1500,
    label: 'CAMPAIGN VIEW 02',
    focus: 'full-look',
    crop: {
      desktop: {
        objectPosition: '50% 66%',
        scale: 1.8,
      },
      mobile: {
        objectPosition: '50% 64%',
        scale: 1.5,
      },
    },
  },
];
