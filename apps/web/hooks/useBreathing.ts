'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export type BreathPhase = 'idle' | 'inhale' | 'hold-in' | 'exhale' | 'hold-out' | 'complete';

export interface PhaseConfig {
  phase: BreathPhase;
  label: string;
  duration: number; // seconds
}

export interface BreathingConfig {
  id: string;
  name: string;
  description: string;
  phases: PhaseConfig[];
  cycles: number;
}

export const BREATHING_CONFIGS: BreathingConfig[] = [
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'Equal counts for each phase. Grounding and steadying.',
    phases: [
      { phase: 'inhale', label: 'Breathe in', duration: 4 },
      { phase: 'hold-in', label: 'Hold', duration: 4 },
      { phase: 'exhale', label: 'Breathe out', duration: 4 },
      { phase: 'hold-out', label: 'Hold', duration: 4 },
    ],
    cycles: 4,
  },
  {
    id: 'four-seven-eight',
    name: '4-7-8 Breathing',
    description: 'Longer exhale activates your rest response. Good for anxiety.',
    phases: [
      { phase: 'inhale', label: 'Breathe in', duration: 4 },
      { phase: 'hold-in', label: 'Hold', duration: 7 },
      { phase: 'exhale', label: 'Breathe out', duration: 8 },
    ],
    cycles: 4,
  },
];

interface UseBreathingReturn {
  phase: BreathPhase;
  phaseLabel: string;
  secondsLeft: number;
  cycleCount: number;
  totalCycles: number;
  circleScale: number;
  isActive: boolean;
  start: () => void;
  stop: () => void;
}

export function useBreathing(config: BreathingConfig): UseBreathingReturn {
  const [phase, setPhase] = useState<BreathPhase>('idle');
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const secondsRef = useRef(0);
  const phaseRef = useRef(0);
  const cycleRef = useRef(0);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    clearTimer();
    setIsActive(false);
    setPhase('idle');
    setPhaseIndex(0);
    setSecondsLeft(0);
    setCycleCount(0);
    phaseRef.current = 0;
    cycleRef.current = 0;
  }, [clearTimer]);

  const start = useCallback(() => {
    stop();
    phaseRef.current = 0;
    cycleRef.current = 0;
    const firstPhase = config.phases[0];
    secondsRef.current = firstPhase.duration;

    setIsActive(true);
    setPhase(firstPhase.phase);
    setPhaseIndex(0);
    setSecondsLeft(firstPhase.duration);
    setCycleCount(0);

    intervalRef.current = setInterval(() => {
      secondsRef.current -= 1;
      setSecondsLeft(secondsRef.current);

      if (secondsRef.current <= 0) {
        // Move to next phase
        phaseRef.current = (phaseRef.current + 1) % config.phases.length;

        // If we completed a full cycle
        if (phaseRef.current === 0) {
          cycleRef.current += 1;
          setCycleCount(cycleRef.current);

          if (cycleRef.current >= config.cycles) {
            clearTimer();
            setPhase('complete');
            setIsActive(false);
            return;
          }
        }

        const nextPhase = config.phases[phaseRef.current];
        secondsRef.current = nextPhase.duration;
        setPhase(nextPhase.phase);
        setPhaseIndex(phaseRef.current);
        setSecondsLeft(nextPhase.duration);
      }
    }, 1000);
  }, [config, stop, clearTimer]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const currentPhaseConfig = phase !== 'idle' && phase !== 'complete'
    ? config.phases[phaseIndex]
    : null;

  const phaseLabel = currentPhaseConfig?.label ?? (phase === 'complete' ? 'Well done' : 'Ready when you are');

  // Circle scale: 1.0 when exhaling/idle, 1.5 when inhaling/holding
  const circleScale =
    phase === 'inhale' || phase === 'hold-in' ? 1.5 :
    phase === 'exhale' || phase === 'hold-out' ? 1.0 :
    phase === 'complete' ? 1.2 : 1.0;

  return {
    phase,
    phaseLabel,
    secondsLeft,
    cycleCount,
    totalCycles: config.cycles,
    circleScale,
    isActive,
    start,
    stop,
  };
}
