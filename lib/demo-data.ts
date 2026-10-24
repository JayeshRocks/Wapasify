/**
 * Fictional demo items for the Wapasify prototype.
 *
 * Every record is fabricated. Do not treat these as real campus reports.
 * This module is used throughout the app while demo mode is active.
 */

export type ItemKind = 'lost' | 'found';

export type ItemCategory = 'electronics' | 'keys' | 'books' | 'cards' | 'other';

export type ToneClass =
  | 'tone-peach'
  | 'tone-blue'
  | 'tone-lilac'
  | 'tone-yellow'
  | 'tone-mint'
  | 'tone-sand';

export interface DemoItem {
  /** Short, user-facing title */
  title: string;
  /** Whether the item was lost or found */
  kind: ItemKind;
  /** Broad item category */
  category: ItemCategory;
  /** Broad campus area (never an exact sensitive location) */
  area: string;
  /** Human-friendly relative time string */
  age: string;
  /** Emoji icon for the card visual */
  icon: string;
  /** Background tone class for the card */
  tone: ToneClass;
  /** Short hint shown as a sticker on the card */
  hint: string;
}

export const demoItems: DemoItem[] = [
  {
    title: 'Wireless headphones',
    kind: 'found',
    category: 'electronics',
    area: 'Library · reading hall',
    age: 'Today, 11:20 AM',
    icon: '🎧',
    tone: 'tone-peach',
    hint: 'Black over-ear pair',
  },
  {
    title: 'Blue water bottle',
    kind: 'found',
    category: 'other',
    area: 'Sports ground',
    age: 'Today, 9:05 AM',
    icon: '🧴',
    tone: 'tone-blue',
    hint: 'Reusable bottle',
  },
  {
    title: 'Notebook and pen case',
    kind: 'lost',
    category: 'books',
    area: 'Academic block',
    age: 'Yesterday, 3:40 PM',
    icon: '📓',
    tone: 'tone-lilac',
    hint: 'Study essentials',
  },
  {
    title: 'Single key with a tag',
    kind: 'found',
    category: 'keys',
    area: 'Student centre',
    age: 'Yesterday, 1:15 PM',
    icon: '🔑',
    tone: 'tone-yellow',
    hint: 'Keys & accessories',
  },
  {
    title: 'USB-C charger',
    kind: 'found',
    category: 'electronics',
    area: 'Cafeteria',
    age: 'Mon, 4:10 PM',
    icon: '🔌',
    tone: 'tone-mint',
    hint: 'Charging accessory',
  },
  {
    title: 'Grey hoodie',
    kind: 'lost',
    category: 'other',
    area: 'Library · ground floor',
    age: 'Mon, 10:30 AM',
    icon: '🧥',
    tone: 'tone-sand',
    hint: 'Clothing',
  },
];
