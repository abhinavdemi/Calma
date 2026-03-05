import { OPENING_MESSAGE } from '@/lib/ai';

export function WelcomeMessage() {
  return (
    <div className="flex justify-start message-enter">
      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-clay-100 px-4 py-3">
        <p className="font-serif text-base text-sand-900 leading-relaxed">
          {OPENING_MESSAGE}
        </p>
      </div>
    </div>
  );
}
