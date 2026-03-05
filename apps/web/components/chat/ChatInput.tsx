'use client';

import { useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSubmit,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        const form = e.currentTarget.closest('form');
        if (form) form.requestSubmit();
      }
    }
  };

  return (
    <div className="border-t border-sand-200 bg-sand-50 px-4 py-3">
      <form onSubmit={onSubmit} className="flex items-end gap-2 max-w-lg mx-auto">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          placeholder="What's on your mind…"
          rows={1}
          disabled={isLoading}
          className={cn(
            'flex-1 resize-none rounded-2xl bg-sand-100 border border-sand-200 px-4 py-3',
            'font-sans text-base text-sand-900 placeholder-sand-400',
            'focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent',
            'transition-all duration-300 leading-relaxed',
            'disabled:opacity-60 min-h-[48px] max-h-[160px]'
          )}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className={cn(
            'flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center',
            'transition-all duration-300',
            input.trim() && !isLoading
              ? 'bg-sand-600 text-sand-50 hover:bg-sand-700 active:scale-95'
              : 'bg-sand-200 text-sand-400 cursor-not-allowed'
          )}
          aria-label="Send message"
        >
          <ArrowUp size={18} strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}
