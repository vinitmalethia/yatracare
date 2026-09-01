import React, { useState } from 'react';
import { 
  Car, Users, Briefcase, Snowflake, UserCheck, ShieldCheck, 
  Fuel, CheckCircle2, ArrowRight, Star, X, Calculator, IndianRupee 
} from 'lucide-react';

export const fleetList = [
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire / Hyundai Aura",
    category: "Prime Sedan",
    badge: "Budget Friendly",
    tagline: "Ideal for couples & small family city and outstation journeys.",
    perKm: "₹11 / km",
    perKmNum: 11,
    dailyRate: "₹2,500 / day (250 km included)",
    seating: "4 Passengers",
    luggage: "2 Large Bags + 1 Cabin",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Dual Zone AC", "Uniformed Verified Chauffeur", "Luggage Carrier", "GPS Tracking & Sanitized"],
    rating: 4.88,
    trips: "12,400+ trips"
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Ertiga / XL6 (CNG/Petrol)",
    category: "Family MPV",
    badge: "Most Popular",
    tagline: "Spacious multi-utility vehicle for comfortable family travel.",
    perKm: "₹14 / km",
    perKmNum: 14,
    dailyRate: "₹3,200 / day (250 km included)",
    seating: "6 Passengers",
    luggage: "3 Large Bags + 2 Cabin",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Roof AC Vents in all rows", "Reclining middle row", "Ample boot space", "Experienced Highway Driver"],
    rating: 4.92,
    trips: "18,900+ trips"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta / Hycross",
    category: "Executive Luxury MPV",
    badge: "Highest Comfort",
    tagline: "India's gold standard for long distance highways and hill roads.",
    perKm: "₹18 / km",
    perKmNum: 18,
    dailyRate: "₹4,200 / day (250 km included)",
    seating: "6 - 7 Passengers",
    luggage: "4 Large Bags + 3 Cabin",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Captain Leather Seats", "Supreme Suspension Comfort", "Dual AC with Air Purifier", "English & Hindi Chauffeur"],
    rating: 4.97,
    trips: "24,500+ trips"
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner 4x4 / Legender",
    category: "Premium All-Terrain SUV",
    badge: "Himalayan Specialist",
    tagline: "Commanding road presence & high clearance for rugged hill terrain.",
    perKm: "₹28 / km",
    perKmNum: 28,
    dailyRate: "₹6,500 / day (250 km included)",
    seating: "6 Passengers",
    luggage: "4 Large Bags",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    inclusions: ["4WD Hill Descent Assist", "Sunroof & JBL Audio", "Char Dham & Ladakh Ready", "Mountain Terrain Chauffeur"],
    rating: 4.95,
    trips: "8,200+ trips"
  },
  {
    id: "tempo-traveller",
    name: "Force Urbania & Tempo Traveller",
    category: "Group Luxury Coach",
    badge: "Group Journeys",
    tagline: "Luxury pushback recliners for pilgrimage and extended group tours.",
    perKm: "₹32 / km",
    perKmNum: 32,
    dailyRate: "₹7,500 / day (300 km included)",
    seating: "12 / 17 / 26 Seater",
    luggage: "12+ Large Bags",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Individual AC Vents", "Pushback 2x1 Recliners", "LCD Screen & Sound System", "Spacious Luggage Boot"],
    rating: 4.91,
    trips: "6,800+ trips"
  }
];

