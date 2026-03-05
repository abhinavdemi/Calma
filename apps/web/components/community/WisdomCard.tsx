import type { WisdomCard as WisdomCardType } from '@steady/shared';
import { CATEGORY_LABELS } from '@steady/shared';
import { cn } from '@/lib/utils';

const categoryColors: Record<string, string> = {
  'iep-tips': 'bg-clay-100 text-clay-300 border-clay-200',
  'respite-care': 'bg-sage-100 text-sage-500 border-sage-200',
  'sensory-strategies': 'bg-sand-100 text-sand-600 border-sand-300',
  'caregiver-self-care': 'bg-clay-100 text-clay-300 border-clay-200',
  'communication': 'bg-sage-100 text-sage-500 border-sage-200',
};

interface WisdomCardProps {
  card: WisdomCardType;
}

export function WisdomCard({ card }: WisdomCardProps) {
  const colorClass = categoryColors[card.category] ?? 'bg-sand-100 text-sand-500 border-sand-200';

  return (
    <article className="rounded-2xl bg-sand-100 border border-sand-200 p-5 space-y-3 hover:border-sand-300 transition-colors duration-300">
      <span
        className={cn(
          'inline-block px-3 py-1 rounded-full text-xs font-sans font-medium border',
          colorClass
        )}
      >
        {CATEGORY_LABELS[card.category]}
      </span>
      <p className="font-serif text-sand-800 leading-relaxed text-base">
        &ldquo;{card.tip}&rdquo;
      </p>
      <p className="font-sans text-xs text-sand-400">— {card.attribution}</p>
    </article>
  );
}
