import React, { useState } from 'react';
import { X, MapPin, Star, Calendar, CheckCircle2, Shield, Heart } from 'lucide-react';

export default function DestinationDetailModal({ destination, isOpen, onClose, onBookNow }) {
  const [liked, setLiked] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!isOpen || !destination) return null;

  const handleBook = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Close & Favorite buttons */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-xs transition"
          >
            <X size={20} />
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-4 left-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-xs transition"
          >
            <Heart size={20} className={liked ? 'fill-red-500 text-red-500' : 'text-white'} />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <MapPin size={14} />
              <span>{destination.state}, India</span>
              <span className="px-2 py-0.5 bg-amber-500/30 backdrop-blur-xs border border-amber-400/40 rounded text-amber-200 text-[11px]">
                {destination.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold mt-1 text-white tracking-tight">
              {destination.name}
            </h2>
            <p className="text-sm text-slate-200 font-medium">{destination.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {bookingSuccess ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Trip Inquiry Confirmed!</h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                A dedicated YatraCare travel concierge will contact you shortly with customized options for {destination.name}.
              </p>
            </div>
          ) : (
            <>
              {/* Quick stats */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="text-amber-500 fill-amber-500" size={18} />
                  <span className="font-bold text-slate-800">{destination.rating}</span>
                  <span className="text-slate-500">({destination.reviews?.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-700">
                  <Calendar size={16} className="text-slate-500" />
                  <span className="font-medium">{destination.duration}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Starting at</span>
                  <span className="text-lg font-bold text-amber-700">{destination.price}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Highlights & Inclusions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center space-x-3 p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs text-amber-900">
                <Shield size={20} className="text-amber-700 shrink-0" />
                <span>YatraCare Verified: 24/7 on-ground assistance, licensed multilingual guide, and verified sanitized transport.</span>
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleBook}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg text-sm font-semibold shadow-md transition"
                >
                  Book Package
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
