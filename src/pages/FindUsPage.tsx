import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FindUsSection from '@/components/FindUsSection';
import { MapPin, ChevronRight, Trees, Dog, Sparkles, Phone } from 'lucide-react';

export default function FindUsPage() {
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
              <span className="text-sky-600">Find Us & Live Schedule</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Live GPS Radar & Weekly Route
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  Find the Truck Tonight
                </h1>
                <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                  Join us under the glowing fairy string lights, mature canopy shade trees, and open-air picnic tables across the Research Triangle.
                </p>
              </div>

              {/* Current Stop Live Quick Box in Clean White */}
              <div className="bg-white border-2 border-sky-200 p-5 rounded-2xl shadow-md flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>CURRENT LOCATION (TONIGHT)</span>
                </div>
                <h4 className="text-base font-black text-slate-900">Chill Mama Base Station</h4>
                <p className="text-xs text-slate-600 font-medium">10420 Chapel Hill Rd, Morrisville, NC 27560, United States</p>
                <div className="flex items-center justify-between text-xs text-sky-700 font-bold pt-2 border-t border-slate-100">
                  <span>Open 5:00 PM – 10:30 PM</span>
                  <a
                    href="https://maps.google.com/?q=10420+Chapel+Hill+Rd,+Morrisville,+NC+27560"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-sky-900 font-black"
                  >
                    Open in Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Us Section Component */}
        <FindUsSection />

        {/* Outdoor Amenities Strip in Clean White */}
        <section className="py-14 bg-white border-t border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm">
                <Trees className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Canopy Shade Trees</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">Spacious picnic spots with natural shade and fresh breeze.</p>
              </div>

              <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm">
                <Sparkles className="w-8 h-8 text-sky-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Fairy String Lights</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">Cozy twilight ambiance every evening after sunset.</p>
              </div>

              <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm">
                <Dog className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Pet Friendly</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">Fresh water bowls and shaded grassy areas for your dogs.</p>
              </div>

              <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Direct Window Line</h4>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Call <a href="tel:+19193378472" className="text-sky-700 font-bold hover:underline">+1 919-337-8472</a> for real-time line checks or curbside updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
