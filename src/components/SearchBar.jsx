import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Users, Search, Plus, Minus, Check, Car, ChevronDown } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [pickupCity, setPickupCity] = useState('');
  const [destination, setDestination] = useState('');
  const [journeyDate, setJourneyDate] = useState('2024-11-15');
  const [returnDate, setReturnDate] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('Innova Crysta');
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  // Dropdown open states
  const [pickupDropdownOpen, setPickupDropdownOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [vehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);

  const containerRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setPickupDropdownOpen(false);
        setDestDropdownOpen(false);
        setVehicleDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popularPickupCities = [
    'New Delhi (NCR / IGI Airport)',
    'Jaipur, Rajasthan',
    'Agra, Uttar Pradesh',
    'Haridwar / Rishikesh, Uttarakhand',
    'Dehradun / Jolly Grant Airport',
    'Chandigarh / Mohali',
    'Mumbai / Navi Mumbai',
    'Kochi / Cochin Airport'
  ];

  const popularDestinations = [
    'Char Dham Yatra (Kedarnath & Badrinath)',
    'Agra (Taj Mahal & Fatehpur Sikri)',
    'Jaipur & Royal Rajasthan Circuit',
    'Haridwar & Rishikesh Ganga Yatra',
    'Shimla & Manali Himachal Tour',
    'Varanasi & Prayagraj Sangam',
    'Goa Beach & Coastal Highway',
    'Leh-Ladakh Himalayan Circuit'
  ];

  const vehicleOptions = [
    { name: 'Swift Dzire (Sedan)', rate: '₹11/km', pax: '4 Seats' },
    { name: 'Maruti Ertiga (MPV)', rate: '₹14/km', pax: '6 Seats' },
    { name: 'Innova Crysta (Luxury MPV)', rate: '₹18/km', pax: '7 Seats' },
    { name: 'Toyota Fortuner 4x4 (SUV)', rate: '₹28/km', pax: '6 Seats' },
    { name: 'Tempo Traveller (12/17 Seater)', rate: '₹32/km', pax: '12-26 Seats' },
    { name: 'All-Inclusive Tour Package', rate: 'Custom', pax: 'Guided' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        pickup: pickupCity || 'New Delhi',
        destination: destination || 'Agra & Jaipur',
        dates: journeyDate + (returnDate ? ` to ${returnDate}` : ''),
        vehicle: selectedVehicle,
        tripType: isRoundTrip ? 'Round-trip' : 'One-way'
      });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-22 z-30 font-sans">
      <div 
        ref={containerRef}
        className="bg-white rounded-2xl shadow-[0_18px_40px_-5px_rgba(0,0,0,0.18)] border border-slate-100/90 p-4 sm:p-6"
      >
        <form onSubmit={handleSearchSubmit}>
          
          {/* Trip Type Radios & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 text-xs">
            <div className="flex items-center space-x-5 font-semibold text-slate-700">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripMode"
                  checked={!isRoundTrip}
                  onChange={() => setIsRoundTrip(false)}
                  className="accent-[#ea580c] cursor-pointer"
                />
                <span className={!isRoundTrip ? 'font-bold text-slate-950' : 'text-slate-500'}>One-way Journey</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripMode"
                  checked={isRoundTrip}
                  onChange={() => setIsRoundTrip(true)}
                  className="accent-[#ea580c] cursor-pointer"
                />
                <span className={isRoundTrip ? 'font-bold text-slate-950' : 'text-slate-500'}>Round-trip / Outstation Tour</span>
              </label>
            </div>

            <div className="hidden sm:flex items-center space-x-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <span>✓ Verified Chauffeur & Sanitized Vehicles</span>
            </div>
          </div>

          {/* 4 Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3.5 items-end">
            
            {/* 1. PICKUP CITY */}
            <div className="relative md:col-span-3">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                PICKUP CITY
              </label>
              <div 
                onClick={() => {
                  setPickupDropdownOpen(!pickupDropdownOpen);
                  setDestDropdownOpen(false);
                  setVehicleDropdownOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-slate-50 transition cursor-pointer"
              >
                <MapPin className="text-amber-600 shrink-0" size={17} />
                <input
                  type="text"
                  placeholder="Select Pickup City"
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none cursor-pointer"
                />
              </div>

              {/* Pickup Dropdown */}
              {pickupDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 max-h-56 overflow-y-auto">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Major Hubs & Airports
                  </div>
                  {popularPickupCities.map((city) => (
                    <button
                      type="button"
                      key={city}
                      onClick={() => {
                        setPickupCity(city);
                        setPickupDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between transition cursor-pointer"
                    >
                      <span>{city}</span>
                      {pickupCity === city && <Check size={14} className="text-amber-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. DESTINATION */}
            <div className="relative md:col-span-3">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                DESTINATION / TOUR
              </label>
              <div 
                onClick={() => {
                  setDestDropdownOpen(!destDropdownOpen);
                  setPickupDropdownOpen(false);
                  setVehicleDropdownOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-slate-50 transition cursor-pointer"
              >
                <MapPin className="text-emerald-600 shrink-0" size={17} />
                <input
                  type="text"
                  placeholder="Select Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none cursor-pointer"
                />
              </div>

              {/* Destination Dropdown */}
              {destDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 max-h-56 overflow-y-auto">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Popular Tours & Pilgrimages
                  </div>
                  {popularDestinations.map((dest) => (
                    <button
                      type="button"
                      key={dest}
                      onClick={() => {
                        setDestination(dest);
                        setDestDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between transition cursor-pointer"
                    >
                      <span>{dest}</span>
                      {destination === dest && <Check size={14} className="text-amber-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. DATE */}
            <div className="relative md:col-span-2">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                TRAVEL DATE
              </label>
              <div className="flex items-center space-x-2 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition">
                <Calendar className="text-slate-500 shrink-0" size={17} />
                <input
                  type="date"
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* 4. SELECT VEHICLE / PACKAGE */}
            <div className="relative md:col-span-2">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                VEHICLE / PLAN
              </label>
              <div 
                onClick={() => {
                  setVehicleDropdownOpen(!vehicleDropdownOpen);
                  setPickupDropdownOpen(false);
                  setDestDropdownOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="flex items-center space-x-1.5 overflow-hidden">
                  <Car className="text-slate-500 shrink-0" size={16} />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                    {selectedVehicle.split(' ')[0]}
                  </span>
                </div>
                <ChevronDown size={14} className="text-slate-400 shrink-0" />
              </div>

              {/* Vehicle Options Dropdown */}
              {vehicleDropdownOpen && (
                <div className="absolute left-0 right-0 sm:right-auto sm:w-64 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  {vehicleOptions.map((veh) => (
                    <button
                      type="button"
                      key={veh.name}
                      onClick={() => {
                        setSelectedVehicle(veh.name);
                        setVehicleDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between transition cursor-pointer"
                    >
                      <div>
                        <span className="font-bold text-slate-900 block">{veh.name}</span>
                        <span className="text-[10px] text-slate-500">{veh.pax} • {veh.rate}</span>
                      </div>
                      {selectedVehicle === veh.name && <Check size={14} className="text-amber-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. SEARCH & GET QUOTE CTA */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-[42px] bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow transition duration-150 transform active:scale-98 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Search size={16} strokeWidth={2.5} />
                <span>Get Instant Fare</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
