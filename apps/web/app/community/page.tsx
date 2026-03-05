'use client';

import { useState } from 'react';
import { WISDOM_CARDS, CATEGORY_LABELS } from '@steady/shared';
import type { WisdomCategory } from '@steady/shared';
import { WisdomCard } from '@/components/community/WisdomCard';
import { cn } from '@/lib/utils';

type FilterOption = 'all' | WisdomCategory;

const filters: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'iep-tips', label: CATEGORY_LABELS['iep-tips'] },
  { id: 'respite-care', label: CATEGORY_LABELS['respite-care'] },
  { id: 'sensory-strategies', label: CATEGORY_LABELS['sensory-strategies'] },
  { id: 'caregiver-self-care', label: CATEGORY_LABELS['caregiver-self-care'] },
  { id: 'communication', label: CATEGORY_LABELS['communication'] },
];

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredCards =
    activeFilter === 'all'
      ? WISDOM_CARDS
      : WISDOM_CARDS.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-[calc(100vh-80px)] px-5 py-8 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-3xl text-sand-800 mb-2">
          Community Wisdom
        </h1>
        <p className="font-sans text-sand-500 text-sm leading-relaxed">
          Real things, from real parents. Collected quietly.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-5 px-5">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={cn(
              'flex-shrink-0 px-4 py-2 rounded-full font-sans text-sm transition-all duration-300',
              activeFilter === id
                ? 'bg-sand-600 text-sand-50 font-medium'
                : 'bg-sand-100 text-sand-500 hover:bg-sand-200 border border-sand-200'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {filteredCards.map((card) => (
          <WisdomCard key={card.id} card={card} />
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-10 pb-4 text-center">
        <p className="font-sans text-xs text-sand-400 leading-relaxed">
          These are shared experiences, not medical advice.
          <br />
          Every child and family is different.
        </p>
      </div>
    </div>
  );
}
