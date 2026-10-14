import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CateringSection from '@/components/CateringSection';
import { ChevronRight, CheckCircle2, Truck } from 'lucide-react';

export default function CateringPage() {
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
              <span className="text-[#FFF2DC]">Catering & Events</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3">
                  <Truck className="w-3.5 h-3.5 text-[#FF8A24]" />
                  We Bring the Truck, Lights & Flavors
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-[#FFF2DC] tracking-tight leading-tight">
                  Bring the Chill Mama Vibe to Your Next Event!
                </h1>
                <p className="mt-4 text-base sm:text-xl text-[#D0CBC3] leading-relaxed font-normal">
                  From backyard birthdays to major corporate lunches, we bring the truck, the lights, and the unbeatable fusion flavors directly to your guests.
                </p>
              </div>

              {/* Quick Event Summary Card in Dark Grey #242424 */}
              <div className="bg-[#242424] border border-[#333333] p-5 rounded-2xl shadow-xl flex flex-col gap-2 shrink-0">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF8A24]">
                  Event Highlights
                </span>
                <div className="space-y-1.5 text-xs text-[#D0CBC3] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3D6B45]" />
                    <span>Silent Onboard Commercial Generators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3D6B45]" />
                    <span>Outdoor Fairy Light Canopy Rig Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3D6B45]" />
                    <span>Serving 25 to 500+ Guests Made-to-Order</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Section with Tiers, Calculator, FAQs and Inquiry Form */}
        <CateringSection />
      </main>

      <Footer />
    </div>
  );
}
