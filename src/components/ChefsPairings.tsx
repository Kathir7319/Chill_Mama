import React, { useState } from 'react';
import Image from '@/components/Image';
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
    <section id="pairings" className="py-20 bg-[#171717] text-[#D0CBC3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-[#FF8A24]" />
              Curated Flavor Pairings
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
              Chef’s Pairing Combos
            </h2>
            <p className="mt-3 text-[#D0CBC3] text-base sm:text-lg max-w-xl font-normal">
              Thoughtfully engineered combinations balancing heat, crunchy texture, and chilled sweetness. Tested, tasted, and approved by Mama.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-black text-[#FFF2DC] bg-[#242424] border border-[#333333] px-5 py-3 rounded-2xl shadow-md self-start md:self-auto">
            <Flame className="w-4 h-4 text-[#E94B20] fill-[#E94B20]" />
            <span>SPECIAL BUNDLE: SAVE 15% ON FULL PAIRINGS</span>
          </div>
        </div>

        {/* Pairings Cards Grid in Dark Grey #242424 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHEF_PAIRINGS.map((pairing) => {
            const isJustAdded = addedId === pairing.id;

            return (
              <div
                key={pairing.id}
                className="group relative bg-[#242424] rounded-3xl overflow-hidden border border-[#333333] hover:border-[#FF8A24] transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[#E94B20]/10 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-[#171717]">
                  <Image
                    src={pairing.image}
                    alt={pairing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-[#171717]/90 backdrop-blur-md text-[#FF8A24] border border-[#333333] text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                    {pairing.badge}
                  </span>

                  {/* Savings Pill in Herb Green #3D6B45 */}
                  <span className="absolute top-4 right-4 bg-[#3D6B45] text-[#FFF2DC] text-xs font-black px-3 py-1 rounded-full shadow-md">
                    Save ${(pairing.regularPrice - pairing.price).toFixed(2)}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF8A24] block mb-1">
                      {pairing.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-[#FFF2DC] mb-2 group-hover:text-[#FF8A24] transition-colors">
                      {pairing.title}
                    </h3>
                    <p className="text-sm text-[#D0CBC3] leading-relaxed mb-6 font-normal">
                      {pairing.description}
                    </p>

                    {/* What's Inside */}
                    <div className="space-y-2 mb-6 bg-[#171717] p-4 rounded-2xl border border-[#333333]">
                      <span className="text-xs font-black text-[#FFF2DC] uppercase tracking-wide block">
                        Included in this combo:
                      </span>
                      {pairing.itemsIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#D0CBC3] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3D6B45] shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Add Button */}
                  <div className="pt-4 border-t border-[#333333] flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#FFF2DC]">
                          ${pairing.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-[#D0CBC3]/50 line-through">
                          ${pairing.regularPrice.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#D0CBC3]/70 font-medium">Tax calculated at pickup</span>
                    </div>

                    <button
                      onClick={() => handleAdd(pairing)}
                      disabled={isJustAdded}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                        isJustAdded
                          ? 'bg-[#3D6B45] text-[#FFF2DC]'
                          : 'bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] shadow-lg shadow-[#E94B20]/25'
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
        <div className="mt-14 bg-[#242424] border border-[#333333] rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#171717] border border-[#333333] flex items-center justify-center text-[#FF8A24] shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-black text-[#FFF2DC] flex items-center gap-2">
                  <span>Mama’s Kitchen Safety & Allergen Transparency</span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#171717] text-[#FF8A24] border border-[#333333]">
                    Important Notes
                  </span>
                </h4>
                <p className="text-sm text-[#D0CBC3] mt-1 font-normal">
                  We believe in 100% honesty about what goes into your food.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Nut Free Note */}
                <div className="bg-[#171717] p-4 rounded-2xl border border-[#333333] shadow-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#FF8A24] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-black text-[#FFF2DC] block mb-1">
                      Nut-Free Savory Kitchen
                    </span>
                    <p className="text-xs text-[#D0CBC3] leading-relaxed font-normal">
                      The majority of our savory food menu is prepared <strong>nut-free</strong>. However, please notify our window team of any severe tree nut or peanut allergies prior to placing your order. (Note: select traditional dessert garnishes like Badam Milk contain nuts).
                    </p>
                  </div>
                </div>

                {/* Gluten Free Options */}
                <div className="bg-[#171717] p-4 rounded-2xl border border-[#333333] shadow-sm flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#3D6B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-black text-[#FFF2DC] block mb-1">
                      Gluten-Free Modifications Available
                    </span>
                    <p className="text-xs text-[#D0CBC3] leading-relaxed font-normal">
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
