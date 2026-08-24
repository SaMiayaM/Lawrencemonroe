import { ContactFrame } from '../types';
import { brandAssets } from './assets';

export const CONTACT_FRAMES: ContactFrame[] = [
  {
    id: 'frame-01',
    frameNumber: '01/08',
    label: 'FRAME 01',
    title: 'LM SHORTS 001 // BLACK ARCH',
    category: 'FULL LOOK',
    image: '/images/shorts-001-cutout.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Full-length studio campaign look. Model in black long-sleeve tee, black shorts with white distressed Lawrence arch graphic, white socks, and black Converse high-tops.',
    metadata: {
      treatment: 'Studio Washed Black',
      release: 'RELEASE 001 / ACTIVE'
    }
  },
  {
    id: 'frame-02',
    frameNumber: '02/08',
    label: 'FRAME 02',
    title: 'LM SHORTS 002 // HEATHER BLUE',
    category: 'FULL LOOK',
    image: '/images/shorts-002-cutout.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Full-length studio campaign look. Model in white long-sleeve tee, athletic heather grey shorts with electric cobalt blue Lawrence arch graphic, and black Converse.',
    metadata: {
      treatment: 'Studio Athletic Heather',
      release: 'RELEASE 001 / ACTIVE'
    }
  },
  {
    id: 'frame-03',
    frameNumber: '03/08',
    label: 'SEATED STUDY',
    title: 'CHROME CANTILEVER STUDY',
    category: 'SEATED LOOK',
    image: '/images/campaign-hero-motion.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Model seated on Bauhaus chrome tubular cantilever chair in black tee, black shorts with white arch, and black snapback cap with white arched embroidery.',
    metadata: {
      treatment: 'Bauhaus Frame Study',
      release: 'RELEASE 001 / ACTIVE'
    }
  },
  {
    id: 'frame-04',
    frameNumber: '04/08',
    label: 'DUAL TONAL',
    title: 'WHITE TEE + BLACK SHORTS',
    category: 'CONTRAST LOOK',
    image: '/images/campaign-contact-stride.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Model standing in white boxy long-sleeve tee with vertical sleeve typography and black Lawrence arch shorts.',
    metadata: {
      treatment: 'Dual Tonal Contrast',
      release: 'RELEASE 001 / ACTIVE'
    }
  },
  {
    id: 'frame-05',
    frameNumber: '05/08',
    label: 'ARCHIVE NEXT',
    title: 'RELEASE 002 // BOXY SLEEVE TEE',
    category: 'UNRELEASED SPEC',
    image: '/images/archive-shirt-teaser.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Heavyweight boxy cut long-sleeve tee with vertical LawrenceMonroe sleeve typography. In active laboratory refinement.',
    metadata: {
      treatment: 'Prototype Archive',
      release: 'RELEASE 002 / PENDING'
    },
    isUnreleased: true
  },
  {
    id: 'frame-06',
    frameNumber: '06/08',
    label: 'ARCHIVE NEXT',
    title: 'RELEASE 003 // 5-PANEL CAP',
    category: 'UNRELEASED SPEC',
    image: '/images/archive-hat-teaser.jpg',
    ratio: 'aspect-[4/5]',
    caption: 'Black 5-panel snapback cap with 2-tier arched white 3D puff embroidery and snapback closure. Request access for notification.',
    metadata: {
      treatment: 'Headwear Prototype',
      release: 'RELEASE 003 / PENDING'
    },
    isUnreleased: true
  },
  {
    id: 'frame-07',
    frameNumber: '07/08',
    label: 'INSIGNIA STAMP',
    title: 'WHITE LawrenceMonroe® BADGE',
    category: 'BRAND BADGE',
    image: '/assets/lawrence-monroe-white-badge.svg',
    ratio: 'aspect-[4/5]',
    caption: 'Official double-bordered white oval pill badge with LawrenceMonroe bold serif typography and (R) trademark.',
    metadata: {
      treatment: 'Official Insignia Spec',
      release: 'RELEASE 001'
    }
  },
  {
    id: 'frame-08',
    frameNumber: '08/08',
    label: 'INSIGNIA STAMP',
    title: 'BLUE LawrenceMonroe® BADGE',
    category: 'BRAND BADGE',
    image: '/assets/lawrence-monroe-blue-badge.svg',
    ratio: 'aspect-[4/5]',
    caption: 'Official double-bordered electric blue oval pill badge with LawrenceMonroe bold serif typography and (R) trademark.',
    metadata: {
      treatment: 'Official Insignia Spec',
      release: 'RELEASE 001'
    }
  }
];
