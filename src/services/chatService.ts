import { ChatMessage } from '../types';

export const chatService = {
  getStorageKey(userId: string): string {
    return `election_app_chats_${userId}`;
  },

  getHistory(userId: string): ChatMessage[] {
    const historyJson = localStorage.getItem(this.getStorageKey(userId));
    return historyJson ? JSON.parse(historyJson) : [];
  },

  saveMessage(userId: string, message: ChatMessage): void {
    const history = this.getHistory(userId);
    history.push(message);
    localStorage.setItem(this.getStorageKey(userId), JSON.stringify(history));
  },

  saveMessages(userId: string, messages: ChatMessage[]): void {
    localStorage.setItem(this.getStorageKey(userId), JSON.stringify(messages));
  },

  clearHistory(userId: string): void {
    localStorage.removeItem(this.getStorageKey(userId));
  }
};
