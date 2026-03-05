'use client';

import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { Trash2 } from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { ThinkingIndicator } from './ThinkingIndicator';
import { WelcomeMessage } from './WelcomeMessage';
import { ChatInput } from './ChatInput';
import { loadChatMessages, usePersistMessages, clearChatMessages } from '@/hooks/useChatStorage';

export function ChatInterface() {
  const initialMessages = loadChatMessages();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } =
    useChat({
      api: '/api/chat',
      initialMessages,
    });

  // Persist messages to localStorage
  usePersistMessages(messages);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleClear = () => {
    clearChatMessages();
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-sand-200 bg-sand-50">
        <div>
          <h1 className="font-serif text-lg text-sand-800">Talk it through</h1>
          <p className="font-sans text-xs text-sand-400 mt-0.5">Your companion is here</p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={handleClear}
            className="text-sand-400 hover:text-sand-600 transition-colors duration-200 p-1.5 rounded-lg hover:bg-sand-100"
            title="Start fresh"
          >
            <Trash2 size={16} strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-lg mx-auto space-y-4">
          <WelcomeMessage />

          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isLoading && (
            <div className="flex justify-start message-enter">
              <div className="bg-clay-100 rounded-2xl rounded-tl-sm">
                <ThinkingIndicator />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>

      {/* Input */}
      <ChatInput
        input={input}
        isLoading={isLoading}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
