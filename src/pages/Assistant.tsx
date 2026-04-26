import React, { useState, useEffect, useRef } from 'react';
import { Send, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { authService } from '../services/authService';
import { chatService } from '../services/chatService';
import { geminiService } from '../services/geminiService';
import { ChatMessage as ChatMessageType } from '../types';
import { ChatMessage } from '../components/ChatMessage';
import { QuickQuestions } from '../components/QuickQuestions';
import { quickQuestions } from '../data/quickQuestions';

export const Assistant = () => {
  const user = authService.getCurrentUser();
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      const history = chatService.getHistory(user.id);
      if (history.length === 0) {
        // Add initial greeting
        const initialMsg: ChatMessageType = {
          id: Date.now().toString(),
          role: 'model',
          content: `Namaste ${user.name}! I am your Election Process Education Assistant. I can help you understand how elections work in India, from voter registration to counting day. How can I assist you today?`,
          timestamp: Date.now()
        };
        setMessages([initialMsg]);
        chatService.saveMessage(user.id, initialMsg);
      } else {
        setMessages(history);
      }
    }
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || !user || isLoading) return;

    const newUserMsg: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: Date.now()
    };

    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);
    setError('');
    
    chatService.saveMessage(user.id, newUserMsg);

    try {
      // Format history for Gemini API
      const geminiHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const responseText = await geminiService.getChatResponse(text, geminiHistory);
      
      const newModelMsg: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: responseText,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, newModelMsg]);
      chatService.saveMessage(user.id, newModelMsg);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (!user) return;
    if (window.confirm("Are you sure you want to clear your chat history?")) {
      chatService.clearHistory(user.id);
      
      const initialMsg: ChatMessageType = {
        id: Date.now().toString(),
        role: 'model',
        content: `Chat history cleared. How can I assist you with the Indian election process today?`,
        timestamp: Date.now()
      };
      setMessages([initialMsg]);
      chatService.saveMessage(user.id, initialMsg);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-4rem-64px)] flex flex-col">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex-grow flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-navy-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-navy-900">AI Assistant</h2>
            <p className="text-sm text-gray-500">Ask questions about the Indian election process</p>
          </div>
          <button 
            onClick={handleClearChat}
            className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
            title="Clear Chat"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-grow p-6 overflow-y-auto bg-slate-50">
          {messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center space-x-2">
                <Loader2 className="h-5 w-5 text-saffron-500 animate-spin" />
                <span className="text-sm text-gray-500">Assistant is typing...</span>
              </div>
            </div>
          )}
          
          {error && (
            <div className="flex justify-center mb-4">
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm flex items-center space-x-2">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions & Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          {messages.length < 3 && (
             <div className="mb-4">
               <QuickQuestions questions={quickQuestions.slice(0,4)} onSelect={(q) => handleSend(q)} />
             </div>
          )}
          
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-end space-x-2"
          >
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask a question about the election process..."
              className="flex-grow resize-none rounded-xl border border-gray-300 focus:border-saffron-500 focus:ring-saffron-500 p-3 max-h-32 text-sm"
              rows={1}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-saffron-500 hover:bg-saffron-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors flex-shrink-0"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          <div className="text-center mt-2">
             <span className="text-xs text-gray-400">The assistant may produce inaccurate information. Always verify with official ECI sources.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
