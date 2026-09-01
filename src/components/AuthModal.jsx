import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {mode === 'login' ? 'Welcome back!' : 'Account Created!'}
            </h3>
            <p className="text-sm text-slate-500">
              Preparing your personalized travel experience...
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="YatraCare" 
                className="h-12 w-auto mx-auto mb-2 object-contain"
              />
              <h3 className="text-2xl font-bold text-slate-900">
                {mode === 'login' ? 'Welcome to YatraCare' : 'Begin Your Journey'}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {mode === 'login'
                  ? 'Sign in to access your bookings and itineraries'
                  : 'Join thousands of travellers exploring India effortlessly'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3 text-slate-400" size={18} />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 text-slate-400" size={18} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3 text-slate-400" size={18} />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-slate-500">
              {mode === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-amber-600 font-semibold hover:underline"
                  >
                    Get Started
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-amber-600 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
