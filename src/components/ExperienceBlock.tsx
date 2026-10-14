import React from 'react';
import { Sparkles, Trees, HeartHandshake, ShieldCheck, Dog, Flame } from 'lucide-react';
import { EXPERIENCE_COLUMNS } from '@/data/mockData';

export default function ExperienceBlock() {
  const getCardStyle = (id: string) => {
    switch (id) {
      case 'heritage':
        return {
          icon: <Sparkles className="w-7 h-7 text-[#FF8A24]" />,
          bgIcon: 'bg-[#FF8A24]/15 border-[#FF8A24]/30',
          badge: 'bg-[#FF8A24]/15 text-[#FF8A24] border border-[#FF8A24]/30',
        };
      case 'hangout':
        return {
          icon: <Trees className="w-7 h-7 text-[#3D6B45]" />,
          bgIcon: 'bg-[#3D6B45]/15 border-[#3D6B45]/30',
          badge: 'bg-[#3D6B45]/15 text-[#3D6B45] border border-[#3D6B45]/30',
        };
      case 'inclusive':
        return {
          icon: <HeartHandshake className="w-7 h-7 text-[#E94B20]" />,
          bgIcon: 'bg-[#E94B20]/15 border-[#E94B20]/30',
          badge: 'bg-[#E94B20]/15 text-[#E94B20] border border-[#E94B20]/30',
        };
      default:
        return {
          icon: <Flame className="w-7 h-7 text-[#FF8A24]" />,
          bgIcon: 'bg-[#FF8A24]/15 border-[#FF8A24]/30',
          badge: 'bg-[#FF8A24]/15 text-[#FF8A24] border border-[#FF8A24]/30',
        };
    }
  };

  return (
    <section className="py-20 bg-[#171717] border-y border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FF8A24]" />
            The Food Truck Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
            The Chill Mama Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D0CBC3] leading-relaxed font-normal">
            More than just street food on wheels—it’s an outdoor community gathering rooted in authentic spice craft and maternal hospitality.
          </p>
        </div>

        {/* Three-Column Feature Block in Dark Grey #242424 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCE_COLUMNS.map((col) => {
            const style = getCardStyle(col.id);

            return (
              <div
                key={col.id}
                className="group relative bg-[#242424] border border-[#333333] hover:border-[#FF8A24] rounded-3xl p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[#E94B20]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${style.bgIcon} border flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      {style.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#171717] border border-[#333333] text-[#D0CBC3]">
                      {col.category}
                    </span>
                  </div>

                  {/* Header */}
                  <h3 className="text-2xl font-black text-[#FFF2DC] mb-3 group-hover:text-[#FF8A24] transition-colors">
                    {col.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-[#D0CBC3] text-sm sm:text-base leading-relaxed font-normal">
                    {col.body}
                  </p>
                </div>

                {/* Bottom Feature Pill */}
                <div className="mt-8 pt-6 border-t border-[#333333] flex items-center justify-between text-xs font-bold">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black ${style.badge}`}>
                    {col.badge}
                  </span>
                  <span className="text-[#D0CBC3]/60 group-hover:text-[#D0CBC3] transition-colors">
                    Morrisville & Cary, NC
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atmosphere Perks Ribbon in Dark Grey #242424 */}
        <div className="mt-12 p-6 rounded-3xl bg-[#242424] border border-[#333333] shadow-xl flex flex-wrap items-center justify-around gap-6 text-sm text-[#FFF2DC] font-bold text-center">
          <div className="flex items-center gap-2 text-[#FFF2DC]">
            <Trees className="w-5 h-5 text-[#3D6B45]" />
            <span>Spacious Canopy Tree Shade</span>
          </div>
          <div className="flex items-center gap-2 text-[#FFF2DC]">
            <Dog className="w-5 h-5 text-[#FF8A24]" />
            <span>100% Dog Friendly Patio</span>
          </div>
          <div className="flex items-center gap-2 text-[#FFF2DC]">
            <ShieldCheck className="w-5 h-5 text-[#3D6B45]" />
            <span>Strict Halal & Pure Veg Kitchen</span>
          </div>
          <div className="flex items-center gap-2 text-[#FFF2DC]">
            <Sparkles className="w-5 h-5 text-[#FF8A24]" />
            <span>Evening Fairy String Lights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
