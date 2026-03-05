'use client';

export function BreathePulse() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Outermost ring — slowest pulse */}
      <div
        className="absolute rounded-full bg-sage-200 opacity-20 animate-breathe-slow"
        style={{ width: '600px', height: '600px', animationDelay: '0s' }}
      />
      {/* Middle ring */}
      <div
        className="absolute rounded-full bg-sage-200 opacity-25 animate-breathe-slow"
        style={{ width: '420px', height: '420px', animationDelay: '0.5s' }}
      />
      {/* Inner ring */}
      <div
        className="absolute rounded-full bg-sage-300 opacity-20 animate-breathe-slow"
        style={{ width: '260px', height: '260px', animationDelay: '1s' }}
      />
    </div>
  );
}
