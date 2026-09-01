import React from 'react';
import { 
  ShieldCheck, Award, Clock, Star, CheckCircle, 
  MapPin, Phone, Mail, FileText, Check 
} from 'lucide-react';

export default function TrustAccreditations() {
  const reviews = [
    {
      name: "Rajesh & Sunita Mehra",
      from: "Mumbai, Maharashtra",
      tour: "Char Dham Yatra by Innova",
      rating: 5,
      date: "August 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      review: "Flawless experience! Our driver Vikram was extremely courteous and drove exceptionally well on the difficult mountain roads of Kedarnath and Badrinath. The vehicle was brand new and clean."
    },
    {
      name: "Marcus & Clara Weber",
      from: "Munich, Germany",
      tour: "Golden Triangle Tour (10 Days)",
      rating: 5,
      date: "September 2024",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      review: "YatraCare made our first trip to India unforgettable. The transparency in pricing with zero surprises, verified local guides in Agra and Jaipur, and 24/7 concierge support gave us complete peace of mind."
    },
    {
      name: "Dr. Ananya Sen",
      from: "Kolkata, West Bengal",
      tour: "Kerala Backwaters & Munnar",
      rating: 5,
      date: "July 2024",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      review: "Booking the Ertiga for our 6-day family trip was smooth. AC was super effective, luggage fit easily, and the driver took care of all toll receipts. Highly recommended for family travel!"
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-20 border-t border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. ACCREDITATIONS & TRUST BADGES */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why 50,000+ Travellers Trust YatraCare
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Government accredited, fully insured, and backed by transparent policies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Govt. Registered</h3>
              <p className="text-[11px] text-slate-500">Ministry of Tourism Approved Operator (Reg. #YT-DEL-2024)</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Verified Chauffeurs</h3>
              <p className="text-[11px] text-slate-500">100% Police Verified & Defensive Driving Certified</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">24/7 Roadside Assist</h3>
              <p className="text-[11px] text-slate-500">GPS Live Vehicle Monitoring & Instant Vehicle Replacement</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <Star size={24} className="fill-purple-600 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">4.9 / 5 Rating</h3>
              <p className="text-[11px] text-slate-500">Over 3,400+ Verified Google & Justdial Reviews</p>
            </div>
          </div>
        </div>

        {/* 2. TRANSPARENT PRICING COMMITMENT */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="px-3 py-1 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold rounded-full uppercase tracking-wider">
                Zero Hidden Charges Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Clear & Transparent Billing Structure
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                We believe in total transparency. Every rupee you spend is accounted for upfront before you start your journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>State permits explained upfront</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>Fastag computerized toll receipts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>Fixed driver night allowance (₹400/night)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>Free cancellation up to 6 hours before</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-4">
              <h4 className="font-bold text-sm text-amber-300 uppercase tracking-wider">
                Direct Contact & Corporate Office
              </h4>
              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start space-x-3">
                  <Phone size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">+91 98765 43210 / +91 11 4567 8900</span>
                    <span className="text-[11px] text-slate-400">24/7 Toll-Free Tourist Helpline</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">support@yatracare.in</span>
                    <span className="text-[11px] text-slate-400">Official bookings & enterprise desk</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">YatraCare Towers, Barakhamba Road, Connaught Place</span>
                    <span className="text-[11px] text-slate-400">New Delhi, 110001, India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. VERIFIED CUSTOMER TESTIMONIALS */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Real Traveler Reviews
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Google & Justdial verified ratings from actual journeys
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">Google Rating:</span>
              <div className="flex items-center space-x-1 text-amber-500 font-black text-sm">
                <span>4.9</span>
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:bg-white hover:shadow-md transition duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{rev.review}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-3 border-t border-slate-200/60">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.tour}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
