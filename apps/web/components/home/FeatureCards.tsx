import Link from 'next/link';
import { Wind, MessageCircle, Users } from 'lucide-react';

const features = [
  {
    href: '/breathe',
    icon: Wind,
    title: 'Breathe',
    description:
      'Guided breathing and grounding exercises for moments of overwhelm.',
    color: 'text-sage-400',
    bg: 'bg-sage-100',
  },
  {
    href: '/chat',
    icon: MessageCircle,
    title: 'Talk it through',
    description:
      'A companion who listens without judgment. No advice unless you want it.',
    color: 'text-clay-300',
    bg: 'bg-clay-100',
  },
  {
    href: '/community',
    icon: Users,
    title: 'Community wisdom',
    description:
      "Real tips from parents who've been where you are. Quietly collected.",
    color: 'text-sand-500',
    bg: 'bg-sand-200',
  },
];

export function FeatureCards() {
  return (
    <section className="px-6 pb-12 max-w-lg mx-auto">
      <div className="space-y-3">
        {features.map(({ href, icon: Icon, title, description, color, bg }) => (
          <Link
            key={href}
            href={href}
            className="flex items-start gap-4 p-5 rounded-2xl bg-sand-100 border border-sand-200 hover:border-sand-300 hover:bg-sand-100 transition-all duration-300 group"
          >
            <div className={`p-2.5 rounded-xl ${bg} shrink-0`}>
              <Icon size={20} className={color} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-serif text-sand-800 font-medium mb-1">
                {title}
              </h3>
              <p className="font-sans text-sm text-sand-500 leading-relaxed">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
