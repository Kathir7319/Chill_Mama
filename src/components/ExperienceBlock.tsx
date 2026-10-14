import React from 'react';
import { Sparkles, Trees, HeartHandshake, ShieldCheck, Dog, Flame } from 'lucide-react';
import { EXPERIENCE_COLUMNS } from '@/data/mockData';

export default function ExperienceBlock() {
  const getCardStyle = (id: string) => {
    switch (id) {
      case 'heritage':
        return {
          icon: <Sparkles className="w-7 h-7 text-sky-600" />,
          bgIcon: 'bg-sky-50 border-sky-200',
          badge: 'bg-sky-100 text-sky-700',
        };
      case 'hangout':
        return {
          icon: <Trees className="w-7 h-7 text-emerald-600" />,
          bgIcon: 'bg-emerald-50 border-emerald-200',
          badge: 'bg-emerald-100 text-emerald-700',
        };
      case 'inclusive':
        return {
          icon: <HeartHandshake className="w-7 h-7 text-blue-600" />,
          bgIcon: 'bg-blue-50 border-blue-200',
          badge: 'bg-blue-100 text-blue-700',
        };
      default:
        return {
          icon: <Flame className="w-7 h-7 text-amber-600" />,
          bgIcon: 'bg-amber-50 border-amber-200',
          badge: 'bg-amber-100 text-amber-700',
        };
    }
  };

  return (
    <section className="py-20 bg-slate-50/60 border-y border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600" />
            The Food Truck Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Chill Mama Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            More than just street food on wheels—it’s an outdoor community gathering rooted in authentic spice craft and maternal hospitality.
          </p>
        </div>

        {/* Three-Column Feature Block in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCE_COLUMNS.map((col) => {
            const style = getCardStyle(col.id);

            return (
              <div
                key={col.id}
                className="group relative bg-white border-2 border-sky-100 hover:border-sky-300 rounded-3xl p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${style.bgIcon} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      {style.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                      {col.category}
                    </span>
                  </div>

                  {/* Header */}
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {col.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {col.body}
                  </p>
                </div>

                {/* Bottom Feature Pill */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black ${style.badge}`}>
                    {col.badge}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors">
                    Morrisville & Cary, NC
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atmosphere Perks Ribbon */}
        <div className="mt-12 p-6 rounded-3xl bg-white border-2 border-sky-200 shadow-sm flex flex-wrap items-center justify-around gap-6 text-sm text-slate-800 font-bold text-center">
          <div className="flex items-center gap-2 text-sky-800">
            <span className="text-xl">✨</span> Fairy String Light Canopy
          </div>
          <div className="flex items-center gap-2 text-sky-800">
            <Dog className="w-5 h-5 text-sky-600" /> Leashed Pets Warmly Welcomed
          </div>
          <div className="flex items-center gap-2 text-sky-800">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> 100% Certified Zabiha Halal
          </div>
          <div className="flex items-center gap-2 text-sky-800">
            <span className="text-xl">🌱</span> Dedicated Pure-Veg Fryer & Prep
          </div>
        </div>
      </div>
    </section>
  );
}
