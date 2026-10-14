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
      {/* Top Banner: Dark Grey #242424 with Live Herb Green & Ember Orange Accents */}
      <div className="bg-[#242424] border-b border-[#333333] text-[#D0CBC3] text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D6B45] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3D6B45] border border-[#171717]"></span>
            </span>
            <span>
              Now Serving at <strong className="underline underline-offset-2 font-bold text-[#FFF2DC]">10420 Chapel Hill Rd, Morrisville</strong> (5:00 PM – 10:30 PM)
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 bg-[#171717] border border-[#333333] px-3 py-1 rounded-full text-[#D0CBC3]">
              <Clock className="w-3.5 h-3.5 text-[#FF8A24]" /> Wait: ~12 mins
            </span>
            <span className="flex items-center gap-1.5 bg-[#171717] border border-[#333333] px-3 py-1 rounded-full text-[#D0CBC3]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" /> Outdoor Picnic Setup & Fairy Lights
            </span>
            <a
              href="tel:+19193378472"
              className="flex items-center gap-1.5 bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] px-3.5 py-1 rounded-full font-bold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" /> +1 (919) 337-8472
            </a>
          </div>
        </div>
      </div>

      {/* Main Charcoal #171717 Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#333333]'
            : 'bg-[#171717]/90 backdrop-blur-md py-4 border-b border-[#242424]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#E94B20]/40 group-hover:border-[#FF8A24] bg-[#242424] p-0.5 shadow-md transition-all">
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
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#FFF2DC] group-hover:text-[#FF8A24] transition-colors">
                  CHILL MAMA
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#E94B20]/20 text-[#FF8A24] border border-[#E94B20]/40">
                  STREET BITES
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#D0CBC3]/70 group-hover:text-[#D0CBC3] transition-colors">
                10420 Chapel Hill Rd, Morrisville, NC
              </p>
            </div>
          </Link>

          {/* Desktop Multi-Page Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#242424] p-1.5 rounded-2xl border border-[#333333]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-xl font-bold transition-all ${
                    isActive
                      ? 'bg-[#E94B20] text-[#FFF2DC] shadow-md font-black'
                      : 'text-[#D0CBC3] hover:text-[#FFF2DC] hover:bg-[#171717]'
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
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#D0CBC3] bg-[#242424] hover:bg-[#171717] hover:text-[#FFF2DC] border border-[#333333] hover:border-[#FF8A24] px-3.5 py-2.5 rounded-xl transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>Track Truck</span>
            </Link>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#242424] hover:bg-[#171717] text-[#FFF2DC] border border-[#333333] hover:border-[#FF8A24] transition-all active:scale-95 group shadow-sm"
              aria-label="Open Order Tray"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 text-[#FF8A24] transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#E94B20] text-[#FFF2DC] font-black text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Order Online CTA: Chilli Red #E94B20 hover Ember Orange #FF8A24 */}
            <Link
              to="/menu"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] shadow-lg shadow-[#E94B20]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Order Online
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#242424] text-[#FFF2DC] hover:text-[#FF8A24] border border-[#333333]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu: Dark Grey #242424 */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#242424] border-b border-[#333333] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#E94B20] text-[#FFF2DC] font-black shadow-sm'
                      : 'text-[#D0CBC3] hover:text-[#FFF2DC] hover:bg-[#171717]'
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
                className="w-full text-center block px-4 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] shadow-lg shadow-[#E94B20]/30"
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