export default function VehicleFleetSection({ onBookVehicle }) {
  const [selectedVehicleModal, setSelectedVehicleModal] = useState(null);
  const [estKm, setEstKm] = useState(350);
  const [estDays, setEstDays] = useState(2);
  const [bookingDone, setBookingDone] = useState(false);

  const calculateTotal = (ratePerKm) => {
    const kmTotal = estKm * ratePerKm;
    const driverAllowance = estDays * 400;
    return kmTotal + driverAllowance;
  };

  const handleConfirmQuote = (e) => {
    e.preventDefault();
    setBookingDone(true);
    setTimeout(() => {
      setBookingDone(false);
      setSelectedVehicleModal(null);
      alert(`Quote request sent for ${selectedVehicleModal.name}! A YatraCare transport coordinator will share chauffeur details via WhatsApp/SMS.`);
    }, 1200);
  };

  return (
    <section id="fleet-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-100/70 px-3 py-1 rounded-full mb-2">
              <Car size={14} />
              <span>YatraCare Verified Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transparent Vehicle Fleet & Rates
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Choose from immaculate sedans, spacious MPVs, and luxury SUVs with verified chauffeurs and zero hidden charges.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <span>All vehicles GPS-enabled & AC guaranteed</span>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetList.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-[#0F172A] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                    {vehicle.badge}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 px-2.5 py-1 bg-white/95 text-slate-900 rounded-md text-xs font-bold shadow-sm">
                    <Star size={13} className="fill-amber-500 text-amber-500" />
                    <span>{vehicle.rating}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  {/* Name & Rate */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition leading-snug">
                      {vehicle.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-2xl font-black text-[#ea580c]">
                      {vehicle.perKm}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      or {vehicle.dailyRate.split(' ')[0]} / day
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {vehicle.tagline}
                  </p>

                  {/* Specs Pill Strip */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users size={15} className="text-slate-400 shrink-0" />
                      <span className="font-semibold">{vehicle.seating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase size={15} className="text-slate-400 shrink-0" />
                      <span className="font-semibold">{vehicle.luggage.split('+')[0]}</span>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-1.5 pt-1">
                    {vehicle.inclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setSelectedVehicleModal(vehicle)}
                  className="w-full py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                >
                  <Calculator size={15} />
                  <span>Instant Rate Estimate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* INSTANT RATE ESTIMATE MODAL */}
      {selectedVehicleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden relative shadow-2xl border border-slate-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{selectedVehicleModal.name}</h3>
                <p className="text-xs text-slate-500">Transparent Fare Calculation (Zero Hidden Fees)</p>
              </div>
              <button
                onClick={() => setSelectedVehicleModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {bookingDone ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Booking Request Submitted!</h4>
                  <p className="text-xs text-slate-500">Our logistics team will confirm driver assignment via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleConfirmQuote} className="space-y-4">
                  {/* Distance Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                      <span>Estimated Distance</span>
                      <span className="text-amber-700 font-extrabold text-sm">{estKm} km</span>
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={1200}
                      step={50}
                      value={estKm}
                      onChange={(e) => setEstKm(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>

                  {/* Trip Duration */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                      <span>Duration (Days)</span>
                      <span className="text-amber-700 font-extrabold text-sm">{estDays} Days</span>
                    </div>
                    <select
                      value={estDays}
                      onChange={(e) => setEstDays(Number(e.target.value))}
                      className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-slate-50"
                    >
                      <option value={1}>1 Day (Same Day Return)</option>
                      <option value={2}>2 Days / 1 Night</option>
                      <option value={3}>3 Days / 2 Nights</option>
                      <option value={5}>5 Days / 4 Nights</option>
                      <option value={7}>7 Days (Extended Tour)</option>
                      <option value={10}>10 Days (Char Dham / Rajasthan)</option>
                    </select>
                  </div>

                  {/* Fare Breakdown */}
                  <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/60 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Base Running ({estKm} km @ {selectedVehicleModal.perKm})</span>
                      <span className="font-bold">₹{(estKm * selectedVehicleModal.perKmNum).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Driver Allowance ({estDays} days @ ₹400/day)</span>
                      <span className="font-bold">₹{(estDays * 400).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>State Toll & Taxes</span>
                      <span className="text-emerald-700 font-bold">At Actuals (Receipt Given)</span>
                    </div>
                    <div className="pt-2 border-t border-amber-200 flex justify-between items-baseline">
                      <span className="font-extrabold text-slate-900 text-sm">Estimated Total</span>
                      <span className="text-xl font-black text-[#ea580c]">
                        ₹{calculateTotal(selectedVehicleModal.perKmNum).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
                  >
                    Confirm Booking for {selectedVehicleModal.name}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
