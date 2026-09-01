import React, { useState, useMemo } from 'react';
import { Clock, Star, ChevronDown, Check, ArrowRight, X, MapPin } from 'lucide-react';
import { packages as allTourPackages } from '../data/destinations';

export default function TourPackagesPage({ onSelectPackage }) {
  // Filter States
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  // Detail Modal State
  const [activePackageModal, setActivePackageModal] = useState(null);

  const durationOptions = ['1-3 Days', '4-7 Days', '8-14 Days', '14+ Days'];
  const priceOptions = ['Under $500', '$500 - $1000', '$1000 - $2500', 'Over $2500'];
  const regions = ['All Regions', 'North India', 'South India', 'West India', 'Himalayas'];
  const themes = ['Heritage', 'Nature', 'Spiritual', 'Adventure'];

  const getDurationCategory = (durationStr) => {
    const days = parseInt(durationStr) || 5;
    if (days <= 3) return '1-3 Days';
    if (days <= 7) return '4-7 Days';
    if (days <= 14) return '8-14 Days';
    return '14+ Days';
  };

  const getPriceCategory = (priceStr) => {
    const num = parseInt(priceStr.replace(/[^0-9]/g, '')) || 800;
    if (num < 500) return 'Under $500';
    if (num <= 1000) return '$500 - $1000';
    if (num <= 2500) return '$1000 - $2500';
    return 'Over $2500';
  };

  const toggleDuration = (d) => {
    setSelectedDurations(prev => 
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  };

  const togglePrice = (p) => {
    setSelectedPrices(prev => 
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return allTourPackages.filter(pkg => {
      const durCat = getDurationCategory(pkg.duration);
      const prCat = getPriceCategory(pkg.price);

      if (selectedDurations.length > 0 && !selectedDurations.includes(durCat)) {
        return false;
      }
      if (selectedPrices.length > 0 && !selectedPrices.includes(prCat)) {
        return false;
      }
      if (selectedRegion !== 'All Regions' && pkg.region !== selectedRegion) {
        return false;
      }
      if (selectedTheme && selectedTheme !== 'All' && pkg.category !== selectedTheme) {
        return false;
      }
      return true;
    });
  }, [selectedDurations, selectedPrices, selectedRegion, selectedTheme]);

  // Featured banner package (The Golden Triangle & Royal Rajasthan)
  const featuredPackage = allTourPackages.find(p => p.id === 'golden-triangle-rajasthan') || allTourPackages[0];

  // Grid packages
  const gridPackages = filteredPackages.filter(p => p.id !== featuredPackage.id);

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24">
      {/* Top Header Section */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
            Tour Packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Curated experiences for every traveler. Discover the rich heritage, vibrant landscapes, and unparalleled hospitality of India.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-7 sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Filters</h2>
              {(selectedDurations.length > 0 || selectedPrices.length > 0 || selectedRegion !== 'All Regions' || selectedTheme !== '') && (
                <button
                  onClick={() => {
                    setSelectedDurations([]);
                    setSelectedPrices([]);
                    setSelectedRegion('All Regions');
                    setSelectedTheme('');
                  }}
                  className="text-xs text-amber-600 hover:text-amber-800 font-semibold cursor-pointer"
                >
                  Reset all
                </button>
              )}
            </div>

            {/* Duration Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
                Duration
              </h3>
              <div className="space-y-2.5">
                {durationOptions.map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedDurations.includes(opt)}
                      onChange={() => toggleDuration(opt)}
                      className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-600"
                    />
                    <span className="text-slate-600 hover:text-slate-900">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
                Price Range
              </h3>
              <div className="space-y-2.5">
                {priceOptions.map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(opt)}
                      onChange={() => togglePrice(opt)}
                      className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-600"
                    />
                    <span className="text-slate-600 hover:text-slate-900">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Region Dropdown */}
            <div className="relative">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Region
              </h3>
              <button
                type="button"
                onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                <span>{selectedRegion}</span>
                <ChevronDown size={16} className={`text-slate-500 transform transition ${regionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {regionDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg z-20 py-1 max-h-48 overflow-y-auto">
                  {regions.map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => {
                        setSelectedRegion(reg);
                        setRegionDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between cursor-pointer ${
                        selectedRegion === reg ? 'font-bold text-amber-700 bg-amber-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{reg}</span>
                      {selectedRegion === reg && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Pills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Theme
              </h3>
              <div className="flex flex-wrap gap-2">
                {themes.map((th) => {
                  const isActive = selectedTheme === th;
                  return (
                    <button
                      key={th}
                      type="button"
                      onClick={() => setSelectedTheme(isActive ? '' : th)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer border ${
                        isActive
                          ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {th}
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>

          {/* RIGHT COLUMN: PACKAGES SHOWCASE */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* BIG FEATURED BANNER CARD (The Golden Triangle & Royal Rajasthan) */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 min-h-[360px] sm:min-h-[400px] flex flex-col justify-end group">
              {/* Background Image */}
              <img
                src={featuredPackage.image}
                alt={featuredPackage.title}
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30"></div>

              {/* Top Badges */}
              <div className="absolute top-5 left-5 flex items-center space-x-2 z-10">
                <span className="px-3 py-1 bg-[#ea580c] text-white text-xs font-bold rounded-md tracking-wider uppercase shadow-xs">
                  FEATURED
                </span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-md flex items-center space-x-1.5">
                  <Clock size={13} />
                  <span>{featuredPackage.duration}</span>
                </span>
              </div>

              {/* Banner Content */}
              <div className="relative z-10 p-6 sm:p-8 text-white max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
                  {featuredPackage.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl opacity-95">
                  Experience the architectural marvels of Delhi, Agra, and Jaipur, before diving deep into the regal forts and palaces of Rajasthan. A journey of luxury and heritage.
                </p>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
                  <div>
                    <span className="text-xs text-slate-300 block mb-0.5">From</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#f59e0b] tracking-tight">
                      {featuredPackage.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage ? onSelectPackage(featuredPackage) : setActivePackageModal(featuredPackage)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] text-white font-semibold text-sm rounded-lg shadow-md transition transform active:scale-98 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* 3-COLUMN PACKAGES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {gridPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => onSelectPackage ? onSelectPackage(pkg) : setActivePackageModal(pkg)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Top Image */}
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Rating pill on top right */}
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-white text-slate-900 rounded-md text-xs font-bold flex items-center space-x-1 shadow-sm">
                        <Star size={12} className="fill-slate-900 text-slate-900" />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      {/* Duration and Theme Badge */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="flex items-center space-x-1">
                          <Clock size={13} className="text-slate-400" />
                          <span className="font-medium text-slate-600">{pkg.duration}</span>
                        </span>
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                          pkg.category === 'Nature' 
                            ? 'bg-blue-50 text-blue-700 border-blue-100'
                            : pkg.category === 'Adventure'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : pkg.category === 'Heritage'
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        }`}>
                          {pkg.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-amber-700 transition">
                        {pkg.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {pkg.places}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Price & Details Button */}
                  <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Starting at</span>
                      <span className="text-lg font-bold text-amber-700">
                        {pkg.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectPackage) onSelectPackage(pkg);
                        else setActivePackageModal(pkg);
                      }}
                      className="px-4 py-1.5 border border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white rounded-md text-xs font-semibold transition cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state if all filtered out */}
            {gridPackages.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-500 text-sm">No packages match the selected filters.</p>
                <button
                  onClick={() => {
                    setSelectedDurations([]);
                    setSelectedPrices([]);
                    setSelectedRegion('All Regions');
                    setSelectedTheme('');
                  }}
                  className="mt-3 px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </main>
        </div>
      </div>

      {/* PACKAGE DETAILS POPUP MODAL */}
      {activePackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-60 w-full bg-slate-900 shrink-0">
              <img
                src={activePackageModal.image}
                alt={activePackageModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <button
                onClick={() => setActivePackageModal(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 bg-amber-500/30 backdrop-blur-md border border-amber-400/40 rounded text-amber-200 text-xs font-semibold uppercase tracking-wider">
                  {activePackageModal.category} • {activePackageModal.region}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activePackageModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="text-amber-500 fill-amber-500" size={16} />
                  <span className="font-bold text-slate-800">{activePackageModal.rating}</span>
                  <span className="text-slate-500">({activePackageModal.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700">
                  <Clock size={15} />
                  <span className="font-semibold">{activePackageModal.duration}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Total Package</span>
                  <span className="text-lg font-bold text-amber-700">{activePackageModal.price}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">Route & Sights</h4>
                <div className="flex items-center space-x-1.5 text-sm text-slate-700 font-medium">
                  <MapPin size={15} className="text-amber-600 shrink-0" />
                  <span>{activePackageModal.places}</span>
                </div>
              </div>

              {activePackageModal.itinerary && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Day-by-Day Itinerary</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activePackageModal.itinerary.map((it, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activePackageModal.inclusions && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Package Inclusions & Must-See Sights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {activePackageModal.inclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setActivePackageModal(null)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert(`Booking request initiated for ${activePackageModal.title}! A YatraCare concierge will reach out to you.`);
                    setActivePackageModal(null);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg text-xs font-bold shadow-sm transition cursor-pointer"
                >
                  Book This Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
