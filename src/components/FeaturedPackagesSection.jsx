import React from 'react';
import { Star, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { packages } from '../data/destinations';

export default function FeaturedPackagesSection({ onSelectPackage }) {
  return (
    <section id="packages-section" className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-600 font-semibold text-xs tracking-wider uppercase mb-1">
              <Sparkles size={14} />
              <span>All-Inclusive Handcrafted Journeys</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight">
              Featured Tour Packages
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Verified local guides, premium stays, sanitized transport, and guaranteed seamless itineraries.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </span>

                <div className="absolute top-4 right-4 flex items-center space-x-1 px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-semibold">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span>{pkg.rating}</span>
                  <span className="text-slate-300 text-[11px]">({pkg.reviews})</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                    {pkg.places}
                  </span>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs text-slate-500 mt-2">
                    <Clock size={14} className="text-slate-400" />
                    <span className="font-medium">{pkg.duration}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      Available All Year
                    </span>
                  </div>

                  {/* Key inclusions */}
                  <div className="mt-4 space-y-1.5">
                    {pkg.inclusions.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                        <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 line-through">
                      {pkg.originalPrice}
                    </div>
                    <div className="text-xl font-black text-slate-900">
                      {pkg.price}
                      <span className="text-xs font-normal text-slate-500"> /person</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg text-xs font-bold shadow-sm transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
