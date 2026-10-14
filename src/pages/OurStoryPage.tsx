import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExperienceBlock from '@/components/ExperienceBlock';
import { Heart, Flame, ArrowRight, ChevronRight, Utensils } from 'lucide-react';

export default function OurStoryPage() {
  const storyGallery = [
    {
      image: '/images/dishes/chicken_frankie.jpg',
      title: 'Artisanal Frankie Rolls',
      desc: 'Hand-rolled parathas filled with freshly spiced fillings.',
    },
    {
      image: '/images/dishes/chicken_burger.jpg',
      title: 'CM Spicy Chicken Burger',
      desc: 'Tandoori burgers stacked high with signature mint aioli.',
    },
    {
      image: '/images/dishes/bun_maska.jpg',
      title: 'Irani Cafe Nostalgia',
      desc: 'Warm Bun Maska paired with steaming hot Cutting Chai.',
    },
    {
      image: '/images/dishes/crunch_chaat.jpg',
      title: 'Crunch Fix Chaats & Gobi Bites',
      desc: 'Authentic street bites packed with tangy chutneys and crunch.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />

      <main className="flex-1">
        {/* Vibrant Light Blue Page Header Banner */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-sky-50 via-sky-100/30 to-white border-b border-sky-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-sky-600">Our Story & Heritage</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                Women-Owned, Flavor-Driven
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                The Heart Behind the Spices
              </h1>
              <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                From our family kitchen in North Carolina to the lively streets of the Triangle. Learn how generations-old maternal recipes gave birth to our dream on wheels.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section with Exact Prompt Text & Photo Display */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-sky-500/10">
                  <Image
                    src="/images/natural_crowded_truck.jpg"
                    alt="Chill Mama food truck at twilight with crowded patrons"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-85" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-150 shadow-md">
                    <span className="text-xs font-black uppercase tracking-wider text-sky-600 block mb-1">
                      Morrisville & Cary, NC
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      Where traditional roadside dhaba culture meets the modern backyard social club.
                    </p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-white p-1.5 shadow-2xl shadow-sky-500/25 border-2 border-sky-200 rotate-3 z-20">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                    <Image
                      src="/images/chill_mama_logo.png"
                      alt="Chill Mama Street Bites Official Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Full Text Content from Prompt */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    Food has a unique power to bridge cultures, spark nostalgia, and bring people together. The vision for <strong className="text-sky-700 font-bold">Chill Mama</strong> started right in our family kitchen—a place where traditional Indian masalas met global street food cravings. As a women-led team, we set out to build an outdoor dining experience that reimagined the lively, late-night roadside stalls (the <em>dhaba</em> culture) of India, tailored right for the Triangle community.
                  </p>

                  <p>
                    &ldquo;Chill Mama&rdquo; represents the balancing act we love: the cozy, comforting essence of a mother&rsquo;s home-cooked meal mixed with a chilled-out, trendy backyard social club. Every burger patty is hand-crafted, our spices are roasted and ground in-house, and our signature chutneys are made fresh daily. We don&rsquo;t believe in shortcuts. We believe in bold recipes, welcoming spaces, and food that makes you feel good from the inside out.
                  </p>
                </div>

                {/* Core Philosophy Callouts in Light Blue */}
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-150 shadow-sm">
                    <Flame className="w-5 h-5 text-amber-500 fill-amber-500 mb-2" />
                    <h4 className="text-slate-900 font-bold text-sm">Roasted In-House</h4>
                    <p className="text-xs text-slate-500 mt-1">Whole spices toasted and ground daily for maximum fragrance.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-150 shadow-sm">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mb-2" />
                    <h4 className="text-slate-900 font-bold text-sm">Women-Powered</h4>
                    <p className="text-xs text-slate-500 mt-1">Generations-old maternal secrets in every single recipe.</p>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Explore the Menu</span>
                  </Link>

                  <Link
                    to="/catering"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border-2 border-sky-200 shadow-sm"
                  >
                    <span>Book For Private Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Chill Mama Experience 3-Column Block */}
        <ExperienceBlock />

        {/* Visual Photo Gallery */}
        <section className="py-20 bg-white border-t border-sky-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-sky-600">
                Moments & Flavors
              </span>
              <h3 className="text-3xl font-black text-slate-900 mt-1">
                Life Around the Truck
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {storyGallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative h-80 rounded-3xl overflow-hidden border-2 border-sky-100 hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl hover:shadow-sky-500/10"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h4 className="text-base font-black text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
