import React, { useState, useMemo } from 'react';
import { 
  MapPin, Star, ShieldCheck, Globe, SlidersHorizontal, 
  Search, ArrowRight, CheckCircle2, ChevronDown, Check,
  User, Award, Clock, Languages, X, Calendar, Phone, Mail
} from 'lucide-react';

export const guidesData = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bgImage: "/images/hawa-mahal.jpg",
    bio: "Passionate historian specializing in Rajput architecture and vibrant local textile markets.",
    fullBio: "Born and raised in Jaipur, Priya holds a Master's in Indian Medieval History from Rajasthan University and is a Ministry of Tourism licensed A-grade guide. She specializes in private palace walkthroughs, hidden culinary alleys, and certified artisan textile workshops.",
    languages: ["English", "Hindi"],
    specialty: "History",
    experience: "8 Yrs Exp",
    dailyRate: "₹2,500 / day",
    toursGiven: 430,
    tags: ["English, Hindi", "History", "8 Yrs Exp"],
    verified: true,
    badges: ["Dept. of Tourism Licensed", "First-Aid Certified", "Top Rated 2024"]
  },
  {
    id: "arjun-menon",
    name: "Arjun Menon",
    location: "Kochi, Kerala",
    rating: 5.0,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    bio: "Expert in backwater ecology, spice trails, and authentic Keralite culinary experiences.",
    fullBio: "With over 12 years guiding international naturalists and cultural travellers across Alleppey, Munnar, and Fort Kochi, Arjun brings Kerala's spices, backwater canal lifestyles, and ancient Kathakali traditions to life.",
    languages: ["English", "Malayalam", "French"],
    specialty: "Nature",
    experience: "12 Yrs Exp",
    dailyRate: "₹3,200 / day",
    toursGiven: 680,
    tags: ["English, Malayalam, French", "Nature", "12 Yrs Exp"],
    verified: true,
    badges: ["Eco-Tourism Expert", "French Fluent C1", "Certified Culinary Host"]
  },
  {
    id: "tenzin-zangmo",
    name: "Tenzin Zangmo",
    location: "Leh, Ladakh",
    rating: 4.8,
    reviews: 116,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    bio: "Specialist in high-altitude treks, Buddhist monastery tours, and local Ladakhi culture.",
    fullBio: "Native of the Nubra Valley and an advanced mountaineering graduate from NIM, Tenzin has led hundreds of expeditions across Khardung La, Markha Valley, and sacred centuries-old Gompas like Hemis and Thiksey.",
    languages: ["English", "Hindi", "Tibetan"],
    specialty: "Adventure",
    experience: "6 Yrs Exp",
    dailyRate: "₹2,800 / day",
    toursGiven: 290,
    tags: ["English, Hindi, Tibetan", "Adventure", "6 Yrs Exp"],
    verified: true,
    badges: ["HMI Mountaineer Certified", "High Altitude Medic", "Monastery Scholar"]
  },
  {
    id: "gurpreet-singh",
    name: "Gurpreet Singh",
    location: "Amritsar, Punjab",
    rating: 4.97,
    reviews: 154,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bgImage: "/images/golden-temple.jpg",
    bio: "Heritage storyteller for Sri Harmandir Sahib, Sikh folklore, and the historic Wagah border.",
    fullBio: "A passionate historian and volunteer at Guru Ka Langar, Gurpreet provides VIP access, cultural context, and private evening tours of the illuminated Golden Temple and Wagah Border.",
    languages: ["English", "Punjabi", "Hindi"],
    specialty: "Spiritual",
    experience: "9 Yrs Exp",
    dailyRate: "₹2,200 / day",
    toursGiven: 510,
    tags: ["English, Punjabi, Hindi", "Spiritual", "9 Yrs Exp"],
    verified: true,
    badges: ["Golden Temple Guide", "Cultural Historian", "VIP Pass Access"]
  },
  {
    id: "vikram-rawat",
    name: "Vikram Rawat",
    location: "Kedarnath & Rishikesh",
    rating: 4.95,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bgImage: "/images/kedarnath.jpg",
    bio: "Certified Garhwal Himalayan trek leader and Char Dham spiritual yatra coordinator.",
    fullBio: "With over a decade navigating the Kedarnath and Badrinath routes, Vikram specializes in altitude safety, pony/helicopter coordination, and sacred temple rituals.",
    languages: ["English", "Hindi", "Garhwali"],
    specialty: "Spiritual",
    experience: "11 Yrs Exp",
    dailyRate: "₹3,000 / day",
    toursGiven: 440,
    tags: ["English, Hindi, Garhwali", "Spiritual", "11 Yrs Exp"],
    verified: true,
    badges: ["Disaster Management Trained", "Char Dham Certified", "Trek Leader"]
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    location: "Mumbai, Maharashtra",
    rating: 4.88,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    bio: "Architectural historian & Bollywood insider covering colonial South Bombay and studio trails.",
    fullBio: "Ananya is an architectural conservationist who conducts deep-dive heritage tours of Victorian Gothic landmarks, Marine Drive, Elephanta Caves, and private Bollywood studio sets.",
    languages: ["English", "Hindi", "Marathi", "German"],
    specialty: "History",
    experience: "7 Yrs Exp",
    dailyRate: "₹2,700 / day",
    toursGiven: 390,
    tags: ["English, German, Hindi", "History", "7 Yrs Exp"],
    verified: true,
    badges: ["UNESCO Heritage Guide", "German B2 Certified", "Architectural Scholar"]
  }
];

