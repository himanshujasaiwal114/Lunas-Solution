import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Minimize2, Send, Bot, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const INITIAL_MESSAGES = [
  {
    id: 1,
    type: 'bot',
    text: "Hi there! I'm the Lunas Assistant. How can I help you regarding your career at Lunas Solution?",
  },
  {
    id: 2,
    type: 'options',
    options: [
      { id: 'roles', label: "What roles are open?" },
      { id: 'remote', label: "Do you offer remote work?" },
      { id: 'location', label: "Where are your offices?" },
      { id: 'apply', label: "How do I apply?" }
    ]
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize from sessionStorage or defaults
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('lunas_chatbot_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMessages(parsed.messages || INITIAL_MESSAGES);
        setIsOpen(parsed.isOpen || false);
      } else {
        setMessages(INITIAL_MESSAGES);
      }
    } catch (e) {
      setMessages(INITIAL_MESSAGES);
    }
  }, []);

  // Save to sessionStorage whenever state changes
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('lunas_chatbot_state', JSON.stringify({ messages, isOpen }));
    }
  }, [messages, isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option) => {
    // 1. Remove the current options block and add User selection
    const updatedMessages = messages.filter(m => m.type !== 'options');
    updatedMessages.push({
      id: Date.now(),
      type: 'user',
      text: option.label
    });
    setMessages(updatedMessages);
    setIsTyping(true);

    // 2. Simulate network/thought delay
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "";

      switch (option.id) {
        case 'roles':
          botResponse = (
            <span>
              We are currently looking for a <strong>Utilization Review Nurse</strong>, <strong>CDI Specialist</strong>, <strong>Utilization Review Analyst</strong>, and <strong>Bookkeeper</strong>.<br/><br/>
              <Link to="/roles" className="text-brand-red font-bold hover:underline" onClick={() => setIsOpen(false)}>View the details and apply here</Link>.
            </span>
          );
          break;
        case 'remote':
          botResponse = "At Lunas Solution, we currently operate on a hybrid work setup. Team members work partly from home and partly from our office locations in the Philippines. Fully remote roles are not currently offered.";
          break;
        case 'location':
          botResponse = "We have two main locations in the Philippines:\n\n• Alabang, Muntinlupa City (Main operations and administrative office)\n• Dumaguete City, Negros Oriental (Operations site)";
          break;
        case 'apply':
          botResponse = (
            <span>
              You can apply securely using the form at the bottom of our <Link to="/roles" className="text-brand-red font-bold hover:underline" onClick={() => setIsOpen(false)}>Open Roles</Link> page, or you can send an inquiry directly to <strong>careers@lunassolution.com</strong>.
            </span>
          );
          break;
        default:
          botResponse = "I'm not sure how to answer that just yet.";
      }

      setMessages(prev => [
        ...prev,
        { id: Date.now(), type: 'bot', text: botResponse },
        { 
          id: Date.now() + 1, 
          type: 'options', 
          options: [
            { id: 'roles', label: "What roles are open?" },
            { id: 'remote', label: "Do you offer remote work?" },
            { id: 'location', label: "Where are your offices?" },
            { id: 'apply', label: "How do I apply?" }
          ]
        }
      ]);
    }, 800);
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
    sessionStorage.removeItem('lunas_chatbot_state');
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-brand-navy hover:bg-brand-blue text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-brand-blue/30 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open chat assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[10000] w-full sm:w-[380px] h-[100dvh] sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right sm:border border-slate-200 overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-brand-navy p-4 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm tracking-wide">Lunas Assistant</h3>
              <p className="font-mono text-[10px] text-white/60 tracking-widest uppercase">Support Bot</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={resetChat}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
              title="Reset Chat"
              aria-label="Reset Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button 
              onClick={toggleChat}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <Minimize2 size={18} />
            </button>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 relative scroll-smooth flex flex-col gap-4">
          {messages.map((msg) => {
            if (msg.type === 'bot') {
              return (
                <div key={msg.id} className="flex gap-3 justify-start max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-brand-red shrink-0 flex items-center justify-center mt-1 text-white shadow-sm">
                    <Bot size={12} />
                  </div>
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm leading-relaxed font-sans whitespace-pre-wrap">
                    {msg.text}
                  </div>
                </div>
              );
            }
            if (msg.type === 'user') {
              return (
                <div key={msg.id} className="flex gap-3 justify-end self-end max-w-[85%]">
                  <div className="bg-brand-navy p-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-sm leading-relaxed font-sans">
                    {msg.text}
                  </div>
                </div>
              );
            }
            if (msg.type === 'options') {
              return (
                <div key={msg.id} className="flex flex-col gap-2 mt-2 w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-widest px-2 mb-1">Select an option:</p>
                  <div className="flex flex-wrap gap-2">
                    {msg.options.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionClick(opt)}
                        className="bg-white border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white px-4 py-2 rounded-full text-sm font-sans font-medium transition-colors shadow-sm text-left max-w-full truncate"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}

          {isTyping && (
            <div className="flex gap-3 justify-start max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-brand-red shrink-0 flex items-center justify-center mt-1 text-white shadow-sm">
                <Bot size={12} />
              </div>
              <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} className="h-px w-full" />
        </div>

        {/* Disabled Input Area (Since Quick Reply Only) */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0">
          <button 
            disabled
            className="flex-1 bg-slate-50 border border-slate-200 text-slate-400 rounded-full px-4 py-2.5 text-sm font-sans flex items-center justify-between cursor-not-allowed select-none"
          >
            <span>Please select an option above...</span>
          </button>
          <button 
            disabled
            className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
