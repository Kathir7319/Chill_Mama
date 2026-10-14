import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChefsPairings from '@/components/ChefsPairings';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import { Flame, ChevronRight } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Vibrant Light Blue Page Header Banner */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-sky-50 via-sky-100/30 to-white border-b border-sky-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-sky-600">Menu & Ordering</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-black uppercase tracking-wider mb-3">
                  <Flame className="w-4 h-4 text-sky-600 fill-sky-600" />
                  Made-to-Order on the Sizzling Tawa
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
                  The Full Flavor Menu
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                  From flaky Bombay Frankies and spiced burgers to warm Irani Bun Maska and refreshing rose milk. Every dish is 100% Halal or pure vegetarian, spiced with house-ground whole masalas.
                </p>
              </div>

              {/* Order Window Info Badge in Clean White */}
              <div className="bg-white border-2 border-sky-200 p-5 rounded-2xl shadow-md flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Kitchen Window OPEN for Pickup</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  Standard pickup prep time: <strong className="text-sky-700 font-bold">12–16 mins</strong>
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-semibold">
                  <span>✓ 100% Halal Meat</span>
                  <span>✓ Pure Veg Options</span>
                  <span>✓ Curbside Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chef's Pairings */}
        <ChefsPairings />

        {/* Full Digital Interactive Menu with Category & Dietary Filters */}
        <MenuSection />
      </main>

      <Footer />
    </div>
  );
}
