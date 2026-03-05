export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: number;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  startedAt: number;
  lastActiveAt: number;
}
