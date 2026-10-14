import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Image from '@/components/Image';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X, MapPin, Sparkles, Phone, Clock } from 'lucide-react';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu & Order', href: '/menu' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Catering', href: '/catering' },
    { name: 'Find Us', href: '/find-us' },
  ];

  return (
    <>
      {/* Top Banner: Sky Blue Gradient with Status Beacon */}
      <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300 border border-white"></span>
            </span>
            <span>
              Now Serving at <strong className="underline underline-offset-2 font-bold">10420 Chapel Hill Rd, Morrisville</strong> (5:00 PM – 10:30 PM)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sky-50 text-xs font-semibold">
            <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-sky-100" /> Wait: ~12 mins
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" /> Shaded Picnic Setup & Fairy Lights
            </span>
            <a
              href="tel:+19193378472"
              className="flex items-center gap-1.5 bg-white text-sky-700 px-3.5 py-1 rounded-full font-bold shadow-sm hover:bg-sky-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> +1 (919) 337-8472
            </a>
          </div>
        </div>
      </div>

      {/* Main Crisp White Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-sky-100'
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-sky-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-sky-300 bg-white p-0.5 shadow-md group-hover:scale-105 group-hover:shadow-sky-300/50 transition-all">
              <Image
                src="/images/chill_mama_logo.png"
                alt="Chill Mama Street Bites Logo"
                fill
                priority
                className="object-cover rounded-[14px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  CHILL MAMA
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  STREET BITES
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-400 group-hover:text-sky-600 transition-colors">
                10420 Chapel Hill Rd, Morrisville, NC 27560
              </p>
            </div>
          </Link>

          {/* Desktop Multi-Page Nav Links in Light Blue & White */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50 p-1 rounded-2xl border border-sky-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-xl font-bold transition-all ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Live Location Quick Link */}
            <Link
              to="/find-us"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3.5 py-2 rounded-xl transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Track Truck</span>
            </Link>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 transition-all active:scale-95 group shadow-sm"
              aria-label="Open Order Tray"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white font-black text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Order Online CTA */}
            <Link
              to="/menu"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Order Online
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:text-sky-600 border border-sky-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-sky-100 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                    isActive
                      ? 'bg-sky-500 text-white font-black shadow-sm'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                to="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-200"
              >
                Order Online Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
