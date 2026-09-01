import React, { useState, useMemo } from 'react';
import { 
  MapPin, Calendar, Users, Search, Star, Wifi, 
  Waves, Snowflake, Sparkles, UtensilsCrossed, Dumbbell, 
  Wine, Check, X, ShieldCheck, ArrowRight, Bed
} from 'lucide-react';

export const hotelsData = [
  {
    id: "rambagh-palace",
    name: "Rambagh Palace Heritage",
    location: "Jaipur, Rajasthan",
    rating: 4.9,
    reviews: 320,
    category: "Heritage Hotels",
    price: "₹18,500",
    originalPrice: "₹25,000",
    priceNum: 18500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    amenities: [
      { label: "WiFi", icon: "wifi" },
      { label: "Pool", icon: "pool" },
      { label: "AC", icon: "ac" }
    ],
    description: "Former royal residence of the Maharaja of Jaipur, featuring opulent peacocks strolling through manicured Mughal gardens, antique furniture, and royal spa treatments.",
    roomTypes: ["Palace Room", "Historical Suite", "Grand Royal Suite"]
  },
  {
    id: "kumarakom-lake-resort",
    name: "Kumarakom Lake Resort",
    location: "Kerala Backwaters",
    rating: 4.8,
    reviews: 280,
    category: "Luxury Resorts",
    price: "₹14,200",
    priceNum: 14200,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=85",
    amenities: [
      { label: "Spa", icon: "spa" },
      { label: "Dining", icon: "dining" },
      { label: "WiFi", icon: "wifi" }
    ],
    description: "Nestled along the shores of Lake Vembanad with traditional Kerala heritage villas, private plunge pools, authentic Ayurvedic therapies, and sunset lake dining.",
    roomTypes: ["Meandering Pool Villa", "Heritage Lake View Villa", "Presidential Suite with Private Pool"]
  },
  {
    id: "taj-mahal-tower",
    name: "The Taj Mahal Tower",
    location: "Mumbai, Maharashtra",
    rating: 4.7,
    reviews: 410,
    category: "Boutique Stays",
    price: "₹22,000",
    priceNum: 22000,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
    amenities: [
      { label: "Gym", icon: "gym" },
      { label: "Bar", icon: "bar" },
      { label: "AC", icon: "ac" }
    ],
    description: "Iconic luxury landmark overlooking the Gateway of India and Arabian Sea with world-class fine dining, luxury harbor-view suites, and heritage hospitality.",
    roomTypes: ["Superior City View", "Deluxe Sea View Room", "Executive Suite"]
  },
  {
    id: "oberoi-amarvilas",
    name: "The Oberoi Amarvilas",
    location: "Agra, Uttar Pradesh",
    rating: 4.98,
    reviews: 390,
    category: "Heritage Hotels",
    price: "₹28,500",
    originalPrice: "₹34,000",
    priceNum: 28500,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85",
    amenities: [
      { label: "WiFi", icon: "wifi" },
      { label: "Pool", icon: "pool" },
      { label: "Spa", icon: "spa" }
    ],
    description: "Located just 600 meters from the Taj Mahal, offering uninterrupted views of the monument from every single luxury room and private balcony.",
    roomTypes: ["Premier Taj View Room", "Deluxe Suite with Balcony", "Kohinoor Suite"]
  },
  {
    id: "wildflower-hall",
    name: "Wildflower Hall, An Oberoi Resort",
    location: "Shimla, Himalayas",
    rating: 4.94,
    reviews: 240,
    category: "Luxury Resorts",
    price: "₹21,000",
    priceNum: 21000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",
    amenities: [
      { label: "Spa", icon: "spa" },
      { label: "Dining", icon: "dining" },
      { label: "AC", icon: "ac" }
    ],
    description: "Surrounded by cedar pine forests at 8,250 ft with heated outdoor whirlpool overlooking snow-clad Himalayan ranges.",
    roomTypes: ["Deluxe Garden View", "Premier Mountain View", "Lord Kitchener Suite"]
  },
  {
    id: "taj-lake-palace",
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    rating: 4.96,
    reviews: 360,
    category: "Heritage Hotels",
    price: "₹26,000",
    priceNum: 26000,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=85",
    amenities: [
      { label: "WiFi", icon: "wifi" },
      { label: "Pool", icon: "pool" },
      { label: "Dining", icon: "dining" }
    ],
    description: "Floating white marble palace built in 1746 in the center of Lake Pichola, accessible only by private boat with butler service.",
    roomTypes: ["Luxury Lake View Room", "Historical Palace Suite", "Grand Royal Suite"]
  }
];

