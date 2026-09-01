import React from 'react';

export default function Footer({ onCategoryClick }) {
  const footerSections = [
    {
      title: 'Discover',
      links: ['Explore', 'Destinations', 'Itineraries', 'Culture', 'Festivals']
    },
    {
      title: 'Services',
      links: ['Services', 'Hotels', 'Transport', 'Guides', 'Visas']
    },
    {
      title: 'Company',
      links: ['Company', 'About Us', 'Contact', 'Careers', 'Press']
    },
    {
      title: 'Support',
      links: ['Support', 'FAQ', 'Safety', 'Insurance', 'Travel Advice']
    }
  ];

  return (
    <footer id="footer-section" className="bg-[#ECEFF3] border-t border-slate-200 text-slate-700 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Copyright Column */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="YatraCare" 
                className="h-12 sm:h-14 w-auto object-contain max-w-[220px]"
              />
            </a>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Premium travel experiences, luxury vehicle fleet, verified local guides, and 24/7 tourist support across the Indian subcontinent.
            </p>
            <p className="text-xs font-semibold text-slate-500">
              © 2024 YatraCare International Tourism. All rights reserved.
            </p>
          </div>

          {/* 4 Footer Columns */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerSections.map((sec) => (
              <div key={sec.title} className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                  {sec.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {sec.links.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => onCategoryClick && onCategoryClick(link)}
                        className="text-slate-600 hover:text-slate-900 transition-colors text-left cursor-pointer"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
