import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ChefsPairings from '@/components/ChefsPairings';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import { Flame, ChevronRight } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#171717] text-[#D0CBC3]">
      <Navbar />

      <main className="flex-1">
        {/* Page Header Banner */}
        <section className="relative py-14 sm:py-20 bg-[#171717] border-b border-[#333333] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#D0CBC3]/70 uppercase tracking-widest mb-4">
              <Link to="/" className="hover:text-[#FF8A24] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#D0CBC3]/40" />
              <span className="text-[#FFF2DC]">Menu & Ordering</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3">
                  <Flame className="w-4 h-4 text-[#E94B20] fill-[#E94B20]" />
                  Made-to-Order on the Sizzling Tawa
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-[#FFF2DC] tracking-tight">
                  The Full Flavor Menu
                </h1>
                <p className="mt-3 text-base sm:text-lg text-[#D0CBC3] max-w-2xl leading-relaxed font-normal">
                  From flaky Bombay Frankies and spiced burgers to warm Irani Bun Maska and refreshing rose milk. Every dish is 100% Halal or pure vegetarian, spiced with house-ground whole masalas.
                </p>
              </div>

              {/* Order Window Info Badge in Dark Grey #242424 */}
              <div className="bg-[#242424] border border-[#333333] p-5 rounded-2xl shadow-xl flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2 text-xs font-black text-[#3D6B45]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3D6B45] animate-ping"></span>
                  <span>Kitchen Window OPEN for Pickup</span>
                </div>
                <p className="text-xs text-[#D0CBC3] font-medium">
                  Standard pickup prep time: <strong className="text-[#FFF2DC] font-bold">12–16 mins</strong>
                </p>
                <div className="flex items-center gap-3 text-[11px] text-[#D0CBC3]/60 pt-2 border-t border-[#333333] font-semibold">
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
