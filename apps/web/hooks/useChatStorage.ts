'use client';

import { useEffect, useCallback } from 'react';
import type { Message } from 'ai';

const STORAGE_KEY = 'steady_chat_messages';

export function loadChatMessages(): Message[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as Message[];
  } catch {
    return [];
  }
}

export function saveChatMessages(messages: Message[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // localStorage quota exceeded or unavailable — fail silently
  }
}

export function clearChatMessages(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function usePersistMessages(messages: Message[]) {
  const persist = useCallback(() => {
    if (messages.length > 0) {
      saveChatMessages(messages);
    }
  }, [messages]);

  useEffect(() => {
    persist();
  }, [persist]);
}
