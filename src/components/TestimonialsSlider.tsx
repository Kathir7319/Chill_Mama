'use client';

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
    <section className="py-20 bg-white border-t border-sky-100 text-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            Loved by Triangle Locals
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            What Foodies Are Saying
          </h2>
          <p className="mt-3 text-slate-600 text-base font-normal">
            From Cary residents to Morrisville late-nighters and RTP corporate teams.
          </p>
        </div>

        {/* Carousel Card Container in Clean White & Sky Blue */}
        <div className="relative bg-sky-50/70 border-2 border-sky-200 rounded-3xl p-8 sm:p-14 shadow-lg shadow-sky-500/5 max-w-4xl mx-auto overflow-hidden">
          {/* Subtle Quote Background Icon */}
          <Quote className="absolute -top-6 -right-6 w-44 h-44 text-sky-200/50 rotate-12 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-6 justify-center sm:justify-start">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-black text-sky-800 ml-2 bg-white border border-sky-200 px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
              5.0 Star Rating
            </span>
          </div>

          {/* Quote Text */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-relaxed mb-8 text-center sm:text-left min-h-[110px] flex items-center">
            &ldquo;{activeReview.quote}&rdquo;
          </blockquote>

          {/* Author Details & Slider Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-sky-200/80">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                <span>{activeReview.author}</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {activeReview.tag}
                </span>
              </h4>
              <p className="text-sm text-slate-500 mt-0.5 font-normal">{activeReview.location}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white border border-sky-200 hover:border-sky-400 text-slate-700 hover:text-sky-600 transition-all shadow-sm active:scale-95"
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
                      currentIndex === idx ? 'w-6 bg-sky-500' : 'w-2 bg-sky-200 hover:bg-sky-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-white border border-sky-200 hover:border-sky-400 text-slate-700 hover:text-sky-600 transition-all shadow-sm active:scale-95"
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
