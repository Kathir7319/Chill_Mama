import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CateringSection from '@/components/CateringSection';
import { Sparkles, Calendar, ChevronRight, CheckCircle2, ShieldCheck, Truck, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Catering & Food Truck Hire | Chill Mama Fusion Indian Food Truck',
  description:
    'Book the Chill Mama food truck for your wedding, corporate mixer, graduation, or backyard party in Morrisville, Cary, and Raleigh, NC. Packages starting at $18/guest.',
};

export default function CateringPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Vibrant Light Blue Page Header Banner */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-sky-50 via-sky-100/30 to-white border-b border-sky-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-sky-600">Catering & Events</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-black uppercase tracking-wider mb-3">
                  <Truck className="w-3.5 h-3.5 text-sky-600" />
                  We Bring the Truck, Lights & Flavors
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  Bring the Chill Mama Vibe to Your Next Event!
                </h1>
                <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                  From backyard birthdays to major corporate lunches, we bring the truck, the lights, and the unbeatable fusion flavors directly to your guests.
                </p>
              </div>

              {/* Quick Event Summary Card in Clean White */}
              <div className="bg-white border-2 border-sky-200 p-5 rounded-2xl shadow-md flex flex-col gap-2 shrink-0">
                <span className="text-xs font-black uppercase tracking-wider text-sky-700">
                  Event Highlights
                </span>
                <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Silent Onboard Commercial Generators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Outdoor Fairy Light Canopy Rig Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
