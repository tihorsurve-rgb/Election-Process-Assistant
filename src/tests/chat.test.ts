import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { chatService } from '../services/chatService';
import { ChatMessage } from '../types';

describe('Chat Service', () => {
  const userId = 'user-123';
  const testMessage: ChatMessage = {
    id: 'msg-1',
    role: 'user',
    content: 'Hello',
    timestamp: Date.now()
  };

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should save and retrieve chat history', () => {
    chatService.saveMessage(userId, testMessage);
    const history = chatService.getHistory(userId);
    
    expect(history).toHaveLength(1);
    expect(history[0].content).toBe('Hello');
  });

  it('should clear chat history', () => {
    chatService.saveMessage(userId, testMessage);
    chatService.clearHistory(userId);
    
    const history = chatService.getHistory(userId);
    expect(history).toHaveLength(0);
  });

  it('should return empty array for user with no history', () => {
    const history = chatService.getHistory('non-existent');
    expect(history).toEqual([]);
  });
});
