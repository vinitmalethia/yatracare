import React from 'react';

export default function Hero({ onExploreClick, onPackagesClick }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2600&q=90"
          alt="Taj Mahal reflection at golden hour"
          className="w-full h-full object-cover object-center transform scale-105 duration-1000 ease-out"
        />

        {/* Ambient Dark & Vignette Overlays for visual contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/60 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-16 sm:pb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl drop-shadow-md">
            Discover India. Plan Everything in One Place.
          </h1>

          <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-slate-100 font-normal max-w-2xl leading-relaxed drop-shadow-sm opacity-95">
            Seamlessly book complete tour packages, handpicked hotels, reliable transport, and verified local guides for your unforgettable Indian journey.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] rounded-md shadow-lg shadow-orange-950/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore India
            </button>

            <button
              onClick={onPackagesClick}
              className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View Tour Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
