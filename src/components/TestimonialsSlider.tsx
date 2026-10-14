import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#171717] border-t border-[#333333] text-[#D0CBC3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Heart className="w-4 h-4 text-[#E94B20] fill-[#E94B20]" />
            Loved by Triangle Locals
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
            What Foodies Are Saying
          </h2>
          <p className="mt-3 text-[#D0CBC3] text-base font-normal">
            From Cary residents to Morrisville late-nighters and RTP corporate teams.
          </p>
        </div>

        {/* Carousel Card Container in Dark Grey #242424 */}
        <div className="relative bg-[#242424] border border-[#333333] rounded-3xl p-8 sm:p-14 shadow-2xl max-w-4xl mx-auto overflow-hidden">
          {/* Subtle Quote Background Icon */}
          <Quote className="absolute -top-6 -right-6 w-44 h-44 text-[#333333]/40 rotate-12 pointer-events-none" />

          {/* Stars in Ember Orange #FF8A24 */}
          <div className="flex items-center gap-1.5 mb-6 justify-center sm:justify-start">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF8A24] text-[#FF8A24]" />
            ))}
            <span className="text-xs font-black text-[#FFF2DC] ml-2 bg-[#171717] border border-[#333333] px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
              5.0 Star Rating
            </span>
          </div>

          {/* Quote Text in Warm Cream #FFF2DC */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFF2DC] leading-relaxed mb-8 text-center sm:text-left min-h-[110px] flex items-center">
            &ldquo;{activeReview.quote}&rdquo;
          </blockquote>

          {/* Author Details & Slider Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#333333]">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-[#FFF2DC] flex items-center justify-center sm:justify-start gap-2">
                <span>{activeReview.author}</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40">
                  {activeReview.tag}
                </span>
              </h4>
              <p className="text-sm text-[#D0CBC3]/70 mt-0.5 font-normal">{activeReview.location}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-[#171717] border border-[#333333] hover:border-[#FF8A24] text-[#D0CBC3] hover:text-[#FFF2DC] transition-all shadow-md active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-[#E94B20]' : 'w-2 bg-[#333333] hover:bg-[#FF8A24]/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-[#171717] border border-[#333333] hover:border-[#FF8A24] text-[#D0CBC3] hover:text-[#FFF2DC] transition-all shadow-md active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
