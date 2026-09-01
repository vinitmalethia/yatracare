import React, { useState } from 'react';
import { 
  Clock, MapPin, Star, Calendar, Users, ChevronDown, 
  Car, Bed, Utensils, UserCheck, Download, ChevronUp, 
  ArrowRight, ShieldCheck, Check, Heart, Share2, Eye 
} from 'lucide-react';

export default function PackageDetailPage({ packageData, onBack, onNavigateHome, onNavigatePackages }) {
  // Active Tab
  const [activeTab, setActiveTab] = useState('overview');

  // Booking Card State
  const [startDate, setStartDate] = useState('2024-11-15');
  const [adults, setAdults] = useState(2);
  const [roomPref, setRoomPref] = useState('1 Double Room');
  const [isBooked, setIsBooked] = useState(false);

  // Accordion open states for Itinerary (day 1, 2 open by default)
  const [openDays, setOpenDays] = useState({ 1: true, 2: true });

  const toggleDay = (day) => {
    setOpenDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  // Fallback / Normalized Data
  const pkg = packageData || {
    id: "golden-triangle-tour",
    title: "Golden Triangle Tour",
    places: "Delhi • Agra • Jaipur",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 124,
    price: "₹32,999",
    originalPrice: "₹45,000",
    priceNumber: 32999,
    description: "Experience the essence of India with our premium Golden Triangle tour. This meticulously crafted 5-day itinerary connects three of the most iconic cities in northern India: Delhi, Agra, and Jaipur. Designed for travelers who seek both historical depth and modern comfort, this package offers guided access to UNESCO World Heritage sites, luxurious accommodations, and seamless private transport.",
    descriptionSecondary: "From the bustling streets and monumental architecture of the capital to the timeless romance of the Taj Mahal, and finally the royal grandeur of the Pink City, every moment is curated to provide a culturally immersive, high-end travel experience.",
    images: {
      main: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
      photo1: "/images/hawa-mahal.jpg",
      photo2: "/images/india-gate.jpg",
      photo3: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85"
    }
  };

  const basePriceNum = parseInt((pkg.price || "₹32,999").replace(/[^0-9]/g, '')) || 32999;
  const subtotal = basePriceNum * adults;
  const taxes = Math.round(subtotal * 0.05);
  const totalEstimate = subtotal + taxes;

  const defaultItinerary = [
    {
      day: 1,
      title: "Arrival in Delhi & Sightseeing",
      desc: "Arrive at Indira Gandhi International Airport. Meet our representative and transfer to your hotel. In the afternoon, visit Qutub Minar, Humayun's Tomb, and drive past India Gate and Parliament House.",
      pills: ["Stay: Delhi"]
    },
    {
      day: 2,
      title: "Delhi to Agra (230 km / 4 hrs)",
      desc: "After breakfast, drive to Agra via the Yamuna Expressway. Check-in to your hotel. Later, visit the magnificent Agra Fort, a UNESCO World Heritage site, offering spectacular views of the Taj Mahal from across the river.",
      pills: ["Stay: Agra", "Breakfast Included"]
    },
    {
      day: 3,
      title: "Agra to Jaipur via Fatehpur Sikri",
      desc: "Witness the magical sunrise at the immortal Taj Mahal. Return to hotel for breakfast, then drive towards Jaipur with an en-route guided visit to Emperor Akbar's abandoned Mughal city of Fatehpur Sikri.",
      pills: ["Stay: Jaipur", "Breakfast Included"]
    },
    {
      day: 4,
      title: "Jaipur Pink City & Amber Fort Exploration",
      desc: "Ascend to the hilltop Amber Fort. Photograph the iconic Hawa Mahal honeycomb facade, explore the City Palace Museum, and shop for precious gemstones and textiles in local Johari Bazaar.",
      pills: ["Stay: Jaipur", "Breakfast Included"]
    },
    {
      day: 5,
      title: "Jaipur to Delhi Departure",
      desc: "Enjoy a relaxed breakfast at your heritage hotel before a comfortable private drive back to Delhi Airport or Railway Station for your onward journey home.",
      pills: ["Breakfast Included"]
    }
  ];

  const itineraryList = pkg.detailedItinerary || defaultItinerary;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'inclusions', label: 'Inclusions' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      alert(`Booking Confirmed for ${pkg.title}! Total: ₹${totalEstimate.toLocaleString()} for ${adults} Adults. Our concierge will contact you.`);
      setIsBooked(false);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
          <button onClick={onNavigateHome} className="hover:text-slate-900 transition">Home</button>
          <span>›</span>
          <button onClick={onNavigatePackages} className="hover:text-slate-900 transition">Tour Packages</button>
          <span>›</span>
          <span className="hover:text-slate-900 transition">India</span>
          <span>›</span>
          <span className="text-slate-900 font-semibold">{pkg.title}</span>
        </nav>
      </div>

      {/* Main Title Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight">
              {pkg.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center space-x-1.5">
                <Clock size={16} className="text-amber-600" />
                <span>{pkg.duration || '5 Days / 4 Nights'}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <MapPin size={16} className="text-amber-600" />
                <span>{pkg.places || 'Delhi • Agra • Jaipur'}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Star size={15} className="fill-amber-500 text-amber-500" />
                <span className="font-bold text-slate-900">{pkg.rating || '4.8'}</span>
                <span className="text-slate-500">({pkg.reviews || 124} Reviews)</span>
              </div>
            </div>
          </div>

          {/* Pricing on Top Right */}
          <div className="text-left md:text-right">
            {pkg.originalPrice && (
              <span className="text-xs text-slate-400 line-through mr-2 font-medium">
                {pkg.originalPrice}
              </span>
            )}
            <span className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
              {pkg.price || '₹32,999'}
            </span>
            <span className="text-xs text-slate-500 font-normal ml-1"> per person</span>
          </div>
        </div>
      </div>

      {/* 4-PHOTO GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[480px]">
          
          {/* Main Large Left Photo (Taj Mahal Reflection) */}
          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-full rounded-2xl overflow-hidden relative shadow-sm group">
            <img
              src={pkg.images?.main || "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"}
              alt="Taj Mahal reflection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
            />
          </div>

          {/* Right Photos Grid (3 Photos) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-auto lg:h-full">
            {/* Top Left: Hawa Mahal */}
            <div className="h-44 sm:h-52 lg:h-[232px] rounded-2xl overflow-hidden relative group">
              <img
                src={pkg.images?.photo1 || "/images/hawa-mahal.jpg"}
                alt="Hawa Mahal Jaipur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
              />
            </div>

            {/* Top Right: India Gate */}
            <div className="h-44 sm:h-52 lg:h-[232px] rounded-2xl overflow-hidden relative group">
              <img
                src={pkg.images?.photo2 || "/images/india-gate.jpg"}
                alt="India Gate Delhi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
              />
            </div>

            {/* Bottom Wide: Amber Fort / Palace */}
            <div className="col-span-2 h-48 sm:h-56 lg:h-[232px] rounded-2xl overflow-hidden relative group">
              <img
                src={pkg.images?.photo3 || "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85"}
                alt="Amber Fort Rajasthan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
              />
              
              {/* Floating "View all photos" button */}
              <button
                type="button"
                className="absolute bottom-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-md hover:bg-white text-slate-800 text-xs font-semibold rounded-lg shadow-md flex items-center space-x-2 transition cursor-pointer"
              >
                <Eye size={14} />
                <span>View all 12 photos</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Layout with Sticky Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: TABS & SECTIONS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tabs Header */}
            <div className="border-b border-slate-200">
              <nav className="flex space-x-8">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-3 text-sm font-semibold transition cursor-pointer relative ${
                        isActive
                          ? 'text-[#d97706]'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#d97706] rounded-full"></span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* TOUR OVERVIEW SECTION */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Tour Overview
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {pkg.description || "Experience the essence of India with our premium Golden Triangle tour. This meticulously crafted 5-day itinerary connects three of the most iconic cities in northern India: Delhi, Agra, and Jaipur. Designed for travelers who seek both historical depth and modern comfort, this package offers guided access to UNESCO World Heritage sites, luxurious accommodations, and seamless private transport."}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {pkg.descriptionSecondary || "From the bustling streets and monumental architecture of the capital to the timeless romance of the Taj Mahal, and finally the royal grandeur of the Pink City, every moment is curated to provide a culturally immersive, high-end travel experience."}
              </p>

              {/* 4 INCLUSION HIGHLIGHT CARDS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col items-center text-center space-y-1">
                  <Car className="text-amber-600" size={22} />
                  <span className="text-[11px] text-slate-400 font-medium">Transport</span>
                  <span className="text-xs font-bold text-slate-800">Private AC Car</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col items-center text-center space-y-1">
                  <Bed className="text-amber-600" size={22} />
                  <span className="text-[11px] text-slate-400 font-medium">Stay</span>
                  <span className="text-xs font-bold text-slate-800">4-Star Hotels</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col items-center text-center space-y-1">
                  <Utensils className="text-amber-600" size={22} />
                  <span className="text-[11px] text-slate-400 font-medium">Meals</span>
                  <span className="text-xs font-bold text-slate-800">Breakfast Included</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col items-center text-center space-y-1">
                  <UserCheck className="text-amber-600" size={22} />
                  <span className="text-[11px] text-slate-400 font-medium">Guide</span>
                  <span className="text-xs font-bold text-slate-800">Expert Local</span>
                </div>
              </div>
            </section>

            {/* DETAILED ITINERARY SECTION */}
            <section className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Detailed Itinerary
                </h2>
                <button
                  type="button"
                  onClick={() => alert('Downloading official itinerary PDF...')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
              </div>

              {/* TIMELINE ACCORDION */}
              <div className="space-y-3 relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                {itineraryList.map((item) => {
                  const isOpen = openDays[item.day];
                  return (
                    <div 
                      key={item.day}
                      className="bg-white rounded-xl border border-slate-200/90 overflow-hidden ml-6 shadow-2xs transition"
                    >
                      <button
                        type="button"
                        onClick={() => toggleDay(item.day)}
                        className="w-full text-left p-4.5 flex items-center justify-between bg-slate-50/40 hover:bg-slate-50 transition cursor-pointer"
                      >
                        <div>
                          <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                            DAY {item.day}
                          </span>
                          <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                        {isOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-4.5 pt-1 space-y-3 bg-white">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>

                          {item.pills && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.pills.map((pill, pIdx) => (
                                <span
                                  key={pIdx}
                                  className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* RIGHT STICKY BOOKING CARD */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg space-y-6">
              
              {/* Header Price */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Starting from</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#f97316]">
                    ₹{basePriceNum.toLocaleString()}
                  </span>
                </div>
                <span className="flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Check size={13} />
                  <span>Available</span>
                </span>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Start Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Select Start Date
                  </label>
                  <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <Calendar size={18} className="text-slate-500 shrink-0" />
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Travelers Counter */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Travelers
                  </label>
                  <div className="flex items-center justify-between px-4 py-2 rounded-xl border border-slate-200 bg-slate-50/50">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      disabled={adults <= 1}
                      className="w-7 h-7 rounded-md border border-slate-300 flex items-center justify-center hover:bg-slate-200 disabled:opacity-30 cursor-pointer font-bold"
                    >
                      –
                    </button>
                    <span className="text-sm font-bold text-slate-800">
                      {adults} Adults
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded-md border border-slate-300 flex items-center justify-center hover:bg-slate-200 cursor-pointer font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Room Preference */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Room Preference
                  </label>
                  <select
                    value={roomPref}
                    onChange={(e) => setRoomPref(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="1 Double Room">1 Double Room</option>
                    <option value="2 Twin Rooms">2 Twin Rooms</option>
                    <option value="1 Luxury Suite">1 Luxury Suite</option>
                  </select>
                </div>

                {/* Price Breakdown Calculation */}
                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>₹{basePriceNum.toLocaleString()} × {adults} Adults</span>
                    <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees (5%)</span>
                    <span className="font-semibold text-slate-900">₹{taxes.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-slate-900">
                    <span>Total Estimate</span>
                    <span className="text-base font-extrabold text-slate-900">
                      ₹{totalEstimate.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  You won't be charged yet
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
