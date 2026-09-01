import React, { useState } from 'react';
import { ArrowRight, Star, Sparkles, MapPin } from 'lucide-react';

export default function ExploreIndia({ destinations, onSelectDestination, onViewAll }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Spiritual', 'Heritage', 'Royal & Heritage', 'Nature & Wellness', 'Beach & Leisure'];

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="explore-india-section" className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-amber-600 font-semibold text-xs tracking-wider uppercase mb-1">
            <Sparkles size={14} />
            <span>Handpicked Destinations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight">
            Explore India
          </h2>
          <p className="mt-1 text-sm sm:text-base text-slate-600 font-normal">
            Discover iconic destinations, sacred sanctuaries, and timeless royal heritage.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onViewAll('all')}
            className="group inline-flex items-center space-x-1.5 text-sm font-semibold text-slate-900 hover:text-amber-700 transition cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight 
              size={17} 
              className="transform group-hover:translate-x-1 transition-transform" 
            />
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat === 'All' ? 'All Iconic Places' : cat}
          </button>
        ))}
      </div>

      {/* Destination Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="group relative h-[380px] sm:h-[410px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-slate-900 flex flex-col justify-end"
          >
            {/* Background Image */}
            <img
              src={dest.image}
              alt={dest.name}
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlays for High Legibility & Professional Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-black/10 opacity-90 group-hover:opacity-95 transition-opacity"></div>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-2.5 py-1 text-[11px] font-semibold bg-black/40 backdrop-blur-md text-white rounded-full border border-white/20">
                {dest.category}
              </span>
              <div className="flex items-center space-x-1 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-full text-amber-300 text-xs font-semibold">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span>{dest.rating}</span>
              </div>
            </div>

            {/* Card Content Overlay (Bottom) */}
            <div className="relative z-10 p-5 sm:p-6 text-white">
              <div className="flex items-center space-x-1 text-slate-300 text-xs font-medium mb-1">
                <MapPin size={13} className="text-amber-400 shrink-0" />
                <span>{dest.state}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-0.5 group-hover:text-amber-300 transition-colors">
                {dest.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 font-medium mb-3">
                {dest.subtitle}
              </p>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-slate-300">{dest.duration}</span>
                <span className="font-bold text-amber-300 text-sm">{dest.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
