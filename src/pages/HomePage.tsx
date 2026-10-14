import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceBlock from '@/components/ExperienceBlock';
import ChefsPairings from '@/components/ChefsPairings';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import Footer from '@/components/Footer';
import { Flame, ArrowRight, Utensils, Heart, Calendar, MapPin } from 'lucide-react';

export default function HomePage() {
  const previewHighlights = [
    {
      title: 'Artisanal Frankie Rolls',
      badge: 'Bestseller',
      image: '/images/dishes/chicken_frankie.jpg',
      desc: 'Tandoori spiced chicken & grilled paneer rolled in buttery flaky parathas with scratch mint chutney.',
      tag: '100% Halal & Veg',
    },
    {
      title: 'Fusion Brioche Burgers',
      badge: "Mama's Craft",
      image: '/images/dishes/chicken_burger.jpg',
      desc: 'Buttermilk fried tandoori chicken or crisp masala aloo tikki on toasted brioche with spicy makhani drizzle.',
      tag: 'Hand-Crafted Patties',
    },
    {
      title: 'Late-Night Irani Bakery',
      badge: 'Comfort Classic',
      image: '/images/dishes/bun_maska.jpg',
      desc: 'Soft warm Mumbai Bun Maska with rich cardamom butter dunked in hot spiced Assam Cutting Chai.',
      tag: 'Sweet Comfort',
    },
    {
      title: 'Crunchy Bite Zone & Chaats',
      badge: 'Street Legend',
      image: '/images/dishes/crunch_chaat.jpg',
      desc: 'Crushed deconstructed samosa chaat with whipped yogurt, crunchy Gobi bites, and fiery Peri Peri fries.',
      tag: 'Pure Veg & Vegan',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#171717] text-[#D0CBC3]">
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <Hero />

        {/* The "Chill Mama Experience" Three-Column Feature Block */}
        <ExperienceBlock />

        {/* Signature Cravings Showcase in Dark Grey #242424 Cards */}
        <section className="py-20 bg-[#171717] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242424] border border-[#333333] text-[#FF8A24] text-xs font-black uppercase tracking-wider mb-3">
                  <Flame className="w-4 h-4 text-[#E94B20] fill-[#E94B20]" />
                  Street Food Soul. Fusion Attitude.
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
                  Taste the Crave
                </h2>
                <p className="mt-3 text-base sm:text-lg text-[#D0CBC3] max-w-xl font-normal">
                  Bold spices roasted and ground in-house, folded into modern street eats made fresh to order.
                </p>
              </div>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] shadow-lg shadow-[#E94B20]/25 transition-all self-start md:self-auto"
              >
                <Utensils className="w-4 h-4" />
                <span>View Full Menu & Order</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-[#242424] border border-[#333333] hover:border-[#FF8A24] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[#E94B20]/10"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-[#171717]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <span className="absolute top-3 left-3 bg-[#171717]/90 backdrop-blur-md text-[#FF8A24] border border-[#333333] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-black text-[#3D6B45] uppercase tracking-wider block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-xl font-black text-[#FFF2DC] group-hover:text-[#FF8A24] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#D0CBC3] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#333333] flex items-center justify-between">
                      <Link
                        to="/menu"
                        className="text-xs font-black text-[#FF8A24] hover:text-[#FFF2DC] flex items-center gap-1 group-hover:underline"
                      >
                        <span>Customize & Order</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chef's Pairings Preview Section */}
        <ChefsPairings />

        {/* "Our Story" Spotlight Banner in Dark Grey #242424 */}
        <section className="py-20 bg-[#242424] border-y border-[#333333] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border-4 border-[#171717] shadow-2xl">
                  <Image
                    src="/images/natural_crowded_truck.jpg"
                    alt="Chill Mama food truck with natural crowd and lively atmosphere"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#171717]/95 backdrop-blur-md border border-[#333333] shadow-md">
                    <p className="text-xs font-black text-[#FF8A24] uppercase tracking-wider">
                      Generations of Flavor
                    </p>
                    <p className="text-sm font-bold text-[#FFF2DC]">
                      Women-Owned & Driven by Maternal Hospitality
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E94B20]/15 border border-[#E94B20]/30 text-[#FF8A24] text-xs font-black uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 text-[#E94B20] fill-[#E94B20]" />
                  Our Heritage
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-[#FFF2DC] tracking-tight">
                  The Heart Behind the Spices
                </h2>
                <p className="text-sm sm:text-base text-[#D0CBC3] leading-relaxed font-normal">
                  Food has a unique power to bridge cultures, spark nostalgia, and bring people together. The vision for <strong className="text-[#FF8A24] font-bold">Chill Mama</strong> started right in our family kitchen—a place where traditional Indian masalas met global street food cravings.
                </p>
                <p className="text-sm sm:text-base text-[#D0CBC3] leading-relaxed font-normal">
                  Every burger patty is hand-crafted, our spices are roasted and ground in-house, and our signature chutneys are made fresh daily. We don&apos;t believe in shortcuts. We believe in bold recipes and welcoming open-air spaces.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/our-story"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] shadow-lg shadow-[#E94B20]/25 transition-all"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/catering"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#171717] hover:bg-[#242424] border border-[#333333] hover:border-[#FF8A24] shadow-sm transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#FF8A24]" />
                    <span>Catering & Private Events</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Truck Quick Radar in Dark Grey #242424 */}
        <section className="py-20 bg-[#171717] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#242424] border border-[#333333] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D6B45]/20 text-[#3D6B45] border border-[#3D6B45]/40 text-xs font-black uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3D6B45] animate-ping"></span>
                  <span>LIVE TONIGHT IN MORRISVILLE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#FFF2DC]">
                  Join Us Under the Fairy Lights
                </h3>
                <p className="text-sm text-[#D0CBC3] leading-relaxed font-normal">
                  Parked at <strong className="text-[#FFF2DC] font-bold">10420 Chapel Hill Rd, Morrisville, NC 27560</strong> until 10:30 PM. Relax at our tree-shaded picnic tables with family, friends, and pets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/find-us"
                  className="px-7 py-4 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#E94B20] hover:bg-[#FF8A24] shadow-lg shadow-[#E94B20]/25 flex items-center justify-center gap-2 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View Weekly Stops & GPS</span>
                </Link>
                <Link
                  to="/menu"
                  className="px-7 py-4 rounded-xl font-black text-xs uppercase tracking-wider text-[#FFF2DC] bg-[#171717] hover:bg-[#242424] border border-[#333333] hover:border-[#FF8A24] shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Utensils className="w-4 h-4 text-[#FF8A24]" />
                  <span>Order Pickup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Slider */}
        <TestimonialsSlider />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
