import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import { Mail, Sparkles, Heart, Check, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#E94B20', '#FF8A24', '#FFF2DC', '#3D6B45'],
    });

    setSubscribed(true);
  };

  return (
    <footer className="bg-[#171717] text-[#D0CBC3] border-t border-[#333333]">
      {/* Mama's Secret Spice Club Newsletter Bar in Dark Grey #242424 */}
      <div className="bg-[#242424] border-b border-[#333333] text-[#D0CBC3] py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            VIP Foodie Perks
          </div>

          <h3 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
            Join Mama’s Secret Spice Club!
          </h3>

          <p className="text-sm sm:text-lg text-[#D0CBC3] max-w-2xl mx-auto leading-relaxed font-normal">
            Enter your email for exclusive discounts, secret menu items, and food truck location pop-ups across Morrisville, Cary, and Raleigh.
          </p>

          <div className="pt-3 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#171717] border border-[#3D6B45] text-[#3D6B45] text-sm font-bold flex items-center justify-center gap-2 shadow-md">
                <Check className="w-5 h-5 stroke-[3] text-[#3D6B45]" />
                <span>Welcome to the Spice Club! Check your inbox for 15% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#FF8A24] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#171717] text-[#FFF2DC] border border-[#333333] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24] shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Join the Club
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#D0CBC3]/60 font-medium mt-2">
              Zero spam. Only fresh flavors and secret discount codes. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio in Charcoal #171717 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#E94B20]/40 bg-[#242424] p-0.5 shadow-md">
                <Image
                  src="/images/chill_mama_logo.png"
                  alt="Chill Mama Street Bites Logo"
                  fill
                  className="object-cover rounded-[14px]"
                />
              </div>
              <div>
                <span className="text-2xl font-black text-[#FFF2DC] tracking-tight block">
                  CHILL MAMA
                </span>
                <span className="text-[10px] font-black uppercase text-[#FF8A24] tracking-wider">
                  Street Bites • Suda Suda, Pakka Local
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#D0CBC3] leading-relaxed max-w-sm font-normal">
              Bringing Chennai, Hyderabad, Andhra & Rayalaseema street food soul together with modern American food truck attitude. Savor hand-crafted burgers, frankies, and cutting chai under fairy lights in Morrisville & Cary, NC.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black shadow-sm">
                Women-Owned, Flavor-Driven
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-[#242424] border border-[#333333] text-[#3D6B45] text-xs font-bold shadow-sm">
                100% Halal Meat
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#FFF2DC] uppercase tracking-widest">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-[#D0CBC3] font-medium">
              <li>
                <Link to="/" className="hover:text-[#FF8A24] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#FF8A24] transition-colors">Full Food Truck Menu</Link>
              </li>
              <li>
                <Link to="/menu#pairings" className="hover:text-[#FF8A24] transition-colors">Chef&apos;s Pairings</Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-[#FF8A24] transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#FF8A24] transition-colors">Catering & Food Truck Hire</Link>
              </li>
              <li>
                <Link to="/find-us" className="hover:text-[#FF8A24] transition-colors">Find Us Tonight (Live Schedule)</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Truck HQ */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#FFF2DC] uppercase tracking-widest">Contact & Truck Base</h4>
            <ul className="space-y-2.5 text-xs text-[#D0CBC3] font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF8A24] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=10420+Chapel+Hill+Rd,+Morrisville,+NC+27560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF8A24] hover:underline leading-relaxed"
                >
                  10420 Chapel Hill Rd, Morrisville, NC 27560, United States
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF8A24] shrink-0" />
                <a href="tel:+19193378472" className="hover:text-[#FF8A24] font-bold text-[#FFF2DC]">
                  +1 919-337-8472
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF8A24] shrink-0" />
                <a href="mailto:mama@chillmamafoodtruck.com" className="hover:text-[#FF8A24]">
                  mama@chillmamafoodtruck.com
                </a>
              </li>
              <li className="pt-1 text-[#3D6B45] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3D6B45]"></span> 100% Halal & Vegetarian Kitchen
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#FFF2DC] uppercase tracking-widest">Information</h4>
            <ul className="space-y-2 text-xs text-[#D0CBC3] font-medium">
              <li>
                <Link to="/" className="hover:text-[#FF8A24] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#FF8A24] transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#FF8A24] transition-colors">Work With Us</Link>
              </li>
              <li>
                <a href="mailto:mama@chillmamafoodtruck.com" className="hover:text-[#FF8A24] transition-colors">Contact Support</a>
              </li>
              <li>
                <Link to="/menu#pairings" className="hover:text-[#FF8A24] transition-colors">Allergen Guide</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="mt-12 pt-8 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D0CBC3]/60 font-medium">
          <p>© 2026 Chill Mama LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-[#D0CBC3]">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#E94B20] fill-[#E94B20]" />
            <span>and house-ground masalas in North Carolina.</span>
          </div>
          <p className="font-black text-[#FF8A24] uppercase tracking-wider">Women-Owned, Flavor-Driven.</p>
        </div>
      </div>
    </footer>
  );
}
