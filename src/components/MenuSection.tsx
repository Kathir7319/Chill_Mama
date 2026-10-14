import React, { useState, useMemo } from 'react';
import Image from '@/components/Image';
import { MENU_ITEMS } from '@/data/mockData';
import { MenuItem, SpiceLevel } from '@/types';
import { useCart } from '@/context/CartContext';
import { Search, Flame, Plus, Check, Sparkles, Filter, X, ShieldCheck } from 'lucide-react';

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
  'Mama\'s Classic (Warm Kick)',
  'Extra Desi Fire 🔥🔥🔥',
];

export default function MenuSection() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietFilter, setActiveDietFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Customization Modal State
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [chosenSpice, setChosenSpice] = useState<SpiceLevel>('Mama\'s Classic (Warm Kick)');
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
    setChosenSpice(item.spiceLevelDefault || 'Mama\'s Classic (Warm Kick)');
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
    <section id="menu" className="py-20 bg-slate-50/70 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-sky-600" />
            Crafted Daily on Wheels
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Chill Mama Menu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Hand-ground masalas, 100% Halal meats, fresh artisanal rolls, and nostalgic Irani bakery treats.
          </p>
        </div>

        {/* Search & Dietary Filters Bar in Crisp White Card */}
        <div className="bg-white border-2 border-sky-100 rounded-3xl p-5 sm:p-7 mb-10 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-sky-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Frankies, Chai, Burgers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-black text-slate-600 uppercase tracking-wider flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-sky-600" /> Filter:
              </span>
              {DIETARY_FILTERS.map((diet) => (
                <button
                  key={diet}
                  onClick={() => setActiveDietFilter(diet)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                    activeDietFilter === diet
                      ? 'bg-sky-500 text-white shadow-sm font-black'
                      : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
                  }`}
                >
                  {diet === 'All' ? 'All Diets' : diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-sky-500 text-white shadow-sm font-black'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid in Clean White Cards */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-sky-100">
            <p className="text-slate-500 text-base">No dishes found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDietFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-sky-500 text-white text-xs font-black rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl border-2 border-sky-100 hover:border-sky-300 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div>
                  {/* Item Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Price Tag in Sky Blue Pill */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-xl border border-sky-200 font-black text-sky-700 text-sm shadow-md">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm backdrop-blur-md uppercase tracking-wider ${
                            t === 'Halal'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : t === 'Vegetarian'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : t === 'Vegan'
                              ? 'bg-teal-50 text-teal-700 border border-teal-200'
                              : 'bg-sky-50 text-sky-700 border border-sky-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Item Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    {item.spiceLevelDefault && (
                      <span className="flex items-center gap-1 text-amber-600">
                        <Flame className="w-3.5 h-3.5 fill-amber-500" />
                        {item.spiceLevelDefault.split(' ')[0]}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenCustomize(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-md shadow-sky-500/15 active:scale-95"
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
          <div className="fixed bottom-6 right-6 z-50 bg-sky-600 text-white font-black px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>Added {addedNotice} to your order!</span>
          </div>
        )}

        {/* Customization Modal in Crisp White */}
        {selectedItemForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border-2 border-sky-100 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-800 relative shadow-2xl">
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-18 h-18 rounded-2xl overflow-hidden shrink-0 border border-sky-200">
                  <Image
                    src={selectedItemForModal.image}
                    alt={selectedItemForModal.name}
                    width={72}
                    height={72}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">{selectedItemForModal.name}</h3>
                  <p className="text-sky-600 font-black text-base mt-0.5">
                    ${selectedItemForModal.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Spice Level Selection */}
              <div className="mt-6">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  Select Mama’s Spice Heat Level:
                </label>
                <div className="space-y-2.5">
                  {SPICE_OPTIONS.map((spice) => (
                    <label
                      key={spice}
                      className={`flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        chosenSpice === spice
                          ? 'border-sky-500 bg-sky-50 text-sky-900 font-bold shadow-sm'
                          : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-sky-200'
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{spice}</span>
                      <input
                        type="radio"
                        name="spice"
                        checked={chosenSpice === spice}
                        onChange={() => setChosenSpice(spice)}
                        className="text-sky-600 focus:ring-sky-500 h-4 w-4"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mt-5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                  Special Kitchen Notes (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra mint chutney on the side, no raw onions..."
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              {/* Confirm CTA */}
              <div className="mt-7 flex items-center gap-3">
                <button
                  onClick={() => setSelectedItemForModal(null)}
                  className="w-1/3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmAddToCart}
                  className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-sky-500/20 transition-transform active:scale-95"
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
