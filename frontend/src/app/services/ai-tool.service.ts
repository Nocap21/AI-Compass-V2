import { Injectable } from '@angular/core';
import type { AiTool } from '../models/ai-tool';

@Injectable({
  providedIn: 'root',
})
export class AiToolService {
  private readonly tools: AiTool[] = [
    {
      id: 1,
      name: 'ChatGPT',
      description: 'AI assistant for conversation, writing, and general tasks.',
      category: 'Writing',
      officialUrl: 'https://chatgpt.com/',
    },
    {
      id: 2,
      name: 'GitHub Copilot',
      description: 'AI-powered coding assistance for developers.',
      category: 'Coding',
      officialUrl: 'https://github.com/features/copilot',
    },
    {
      id: 3,
      name: 'Canva',
      description: 'Design platform with AI-powered creative tools.',
      category: 'Image',
      officialUrl: 'https://www.canva.com/',
    },
  ];

  getTools(): AiTool[] {
    return this.tools;
  }
}
