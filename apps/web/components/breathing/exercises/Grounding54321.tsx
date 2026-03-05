'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const STEPS = [
  {
    count: 5,
    sense: 'see',
    prompt: 'Name 5 things you can see right now.',
    hint: 'Look around slowly. Notice colors, shapes, textures.',
    color: 'bg-sage-100 border-sage-200',
    dot: 'bg-sage-300',
  },
  {
    count: 4,
    sense: 'touch',
    prompt: 'Notice 4 things you can physically feel.',
    hint: 'Your feet on the floor. The texture of your clothes. The temperature of the air.',
    color: 'bg-clay-100 border-clay-200',
    dot: 'bg-clay-300',
  },
  {
    count: 3,
    sense: 'hear',
    prompt: 'Listen for 3 sounds.',
    hint: 'Near and far. Background sounds you weren\'t noticing.',
    color: 'bg-sand-100 border-sand-300',
    dot: 'bg-sand-400',
  },
  {
    count: 2,
    sense: 'smell',
    prompt: 'Find 2 things you can smell.',
    hint: 'Take a slow breath. What reaches you?',
    color: 'bg-sage-100 border-sage-200',
    dot: 'bg-sage-300',
  },
  {
    count: 1,
    sense: 'taste',
    prompt: 'Notice 1 thing you can taste.',
    hint: 'Even if it\'s subtle — a lingering flavor, the inside of your mouth.',
    color: 'bg-clay-100 border-clay-200',
    dot: 'bg-clay-200',
  },
];

export function Grounding54321() {
  const [stepIndex, setStepIndex] = useState(-1); // -1 = not started
  const [done, setDone] = useState(false);

  const current = STEPS[stepIndex];

  const handleStart = () => {
    setStepIndex(0);
    setDone(false);
  };

  const handleNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  const handleRestart = () => {
    setStepIndex(-1);
    setDone(false);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center max-w-sm mx-auto">
        <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
          <span className="text-2xl">🌿</span>
        </div>
        <div className="space-y-2">
          <p className="font-serif text-xl text-sand-800">
            You made it through.
          </p>
          <p className="font-sans text-sm text-sand-500 leading-relaxed">
            You are here. That was enough.
          </p>
        </div>
        <Button onClick={handleRestart} variant="secondary">
          Start again
        </Button>
      </div>
    );
  }

  if (stepIndex === -1) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center max-w-sm mx-auto">
        <p className="font-sans text-sand-500 leading-relaxed text-sm">
          This exercise brings you back to your senses — literally. Use it when
          your thoughts are running away.
        </p>
        <div className="flex gap-2">
          {STEPS.map((s, i) => (
            <div key={i} className={`w-8 h-8 rounded-full ${s.dot} opacity-60 flex items-center justify-center`}>
              <span className="font-sans text-xs font-semibold text-white">{s.count}</span>
            </div>
          ))}
        </div>
        <Button onClick={handleStart}>Begin</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4 max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-2">
        {STEPS.map((s, i) => (
          <div
            key={i}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-500',
              i <= stepIndex ? s.dot : 'bg-sand-200'
            )}
          />
        ))}
      </div>

      {/* Step card */}
      <div
        className={cn(
          'w-full rounded-2xl border p-6 space-y-4 transition-all duration-500',
          current.color
        )}
        key={stepIndex}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${current.dot} flex items-center justify-center shrink-0`}>
            <span className="font-sans font-bold text-white text-sm">{current.count}</span>
          </div>
          <p className="font-serif text-lg text-sand-800 leading-snug">
            {current.prompt}
          </p>
        </div>
        <p className="font-sans text-sm text-sand-500 leading-relaxed pl-13 ml-[52px]">
          {current.hint}
        </p>
      </div>

      <p className="font-sans text-xs text-sand-400 text-center">
        Take your time. There&apos;s no rush.
      </p>

      <Button onClick={handleNext}>
        {stepIndex < STEPS.length - 1 ? "I've got them" : 'Done'}
      </Button>
    </div>
  );
}
