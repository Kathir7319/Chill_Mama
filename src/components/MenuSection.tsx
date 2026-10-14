import React, { useState, useMemo } from 'react';
import Image from '@/components/Image';
import { MENU_ITEMS } from '@/data/mockData';
import { MenuItem, SpiceLevel } from '@/types';
import { useCart } from '@/context/CartContext';
import { Search, Flame, Plus, Check, Sparkles, Filter, X } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'frankies', label: 'Signature Frankies' },
  { id: 'burgers', label: 'Fusion Burgers' },
  { id: 'bites', label: 'Bite Zone Sides' },
  { id: 'chaats', label: 'Street Chaats' },
  { id: 'sweets', label: 'Bakery & Sweets' },
  { id: 'beverages', label: 'Specialty Sips' },
];

const DIETARY_FILTERS = ['All', 'Halal', 'Vegetarian', 'Vegan', 'Gluten-Free Option'];

const SPICE_OPTIONS: SpiceLevel[] = [
  'Mild (Gentle Masala)',
  "Mama's Classic (Warm Kick)",
  'Extra Desi Fire 🔥🔥🔥',
];

export default function MenuSection() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietFilter, setActiveDietFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Customization Modal State
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [chosenSpice, setChosenSpice] = useState<SpiceLevel>("Mama's Classic (Warm Kick)");
  const [specialNote, setSpecialNote] = useState('');
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDiet =
        activeDietFilter === 'All' ||
        item.tags.includes(activeDietFilter as any);
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, activeDietFilter, searchQuery]);

  const handleOpenCustomize = (item: MenuItem) => {
    setSelectedItemForModal(item);
    setChosenSpice(item.spiceLevelDefault || "Mama's Classic (Warm Kick)");
    setSpecialNote('');
  };

  const handleConfirmAddToCart = () => {
    if (!selectedItemForModal) return;
    addItem(selectedItemForModal, chosenSpice, specialNote.trim() || undefined);
    const itemName = selectedItemForModal.name;
    setSelectedItemForModal(null);
    setAddedNotice(itemName);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2500);
  };

  return (
    <section id="menu" className="py-20 bg-[#171717] text-[#D0CBC3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FF8A24]" />
            Crafted Daily on Wheels
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
            The Chill Mama Menu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#D0CBC3] font-normal">
            Hand-ground masalas, 100% Halal meats, fresh artisanal rolls, and nostalgic Irani bakery treats.
          </p>
        </div>

        {/* Search & Dietary Filters Bar in Dark Grey #242424 */}
        <div className="bg-[#242424] border border-[#333333] rounded-3xl p-5 sm:p-7 mb-10 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#FF8A24] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Frankies, Chai, Burgers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#171717] border border-[#333333] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D0CBC3] hover:text-[#FFF2DC]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-black text-[#D0CBC3] uppercase tracking-wider flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#FF8A24]" /> Filter:
              </span>
              {DIETARY_FILTERS.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setActiveDietFilter(diet)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                    activeDietFilter === diet
                      ? 'bg-[#3D6B45] text-[#FFF2DC] shadow-md font-black border border-[#3D6B45]'
                      : 'bg-[#171717] text-[#D0CBC3] hover:text-[#FFF2DC] border border-[#333333] hover:border-[#FF8A24]'
                  }`}
                >
                  {diet === 'All' ? 'All Diets' : diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-[#333333]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#E94B20] text-[#FFF2DC] shadow-md font-black'
                    : 'text-[#D0CBC3] hover:text-[#FFF2DC] hover:bg-[#171717]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid in Dark Grey #242424 Cards */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#242424] rounded-3xl border border-[#333333]">
            <p className="text-[#D0CBC3] text-base">No dishes found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDietFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] text-xs font-black rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#242424] rounded-3xl border border-[#333333] hover:border-[#FF8A24] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[#E94B20]/10"
              >
                <div>
                  {/* Item Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#171717]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Price Tag in Warm Cream #FFF2DC */}
                    <div className="absolute bottom-3 right-3 bg-[#171717]/90 backdrop-blur-md px-3.5 py-1 rounded-xl border border-[#333333] font-black text-[#FFF2DC] text-sm shadow-md">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-md uppercase tracking-wider ${
                            t === 'Halal'
                              ? 'bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40'
                              : t === 'Vegetarian'
                              ? 'bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40'
                              : t === 'Vegan'
                              ? 'bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40'
                              : 'bg-[#FF8A24]/20 text-[#FF8A24] border border-[#FF8A24]/40'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Item Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#FFF2DC] group-hover:text-[#FF8A24] transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#D0CBC3] leading-relaxed line-clamp-3 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0 border-t border-[#333333] mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D0CBC3]/70">
                    {item.spiceLevelDefault && (
                      <span className="flex items-center gap-1 text-[#FF8A24]">
                        <Flame className="w-3.5 h-3.5 fill-[#FF8A24]" />
                        {item.spiceLevelDefault.split(' ')[0]}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenCustomize(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] transition-all shadow-md shadow-[#E94B20]/25 active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Customize & Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toast Notice */}
        {addedNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#E94B20] text-[#FFF2DC] font-black px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-bounce border border-[#FF8A24]">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Added {addedNotice} to your order!</span>
          </div>
        )}

        {/* Customization Modal in Dark Grey #242424 */}
        {selectedItemForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#242424] border border-[#333333] rounded-3xl max-w-lg w-full p-6 sm:p-8 text-[#D0CBC3] relative shadow-2xl">
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#171717] hover:bg-[#333333] text-[#D0CBC3] hover:text-[#FFF2DC] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-18 h-18 rounded-2xl overflow-hidden shrink-0 border border-[#333333]">
                  <Image
                    src={selectedItemForModal.image}
                    alt={selectedItemForModal.name}
                    width={72}
                    height={72}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#FFF2DC]">{selectedItemForModal.name}</h3>
                  <p className="text-[#FF8A24] font-black text-base mt-0.5">
                    ${selectedItemForModal.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Spice Level Selection */}
              <div className="mt-6">
                <label className="text-xs font-black uppercase tracking-wider text-[#D0CBC3] block mb-2 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#FF8A24] fill-[#FF8A24]" />
                  Select Mama’s Spice Heat Level:
                </label>
                <div className="space-y-2.5">
                  {SPICE_OPTIONS.map((spice) => (
                    <label
                      key={spice}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        chosenSpice === spice
                          ? 'border-[#FF8A24] bg-[#FF8A24]/15 text-[#FFF2DC] font-bold shadow-md'
                          : 'border-[#333333] bg-[#171717] text-[#D0CBC3] hover:border-[#FF8A24]/50'
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{spice}</span>
                      <input
                        type="radio"
                        name="spice"
                        checked={chosenSpice === spice}
                        onChange={() => setChosenSpice(spice)}
                        className="text-[#E94B20] focus:ring-[#FF8A24] h-4 w-4"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mt-5">
                <label className="text-xs font-black uppercase tracking-wider text-[#D0CBC3] block mb-2">
                  Special Kitchen Notes (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra mint chutney on the side, no raw onions..."
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full bg-[#171717] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                />
              </div>

              {/* Confirm CTA */}
              <div className="mt-7 flex items-center gap-3">
                <button
                  onClick={() => setSelectedItemForModal(null)}
                  className="w-1/3 py-3 rounded-xl bg-[#171717] hover:bg-[#333333] text-xs font-bold text-[#D0CBC3] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmAddToCart}
                  className="w-2/3 py-3 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 transition-transform active:scale-95"
                >
                  Add to Cart • ${selectedItemForModal.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
