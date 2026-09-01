import React, { useState } from 'react';
import { Menu, X, Globe, User, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenAuth, activeNav, setActiveNav }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Explore India', id: 'explore' },
    { label: 'Tour Packages', id: 'packages' },
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
    } else if (id === 'home' || id === 'packages' || id === 'portal' || id === 'guides' || id === 'travel' || id === 'hotels') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all shadow-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo exactly matching reference */}
          <div className="flex items-center shrink-0">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              className="text-2xl sm:text-[26px] font-black tracking-tight text-[#0F172A] hover:opacity-90 transition cursor-pointer"
            >
              YatraCare
            </a>
          </div>

          {/* Center Navigation Links (Single Line, Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[15px] py-1 transition-colors relative cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'text-[#92400e] font-bold' 
                      : 'text-slate-600 font-medium hover:text-slate-900'
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
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleNavClick('portal')}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 transition cursor-pointer whitespace-nowrap"
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
              className="px-5 py-2 text-sm font-semibold text-slate-800 bg-[#e2e8f0]/60 hover:bg-[#cbd5e1]/60 border border-slate-700/80 rounded-md transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              Login
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] rounded-md transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
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
    </header>
  );
}
