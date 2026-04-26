import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_INSTRUCTION = `You are the "Election Process Education Assistant" for India.
Your goal is to educate the Indian public (citizens, first-time voters, students) about the election process, timelines, voter registration, voting day process, required documents, EVM/VVPAT, Model Code of Conduct, and results.

CRITICAL RULES:
1. You must stay strictly neutral, factual, and non-partisan.
2. Do NOT promote, endorse, or criticize any political party, candidate, ideology, or voting preference.
3. Keep answers simple, step-by-step, and educational.
4. If a user asks a question UNRELATED to the Indian election process (e.g., about general knowledge, programming, movies, or subjective political opinions), you MUST politely reply: "I can help only with Indian election process education."
5. Always remind users to verify final official information from the Election Commission of India (ECI).`;

export const geminiService = {
  async getChatResponse(message: string, history: {role: string, parts: {text: string}[]}[] = []) {
    if (!API_KEY) {
      throw new Error("Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.");
    }

    const modelName = "gemini-2.5-flash";
    
    try {
      const model = genAI.getGenerativeModel({ 
        model: modelName,
        systemInstruction: SYSTEM_INSTRUCTION
      });

      const chat = model.startChat({
        history: history,
      });

      const result = await chat.sendMessage(message);
      return result.response.text();
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      throw new Error(`Gemini API Error: ${error.message || 'Unknown error'}`);
    }
  }
};
