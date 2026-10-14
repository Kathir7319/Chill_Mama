'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CHEF_PAIRINGS } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { ChefPairing } from '@/types';
import { Sparkles, Plus, Check, Info, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';

export default function ChefsPairings() {
  const { addPairing } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (pairing: ChefPairing) => {
    addPairing(pairing);
    setAddedId(pairing.id);
    setTimeout(() => {
      setAddedId(null);
    }, 2000);
  };

  return (
    <section id="pairings" className="py-20 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-sky-500" />
              Curated Flavor Pairings
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Chef’s Pairing Combos
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-xl font-normal">
              Thoughtfully engineered combinations balancing heat, crunchy texture, and chilled sweetness. Tested, tasted, and approved by Mama.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-black text-sky-800 bg-sky-50 border-2 border-sky-200 px-5 py-3 rounded-2xl shadow-sm self-start md:self-auto">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>SPECIAL BUNDLE: SAVE 15% ON FULL PAIRINGS</span>
          </div>
        </div>

        {/* Pairings Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHEF_PAIRINGS.map((pairing) => {
            const isJustAdded = addedId === pairing.id;

            return (
              <div
                key={pairing.id}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-sky-100 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={pairing.image}
                    alt={pairing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-sky-700 border border-sky-200 text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                    {pairing.badge}
                  </span>

                  {/* Savings Pill */}
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                    Save ${(pairing.regularPrice - pairing.price).toFixed(2)}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-sky-600 block mb-1">
                      {pairing.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                      {pairing.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {pairing.description}
                    </p>

                    {/* What's Inside */}
                    <div className="space-y-2 mb-6 bg-sky-50/70 p-4 rounded-2xl border border-sky-100">
                      <span className="text-xs font-black text-sky-800 uppercase tracking-wide block">
                        Included in this combo:
                      </span>
                      {pairing.itemsIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Add Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-sky-600">
                          ${pairing.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ${pairing.regularPrice.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">Tax calculated at pickup</span>
                    </div>

                    <button
                      onClick={() => handleAdd(pairing)}
                      disabled={isJustAdded}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                        isJustAdded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-sky-500/20'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[3]" />
                          <span>Add Combo</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Allergen & Ingredient Disclaimers Banner */}
        <div className="mt-14 bg-sky-50/80 border-2 border-sky-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>Mama’s Kitchen Safety & Allergen Transparency</span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-800">
                    Important Notes
                  </span>
                </h4>
                <p className="text-sm text-slate-600 mt-1 font-normal">
                  We believe in 100% honesty about what goes into your food.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Nut Free Note */}
                <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-black text-slate-900 block mb-1">
                      Nut-Free Savory Kitchen
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      The majority of our savory food menu is prepared <strong>nut-free</strong>. However, please notify our window team of any severe tree nut or peanut allergies prior to placing your order. (Note: select traditional dessert garnishes like Badam Milk contain nuts).
                    </p>
                  </div>
                </div>

                {/* Gluten Free Options */}
                <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-sm flex items-start gap-3">
                  <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-black text-slate-900 block mb-1">
                      Gluten-Free Modifications Available
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Our dynamic <strong>Bite Zone</strong> sides (like our Peri Peri Fries and Gunpowder Fries) and select street chaats can be prepared gluten-free. Ask our window staff for modifications upon pickup!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
