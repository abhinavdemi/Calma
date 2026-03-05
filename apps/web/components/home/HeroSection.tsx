import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BreathePulse } from './BreathePulse';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center overflow-hidden">
      <BreathePulse />

      <div className="relative z-10 max-w-md mx-auto space-y-8">
        {/* Wordmark */}
        <div className="space-y-2">
          <p className="text-sm font-sans text-sand-400 tracking-widest uppercase">
            steady
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-sand-800 leading-tight text-balance">
            A quiet space,
            <br />
            just for you.
          </h1>
        </div>

        <p className="font-sans text-lg text-sand-500 leading-relaxed text-balance max-w-sm mx-auto">
          For the moments when you need to breathe, be heard, or just not be
          alone.
        </p>

        <div className="pt-2">
          <Button asChild size="lg" className="shadow-sm">
            <Link href="/chat">I&apos;m here to talk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