export default function LocalGuidesPage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Any Language');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  // Selected Guide Detail Modal
  const [activeGuideModal, setActiveGuideModal] = useState(null);
  const [hiringSuccess, setHiringSuccess] = useState(false);
  const [bookingDate, setBookingDate] = useState('2024-11-20');
  const [bookingDays, setBookingDays] = useState(2);

  // Pagination / Load more
  const [displayCount, setDisplayCount] = useState(3);

  const languageOptions = ['Any Language', 'English', 'Hindi', 'French', 'German', 'Malayalam', 'Tibetan', 'Punjabi'];
  const specialtyOptions = ['All Specialties', 'History', 'Nature', 'Adventure', 'Spiritual', 'Culinary'];

  const filteredGuides = useMemo(() => {
    return guidesData.filter(guide => {
      if (searchLocation.trim() !== '') {
        const query = searchLocation.toLowerCase();
        const matchLoc = guide.location.toLowerCase().includes(query);
        const matchName = guide.name.toLowerCase().includes(query);
        if (!matchLoc && !matchName) return false;
      }
      if (selectedLanguage !== 'Any Language') {
        const hasLang = guide.languages.some(l => l.toLowerCase() === selectedLanguage.toLowerCase());
        if (!hasLang) return false;
      }
      if (selectedSpecialty !== 'All Specialties') {
        if (guide.specialty.toLowerCase() !== selectedSpecialty.toLowerCase()) return false;
      }
      return true;
    });
  }, [searchLocation, selectedLanguage, selectedSpecialty]);

  const visibleGuides = filteredGuides.slice(0, displayCount);

  const handleHireGuide = (e) => {
    e.preventDefault();
    setHiringSuccess(true);
    setTimeout(() => {
      setHiringSuccess(false);
      setActiveGuideModal(null);
    }, 1800);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24">
      
      {/* Top Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
              Verified Local Guides
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Connect with highly rated, YatraCare Verified local experts who speak your language and know the hidden gems of their cities.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
              <ShieldCheck className="text-amber-600" size={18} />
              <span>All Guides Thoroughly Vetted</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH & FILTERS BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* City or Region Input */}
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                City or Region
              </label>
              <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <MapPin className="text-slate-500 shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="e.g. Jaipur, Kerala"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Language Dropdown */}
            <div className="relative md:col-span-3">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                Language
              </label>
              <button
                type="button"
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setSpecDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition text-sm font-medium text-slate-800 cursor-pointer"
              >
                <div className="flex items-center space-x-2 truncate">
                  <Globe className="text-slate-500 shrink-0" size={18} />
                  <span>{selectedLanguage}</span>
                </div>
                <ChevronDown size={16} className={`text-slate-400 transform transition ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg z-30 py-1 max-h-52 overflow-y-auto">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between cursor-pointer ${
                        selectedLanguage === lang ? 'font-bold text-amber-700 bg-amber-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{lang}</span>
                      {selectedLanguage === lang && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specialty Dropdown */}
            <div className="relative md:col-span-3">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                Specialty
              </label>
              <button
                type="button"
                onClick={() => {
                  setSpecDropdownOpen(!specDropdownOpen);
                  setLangDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition text-sm font-medium text-slate-800 cursor-pointer"
              >
                <div className="flex items-center space-x-2 truncate">
                  <SlidersHorizontal className="text-slate-500 shrink-0" size={18} />
                  <span>{selectedSpecialty}</span>
                </div>
                <ChevronDown size={16} className={`text-slate-400 transform transition ${specDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {specDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg z-30 py-1 max-h-52 overflow-y-auto">
                  {specialtyOptions.map((spec) => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => {
                        setSelectedSpecialty(spec);
                        setSpecDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between cursor-pointer ${
                        selectedSpecialty === spec ? 'font-bold text-amber-700 bg-amber-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{spec}</span>
                      {selectedSpecialty === spec && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search CTA */}
            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full h-[42px] bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Search size={16} />
                <span>Find Guides</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* GUIDES 3-COLUMN CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Container */}
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Verified Badge */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 bg-[#4ade80] text-slate-950 rounded-md text-[11px] font-bold flex items-center space-x-1 shadow-sm">
                    <Check size={13} strokeWidth={3} />
                    <span>YatraCare Verified</span>
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Name and Rating */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition">
                      {guide.name}
                    </h3>
                    <div className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-900 text-xs font-bold">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      <span>{guide.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium mb-3">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{guide.location}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {guide.bio}
                  </p>

                  {/* Pills / Tags */}
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveGuideModal(guide)}
                  className="w-full py-2.5 bg-white hover:bg-slate-900 hover:text-white border border-slate-800 text-slate-800 rounded-xl text-sm font-semibold transition-all flex items-center justify-center space-x-2 cursor-pointer group"
                >
                  <span>View Profile</span>
                  <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Guides Button */}
        {displayCount < filteredGuides.length && (
          <div className="text-center pt-12">
            <button
              type="button"
              onClick={() => setDisplayCount(prev => prev + 3)}
              className="px-6 py-2.5 bg-[#f1f5f9] hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-lg shadow-2xs transition cursor-pointer"
            >
              Load More Guides
            </button>
          </div>
        )}
      </div>

      {/* DETAILED GUIDE PROFILE MODAL */}
      {activeGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-xl w-full overflow-hidden relative shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image */}
            <div className="relative h-48 w-full bg-slate-900 shrink-0">
              <img
                src={activeGuideModal.bgImage || activeGuideModal.image}
                alt={activeGuideModal.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

              <button
                onClick={() => setActiveGuideModal(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute -bottom-6 left-6 flex items-end space-x-4">
                <img
                  src={activeGuideModal.image}
                  alt={activeGuideModal.name}
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
                />
                <div className="pb-7 text-white">
                  <h3 className="text-xl font-bold">{activeGuideModal.name}</h3>
                  <p className="text-xs text-slate-300">{activeGuideModal.location}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 pt-10 overflow-y-auto space-y-5">
              
              {hiringSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Guide Request Confirmed!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    {activeGuideModal.name} has been notified and will coordinate with your itinerary.
                  </p>
                </div>
              ) : (
                <>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Rating</span>
                      <span className="text-sm font-extrabold text-slate-900 flex items-center justify-center space-x-1">
                        <Star size={13} className="fill-amber-500 text-amber-500" />
                        <span>{activeGuideModal.rating}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Tours Given</span>
                      <span className="text-sm font-extrabold text-slate-900">{activeGuideModal.toursGiven}+</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Daily Rate</span>
                      <span className="text-sm font-extrabold text-amber-700">{activeGuideModal.dailyRate}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">About the Guide</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeGuideModal.fullBio || activeGuideModal.bio}
                    </p>
                  </div>

                  {/* Verification Badges */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Credentials & Certifications</h4>
                    <div className="space-y-1.5">
                      {activeGuideModal.badges.map((badge, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleHireGuide} className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/60 space-y-3">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">Book This Guide</h4>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700 block mb-1">Select Date</label>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700 block mb-1">Number of Days</label>
                        <select
                          value={bookingDays}
                          onChange={(e) => setBookingDays(Number(e.target.value))}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        >
                          <option value={1}>1 Day (Half Day / Full Day)</option>
                          <option value={2}>2 Days</option>
                          <option value={3}>3 Days</option>
                          <option value={5}>5 Days</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-bold rounded-lg shadow-sm transition cursor-pointer"
                    >
                      Confirm Guide Booking ({activeGuideModal.dailyRate})
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
