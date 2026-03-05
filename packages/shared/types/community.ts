export type WisdomCategory =
  | 'iep-tips'
  | 'respite-care'
  | 'sensory-strategies'
  | 'caregiver-self-care'
  | 'communication';

export interface WisdomCard {
  id: string;
  category: WisdomCategory;
  tip: string;
  attribution: string;
}

export const CATEGORY_LABELS: Record<WisdomCategory, string> = {
  'iep-tips': 'IEP Tips',
  'respite-care': 'Respite Care',
  'sensory-strategies': 'Sensory',
  'caregiver-self-care': 'Self-Care',
  'communication': 'Communication',
};
