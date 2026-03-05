'use client';

import { type BreathPhase } from '@/hooks/useBreathing';
import { cn } from '@/lib/utils';

interface BreathingCircleProps {
  phase: BreathPhase;
  scale: number;
  phaseDuration: number;
  label: string;
  secondsLeft: number;
}

export function BreathingCircle({
  phase,
  scale,
  phaseDuration,
  label,
  secondsLeft,
}: BreathingCircleProps) {
  const isActive = phase !== 'idle' && phase !== 'complete';

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      {/* Circle container */}
      <div className="relative flex items-center justify-center w-64 h-64">
        {/* Outer glow ring */}
        <div
          className={cn(
            'absolute rounded-full bg-sage-200 opacity-30 transition-all',
            isActive && 'breath-glow'
          )}
          style={{
            width: '240px',
            height: '240px',
            transform: `scale(${scale})`,
            transitionDuration: `${phaseDuration * 1000}ms`,
            transitionTimingFunction: 'ease-in-out',
          }}
        />
        {/* Main circle */}
        <div
          className={cn(
            'relative rounded-full bg-sage-300 flex flex-col items-center justify-center',
            'transition-all',
            isActive && 'breath-glow'
          )}
          style={{
            width: '160px',
            height: '160px',
            transform: `scale(${scale})`,
            transitionDuration: `${phaseDuration * 1000}ms`,
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          {isActive && (
            <span className="font-serif text-3xl font-light text-white/90 select-none">
              {secondsLeft}
            </span>
          )}
        </div>
      </div>

      {/* Phase label */}
      <div className="text-center space-y-1">
        <p
          className="font-serif text-2xl text-sand-800 transition-all duration-500"
          key={label}
        >
          {label}
        </p>
        {isActive && (
          <p className="font-sans text-sm text-sand-400">
            {phase === 'inhale' ? 'through your nose' :
             phase === 'exhale' ? 'slowly through your mouth' :
             'gently'}
          </p>
        )}
      </div>
    </div>
  );
}
