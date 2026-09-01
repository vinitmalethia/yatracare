import React, { useState } from 'react';
import { X, Star, Clock, MapPin, Check, Shield } from 'lucide-react';
import { packages, destinations } from '../data/destinations';

export default function TourPackagesModal({ isOpen, onClose, onSelectDestination, initialTab = 'all' }) {
  const [activeTab, setActiveTab] = useState(initialTab === 'packages' ? 'packages' : 'all');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Heritage', 'Royal & Desert', 'Nature & Wellness', 'Beach & Leisure', 'Spiritual', 'Adventure'];

  const filteredDestinations = selectedCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative shadow-2xl border border-slate-200 max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activeTab === 'packages' ? 'Featured Tour Packages' : 'All Destinations across India'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Handcrafted itineraries with verified local guides and premium stays
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab & Filter Bar */}
        <div className="px-6 pt-4 pb-2 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition ${
                activeTab === 'all' 
                  ? 'bg-amber-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition ${
                activeTab === 'packages' 
                  ? 'bg-amber-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Complete Tour Packages
            </button>
          </div>

          {activeTab === 'all' && (
            <div className="flex items-center space-x-1 overflow-x-auto py-1 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap transition ${
                    selectedCategory === cat 
                      ? 'bg-slate-900 text-white font-semibold' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* List Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'packages' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {packages.map((pkg) => (
                <div key={pkg.id} className="rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col">
                  <div className="relative h-44 w-full">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{pkg.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 flex items-center space-x-1">
                        <MapPin size={13} className="text-amber-600" />
                        <span>{pkg.places}</span>
                      </p>
                      <p className="text-xs text-slate-600 mt-2 flex items-center space-x-1">
                        <Clock size={13} />
                        <span>{pkg.duration}</span>
                      </p>
                    </div>
                    <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Total Price</span>
                        <span className="font-bold text-slate-900 text-base">{pkg.price}</span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectDestination(destinations[0]);
                        }}
                        className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-md transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filteredDestinations.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => {
                    onClose();
                    onSelectDestination(dest);
                  }}
                  className="group rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:border-amber-500 hover:shadow-lg transition-all"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h4 className="font-bold text-lg">{dest.name}</h4>
                      <p className="text-xs text-slate-200">{dest.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-3.5 bg-white flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 text-slate-700 font-semibold">
                      <Star size={13} className="text-amber-500 fill-amber-500" />
                      <span>{dest.rating}</span>
                    </div>
                    <span className="font-bold text-amber-700">{dest.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
