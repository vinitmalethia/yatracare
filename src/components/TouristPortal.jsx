import React, { useState } from 'react';
import { 
  LayoutDashboard, Heart, Calendar, User, HelpCircle, 
  Headphones, Plus, Plane, Bed, Car, FileCheck, Check, Clock, 
  Utensils, Ticket, Shield, FileText, Download, MoreHorizontal, 
  ArrowLeft, LogOut, ChevronRight, MessageSquare, Phone, Mail, 
  MapPin, Star, AlertCircle, Send
} from 'lucide-react';

export default function TouristPortal({ onBackToHome, onOpenSupport }) {
  const [activeSidebar, setActiveSidebar] = useState('dashboard');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportMessagesList, setSupportMessagesList] = useState([
    { sender: 'bot', text: 'Namaste Emily! How can the YatraCare Concierge team assist your upcoming Golden Triangle journey today?' }
  ]);

  const documents = [
    { name: 'E-Ticket_DEL.pdf', size: '1.2 MB', type: 'pdf' },
    { name: 'Visa_Approval.pdf', size: '0.8 MB', type: 'pdf' },
    { name: 'Hotel_Vouchers.zip', size: '3.4 MB', type: 'zip' },
  ];

  const handleDownload = (docName) => {
    alert(`Downloading ${docName}...`);
  };

  const handleSendSupport = (e) => {
    e.preventDefault();
    if (!supportMessage.trim()) return;
    const userMsg = supportMessage;
    setSupportMessagesList(prev => [...prev, { sender: 'user', text: userMsg }]);
    setSupportMessage('');
    setTimeout(() => {
      setSupportMessagesList(prev => [
        ...prev, 
        { sender: 'bot', text: 'Thank you Emily. A dedicated 24/7 YatraCare tourist specialist is reviewing your request and will assist you immediately.' }
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
            <button 
              onClick={onBackToHome}
              className="hover:opacity-90 transition text-left cursor-pointer"
            >
              <img 
                src="/images/logo.png" 
                alt="YatraCare Tourist Portal" 
                className="h-9 sm:h-10 w-auto object-contain max-w-[170px]"
              />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1.5">
            <button
              onClick={() => setActiveSidebar('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeSidebar === 'dashboard'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveSidebar('saved')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeSidebar === 'saved'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Heart size={18} />
              <span>Saved Trips</span>
            </button>

            <button
              onClick={() => setActiveSidebar('bookings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeSidebar === 'bookings'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Calendar size={18} />
              <span>Bookings</span>
            </button>

            <button
              onClick={() => setActiveSidebar('profile')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeSidebar === 'profile'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <User size={18} />
              <span>Profile</span>
            </button>

            <button
              onClick={() => setActiveSidebar('support')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeSidebar === 'support'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <HelpCircle size={18} />
              <span>Support</span>
            </button>
          </nav>
        </div>

        {/* Bottom Profile & Return Link */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <button
            onClick={onBackToHome}
            className="w-full flex items-center justify-center space-x-2 py-2 px-3 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Return to Main Website</span>
          </button>

          <div className="flex items-center space-x-3 pt-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Emily Chen"
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm font-bold text-slate-900 truncate">Emily Chen</h4>
              <p className="text-xs text-slate-400 truncate">Standard Traveler</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN VIEW SWITCHER */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl">
        
        {/* VIEW 1: DASHBOARD (EXACT MATCH TO REFERENCE) */}
        {activeSidebar === 'dashboard' && (
          <div>
            {/* Top Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight">
                  Welcome back, Emily!
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Your Indian adventure is coming up soon. Here's your overview.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setActiveSidebar('support')}
                  className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs flex items-center space-x-2 transition cursor-pointer"
                >
                  <Headphones size={16} />
                  <span>Contact Support</span>
                </button>

                <button
                  onClick={() => alert('Opening additional travel services catalog (Chauffeur, Spa, Guided Excursions)...')}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:from-[#b45309] hover:to-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <Plus size={16} />
                  <span>Book Service</span>
                </button>
              </div>
            </div>

            {/* TOP ROW: HERO TRIP CARD & ESSENTIAL ACTIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
              
              {/* Upcoming Trip Hero Card (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
                {/* Image Banner */}
                <div className="relative h-60 sm:h-72 w-full bg-slate-900 p-6 flex flex-col justify-between text-white">
                  <img
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85"
                    alt="The Golden Triangle"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"></div>

                  {/* Top Pill */}
                  <div className="relative z-10">
                    <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white rounded-md">
                      UPCOMING
                    </span>
                  </div>

                  {/* Title & Countdown */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        The Golden Triangle — 10 Days
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">
                        Delhi • Agra • Jaipur
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                        DEPARTS IN
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-[#ea580c]">
                        14 Days
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Strip */}
                <div className="p-4 sm:p-5 bg-white grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Plane size={15} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">FLIGHTS</span>
                      <span className="font-bold text-emerald-600 flex items-center space-x-1">
                        <span>Confirmed</span>
                        <Check size={12} strokeWidth={3} />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Bed size={15} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">HOTELS</span>
                      <span className="font-bold text-emerald-600 flex items-center space-x-1">
                        <span>Confirmed</span>
                        <Check size={12} strokeWidth={3} />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Car size={15} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">TRANSPORT</span>
                      <span className="font-bold text-amber-600 flex items-center space-x-1">
                        <span>Pending</span>
                        <Clock size={12} strokeWidth={3} />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <FileCheck size={15} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">E-VISA</span>
                      <span className="font-bold text-emerald-600 flex items-center space-x-1">
                        <span>Approved</span>
                        <Check size={12} strokeWidth={3} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Essential Actions Card (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Essential Actions
                </h3>

                <div className="grid grid-cols-2 gap-3.5 flex-1">
                  <button
                    onClick={() => alert('Book Airport / City Transfer service')}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 flex flex-col items-center justify-center text-center space-y-2 transition cursor-pointer group"
                  >
                    <Car size={22} className="text-slate-700 group-hover:text-amber-600 transition" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">Book<br/>Transfer</span>
                  </button>

                  <button
                    onClick={() => alert('Reserve fine dining at heritage restaurants')}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 flex flex-col items-center justify-center text-center space-y-2 transition cursor-pointer group"
                  >
                    <Utensils size={22} className="text-slate-700 group-hover:text-amber-600 transition" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">Reserve<br/>Dining</span>
                  </button>

                  <button
                    onClick={() => alert('Add cooking classes, hot air ballooning, or sound & light shows')}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 flex flex-col items-center justify-center text-center space-y-2 transition cursor-pointer group"
                  >
                    <Ticket size={22} className="text-slate-700 group-hover:text-amber-600 transition" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">Add<br/>Activity</span>
                  </button>

                  <button
                    onClick={() => alert('Comprehensive travel and health insurance')}
                    className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 flex flex-col items-center justify-center text-center space-y-2 transition cursor-pointer group"
                  >
                    <Shield size={22} className="text-slate-700 group-hover:text-amber-600 transition" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">Travel<br/>Insurance</span>
                  </button>
                </div>
              </div>

            </div>

            {/* BOTTOM ROW: ITINERARY OVERVIEW & TRAVEL DOCUMENTS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Itinerary Overview (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    Itinerary Overview
                  </h3>
                  <button
                    onClick={() => alert('Viewing complete 10-day day-by-day vouchers and guide contacts...')}
                    className="text-xs font-bold text-amber-700 hover:text-amber-900 transition cursor-pointer"
                  >
                    View Full Details
                  </button>
                </div>

                {/* Timeline List */}
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  
                  {/* Day 1-3 */}
                  <div className="relative pl-7">
                    <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-amber-500 shadow-xs"></span>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                      DAY 1-3 • OCT 12 - 14
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">
                      Arrival in New Delhi
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Airport pickup, check-in at The Leela Palace. City tour including India Gate and Qutub Minar.
                    </p>
                  </div>

                  {/* Day 4-5 */}
                  <div className="relative pl-7">
                    <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-slate-900 shadow-xs"></span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      DAY 4-5 • OCT 15 - 16
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">
                      The Taj Mahal & Agra Fort
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Early morning drive to Agra. Sunrise visit to the Taj Mahal. Accommodation at Oberoi Amarvilas.
                    </p>
                  </div>

                  {/* Day 6-9 */}
                  <div className="relative pl-7">
                    <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-slate-900 shadow-xs"></span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      DAY 6-9 • OCT 17 - 20
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">
                      The Pink City of Jaipur
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Explore Amber Fort, Hawa Mahal, and local bazaars. Cultural dinner experience.
                    </p>
                  </div>

                </div>
              </div>

              {/* Travel Documents (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <h3 className="text-base font-bold text-slate-900">
                      Travel Documents
                    </h3>
                    <button 
                      onClick={() => alert('Managing travel documents')}
                      className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition cursor-pointer"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  {/* Document List */}
                  <div className="space-y-3">
                    {documents.map((doc, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 flex items-center justify-between transition"
                      >
                        <div className="flex items-center space-x-3 overflow-hidden">
                          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                            <FileText size={18} />
                          </div>
                          <div className="truncate">
                            <h4 className="text-xs font-bold text-slate-900 truncate">
                              {doc.name}
                            </h4>
                            <span className="text-[11px] text-slate-400 font-medium">
                              {doc.size}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDownload(doc.name)}
                          className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition cursor-pointer shrink-0"
                          title="Download document"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6 text-center">
                  <span className="text-[11px] text-slate-400">
                    All documents are encrypted & verified by YatraCare
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: SAVED TRIPS */}
        {activeSidebar === 'saved' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Saved Wishlist Trips</h2>
              <p className="text-xs sm:text-sm text-slate-500">Your bookmarked destinations and upcoming travel ideas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                <img src="/images/dwarka-ghats.jpg" alt="Varanasi" className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">Varanasi Spiritual Yatra</h3>
                  <p className="text-xs text-slate-500 mt-1">3 Days • Sacred Aarti & Boat Tour</p>
                  <button 
                    onClick={() => alert('Booking saved Varanasi trip')}
                    className="mt-3 w-full py-2 bg-[#0F172A] text-white text-xs font-semibold rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80" alt="Kerala" className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">Kerala Backwaters & Tea Trails</h3>
                  <p className="text-xs text-slate-500 mt-1">6 Days • Houseboat & Munnar Stay</p>
                  <button 
                    onClick={() => alert('Booking saved Kerala trip')}
                    className="mt-3 w-full py-2 bg-[#0F172A] text-white text-xs font-semibold rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                <img src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80" alt="Ladakh" className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">Ladakh Monasteries & Pangong</h3>
                  <p className="text-xs text-slate-500 mt-1">7 Days • High-Altitude Adventure</p>
                  <button 
                    onClick={() => alert('Booking saved Ladakh trip')}
                    className="mt-3 w-full py-2 bg-[#0F172A] text-white text-xs font-semibold rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: BOOKINGS */}
        {activeSidebar === 'bookings' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">My Bookings & Vouchers</h2>
              <p className="text-xs sm:text-sm text-slate-500">Active, upcoming, and past travel itineraries</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[11px] font-bold">CONFIRMED</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">The Golden Triangle — 10 Days</h3>
                  <p className="text-xs text-slate-500">Oct 12, 2024 - Oct 22, 2024 • 2 Adults • Booking Ref: #YC-88291</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleDownload('Golden_Triangle_Voucher.pdf')}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-50"
                  >
                    Download Voucher
                  </button>
                  <button 
                    onClick={() => setActiveSidebar('dashboard')}
                    className="px-4 py-2 bg-[#0F172A] text-white rounded-lg text-xs font-semibold"
                  >
                    Manage Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: PROFILE */}
        {activeSidebar === 'profile' && (
          <div className="space-y-6 max-w-2xl bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center space-x-4 pb-6 border-b border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Emily Chen"
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Emily Chen</h3>
                <p className="text-xs text-slate-500">Member since 2023 • Tier: Premium Explorer</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold mb-1">Email</span>
                <span className="font-bold text-slate-800">emily.chen@example.com</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-1">Phone</span>
                <span className="font-bold text-slate-800">+1 (555) 234-8901</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-1">Nationality</span>
                <span className="font-bold text-slate-800">United States (e-Visa Approved)</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-1">Emergency Contact</span>
                <span className="font-bold text-slate-800">David Chen (+1 555-908-1122)</span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: SUPPORT CONCIERGE */}
        {activeSidebar === 'support' && (
          <div className="max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col h-[520px]">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  🎧
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">24/7 Dedicated Tourist Concierge</h3>
                  <p className="text-[11px] text-emerald-600 font-semibold">● Online • Average response: under 2 mins</p>
                </div>
              </div>
            </div>

            {/* Chat message list */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {supportMessagesList.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md p-3 rounded-xl text-xs sm:text-sm ${
                      msg.sender === 'user'
                        ? 'bg-amber-600 text-white rounded-br-none'
                        : 'bg-slate-100 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendSupport} className="p-3 border-t border-slate-100 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about your tour, flights, visa, or guides..."
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
                className="flex-1 text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="p-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:opacity-90 transition cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

      </main>
    </div>
  );
}
