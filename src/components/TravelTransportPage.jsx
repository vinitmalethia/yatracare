import React, { useState } from 'react';
import { 
  Car, Train, Plane, MapPin, Search, ShieldCheck, 
  Clock, IndianRupee, ArrowRight, CheckCircle2, ChevronDown, 
  Sparkles, Check, X, Shield, PhoneCall 
} from 'lucide-react';

export default function TravelTransportPage() {
  const [tripType, setTripType] = useState('oneway');
  const [transportType, setTransportType] = useState('Private Car');
  const [originCity, setOriginCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [transportDropdownOpen, setTransportDropdownOpen] = useState(false);
  
  // Modals state
  const [activeFleetModal, setActiveFleetModal] = useState(null);
  const [searchResultToast, setSearchResultToast] = useState(null);

  const transportOptions = [
    'Private Car',
    'Luxury Train',
    'Domestic Flight',
    'Chauffeur Coach'
  ];

  const fleetVehicles = [
    {
      name: "Toyota Innova Crysta / Hycross",
      type: "Premium Executive MPV",
      capacity: "6-7 Passengers",
      luggage: "4 Large Bags",
      price: "₹18 / km",
      features: ["Rear AC vents", "Free high-speed Wi-Fi", "Bottled Himalayan water", "English speaking chauffeur"],
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mercedes-Benz E-Class / BMW 5 Series",
      type: "Luxury Chauffeur Sedan",
      capacity: "3-4 Passengers",
      luggage: "3 Bags",
      price: "₹45 / km",
      features: ["Panoramic sunroof", "Plush leather recliners", "Mobile charging & refreshments", "Uniformed executive chauffeur"],
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Toyota Fortuner 4x4",
      type: "All-Terrain Luxury SUV",
      capacity: "6 Passengers",
      luggage: "4 Bags",
      price: "₹28 / km",
      features: ["High ground clearance", "Hill descent control", "Mountain expedition ready", "Expert hill terrain driver"],
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleSearchRoutes = (e) => {
    e.preventDefault();
    const from = originCity || 'Delhi';
    const to = destCity || 'Jaipur';
    setSearchResultToast(`Finding verified ${transportType} routes from ${from} to ${to} (${tripType === 'oneway' ? 'One-way' : 'Round-trip'})...`);
    setTimeout(() => {
      setSearchResultToast(null);
      setActiveFleetModal(true);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      
      {/* Toast Notification */}
      {searchResultToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl text-sm font-medium flex items-center space-x-2 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{searchResultToast}</span>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[460px] sm:h-[520px] bg-slate-900 overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6">
        {/* Mountain Train scenic background image */}
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2400&q=90"
          alt="Scenic Indian Mountain Train"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
        />
        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-4 pb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Reliable Travel Across India
          </h1>
          <p className="text-sm sm:text-base text-slate-100 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm opacity-95">
            Experience seamless journeys with our premium transportation services. From luxury trains to private transfers, we ensure your travel is comfortable, safe, and memorable.
          </p>
        </div>
      </div>

      {/* 2. FLOATING SEARCH ROUTES CARD */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-22 z-30">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-7">
          <form onSubmit={handleSearchRoutes}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              
              {/* Transport Type Dropdown */}
              <div className="relative md:col-span-3">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                  Transport Type
                </label>
                <div 
                  onClick={() => setTransportDropdownOpen(!transportDropdownOpen)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-2 text-sm font-medium text-slate-800">
                    <Car size={18} className="text-slate-500 shrink-0" />
                    <span>{transportType}</span>
                  </div>
                  <ChevronDown size={16} className={`text-slate-400 transform transition ${transportDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {transportDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-50">
                    {transportOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setTransportType(opt);
                          setTransportDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between cursor-pointer ${
                          transportType === opt ? 'font-bold text-amber-700 bg-amber-50/50' : 'text-slate-700'
                        }`}
                      >
                        <span>{opt}</span>
                        {transportType === opt && <Check size={14} className="text-amber-600" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* From Input */}
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                  From
                </label>
                <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                  <MapPin size={18} className="text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Origin City"
                    value={originCity}
                    onChange={(e) => setOriginCity(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* To Input */}
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 pl-0.5">
                  To
                </label>
                <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                  <MapPin size={18} className="text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Destination City"
                    value={destCity}
                    onChange={(e) => setDestCity(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full h-[44px] bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Search size={16} strokeWidth={2.5} />
                  <span>Search Routes</span>
                </button>
              </div>

            </div>

            {/* One-way / Round-trip radio buttons */}
            <div className="flex items-center space-x-6 mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-slate-700">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="oneway"
                  checked={tripType === 'oneway'}
                  onChange={() => setTripType('oneway')}
                  className="text-amber-600 focus:ring-amber-500 accent-slate-950"
                />
                <span className="font-semibold text-slate-900">One-way</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="roundtrip"
                  checked={tripType === 'roundtrip'}
                  onChange={() => setTripType('roundtrip')}
                  className="text-amber-600 focus:ring-amber-500 accent-slate-950"
                />
                <span>Round-trip</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* 3. EXPLORE TRAVEL OPTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-8">
          Explore Travel Options
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Big Card (8 cols): Private Intercity Cars */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden relative shadow-md bg-slate-900 min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 text-white group">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85"
              alt="Luxury SUV along scenic coastline"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Car size={16} />
                <span>PREMIUM SERVICE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Private Intercity Cars
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                Chauffeur-driven luxury vehicles for seamless point-to-point travel between major Indian cities. Enjoy verified drivers and supreme comfort.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveFleetModal(true)}
                  className="px-6 py-2.5 bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold rounded-lg shadow-md transition cursor-pointer"
                >
                  View Fleet
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Luxury Trains & Domestic Flights */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top: Luxury Trains */}
            <div 
              onClick={() => alert('Viewing Luxury Trains: Maharajas’ Express, Palace on Wheels, and Deccan Odyssey suites & itineraries.')}
              className="flex-1 rounded-2xl overflow-hidden relative shadow-md bg-slate-900 min-h-[190px] p-6 flex flex-col justify-end text-white group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Train Dining Suite"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-0.5 group-hover:text-amber-300 transition">
                  Luxury Trains
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Experience royal journeys.
                </p>
              </div>
            </div>

            {/* Bottom: Domestic Flights */}
            <div 
              onClick={() => alert('Viewing Domestic Flight connections across Delhi, Mumbai, Bengaluru, Goa, Jaipur, Srinagar, and Kochi.')}
              className="flex-1 rounded-2xl overflow-hidden relative shadow-md bg-slate-900 min-h-[190px] p-6 flex flex-col justify-end text-white group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                alt="Domestic Flights Lounge"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-0.5 group-hover:text-amber-300 transition">
                  Domestic Flights
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Quick connections nationwide.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE YATRACARE STANDARD SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The YatraCare Standard
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            We prioritize your safety, comfort, and peace of mind on every journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            
            {/* Verified Drivers */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Verified Drivers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All our chauffeurs and operators undergo strict background checks and extensive hospitality training.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Clock size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                24/7 Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our dedicated concierge team is available around the clock to assist with any travel emergencies or changes.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <IndianRupee size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Transparent Pricing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No hidden fees or unexpected surcharges. What you see during booking is exactly what you pay.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VIEW FLEET MODAL */}
      {activeFleetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl border border-slate-100 max-h-[88vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  YatraCare Premium Executive Fleet
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sanitized, GPS-tracked vehicles with professional chauffeurs
                </p>
              </div>
              <button
                onClick={() => setActiveFleetModal(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Vehicle List */}
            <div className="p-6 overflow-y-auto space-y-5">
              {fleetVehicles.map((veh, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 transition flex flex-col sm:flex-row items-center gap-5">
                  <img src={veh.image} alt={veh.name} className="w-full sm:w-44 h-28 rounded-lg object-cover" />
                  <div className="flex-1 space-y-1 text-left w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-base">{veh.name}</h4>
                      <span className="text-amber-700 font-extrabold text-sm">{veh.price}</span>
                    </div>
                    <p className="text-xs text-slate-500">{veh.type} • {veh.capacity} • {veh.luggage}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {veh.features.map((feat, fIdx) => (
                        <span key={fIdx} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px]">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Vehicle booking initiated for ${veh.name}! Our transport coordinator will contact you.`);
                      setActiveFleetModal(false);
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold rounded-lg shadow-xs hover:shadow transition shrink-0 cursor-pointer"
                  >
                    Reserve Car
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
