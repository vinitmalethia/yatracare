import React, { useState, useMemo } from 'react';
import { 
  Search, ChevronRight, Compass, Shield, Users, 
  MapPin, Star, ArrowRight, Heart, Sparkles 
} from 'lucide-react';

export const exploreDestinations = [
  {
    id: "varanasi",
    name: "Varanasi",
    subtitle: "The spiritual capital of India, known for its sacred ghats and divine evening aarti.",
    region: "North India",
    regionTag: "NORTH",
    image: "/images/dwarka-ghats.jpg",
    gridSpan: "col-span-1",
    rating: 4.9,
    state: "Uttar Pradesh"
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwaters",
    subtitle: "Tranquil networks of canals, lagoons, and lakes parallel to the Arabian Sea coast.",
    region: "South India",
    regionTag: "SOUTH",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    gridSpan: "col-span-1",
    rating: 4.88,
    state: "Kerala"
  },
  {
    id: "ladakh",
    name: "Ladakh",
    subtitle: "A high-altitude desert known for its dramatic landscapes, Buddhist monasteries, and rugged adventure trails.",
    region: "North India",
    regionTag: "NORTH",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=85",
    gridSpan: "col-span-1 md:col-span-2",
    rating: 4.95,
    state: "Ladakh"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    subtitle: "The Pink City, famed for its royal palaces, historic forts, and vibrant gemstone bazaars.",
    region: "West India",
    regionTag: "WEST",
    image: "/images/hawa-mahal.jpg",
    gridSpan: "col-span-1",
    rating: 4.92,
    state: "Rajasthan"
  },
  {
    id: "agra",
    name: "Agra",
    subtitle: "Home of the immortal Taj Mahal, Agra Fort, and historic Mughal architecture.",
    region: "North India",
    regionTag: "NORTH",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
    gridSpan: "col-span-1",
    rating: 4.9,
    state: "Uttar Pradesh"
  },
  {
    id: "goa",
    name: "Goa",
    subtitle: "Sun-drenched tropical coastline, Portuguese churches, and vibrant seaside leisure.",
    region: "West India",
    regionTag: "WEST",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    gridSpan: "col-span-1 md:col-span-2",
    rating: 4.85,
    state: "Goa"
  },
  {
    id: "amritsar",
    name: "Amritsar",
    subtitle: "The resplendent Golden Temple, holy Amrit Sarovar, and spiritual Sikh hospitality.",
    region: "North India",
    regionTag: "NORTH",
    image: "/images/golden-temple.jpg",
    gridSpan: "col-span-1",
    rating: 4.98,
    state: "Punjab"
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    subtitle: "Ancient Jyotirlinga shrine resting majestically at 3,583m amidst snow-capped Himalayan peaks.",
    region: "North India",
    regionTag: "NORTH",
    image: "/images/kedarnath.jpg",
    gridSpan: "col-span-1",
    rating: 4.97,
    state: "Uttarakhand"
  }
];

export default function ExploreIndiaPage({ onSelectDestination, onViewAll }) {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeInfoModal, setActiveInfoModal] = useState(null);

  const regionTabs = ['All Regions', 'North India', 'South India', 'East India', 'West India', 'Central India'];

  const filteredDestinations = useMemo(() => {
    return exploreDestinations.filter(item => {
      if (selectedRegion !== 'All Regions' && item.region !== selectedRegion) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchSub = item.subtitle.toLowerCase().includes(query);
        const matchState = item.state.toLowerCase().includes(query);
        if (!matchName && !matchSub && !matchState) return false;
      }
      return true;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full h-[420px] sm:h-[480px] bg-slate-900 overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=90"
          alt="Taj Mahal reflection"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
        />
        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Discover the Soul of India
          </h1>
          <p className="text-sm sm:text-base text-slate-100 font-normal max-w-xl mx-auto leading-relaxed drop-shadow-sm opacity-95">
            Embark on a journey through vibrant cultures, ancient heritage, and breathtaking landscapes tailored for the discerning traveler.
          </p>

          {/* Search Box */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-1.5 flex items-center space-x-2 border border-white/20">
              <div className="pl-3 text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search destinations, experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
              />
              <button
                type="button"
                className="px-6 py-2.5 bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EXPLORE BY REGION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Explore by Region
        </h2>

        {/* Region Pills */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
          {regionTabs.map((reg) => {
            const isActive = selectedRegion === reg;
            return (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {reg}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Featured Destinations
          </h2>
          <button
            onClick={() => onViewAll && onViewAll('all')}
            className="inline-flex items-center space-x-1 text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-900 transition cursor-pointer"
          >
            <span>View All</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination && onSelectDestination(dest)}
              className={`${dest.gridSpan} group relative h-[360px] sm:h-[390px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 bg-slate-900 flex flex-col justify-end`}
            >
              {/* Background Photo */}
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

              {/* Top Region Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white rounded-md border border-white/20">
                  {dest.regionTag}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2">
                  {dest.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ESSENTIAL TRAVEL INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-2xs">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Essential Travel Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Visas & Entry */}
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-slate-50 transition flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Compass size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Visas & Entry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Most nationalities require an e-Visa for tourism. Ensure your passport has 6 months validity.
                </p>
              </div>
              <div className="pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => alert('Official e-Visa eligibility: Apply online at least 4 days before arrival. Valid for 30 days, 1 year, or 5 years.')}
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 transition cursor-pointer"
                >
                  Read Policy
                </button>
              </div>
            </div>

            {/* Health & Safety */}
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-slate-50 transition flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Health & Safety
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stay hydrated, consume bottled water, and consult your doctor regarding recommended vaccinations.
                </p>
              </div>
              <div className="pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => alert('Health & Safety: YatraCare provides 24/7 medical on-call assistance, sanitized private cabs, and verified bottled water on all journeys.')}
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 transition cursor-pointer"
                >
                  Safety Guidelines
                </button>
              </div>
            </div>

            {/* Cultural Etiquette */}
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-slate-50 transition flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Users size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Cultural Etiquette
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dress modestly, especially at religious sites. Remove shoes before entering homes and temples.
                </p>
              </div>
              <div className="pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => alert('Cultural Etiquette: Cover shoulders and knees when visiting temples and gurudwaras. A friendly "Namaste" greeting is warmly appreciated everywhere!')}
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 transition cursor-pointer"
                >
                  Culture Guide
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
