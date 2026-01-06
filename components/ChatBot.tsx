
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { FRA_KNOWLEDGE_BASE } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface Suggestion {
  text: string;
  category: 'general' | 'membership' | 'programs' | 'metrics';
}

// Internal Human-like responses for common questions (Offline/Instant)
const OFFLINE_RESPONSES: Record<string, string> = {
  "Where is the FRA Secretariat located?": "Our main office is located at Plot 82 Mutesa I Road in Namirembe, Kampala. If you're looking for us, we are right near the historic Namirembe hill. We previously operated from Balintuma Road, but this is our current home.",
  "How can I join the Alliance?": "We're always looking for organizations to join our movement! To become a member, your organization needs to be legally registered and share our vision for food rights. You'll just need to provide a copy of your constitution and strategic plan. There's a small entry fee of UGX 50,000 and an annual subscription of UGX 100,000.",
  "What are your thematic programs?": "Right now, we're working on five major areas under our 2022-2026 plan. These include making sure everyone has access to healthy diets, building fair systems for farmers, and fighting for better food governance laws in Uganda. We also focus heavily on project quality and keeping the Alliance sustainable.",
  "Tell me about hunger in Uganda.": "It's a serious challenge we're working hard to solve. Currently, about 46% of Ugandans face food insecurity. It's particularly tough in regions like Karamoja, where stunting affects nearly 44% of children. That's why our advocacy for the Right to Food is so urgent.",
  "What are your business hours?": "We're in the office Monday through Friday from 8:00 AM to 5:00 PM. We also open for a half-day on Saturdays, from 9:00 AM until noon, if you'd like to reach us then.",
  "Is there a WhatsApp number?": "Yes, absolutely! You can send us a message or give us a call on WhatsApp at +256-706-535-222. We try to be as responsive as possible there.",
  "Who is the Executive Director?": "Our team is led by Agnes Kirabo. She's been a tireless advocate for food rights in Uganda for many years.",
  "Show me the physical address again.": "No problem at all! You can find us at Plot 82 Mutesa I Road - Namirembe, here in Kampala.",
  "What are the membership fees?": "To get started as a member, there's a one-time entry fee of UGX 50,000. After that, the annual subscription to keep your membership active is UGX 100,000.",
  "What documents are required?": "When you're ready to join, please have a copy of your organization's constitution, your certificate of incorporation, and your current strategic plan ready. These help us understand how we can best work together.",
  "When is the next AGM?": "We usually hold our Annual General Meeting in August. It's a great time for all our members to come together and help guide the Alliance's future.",
  "What are member obligations?": "As a member, we ask that you join us for the AGM in August, share your expertise with the network, and help us make decisions that move the food rights movement forward.",
  "Tell me about Healthy Diets.": "Our Healthy Diets program is really close to our hearts. We focus on teaching nutrition literacy and making sure mothers and children get the right food during those first 1,000 days of life, which are so critical for a child's growth.",
  "What is the 'Apex Food Law'?": "We are currently pushing for a single 'Apex' law that brings together all of Uganda's food regulations. Right now things are a bit fragmented, and we believe a solid law would help the government fulfill its promise to ensure no one goes hungry.",
  "How do you help women farmers?": "Women do so much of the farming in Uganda, so we have a special initiative to support their leadership. We help them get better access to land and seeds and make sure their voices are heard when food policies are being made.",
  "Explain the Strategic Plan 2022-2026.": "Our current strategy is all about moving beyond just 'having enough food' to 'having the right nutrition.' We want to make sure every Ugandan lives a dignified life where they can feed themselves well.",
  "What is stunting in Karamoja?": "It's a very difficult situation where nearly 44% of children aren't getting the nutrients they need to grow properly. This doesn't just affect their height; it impacts their learning and future potential. It's one of our highest priorities.",
  "Why is 46% food insecure?": "It's a combination of things—changing weather patterns, unfair market systems, and policies that don't always put food rights first. We're working to change those systems from the ground up.",
  "Tell me about refugee settlements.": "Uganda hosts many refugees, and we work to ensure they have the resources they need. About 37% of people in these settlements are struggling with food security right now, so they still rely heavily on the support we and our partners provide.",
  "How can I help end hunger?": "There are so many ways! You can support us with a donation, your organization can join the Alliance, or you can even start a local campaign to raise awareness. Every bit of support helps us reach one more family."
};

