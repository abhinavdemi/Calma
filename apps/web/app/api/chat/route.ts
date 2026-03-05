import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { SYSTEM_PROMPT, AI_CONFIG } from '@/lib/ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: anthropic(AI_CONFIG.model),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: AI_CONFIG.maxTokens,
  });

  return result.toDataStreamResponse();
}
