'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100/30 to-white text-slate-800 min-h-[90vh] flex items-center border-b border-sky-100">
      {/* Decorative Light Blue Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7">
            {/* Tagline Variation Switcher (Clean White Pill Bar) */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white border-2 border-sky-200 shadow-sm mb-6">
              <span className="text-[11px] font-black text-sky-700 uppercase tracking-wider pl-3 pr-2 hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                Vibe Mode:
              </span>
              {HERO_OPTIONS.map((opt, idx) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveVariation(idx)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all ${
                    activeVariation === idx
                      ? 'bg-sky-500 text-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Main Dynamic Headline */}
            <div className="min-h-[160px] sm:min-h-[190px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900">
                {currentCopy.headline}{' '}
                <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                  {currentCopy.highlight}
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                {currentCopy.subtext}
              </p>
            </div>

            {/* Action CTAs in Light Blue & Amber */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Utensils className="w-5 h-5 stroke-[2.5]" />
                <span>Order Online Now</span>
                <ArrowRight className="w-4 h-4 ml-1 stroke-[3]" />
              </Link>

              <Link
                href="/find-us"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-sky-800 bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-300 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5 text-sky-600" />
                <span>Track Truck Tonight</span>
              </Link>

              <Link
                href="/menu#pairings"
                className="inline-flex items-center gap-2 px-4 py-4 text-xs uppercase tracking-wider font-bold text-sky-700 hover:text-sky-900 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>View Chef’s Combos</span>
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="mt-10 pt-6 border-t border-sky-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-sky-100 shadow-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shrink-0">
                  <Heart className="w-4 h-4 fill-rose-500" />
                </div>
                <span className="text-xs font-bold">Women-Owned</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-sky-100 shadow-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold">100% Halal & Veg</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-sky-100 shadow-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Moon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold">Fairy Lights Vibe</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-sky-100 shadow-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Flame className="w-4 h-4 fill-amber-500" />
                </div>
                <span className="text-xs font-bold">House Masalas</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Picture Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-[430px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-sky-500/10">
                <Image
                  src="/images/natural_crowded_truck.jpg"
                  alt="Chill Mama Food Truck in park with fairy lights and lively crowd"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Floating pill over image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-sky-100 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-sky-600 block">
                        Open-Air Backyard Social
                      </span>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">
                        10420 Chapel Hill Rd, Morrisville, NC
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                      🟢 Open Tonight
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Official Logo Badge */}
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-1.5 shadow-2xl shadow-sky-500/25 border-2 border-sky-200 rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/chill_mama_logo.png"
                    alt="Chill Mama Street Bites Official Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Suda Suda Pakka Local Tag */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black px-4 py-2 rounded-2xl shadow-lg shadow-orange-500/30 flex items-center gap-1.5 z-20 text-xs uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-white" />
                <span>Suda Suda • Pakka Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
