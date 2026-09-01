import React from 'react';
import { ShieldCheck, UserCheck, Headset, Award, Star, Quote } from 'lucide-react';
import { customerReviews } from '../data/destinations';

export default function WhyChooseUs({ onOpenSupport }) {
  const trustFeatures = [
    {
      icon: <UserCheck className="text-amber-600" size={26} />,
      title: "100% Verified Local Guides",
      desc: "Licensed, police-verified, and multilingual guides who know every hidden gem and historical folklore."
    },
    {
      icon: <ShieldCheck className="text-amber-600" size={26} />,
      title: "Safe & Sanitized Transport",
      desc: "Chauffeur-driven GPS tracked luxury vehicles with background-checked drivers and transparent pricing."
    },
    {
      icon: <Headset className="text-amber-600" size={26} />,
      title: "24/7 Dedicated Tourist Support",
      desc: "Direct round-the-clock emergency support, language translation, and live itinerary modifications."
    },
    {
      icon: <Award className="text-amber-600" size={26} />,
      title: "Transparent & Best Rate Guarantee",
      desc: "No hidden charges, zero surge pricing on peak yatra dates, and complete flexibility with free cancellations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Millions Trust YatraCare
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            India's most trusted travel network designed to make your pilgrimage and vacation worry-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 text-left hover:border-amber-200 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-100/70 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Traveller Stories</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Loved by Explorers Worldwide</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((rev) => (
              <div key={rev.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-slate-200/60">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.location} • <span className="text-amber-700 font-medium">{rev.destination}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
