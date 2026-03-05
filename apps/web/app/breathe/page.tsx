'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { BoxBreathing } from '@/components/breathing/exercises/BoxBreathing';
import { FourSevenEight } from '@/components/breathing/exercises/FourSevenEight';
import { Grounding54321 } from '@/components/breathing/exercises/Grounding54321';

const exercises = [
  {
    id: 'box',
    name: 'Box Breathing',
    tag: '4-4-4-4',
    description: 'Equal counts. Steady and grounding.',
  },
  {
    id: 'four-seven-eight',
    name: '4-7-8',
    tag: '4-7-8',
    description: 'Longer exhale. Calms the nervous system.',
  },
  {
    id: 'grounding',
    name: '5-4-3-2-1',
    tag: 'Grounding',
    description: 'Back to your senses. Good for racing thoughts.',
  },
];

export default function BreathePage() {
  const [selected, setSelected] = useState<string>('box');

  return (
    <div className="min-h-[calc(100vh-80px)] px-5 py-8 max-w-lg mx-auto">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-sand-800 mb-2">Breathe</h1>
        <p className="font-sans text-sand-500 text-sm leading-relaxed">
          Take a few minutes just for you.
        </p>
      </div>

      {/* Exercise selector */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
        {exercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelected(ex.id)}
            className={cn(
              'flex-shrink-0 px-4 py-2 rounded-full font-sans text-sm transition-all duration-300',
              selected === ex.id
                ? 'bg-sage-300 text-sand-900 font-medium'
                : 'bg-sand-100 text-sand-500 hover:bg-sand-200 border border-sand-200'
            )}
          >
            {ex.name}
          </button>
        ))}
      </div>

      {/* Exercise description */}
      <div className="mb-6 px-1">
        <p className="font-sans text-sand-400 text-sm">
          {exercises.find((e) => e.id === selected)?.description}
        </p>
      </div>

      {/* Exercise component */}
      <div className="transition-all duration-500">
        {selected === 'box' && <BoxBreathing />}
        {selected === 'four-seven-eight' && <FourSevenEight />}
        {selected === 'grounding' && <Grounding54321 />}
      </div>
    </div>
  );
}
