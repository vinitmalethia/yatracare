import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Users, Search, Plus, Minus, Check } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Dropdown open states
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);

  const containerRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDestDropdownOpen(false);
        setDateDropdownOpen(false);
        setGuestsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popularDestinations = [
    'Agra, Uttar Pradesh',
    'Jaipur, Rajasthan',
    'Alleppey, Kerala',
    'Goa Beach Coast',
    'Varanasi, Uttar Pradesh',
    'Leh Ladakh, Himalayas',
    'Udaipur, Rajasthan',
    'Rishikesh, Uttarakhand'
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        destination: destination || 'All India',
        dates: checkInDate && checkOutDate ? `${checkInDate} to ${checkOutDate}` : 'Flexible dates',
        travellers: `${adults} Adults, ${children} Children`
      });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-22 z-30">
      <div 
        ref={containerRef}
        className="bg-white rounded-xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] border border-slate-100/80 p-3 sm:p-5 lg:p-6"
      >
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-end">
            
            {/* DESTINATION FIELD */}
            <div className="relative md:col-span-4">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                DESTINATION
              </label>
              <div 
                onClick={() => {
                  setDestDropdownOpen(!destDropdownOpen);
                  setDateDropdownOpen(false);
                  setGuestsDropdownOpen(false);
                }}
                className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer"
              >
                <MapPin className="text-slate-500 shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-500 focus:outline-none cursor-pointer"
                />
              </div>

              {/* Destination Dropdown */}
              {destDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 max-h-60 overflow-y-auto">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Popular Destinations
                  </div>
                  {popularDestinations.map((place) => (
                    <button
                      type="button"
                      key={place}
                      onClick={() => {
                        setDestination(place);
                        setDestDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 flex items-center justify-between transition"
                    >
                      <span className="flex items-center space-x-2">
                        <MapPin size={14} className="text-amber-600" />
                        <span>{place}</span>
                      </span>
                      {destination === place && <Check size={16} className="text-amber-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DATES FIELD */}
            <div className="relative md:col-span-3">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                DATES
              </label>
              <div 
                onClick={() => {
                  setDateDropdownOpen(!dateDropdownOpen);
                  setDestDropdownOpen(false);
                  setGuestsDropdownOpen(false);
                }}
                className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer"
              >
                <Calendar className="text-slate-500 shrink-0" size={18} />
                <span className="text-sm font-medium text-slate-800 truncate">
                  {checkInDate && checkOutDate 
                    ? `${checkInDate} - ${checkOutDate}` 
                    : <span className="text-slate-500">Check-in - Check-out</span>}
                </span>
              </div>

              {/* Date Picker Popover */}
              {dateDropdownOpen && (
                <div className="absolute left-0 right-0 sm:right-auto sm:w-72 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">Check-in Date</label>
                      <input 
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-md p-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">Check-out Date</label>
                      <input 
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-md p-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setDateDropdownOpen(false)}
                      className="w-full py-1.5 bg-amber-600 text-white text-xs font-semibold rounded hover:bg-amber-700 transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* TRAVELLERS FIELD */}
            <div className="relative md:col-span-3">
              <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5 pl-0.5">
                TRAVELLERS
              </label>
              <div 
                onClick={() => {
                  setGuestsDropdownOpen(!guestsDropdownOpen);
                  setDestDropdownOpen(false);
                  setDateDropdownOpen(false);
                }}
                className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer"
              >
                <Users className="text-slate-500 shrink-0" size={18} />
                <span className="text-sm font-medium text-slate-800 truncate">
                  {adults} Adults, {children} Children
                </span>
              </div>

              {/* Travellers Counter Popover */}
              {guestsDropdownOpen && (
                <div className="absolute right-0 w-64 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Adults</div>
                        <div className="text-xs text-slate-400">Ages 13 and above</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-slate-600 disabled:opacity-40"
                          disabled={adults <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-slate-800">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-slate-600"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Children</div>
                        <div className="text-xs text-slate-400">Ages 0 to 12</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-slate-600 disabled:opacity-40"
                          disabled={children <= 0}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-slate-800">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-slate-600"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setGuestsDropdownOpen(false)}
                      className="w-full mt-2 py-1.5 bg-amber-600 text-white text-xs font-semibold rounded hover:bg-amber-700 transition"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SEARCH BUTTON */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition duration-150 transform active:scale-98 cursor-pointer h-[42px]"
              >
                <Search size={17} strokeWidth={2.5} />
                <span>Search</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
