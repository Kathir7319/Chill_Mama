import React, { useState } from 'react';
import { CATERING_TIERS, CATERING_FAQS } from '@/data/mockData';
import { Sparkles, Check, ChevronDown, Users, DollarSign, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CateringSection() {
  const [selectedTier, setSelectedTier] = useState<string>('tier-2');
  const [guestCount, setGuestCount] = useState<number>(65);
  const [addChaiBar, setAddChaiBar] = useState<boolean>(true);
  const [addFairyLights, setAddFairyLights] = useState<boolean>(true);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inquiry Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Corporate Gathering',
    notes: '',
  });

  // Calculate Estimate
  const activeTierObj = CATERING_TIERS.find((t) => t.id === selectedTier) || CATERING_TIERS[1];
  const tierCost = guestCount * activeTierObj.basePricePerPerson;
  const chaiCost = addChaiBar ? 150 : 0;
  const lightsCost = addFairyLights ? 195 : 0;
  const estimatedTotal = tierCost + chaiCost + lightsCost;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.eventDate) return;

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#E94B20', '#FF8A24', '#FFF2DC', '#3D6B45'],
    });
    setFormSubmitted(true);
  };

  return (
    <section id="catering" className="py-20 bg-[#171717] text-[#D0CBC3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FF8A24]" />
            Full Truck & Private Events
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
            Bring the Chill Mama Vibe to Your Next Event!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D0CBC3] leading-relaxed font-normal">
            From backyard birthdays to major corporate lunches, we bring the truck, the lights, and the unbeatable fusion flavors.
          </p>
        </div>

        {/* Packages Tier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CATERING_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between ${
                  tier.highlight
                    ? 'bg-[#242424] border-[#FF8A24] shadow-2xl shadow-[#FF8A24]/10'
                    : 'bg-[#242424] border-[#333333] hover:border-[#FF8A24]/60 shadow-xl'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3.5 right-8 bg-[#E94B20] text-[#FFF2DC] font-black text-xs px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider border border-[#FF8A24]">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#FFF2DC]">{tier.title}</h3>
                    <p className="text-sm font-bold text-[#FF8A24] mt-1">
                      Best For: <span className="text-[#D0CBC3] font-normal">{tier.bestFor}</span>
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 py-5 border-y border-[#333333] mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-[#FFF2DC]">${tier.basePricePerPerson}</span>
                    <span className="text-sm text-[#D0CBC3]/70 font-semibold">/ guest (Min. {tier.minGuests} guests)</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-black uppercase tracking-wider text-[#FFF2DC] block mb-2">
                      Package Includes:
                    </span>
                    {tier.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#D0CBC3] font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#3D6B45]/20 border border-[#3D6B45]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#3D6B45]">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-[#E94B20] text-[#FFF2DC] shadow-lg shadow-[#E94B20]/25'
                      : 'bg-[#171717] hover:bg-[#333333] text-[#D0CBC3] border border-[#333333]'
                  }`}
                >
                  {isSelected ? '✓ Selected in Calculator Below' : 'Choose This Package'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Instant Catering Cost Estimator in Dark Grey #242424 */}
        <div className="bg-[#242424] border border-[#333333] rounded-3xl p-6 sm:p-12 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Calculator Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-black text-[#FF8A24] uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-[#FF8A24]" />
                Live Catering Estimator
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-[#FFF2DC]">
                Customize Your Event Pricing
              </h3>
              <p className="text-sm text-[#D0CBC3] font-normal">
                Adjust guest count and experiential add-ons to see an instantaneous transparent estimate.
              </p>

              {/* Guest Count Slider */}
              <div className="bg-[#171717] p-6 rounded-2xl border border-[#333333] shadow-md space-y-3.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-[#D0CBC3] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF8A24]" /> Estimated Guests:
                  </span>
                  <span className="text-2xl font-black text-[#FFF2DC]">{guestCount} People</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="350"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#E94B20] cursor-pointer h-2 bg-[#333333] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#D0CBC3]/60 font-semibold">
                  <span>25 guests (intimate)</span>
                  <span>150 guests (medium)</span>
                  <span>350+ (major festival)</span>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#FFF2DC] block">
                  Experiential Add-ons:
                </span>
                
                <label className="flex items-center justify-between p-4 rounded-xl border border-[#333333] bg-[#171717] cursor-pointer hover:border-[#FF8A24] transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addChaiBar}
                      onChange={(e) => setAddChaiBar(e.target.checked)}
                      className="rounded accent-[#E94B20] h-4 w-4"
                    />
                    <div>
                      <span className="text-sm font-bold text-[#FFF2DC] block">Steaming Cutting Chai Bar</span>
                      <span className="text-xs text-[#D0CBC3]/70">Brewed on-site with cardamom & ginger</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#3D6B45] bg-[#3D6B45]/15 px-2.5 py-1 rounded-lg border border-[#3D6B45]/30">
                    +$150
                  </span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl border border-[#333333] bg-[#171717] cursor-pointer hover:border-[#FF8A24] transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addFairyLights}
                      onChange={(e) => setAddFairyLights(e.target.checked)}
                      className="rounded accent-[#E94B20] h-4 w-4"
                    />
                    <div>
                      <span className="text-sm font-bold text-[#FFF2DC] block">Outdoor Fairy Light Canopy Rig</span>
                      <span className="text-xs text-[#D0CBC3]/70">Complete twilight picnic ambiance</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#3D6B45] bg-[#3D6B45]/15 px-2.5 py-1 rounded-lg border border-[#3D6B45]/30">
                    +$195
                  </span>
                </label>
              </div>

              {/* Live Cost Output */}
              <div className="p-6 rounded-2xl bg-[#171717] border border-[#333333] shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black text-[#D0CBC3]/70 uppercase tracking-wider">Estimated Investment:</span>
                    <p className="text-3xl sm:text-4xl font-black text-[#FFF2DC] mt-1">
                      ${estimatedTotal.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-[#D0CBC3]/70">(approx. ${(estimatedTotal / guestCount).toFixed(2)}/guest)</span>
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#D0CBC3]/50 mt-2">
                  *Excludes standard 7.25% NC sales tax and travel fee outside 25mi radius.
                </p>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-6 bg-[#171717] p-6 sm:p-8 rounded-3xl border border-[#333333] shadow-xl">
              <h4 className="text-xl font-black text-[#FFF2DC] mb-1">
                Lock In Your Date With Mama
              </h4>
              <p className="text-xs text-[#D0CBC3]/70 mb-6 font-medium">
                Receive our complete catering package menu and date confirmation within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#3D6B45] mx-auto" />
                  <h5 className="text-2xl font-black text-[#FFF2DC]">Inquiry Received!</h5>
                  <p className="text-sm text-[#D0CBC3] max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'friend'}! Mama’s catering manager will review your date ({formData.eventDate || 'soon'}) and follow up with a finalized proposal.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#FF8A24] font-bold underline hover:text-[#FFF2DC] pt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#242424] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="maya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#242424] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(919) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#242424] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Event Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-[#242424] border border-[#333333] rounded-xl px-4 py-2 text-xs text-[#FFF2DC] focus:outline-none focus:border-[#FF8A24]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-[#242424] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] focus:outline-none focus:border-[#FF8A24]"
                      >
                        <option>Corporate Lunch / Mixer</option>
                        <option>Wedding / Sangeet Celebration</option>
                        <option>Backyard Birthday / Anniversary</option>
                        <option>Graduation / Festival</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Special Venue or Dietary Notes</label>
                    <textarea
                      rows={2}
                      placeholder="Location, parking details, high vegetarian count, etc."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#242424] border border-[#333333] rounded-xl px-4 py-2 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Catering Request ({activeTierObj.title.split(':')[0]})</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Catering FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-[#FFF2DC] text-center mb-8">
            Frequently Asked Catering Questions
          </h3>

          <div className="space-y-3.5">
            {CATERING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-[#242424] border border-[#333333] rounded-2xl overflow-hidden shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-[#FFF2DC] hover:text-[#FF8A24] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF8A24] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#D0CBC3] leading-relaxed border-t border-[#333333] pt-3 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
