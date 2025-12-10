import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found via process.env.API_KEY");
    // We return a dummy session or throw error, but for this demo we'll let the UI handle the error state
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  chatSession = chat;
  return chat;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = initializeChat();
    const response = await session.sendMessage({ message });
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan koneksi. Silakan coba lagi nanti.";
  }
};