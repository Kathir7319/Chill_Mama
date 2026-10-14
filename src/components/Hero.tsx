import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import { HERO_OPTIONS } from '@/data/mockData';
import { Sparkles, Utensils, MapPin, ArrowRight, ShieldCheck, Heart, Moon, Flame } from 'lucide-react';

export default function Hero() {
  const [activeVariation, setActiveVariation] = useState(0);

  // Auto rotate every 7 seconds unless manually toggled
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVariation((prev) => (prev + 1) % HERO_OPTIONS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentCopy = HERO_OPTIONS[activeVariation];

  return (
    <section id="home" className="relative overflow-hidden bg-[#171717] text-[#D0CBC3] min-h-[90vh] flex items-center border-b border-[#333333]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E94B20]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#FF8A24]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7">
            {/* Tagline Variation Switcher in Dark Grey #242424 */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#242424] border border-[#333333] shadow-md mb-6">
              <span className="text-[11px] font-black text-[#FF8A24] uppercase tracking-wider pl-3 pr-2 hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                Vibe Mode:
              </span>
              {HERO_OPTIONS.map((opt, idx) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveVariation(idx)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
                    activeVariation === idx
                      ? 'bg-[#E94B20] text-[#FFF2DC] shadow-md font-black'
                      : 'text-[#D0CBC3] hover:text-[#FFF2DC] hover:bg-[#171717]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Main Dynamic Headline in Warm Cream #FFF2DC */}
            <div className="min-h-[160px] sm:min-h-[190px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-[#FFF2DC]">
                {currentCopy.headline}{' '}
                <span className="block bg-gradient-to-r from-[#FFF2DC] via-[#FF8A24] to-[#E94B20] bg-clip-text text-transparent">
                  {currentCopy.highlight}
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-xl text-[#D0CBC3] leading-relaxed max-w-2xl font-normal">
                {currentCopy.subtext}
              </p>
            </div>

            {/* Action CTAs: Chilli Red #E94B20 & Dark Grey #242424 */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] shadow-lg shadow-[#E94B20]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Utensils className="w-5 h-5 stroke-[2.5]" />
                <span>Order Online Now</span>
                <ArrowRight className="w-4 h-4 ml-1 stroke-[3]" />
              </Link>

              <Link
                to="/find-us"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-[#FFF2DC] bg-[#242424] hover:bg-[#171717] border border-[#333333] hover:border-[#FF8A24] shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5 text-[#FF8A24]" />
                <span>Track Truck Tonight</span>
              </Link>

              <Link
                to="/menu#pairings"
                className="inline-flex items-center gap-2 px-4 py-4 text-xs uppercase tracking-wider font-bold text-[#FF8A24] hover:text-[#FFF2DC] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#FF8A24]" />
                <span>View Chef’s Combos</span>
              </Link>
            </div>

            {/* Highlights Bar in Dark Grey #242424 */}
            <div className="mt-10 pt-6 border-t border-[#333333] grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#242424] border border-[#333333] text-[#D0CBC3]">
                <div className="w-8 h-8 rounded-lg bg-[#E94B20]/20 border border-[#E94B20]/40 flex items-center justify-center text-[#FF8A24] shrink-0">
                  <Heart className="w-4 h-4 fill-[#FF8A24]" />
                </div>
                <span className="text-xs font-bold text-[#FFF2DC]">Women-Owned</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#242424] border border-[#333333] text-[#D0CBC3]">
                <div className="w-8 h-8 rounded-lg bg-[#3D6B45]/20 border border-[#3D6B45]/40 flex items-center justify-center text-[#3D6B45] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#FFF2DC]">100% Halal & Veg</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#242424] border border-[#333333] text-[#D0CBC3]">
                <div className="w-8 h-8 rounded-lg bg-[#FF8A24]/20 border border-[#FF8A24]/40 flex items-center justify-center text-[#FF8A24] shrink-0">
                  <Moon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#FFF2DC]">Fairy Lights Vibe</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#242424] border border-[#333333] text-[#D0CBC3]">
                <div className="w-8 h-8 rounded-lg bg-[#E94B20]/20 border border-[#E94B20]/40 flex items-center justify-center text-[#E94B20] shrink-0">
                  <Flame className="w-4 h-4 fill-[#E94B20]" />
                </div>
                <span className="text-xs font-bold text-[#FFF2DC]">House Masalas</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Picture Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-[430px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-4 border-[#242424] shadow-2xl shadow-black/60">
                <Image
                  src="/images/natural_crowded_truck.jpg"
                  alt="Chill Mama Food Truck in park with fairy lights and lively crowd"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-transparent to-transparent" />
                
                {/* Floating pill over image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#242424]/95 backdrop-blur-md shadow-2xl border border-[#333333] z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#FF8A24] block">
                        Open-Air Backyard Social
                      </span>
                      <p className="text-sm font-bold text-[#FFF2DC] mt-0.5">
                        10420 Chapel Hill Rd, Morrisville, NC
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40 text-xs font-black">
                      🟢 Open Tonight
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Official Logo Badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#242424] p-1.5 shadow-2xl border-2 border-[#E94B20]/40 rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#171717]">
                  <Image
                    src="/images/chill_mama_logo.png"
                    alt="Chill Mama Street Bites Official Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Suda Suda Pakka Local Tag */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#E94B20] to-[#FF8A24] text-[#FFF2DC] font-black px-4 py-2 rounded-2xl shadow-lg shadow-[#E94B20]/30 flex items-center gap-1.5 z-20 text-xs uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-[#FFF2DC]" />
                <span>Suda Suda • Pakka Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
