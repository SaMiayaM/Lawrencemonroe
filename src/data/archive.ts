import { ArchiveItem } from '../types';

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'archive-002-shirt',
    code: 'LMT-002-PROTO',
    name: 'HEAVYWEIGHT BOXY CUT SHIRT',
    category: 'SHIRT',
    releaseTarget: 'RELEASE 002',
    status: 'IN DEVELOPMENT',
    image: '/images/archive-shirt-teaser.jpg',
    description: 'An architectural drop-shoulder silhouette constructed from 320GSM combed jersey with a reinforced rib collar and blind-stitched hems. In active laboratory refinement.',
    details: [
      '320 GSM combed compact jersey',
      'Structural boxy drape with dropped shoulder seams',
      'Engineered high-neck collar with interior twill stay',
      'Tonal high-density archive stamp at back yoke',
      'Private release access only'
    ]
  },
  {
    id: 'archive-003-hat',
    code: 'LMH-003-PROTO',
    name: 'STRUCTURED 6-PANEL WOOL CROWN',
    category: 'HEADWEAR',
    releaseTarget: 'RELEASE 003',
    status: 'UNRELEASED',
    image: '/images/archive-hat-teaser.jpg',
    description: 'A low-profile unconstructed crown tailored from raw melton wool with custom matte metal buckle closure and tonal embroidered monogram.',
    details: [
      '100% Unwashed heavy melton wool',
      'Custom brushed antique gold slider clasp',
      'Internal cotton twill sweatband with stamped release number',
      'Slightly curved structured brim',
      'Limited studio edition'
    ]
  }
];
