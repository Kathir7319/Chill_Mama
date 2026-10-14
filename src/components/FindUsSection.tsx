import React, { useState } from 'react';
import { TRUCK_SCHEDULE } from '@/data/mockData';
import { MapPin, Navigation, Clock, Sparkles, Check, Phone, Bell } from 'lucide-react';

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
    <section id="find-us" className="py-20 bg-[#171717] text-[#D0CBC3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <MapPin className="w-4 h-4 text-[#FF8A24]" />
            Live GPS & Triangle Tour
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
            Find the Truck Tonight
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#D0CBC3] font-normal">
            Catch us under the canopy trees and glowing fairy lights across Morrisville, Cary, and RTP.
          </p>
        </div>

        {/* Schedule & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Schedule Stops List in Dark Grey #242424 Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FF8A24] mb-2">
              Weekly Triangle Stops
            </h3>
            {TRUCK_SCHEDULE.map((stop) => {
              const isSelected = selectedStopId === stop.id;

              return (
                <div
                  key={stop.id}
                  onClick={() => setSelectedStopId(stop.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#242424] border-[#FF8A24] shadow-xl shadow-[#FF8A24]/10 scale-[1.01]'
                      : 'bg-[#242424] border-[#333333] hover:border-[#FF8A24]/60 shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF8A24]">
                      {stop.day}
                    </span>
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                        stop.status === 'Serving Now'
                          ? 'bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40 animate-pulse'
                          : 'bg-[#171717] text-[#D0CBC3]/70 border border-[#333333]'
                      }`}
                    >
                      {stop.status === 'Serving Now' ? '🟢 ' : ''}
                      {stop.status}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-[#FFF2DC]">{stop.locationName}</h4>
                  <p className="text-xs text-[#D0CBC3]/70 mt-0.5 font-normal">
                    {stop.address}, {stop.city}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#333333] flex items-center justify-between text-xs text-[#D0CBC3]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF8A24]" /> {stop.hours}
                    </span>
                    <span className="text-[#FF8A24] font-bold hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Stop Interactive Visual Hub in Dark Grey #242424 */}
          <div className="lg:col-span-7 bg-[#242424] rounded-3xl border border-[#333333] p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Top Status Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#333333]">
              <div>
                <span className="text-xs font-black text-[#FF8A24] uppercase tracking-widest block mb-1">
                  Selected Stop:
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#FFF2DC]">{activeStop.locationName}</h3>
                <p className="text-sm text-[#D0CBC3] mt-0.5 font-normal">
                  {activeStop.address}, {activeStop.city}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStop.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 transition-transform active:scale-95"
                >
                  <Navigation className="w-4 h-4 fill-[#FFF2DC]" />
                  <span>Get GPS Directions</span>
                </a>

                <a
                  href="tel:+19193378472"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#171717] hover:bg-[#333333] border border-[#333333] text-[#FFF2DC] font-black text-xs uppercase tracking-wider shadow-sm transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#FF8A24]" />
                  <span>(919) 337-8472</span>
                </a>
              </div>
            </div>

            {/* Simulated Live Outdoor Map View */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-[#333333] bg-[#171717] flex flex-col justify-between p-6">
              {/* Map background grid effect */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #E94B20 1px, transparent 1px), radial-gradient(circle, #FF8A24 1px, #171717 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-black px-3.5 py-1 rounded-xl bg-[#242424]/95 backdrop-blur-md border border-[#333333] text-[#FFF2DC] flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-4 h-4 text-[#E94B20] fill-[#E94B20]" />
                  Live Pin: {activeStop.city.split(',')[0]}
                </span>
                <span className="text-xs font-black px-3.5 py-1 rounded-xl bg-[#3D6B45] text-[#FFF2DC] shadow-sm">
                  Open Patio Seating
                </span>
              </div>

              {/* Center Map Pin Graphic */}
              <div className="relative z-10 mx-auto text-center py-2">
                <div className="relative inline-flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#E94B20]/30 animate-ping absolute" />
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#E94B20] to-[#FF8A24] flex items-center justify-center text-[#FFF2DC] shadow-lg font-black text-xs p-3">
                    CHILL
                  </div>
                </div>
                <div className="mt-2 bg-[#242424]/95 backdrop-blur-md border border-[#333333] px-3.5 py-1 rounded-full text-xs font-bold text-[#FFF2DC] shadow-md inline-block">
                  {activeStop.locationName}
                </div>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-[11px] font-bold text-[#D0CBC3] bg-[#242424]/90 backdrop-blur-md py-1 px-4 rounded-full inline-block border border-[#333333] shadow-md">
                  Free Guest Parking • Open Picnic Benches • Dog Friendly
                </p>
              </div>
            </div>

            {/* Venue Amenities */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#D0CBC3] block mb-3">
                Venue Amenities At This Stop:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeStop.features.map((feat, i) => (
                  <div
                    key={i}
                    className="bg-[#171717] p-3.5 rounded-xl border border-[#333333] text-center text-xs font-bold text-[#D0CBC3] flex flex-col items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#FF8A24]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SMS Location Alerts Box */}
            <div className="bg-[#171717] border border-[#333333] p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-[#FF8A24] uppercase tracking-wide">
                <Bell className="w-4 h-4 text-[#FF8A24]" />
                <span>Get Mama’s Daily Stop SMS Alert</span>
              </div>
              <p className="text-xs text-[#D0CBC3]/70 font-normal">
                Never miss the truck. We send a quick text at 4:30 PM with parking spots & secret daily specials.
              </p>

              {smsSent ? (
                <div className="p-3 bg-[#3D6B45]/20 border border-[#3D6B45]/40 rounded-xl text-[#3D6B45] text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3] text-[#3D6B45]" />
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
                    className="bg-[#242424] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 flex-1 focus:outline-none focus:border-[#FF8A24]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] text-xs font-black uppercase rounded-xl transition-all shadow-md shadow-[#E94B20]/20 active:scale-95"
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
