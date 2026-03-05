import type { Message } from 'ai';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <div
      className={cn(
        'message-enter flex',
        isAssistant ? 'justify-start' : 'justify-end'
      )}
    >
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3 font-sans text-base leading-relaxed',
          isAssistant
            ? 'bg-clay-100 text-sand-900 rounded-tl-sm font-serif'
            : 'bg-sand-200 text-sand-800 rounded-tr-sm'
        )}
      >
        {message.content.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < message.content.split('\n').length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}
