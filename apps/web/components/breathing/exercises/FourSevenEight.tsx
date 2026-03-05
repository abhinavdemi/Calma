'use client';

import { useBreathing, BREATHING_CONFIGS } from '@/hooks/useBreathing';
import { BreathingCircle } from '../BreathingCircle';
import { Button } from '@/components/ui/button';

export function FourSevenEight() {
  const config = BREATHING_CONFIGS.find((c) => c.id === 'four-seven-eight')!;
  const { phase, phaseLabel, secondsLeft, cycleCount, totalCycles, circleScale, isActive, start, stop } =
    useBreathing(config);

  const currentPhaseConfig = config.phases.find((p) => p.phase === phase);

  return (
    <div className="flex flex-col items-center">
      <BreathingCircle
        phase={phase}
        scale={circleScale}
        phaseDuration={currentPhaseConfig?.duration ?? 4}
        label={phaseLabel}
        secondsLeft={secondsLeft}
      />

      {/* Progress dots */}
      {(isActive || phase === 'complete') && (
        <div className="flex gap-2 mb-6">
          {Array.from({ length: totalCycles }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                i < cycleCount ? 'bg-sage-400' : 'bg-sand-200'
              }`}
            />
          ))}
        </div>
      )}

      {phase === 'complete' ? (
        <div className="text-center space-y-4">
          <p className="font-serif text-sand-600 text-lg">How does that feel?</p>
          <Button onClick={start} variant="secondary">
            Go again
          </Button>
        </div>
      ) : isActive ? (
        <Button onClick={stop} variant="ghost" className="text-sand-500">
          Stop
        </Button>
      ) : (
        <Button onClick={start}>Begin</Button>
      )}
    </div>
  );
}
