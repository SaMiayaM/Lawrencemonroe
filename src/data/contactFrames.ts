import { ContactFrame } from '../types';

export const CONTACT_FRAMES: ContactFrame[] = [
  {
    id: 'frame-01',
    frameNumber: '01/08',
    label: 'FRAME 01',
    title: 'SILHOUETTE IN STRIDE',
    category: 'MOTION TEST',
    image: '/images/campaign-hero-motion.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Torso and lower-body kinetic capture. Evaluating drape behavior under continuous acceleration.',
    metadata: {
      lens: '50mm Anamorphic',
      exposure: '1/30s at f/4.0',
      treatment: 'High-contrast Silver Gelatin',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-02',
    frameNumber: '02/08',
    label: 'OBJECT VIEW',
    title: 'LM SHORTS 001 SILHOUETTE',
    category: 'OBJECT STUDY',
    image: '/images/shorts-001-cutout.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Isolated primary silhouette. Heavy 480GSM French terry draped over structural interior matrix.',
    metadata: {
      lens: '85mm Macro',
      exposure: '1/250s at f/8.0',
      treatment: 'Studio Washed Charcoal',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-03',
    frameNumber: '03/08',
    label: 'DETAIL VIEW',
    title: 'HARDWARE & WAISTBAND',
    category: 'CRAFT SPEC',
    image: '/images/campaign-contact-hardware.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Brushed antique gold eyelets with debossed monogram aglet tips on high-density ribbed waistband.',
    metadata: {
      lens: '100mm Macro',
      exposure: '1/160s at f/11.0',
      treatment: 'Directional Grazing Key',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-04',
    frameNumber: '04/08',
    label: 'FRAME 04',
    title: 'RAW BONE CONTRAST STRIDE',
    category: 'EDITORIAL STUDY',
    image: '/images/campaign-contact-stride.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Dual colorway test on body. Exploring structural interplay between bone cotton and shadow planes.',
    metadata: {
      lens: '35mm Prime',
      exposure: '1/500s at f/5.6',
      treatment: 'Warm Concrete Plate',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-05',
    frameNumber: '05/08',
    label: 'RELEASE TEST',
    title: '480GSM WEAVE DENSITY',
    category: 'FIBER ANALYSIS',
    image: '/images/campaign-contact-fabric.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Micro-structural loop alignment and yarn tension after repeat garment wash cycle.',
    metadata: {
      lens: '120mm Micro',
      exposure: '1/125s at f/16.0',
      treatment: 'Cross-polarized Macro',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-06',
    frameNumber: '06/08',
    label: 'FRAME 06',
    title: 'DUAL COLORWAY ISOLATION',
    category: 'OBJECT STUDY',
    image: '/images/shorts-002-cutout.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'LM Shorts 002 raw bone pigment canvas with contrasting graphite drawstrings.',
    metadata: {
      lens: '85mm Macro',
      exposure: '1/250s at f/8.0',
      treatment: 'Neutral Studio Slate',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-07',
    frameNumber: '07/08',
    label: 'ARCHIVE NEXT',
    title: 'PROTOTYPE 002 / SHIRT',
    category: 'UNRELEASED SPEC',
    image: '/images/archive-shirt-teaser.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Heavyweight boxy cut shirt in development. Photocopied graphic negative test. Not yet released.',
    metadata: {
      lens: 'Laboratory Scan',
      treatment: 'Xerox Halftone Negative',
      release: 'RELEASE 002 / PENDING'
    },
    isUnreleased: true
  },
  {
    id: 'frame-08',
    frameNumber: '08/08',
    label: 'ARCHIVE NEXT',
    title: 'HEADWEAR 003 / CAP',
    category: 'UNRELEASED SPEC',
    image: '/images/archive-hat-teaser.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Structured 6-panel wool crown. Cut-paper collage mask. Request access for release notification.',
    metadata: {
      lens: 'Laboratory Scan',
      treatment: 'High-contrast Halftone Mask',
      release: 'RELEASE 003 / PENDING'
    },
    isUnreleased: true
  }
];
