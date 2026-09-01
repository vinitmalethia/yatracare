import React, { useState } from 'react';
import { MessageCircle, Send, X, ShieldCheck, Clock, Phone, Sparkles } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [chatOpen, setChatOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const quickOptions = [
    "I need a quote for Innova Crysta for Delhi to Agra",
    "Char Dham Yatra package details & pricing",
    "Airport pickup in Jaipur (Need Sedan)",
    "Custom Rajasthan tour itinerary with chauffeur"
  ];

  const handleSendWhatsApp = (textToSend) => {
    const message = textToSend || userQuery || "Hello YatraCare, I would like to inquire about cab booking and tour packages.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setChatOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Interactive Chat Popup */}
      {chatOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#075e54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                  YC
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">YatraCare Travel Concierge</h4>
                <p className="text-[11px] text-emerald-100 flex items-center space-x-1">
                  <Clock size={11} />
                  <span>Typically replies in 1 minute</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition cursor-pointer text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ece5dd] bg-opacity-70 space-y-3 max-h-[300px] overflow-y-auto">
            {/* Bot message bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-slate-800 space-y-1 max-w-[90%]">
              <p className="font-semibold text-emerald-800">Namaste! 🙏 Welcome to YatraCare.</p>
              <p className="leading-relaxed">
                Looking for verified outstation cabs, luxury vehicles, or all-inclusive tour packages with zero hidden fees?
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Just now</span>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold text-slate-600 block pl-1">
                Quick Inquiries:
              </span>
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendWhatsApp(opt)}
                  className="w-full text-left p-2 bg-white/90 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs text-slate-700 transition cursor-pointer flex items-center justify-between"
                >
                  <span className="truncate mr-2">{opt}</span>
                  <Send size={12} className="text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendWhatsApp(); }}
            className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Type your trip details..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="flex-1 text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-xl transition cursor-pointer shadow-sm"
              title="Send to WhatsApp"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button with Pulse Badge */}
      <button
        type="button"
        onClick={() => setChatOpen(!chatOpen)}
        className="group relative flex items-center space-x-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Book via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
        </span>

        <MessageCircle size={22} className="fill-white text-white" />
        <span className="text-xs sm:text-sm font-extrabold tracking-wide hidden sm:inline">
          Book via WhatsApp
        </span>
      </button>
    </div>
  );
}