export default function HotelsPage() {
  const [activeCategory, setActiveCategory] = useState('Heritage Hotels');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestsCount, setGuestsCount] = useState('2 Adults, 1 Room');
  
  // Booking Modal
  const [selectedHotelModal, setSelectedHotelModal] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const categories = ['Heritage Hotels', 'Luxury Resorts', 'Boutique Stays'];

  const filteredHotels = useMemo(() => {
    return hotelsData.filter(hotel => {
      if (activeCategory && hotel.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = hotel.name.toLowerCase().includes(query);
        const matchLoc = hotel.location.toLowerCase().includes(query);
        if (!matchName && !matchLoc) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const renderAmenityIcon = (type) => {
    switch (type) {
      case 'wifi':
        return <Wifi size={13} />;
      case 'pool':
        return <Waves size={13} />;
      case 'ac':
        return <Snowflake size={13} />;
      case 'spa':
        return <Sparkles size={13} />;
      case 'dining':
        return <UtensilsCrossed size={13} />;
      case 'gym':
        return <Dumbbell size={13} />;
      case 'bar':
        return <Wine size={13} />;
      default:
        return <Check size={13} />;
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedHotelModal(null);
    }, 1800);
  };

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* 1. PAGE HEADER */}
      <div className="pt-12 sm:pt-16 pb-8 text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight">
          Curated Stays in India
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Discover handpicked heritage properties, luxury resorts, and boutique stays for your ultimate travel experience.
        </p>
      </div>

      {/* 2. SEARCH & FILTER CARD */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-end">
            
            {/* City or Property */}
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                City or Property
              </label>
              <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <MapPin size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                Dates
              </label>
              <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <Calendar size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Check in - Check out"
                  value={checkIn && checkOut ? `${checkIn} - ${checkOut}` : ''}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                Guests
              </label>
              <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <Users size={18} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-none"
                />
              </div>
            </div>

            {/* Search CTA */}
            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full h-[44px] bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Search size={16} strokeWidth={2.5} />
                <span>Search</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. CATEGORY PILLS */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 flex justify-center">
        <div className="inline-flex items-center space-x-3 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer border whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-900 border-slate-800 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. HOTELS 3-COLUMN CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Rating */}
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-white text-slate-900 rounded-md text-xs font-bold flex items-center space-x-1 shadow-sm">
                    <Star size={12} className="fill-slate-900 text-slate-900" />
                    <span>{hotel.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition leading-snug">
                      {hotel.name}
                    </h3>
                    
                    <div className="text-right shrink-0">
                      {hotel.originalPrice && (
                        <span className="text-xs text-slate-400 line-through block font-medium">
                          {hotel.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-bold text-[#ea580c] block">
                        {hotel.price}
                      </span>
                      <span className="text-[10px] text-slate-400 block -mt-1 font-medium">/night</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium mb-4">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{hotel.location}</span>
                  </div>

                  {/* Amenities Pills */}
                  <div className="flex items-center space-x-2 pt-1">
                    {hotel.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60 flex items-center space-x-1"
                      >
                        {renderAmenityIcon(amenity.icon)}
                        <span>{amenity.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedHotelModal(hotel);
                    setSelectedRoom(hotel.roomTypes[0]);
                  }}
                  className="w-full py-2.5 bg-white hover:bg-slate-900 hover:text-white border border-slate-800 text-slate-800 rounded-xl text-sm font-semibold transition cursor-pointer text-center"
                >
                  Book Stay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. HOTEL BOOKING MODAL */}
      {selectedHotelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-xl w-full overflow-hidden relative shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image */}
            <div className="relative h-56 w-full bg-slate-900 shrink-0">
              <img
                src={selectedHotelModal.image}
                alt={selectedHotelModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

              <button
                onClick={() => setSelectedHotelModal(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 text-amber-300 text-xs font-semibold">
                  <MapPin size={14} />
                  <span>{selectedHotelModal.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedHotelModal.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              {bookingSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Reservation Confirmed!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your stay at {selectedHotelModal.name} is booked. Voucher details will be delivered to your email and Tourist Portal.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedHotelModal.description}
                  </p>

                  <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
                    {/* Room Type Selector */}
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Select Room Category</label>
                      <select
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-slate-50"
                      >
                        {selectedHotelModal.roomTypes.map((rm, idx) => (
                          <option key={idx} value={rm}>{rm}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-800 block mb-1">Check-in</label>
                        <input
                          type="date"
                          defaultValue="2024-11-15"
                          className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-800 block mb-1">Check-out</label>
                        <input
                          type="date"
                          defaultValue="2024-11-18"
                          className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-xs">
                      <span className="text-slate-600 font-medium">Rate per night</span>
                      <span className="text-sm font-bold text-amber-700">{selectedHotelModal.price}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
                    >
                      Confirm Hotel Reservation
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
