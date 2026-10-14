import React from 'react';
import Image from '@/components/Image';
import { Sparkles, Heart, Flame, ShieldCheck, Award } from 'lucide-react';

export default function OurStorySection() {
  return (
    <section id="our-story" className="py-20 bg-[#171717] text-[#D0CBC3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative h-[420px] rounded-3xl overflow-hidden border-4 border-[#242424] shadow-2xl">
                <Image
                  src="/images/natural_crowded_truck.jpg"
                  alt="Chill Mama Food Truck with bustling natural crowd under fairy string lights"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#242424]/95 backdrop-blur-md border border-[#333333] shadow-md">
                  <p className="text-xs font-black text-[#FF8A24] uppercase tracking-wider">
                    Late Night Dhaba Culture
                  </p>
                  <p className="text-sm font-bold text-[#FFF2DC] mt-1">
                    Reimagined for the Triangle Community, NC
                  </p>
                </div>
              </div>

              {/* Floating Small Inset */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#242424] shadow-2xl">
                <Image
                  src="/images/bun_maska_chai.jpg"
                  alt="Bun Maska and Cutting Chai"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-6 bg-[#E94B20] text-[#FFF2DC] font-black p-4 rounded-2xl shadow-xl shadow-[#E94B20]/25 rotate-[-3deg] border border-[#FF8A24]">
                <div className="text-2xl font-black leading-none">100%</div>
                <div className="text-[11px] font-bold tracking-tight uppercase mt-0.5">
                  Women-Led
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Biography Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#E94B20] fill-[#E94B20]" />
              Our Authentic Heritage
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight leading-tight">
              The Heart Behind the Spices
            </h2>

            <div className="space-y-5 text-[#D0CBC3] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Food has a unique power to bridge cultures, spark nostalgia, and bring people together. The vision for <strong className="text-[#FF8A24] font-bold">Chill Mama</strong> started right in our family kitchen—a place where traditional Indian masalas met global street food cravings. As a women-led team, we set out to build an outdoor dining experience that reimagined the lively, late-night roadside stalls (the <em>dhaba</em> culture) of India, tailored right for the Triangle community.
              </p>

              <p>
                &ldquo;Chill Mama&rdquo; represents the balancing act we love: the cozy, comforting essence of a mother&rsquo;s home-cooked meal mixed with a chilled-out, trendy backyard social club. Every burger patty is hand-crafted, our spices are roasted and ground in-house, and our signature chutneys are made fresh daily. We don&rsquo;t believe in shortcuts. We believe in bold recipes, welcoming spaces, and food that makes you feel good from the inside out.
              </p>
            </div>

            {/* Core Pillars Grid in Dark Grey #242424 */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#333333]">
              <div className="bg-[#242424] p-4 rounded-2xl border border-[#333333] shadow-md">
                <Flame className="w-5 h-5 text-[#E94B20] fill-[#E94B20] mb-2" />
                <h4 className="text-[#FFF2DC] font-bold text-sm">House-Ground</h4>
                <p className="text-xs text-[#D0CBC3]/70 mt-1">Whole spices roasted in small batches</p>
              </div>

              <div className="bg-[#242424] p-4 rounded-2xl border border-[#333333] shadow-md">
                <Award className="w-5 h-5 text-[#FF8A24] mb-2" />
                <h4 className="text-[#FFF2DC] font-bold text-sm">Hand-Crafted</h4>
                <p className="text-xs text-[#D0CBC3]/70 mt-1">Fresh burger patties & artisanal wraps</p>
              </div>

              <div className="bg-[#242424] p-4 rounded-2xl border border-[#333333] shadow-md">
                <Sparkles className="w-5 h-5 text-[#FF8A24] mb-2" />
                <h4 className="text-[#FFF2DC] font-bold text-sm">Fresh Daily</h4>
                <p className="text-xs text-[#D0CBC3]/70 mt-1">Scratch mint, date & garlic chutneys</p>
              </div>

              <div className="bg-[#242424] p-4 rounded-2xl border border-[#333333] shadow-md">
                <ShieldCheck className="w-5 h-5 text-[#3D6B45] mb-2" />
                <h4 className="text-[#FFF2DC] font-bold text-sm">Zero Shortcuts</h4>
                <p className="text-xs text-[#D0CBC3]/70 mt-1">Honest ingredients, maternal warmth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