const SUGGESTIONS: Record<string, Suggestion[]> = {
  initial: [
    { text: "Where is the FRA Secretariat located?", category: 'general' },
    { text: "How can I join the Alliance?", category: 'membership' },
    { text: "What are your thematic programs?", category: 'programs' },
    { text: "Tell me about hunger in Uganda.", category: 'metrics' },
  ],
  general: [
    { text: "What are your business hours?", category: 'general' },
    { text: "Is there a WhatsApp number?", category: 'general' },
    { text: "Who is the Executive Director?", category: 'general' },
    { text: "Show me the physical address again.", category: 'general' },
  ],
  membership: [
    { text: "What are the membership fees?", category: 'membership' },
    { text: "What documents are required?", category: 'membership' },
    { text: "When is the next AGM?", category: 'membership' },
    { text: "What are member obligations?", category: 'membership' },
  ],
  programs: [
    { text: "Tell me about Healthy Diets.", category: 'programs' },
    { text: "What is the 'Apex Food Law'?", category: 'programs' },
    { text: "How do you help women farmers?", category: 'programs' },
    { text: "Explain the Strategic Plan 2022-2026.", category: 'programs' },
  ],
  metrics: [
    { text: "What is stunting in Karamoja?", category: 'metrics' },
    { text: "Why is 46% food insecure?", category: 'metrics' },
    { text: "Tell me about refugee settlements.", category: 'metrics' },
    { text: "How can I help end hunger?", category: 'metrics' },
  ]
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am a member of the Food Rights Alliance team. How can I help you today? You can pick a topic below or just ask me a question.' }
  ]);
  const [currentSuggestions, setCurrentSuggestions] = useState<Suggestion[]>(SUGGESTIONS.initial);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const updateSuggestions = (userText: string, category?: string) => {
    if (category && SUGGESTIONS[category]) {
      setCurrentSuggestions(SUGGESTIONS[category]);
    } else {
      const text = userText.toLowerCase();
      if (text.includes('member') || text.includes('join') || text.includes('fee')) setCurrentSuggestions(SUGGESTIONS.membership);
      else if (text.includes('program') || text.includes('work') || text.includes('law')) setCurrentSuggestions(SUGGESTIONS.programs);
      else if (text.includes('stunt') || text.includes('metric') || text.includes('hunger')) setCurrentSuggestions(SUGGESTIONS.metrics);
      else setCurrentSuggestions(SUGGESTIONS.general);
    }
  };

  const simulateTyping = (fullText: string, onComplete?: () => void) => {
    const cleanedText = fullText.replace(/\*/g, '');
    let index = 0;
    
    setMessages(prev => [...prev, { role: 'model', text: '' }]);
    
    const typingInterval = setInterval(() => {
      setMessages(prev => {
        const lastMessages = [...prev];
        const lastIdx = lastMessages.length - 1;
        if (lastMessages[lastIdx].role === 'model') {
          lastMessages[lastIdx] = { 
            ...lastMessages[lastIdx], 
            text: cleanedText.slice(0, index + 1) 
          };
        }
        return lastMessages;
      });
      
      index++;
      if (index >= cleanedText.length) {
        clearInterval(typingInterval);
        setIsLoading(false);
        if (onComplete) onComplete();
      }
    }, 28); 
  };

  const processAIResponse = async (userText: string, category?: string) => {
    setIsLoading(true);
    
    if (OFFLINE_RESPONSES[userText]) {
      setTimeout(() => {
        simulateTyping(OFFLINE_RESPONSES[userText], () => {
          updateSuggestions(userText, category);
        });
      }, 350);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: userText }] }],
        config: {
          systemInstruction: `You are a helpful, warm, and professional human staff member at the Food Rights Alliance (FRA) Uganda.
          IMPORTANT RULES:
          1. Act like a human colleague. Use phrases like "I'm happy to help with that" or "That's a great question."
          2. NEVER use words like "database", "knowledge base", "records", "training data", or "AI".
          3. If you do not know the answer, do not say "I don't have that information in my database." Instead, say something like: "I'm not exactly sure about those specific details right now, but I'd hate to give you the wrong info. You might want to reach out to my colleagues at fra@frauganda.org—they'll definitely be able to help you better with that."
          4. NEVER use asterisks (*) for any formatting. No bolding with stars, no bullet points with stars.
          5. Keep responses concise but friendly.
          6. Your context is the following Alliance information: ${FRA_KNOWLEDGE_BASE}`,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "I'm not quite sure how to answer that at the moment. It's best if you drop a line to our team at fra@frauganda.org and they'll get back to you with the right details!";
      simulateTyping(aiText, () => {
        updateSuggestions(userText, category);
      });
    } catch (error) {
      console.error('Chatbot error:', error);
      simulateTyping("I'm having a little trouble connecting with my team's detailed notes right now. However, I can still tell you all about our location, how to join the alliance, or our different programs if you'd like to ask about those!", () => {
        updateSuggestions(userText, category);
      });
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    await processAIResponse(userMessage);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    if (isLoading) return;
    setMessages(prev => [...prev, { role: 'user', text: suggestion.text }]);
    processAIResponse(suggestion.text, suggestion.category);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
      {/* Chat Window - Further reduced dimensions (Width by 0.5cm, Height by a further 0.5cm) */}
      {isOpen && (
        <div className="mb-4 w-[330px] sm:w-[400px] h-[420px] bg-white rounded-[2rem] shadow-2xl flex flex-col border border-emerald-100 animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-800 p-4 flex items-center justify-between text-white shadow-lg shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-800 shadow-xl">
                <i className="fa-solid fa-user-tie text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">FRA Staff Assistant</h3>
                <p className="text-[9px] text-emerald-300 uppercase font-black tracking-widest mt-1">Here to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors">
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[12px] leading-relaxed shadow-sm transition-all duration-300 ${
                  msg.role === 'user' 
                    ? 'bg-emerald-700 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-emerald-50 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Layer */}
          <div className="px-4 py-1.5 bg-slate-50 border-t border-slate-100 shrink-0">
            <div className="flex flex-wrap gap-1.5 py-1.5">
              {currentSuggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(s)}
                  disabled={isLoading}
                  className="bg-white border border-emerald-200 text-emerald-800 text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {s.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-100 bg-white shrink-0">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me a question..."
                className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-emerald-500/20 outline-none pr-12 placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`absolute right-1.5 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  input.trim() ? 'bg-emerald-700 text-white shadow-lg' : 'text-slate-300'
                }`}
              >
                <i className={`fa-solid ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-xs`}></i>
              </button>
            </div>
            <div className="flex items-center justify-center space-x-3 mt-3">
               <span className="h-[1px] flex-grow bg-slate-100"></span>
               <p className="text-[7px] text-slate-400 uppercase font-black tracking-[0.2em] whitespace-nowrap">
                 Humanizing Governance
               </p>
               <span className="h-[1px] flex-grow bg-slate-100"></span>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all transform hover:scale-110 active:scale-90 relative ${
          isOpen ? 'bg-slate-800' : 'bg-emerald-700 hover:bg-emerald-800'
        }`}
        aria-label="Toggle chat assistant"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-xl`}></i>
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <span className="w-1 h-1 bg-white rounded-full"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
