import React, { useState } from 'react';
import { Menu, X, Globe, User, ShieldCheck, Phone, Mail, Award, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenAuth, activeNav, setActiveNav }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Explore India', id: 'explore' },
    { label: 'Tour Packages', id: 'packages' },
    { label: 'Fleet & Cabs', id: 'fleet' },
    { label: 'Hotels', id: 'hotels' },
    { label: 'Travel', id: 'travel' },
    { label: 'Guides', id: 'guides' },
    { label: 'Tourist Support', id: 'portal' },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);

    if (id === 'explore') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const el = document.getElementById('explore-india-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (id === 'fleet') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const el = document.getElementById('fleet-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (id === 'home' || id === 'packages' || id === 'portal' || id === 'guides' || id === 'travel' || id === 'hotels') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      
      {/* TOP TRUST & CONTACT STRIP */}
      <div className="bg-[#0F172A] text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 font-medium">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-amber-400 font-semibold">
              <Award size={13} />
              <span>Govt. Regd. Ministry of Tourism Approved (#YT-DEL-2024)</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">Google Rating: 4.9/5 (3,400+ reviews)</span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919876543210" 
              className="flex items-center space-x-1 text-slate-200 hover:text-white transition"
            >
              <Phone size={12} className="text-emerald-400" />
              <span>24/7 Helpline: +91 98765 43210</span>
            </a>
            <span className="text-slate-500">•</span>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-1 text-emerald-400 font-bold hover:underline"
            >
              <MessageCircle size={12} />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className="flex items-center hover:opacity-95 transition cursor-pointer py-1"
              >
                <img 
                  src="/images/logo.png" 
                  alt="YatraCare - Your Journey, Our Care" 
                  className="h-14 sm:h-16 md:h-18 max-h-[72px] w-auto object-contain drop-shadow-2xs"
                />
              </a>
            </div>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-[14px] xl:text-[15px] font-medium py-1 transition-colors relative cursor-pointer ${
                      isActive 
                        ? 'text-slate-900 font-bold' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => handleNavClick('portal')}
                className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 transition cursor-pointer"
                title="Open Tourist Portal"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Emily Chen"
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>Portal</span>
              </button>

              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2 text-sm font-semibold text-slate-800 bg-[#e2e8f0]/60 hover:bg-[#cbd5e1]/60 border border-slate-700/80 rounded-md transition-all shadow-xs cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] rounded-md transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={() => handleNavClick('portal')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-300 rounded cursor-pointer"
              >
                Portal
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                  activeNav === item.id 
                    ? 'bg-amber-50 text-amber-800 font-semibold border-l-4 border-amber-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-400 rounded-md"
              >
                Login
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-amber-600 rounded-md shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
