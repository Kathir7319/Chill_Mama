'use client';

import React, { useState } from 'react';
import { TRUCK_SCHEDULE } from '@/data/mockData';
import { MapPin, Navigation, Clock, Sparkles, Check, Phone, Trees, Dog, Bell } from 'lucide-react';

export default function FindUsSection() {
  const [selectedStopId, setSelectedStopId] = useState(TRUCK_SCHEDULE[0].id);
  const [smsPhone, setSmsPhone] = useState('');
  const [smsSent, setSmsSent] = useState(false);

  const activeStop = TRUCK_SCHEDULE.find((s) => s.id === selectedStopId) || TRUCK_SCHEDULE[0];

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsPhone) return;
    setSmsSent(true);
    setTimeout(() => {
      setSmsPhone('');
      setSmsSent(false);
    }, 4000);
  };

  return (
    <section id="find-us" className="py-20 bg-slate-50/70 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-black uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-sky-600" />
            Live GPS & Triangle Tour
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Find the Truck Tonight
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Catch us under the canopy trees and glowing fairy lights across Morrisville, Cary, and RTP.
          </p>
        </div>

        {/* Schedule & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Schedule Stops List in White Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs font-black uppercase tracking-widest text-sky-800 mb-2">
              Weekly Triangle Stops
            </h3>
            {TRUCK_SCHEDULE.map((stop) => {
              const isSelected = selectedStopId === stop.id;

              return (
                <div
                  key={stop.id}
                  onClick={() => setSelectedStopId(stop.id)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white border-sky-500 shadow-lg shadow-sky-500/10 scale-[1.01]'
                      : 'bg-white border-sky-100 hover:border-sky-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-sky-600">
                      {stop.day}
                    </span>
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                        stop.status === 'Serving Now'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {stop.status === 'Serving Now' ? '🟢 ' : ''}
                      {stop.status}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-900">{stop.locationName}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    {stop.address}, {stop.city}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-sky-600" /> {stop.hours}
                    </span>
                    <span className="text-sky-600 font-bold hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Stop Interactive Visual Hub */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-sky-200 p-6 sm:p-8 space-y-6 shadow-md">
            {/* Top Status Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-black text-sky-600 uppercase tracking-widest block mb-1">
                  Selected Stop:
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{activeStop.locationName}</h3>
                <p className="text-sm text-slate-600 mt-0.5 font-normal">
                  {activeStop.address}, {activeStop.city}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStop.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-sky-500/20 transition-transform active:scale-95"
                >
                  <Navigation className="w-4 h-4 fill-white" />
                  <span>Get GPS Directions</span>
                </a>

                <a
                  href="tel:+19193378472"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-sky-50 border-2 border-sky-200 text-sky-800 font-black text-xs uppercase tracking-wider shadow-sm transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>(919) 337-8472</span>
                </a>
              </div>
            </div>

            {/* Simulated Live Outdoor Map View in Light Colors */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border-2 border-sky-100 bg-sky-50 flex flex-col justify-between p-6">
              {/* Map background grid effect */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #0284c7 1px, transparent 1px), radial-gradient(circle, #38bdf8 1px, #f0f9ff 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-black px-3.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-sky-200 text-slate-800 flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-4 h-4 text-rose-500 fill-rose-500" />
                  Live Pin: {activeStop.city.split(',')[0]}
                </span>
                <span className="text-xs font-black px-3.5 py-1 rounded-xl bg-emerald-500 text-white shadow-sm">
                  Open Patio Seating
                </span>
              </div>

              {/* Center Map Pin Graphic */}
              <div className="relative z-10 mx-auto text-center py-2">
                <div className="relative inline-flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-sky-400/30 animate-ping absolute" />
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md font-black text-xs p-3">
                    CHILL
                  </div>
                </div>
                <div className="mt-2 bg-white/95 backdrop-blur-md border border-sky-300 px-3.5 py-1 rounded-full text-xs font-bold text-sky-800 shadow-sm inline-block">
                  {activeStop.locationName}
                </div>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-[11px] font-bold text-slate-600 bg-white/90 backdrop-blur-md py-1 px-4 rounded-full inline-block border border-sky-150 shadow-sm">
                  Free Guest Parking • Open Picnic Benches • Dog Friendly
                </p>
              </div>
            </div>

            {/* Venue Amenities in Light Blue & White */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-3">
                Venue Amenities At This Stop:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeStop.features.map((feat, i) => (
                  <div
                    key={i}
                    className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100 text-center text-xs font-bold text-slate-700 flex flex-col items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SMS Location Alerts Box */}
            <div className="bg-sky-50/80 border-2 border-sky-200 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-sky-800 uppercase tracking-wide">
                <Bell className="w-4 h-4 text-sky-600" />
                <span>Get Mama’s Daily Stop SMS Alert</span>
              </div>
              <p className="text-xs text-slate-600 font-normal">
                Never miss the truck. We send a quick text at 4:30 PM with parking spots & secret daily specials.
              </p>

              {smsSent ? (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3] text-emerald-600" />
                  <span>You’re subscribed! You will receive today&apos;s alert.</span>
                </div>
              ) : (
                <form onSubmit={handleSmsSubmit} className="flex gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="(919) 000-0000"
                    value={smsPhone}
                    onChange={(e) => setSmsPhone(e.target.value)}
                    className="bg-white border border-sky-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 flex-1 focus:outline-none focus:border-sky-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-black uppercase rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-95"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
