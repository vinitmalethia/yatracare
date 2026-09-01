import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ExploreIndia from './components/ExploreIndia';
import ExploreIndiaPage from './components/ExploreIndiaPage';
import FeaturedPackagesSection from './components/FeaturedPackagesSection';
import WhyChooseUs from './components/WhyChooseUs';
import TourPackagesPage from './components/TourPackagesPage';
import PackageDetailPage from './components/PackageDetailPage';
import LocalGuidesPage from './components/LocalGuidesPage';
import TravelTransportPage from './components/TravelTransportPage';
import HotelsPage from './components/HotelsPage';
import TouristPortal from './components/TouristPortal';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import DestinationDetailModal from './components/DestinationDetailModal';
import TourPackagesModal from './components/TourPackagesModal';
import { destinations, packages } from './data/destinations';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [selectedPackageDetail, setSelectedPackageDetail] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [packagesModalOpen, setPackagesModalOpen] = useState(false);
  const [packagesModalTab, setPackagesModalTab] = useState('all');
  const [searchNotification, setSearchNotification] = useState(null);

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleOpenViewAll = (tab = 'all') => {
    if (tab === 'packages') {
      setSelectedPackageDetail(null);
      setActiveNav('packages');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPackagesModalTab(tab);
      setPackagesModalOpen(true);
    }
  };

  const handleNavClick = (navId) => {
    setSelectedPackageDetail(null);
    setActiveNav(navId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (searchData) => {
    setSearchNotification(`Searching journeys for "${searchData.destination}" (${searchData.travellers}, ${searchData.dates})...`);
    setTimeout(() => {
      setSearchNotification(null);
      
      const searchLower = searchData.destination.toLowerCase();
      const matchedPkg = packages.find(p =>
        p.title.toLowerCase().includes(searchLower) ||
        p.places.toLowerCase().includes(searchLower)
      );

      if (matchedPkg) {
        handleSelectPackage(matchedPkg);
        return;
      }

      const matchedDest = destinations.find(d => 
        d.name.toLowerCase().includes(searchLower) ||
        searchLower.includes(d.name.toLowerCase()) ||
        d.state.toLowerCase().includes(searchLower)
      );

      if (matchedDest) {
        setSelectedDestination(matchedDest);
      } else {
        setSelectedPackageDetail(null);
        setActiveNav('packages');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 1000);
  };

  const handleSelectPackage = (pkg) => {
    const isGoldenTriangle = pkg.title.toLowerCase().includes('golden triangle');

    const detailedObj = {
      ...pkg,
      title: isGoldenTriangle ? "Golden Triangle Tour" : pkg.title,
      places: pkg.places || (isGoldenTriangle ? "Delhi • Agra • Jaipur" : pkg.region),
      duration: pkg.duration || "5 Days / 4 Nights",
      rating: pkg.rating || 4.8,
      reviews: pkg.reviews || 124,
      price: pkg.price || "₹32,999",
      originalPrice: pkg.originalPrice || "₹45,000",
      description: pkg.description || "Experience the essence of India with our premium Golden Triangle tour. This meticulously crafted 5-day itinerary connects three of the most iconic cities in northern India: Delhi, Agra, and Jaipur. Designed for travelers who seek both historical depth and modern comfort, this package offers guided access to UNESCO World Heritage sites, luxurious accommodations, and seamless private transport.",
      descriptionSecondary: "From the bustling streets and monumental architecture of the capital to the timeless romance of the Taj Mahal, and finally the royal grandeur of the Pink City, every moment is curated to provide a culturally immersive, high-end travel experience.",
      images: {
        main: isGoldenTriangle ? "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85" : pkg.image,
        photo1: "/images/hawa-mahal.jpg",
        photo2: "/images/india-gate.jpg",
        photo3: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85"
      },
      detailedItinerary: [
        {
          day: 1,
          title: "Arrival in Delhi & Sightseeing",
          desc: "Arrive at Indira Gandhi International Airport. Meet our representative and transfer to your hotel. In the afternoon, visit Qutub Minar, Humayun's Tomb, and drive past India Gate and Parliament House.",
          pills: ["Stay: Delhi"]
        },
        {
          day: 2,
          title: "Delhi to Agra (230 km / 4 hrs)",
          desc: "After breakfast, drive to Agra via the Yamuna Expressway. Check-in to your hotel. Later, visit the magnificent Agra Fort, a UNESCO World Heritage site, offering spectacular views of the Taj Mahal from across the river.",
          pills: ["Stay: Agra", "Breakfast Included"]
        },
        {
          day: 3,
          title: "Agra to Jaipur via Fatehpur Sikri",
          desc: "Sunrise tour of the immortal Taj Mahal. Return to hotel for breakfast, then drive towards Jaipur with an en-route guided visit to Emperor Akbar's abandoned Mughal city of Fatehpur Sikri.",
          pills: ["Stay: Jaipur", "Breakfast Included"]
        },
        {
          day: 4,
          title: "Jaipur Pink City & Amber Fort Exploration",
          desc: "Ascend to the hilltop Amber Fort. Photograph the iconic Hawa Mahal honeycomb facade, explore the City Palace Museum, and shop for precious gemstones and textiles in local Johari Bazaar.",
          pills: ["Stay: Jaipur", "Breakfast Included"]
        },
        {
          day: 5,
          title: "Jaipur to Delhi Departure",
          desc: "Enjoy a relaxed breakfast at your heritage hotel before a comfortable private drive back to Delhi Airport or Railway Station for your onward journey home.",
          pills: ["Breakfast Included"]
        }
      ]
    };

    setSelectedPackageDetail(detailedObj);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If on Tourist Portal view
  if (activeNav === 'portal') {
    return (
      <TouristPortal
        onBackToHome={() => handleNavClick('home')}
        onOpenSupport={() => handleOpenAuth('login')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Search Toast / Notification */}
      {searchNotification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl text-sm font-medium flex items-center space-x-2 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{searchNotification}</span>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        activeNav={selectedPackageDetail ? 'packages' : activeNav}
        setActiveNav={handleNavClick}
        onOpenAuth={handleOpenAuth}
      />

      <main className="flex-1">
        {selectedPackageDetail ? (
          /* Dedicated Package Detail Page (Golden Triangle / Selected Package) */
          <PackageDetailPage
            packageData={selectedPackageDetail}
            onNavigateHome={() => {
              setSelectedPackageDetail(null);
              setActiveNav('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePackages={() => {
              setSelectedPackageDetail(null);
              setActiveNav('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : activeNav === 'packages' ? (
          /* Tour Packages Filter & Showcase Page */
          <TourPackagesPage
            onSelectPackage={handleSelectPackage}
          />
        ) : activeNav === 'hotels' ? (
          /* Dedicated Hotels & Curated Stays Page */
          <HotelsPage />
        ) : activeNav === 'explore' ? (
          /* Dedicated Explore India Page */
          <ExploreIndiaPage
            onSelectDestination={(dest) => {
              const matchedPkg = packages.find(p => p.places.toLowerCase().includes(dest.name.toLowerCase()));
              if (matchedPkg) {
                handleSelectPackage(matchedPkg);
              } else {
                setSelectedDestination(dest);
              }
            }}
            onViewAll={(tab) => handleOpenViewAll(tab || 'all')}
          />
        ) : activeNav === 'travel' ? (
          /* Dedicated Travel & Transport Page */
          <TravelTransportPage />
        ) : activeNav === 'guides' ? (
          /* Verified Local Guides Page */
          <LocalGuidesPage />
        ) : (
          /* Home Landing Page */
          <>
            {/* Hero Section */}
            <Hero
              onExploreClick={() => {
                setActiveNav('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onPackagesClick={() => {
                setSelectedPackageDetail(null);
                setActiveNav('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Floating Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Explore India Section */}
            <ExploreIndia
              destinations={destinations}
              onSelectDestination={(dest) => {
                const pkg = packages.find(p => p.places.toLowerCase().includes(dest.name.toLowerCase()));
                if (pkg) {
                  handleSelectPackage(pkg);
                } else {
                  setSelectedDestination(dest);
                }
              }}
              onViewAll={(tab) => {
                if (tab === 'packages') {
                  setSelectedPackageDetail(null);
                  setActiveNav('packages');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setActiveNav('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />

            {/* Featured Tour Packages Section */}
            <FeaturedPackagesSection
              onSelectPackage={handleSelectPackage}
            />

            {/* Why Choose Us & Testimonials */}
            <WhyChooseUs
              onOpenSupport={() => handleNavClick('portal')}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onCategoryClick={(category) => {
          if (category === 'Destinations' || category === 'Explore') {
            setSelectedPackageDetail(null);
            setActiveNav('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (category === 'Hotels') {
            handleNavClick('hotels');
          } else if (category === 'Transport' || category === 'Travel') {
            handleNavClick('travel');
          } else if (category === 'Guides') {
            handleNavClick('guides');
          } else if (category === 'Support' || category === 'FAQ' || category === 'Safety') {
            handleNavClick('portal');
          } else {
            handleOpenAuth('login');
          }
        }}
      />

      {/* Auth Modal (Login / Signup) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Destination Detail Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      {/* All Destinations Modal */}
      <TourPackagesModal
        isOpen={packagesModalOpen}
        initialTab={packagesModalTab}
        onClose={() => setPackagesModalOpen(false)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
      />
    </div>
  );
}
