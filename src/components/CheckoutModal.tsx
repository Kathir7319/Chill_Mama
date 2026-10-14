'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, CheckCircle2, Sparkles, MapPin, Clock, CreditCard, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, items, total, clearCart } = useCart();
  const [pickupType, setPickupType] = useState<'window' | 'curbside'>('window');
  const [pickupTime, setPickupTime] = useState('asap');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [vehicleDesc, setVehicleDesc] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const randomOrder = 'CM-' + Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(randomOrder);
    setIsCompleted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#0284C7', '#0EA5E9', '#38BDF8', '#F59E0B'],
    });

    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border-2 border-sky-200 rounded-3xl max-w-lg w-full text-slate-800 overflow-hidden shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isCompleted ? (
          /* Order Confirmation Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-black text-sky-600 uppercase tracking-widest block mb-1">
                Order Received by Mama’s Kitchen
              </span>
              <h3 className="text-3xl font-black text-slate-900">Order #{orderNumber}</h3>
              <p className="text-sm text-slate-600 mt-2 font-normal">
                Thank you, <strong className="text-slate-900 font-bold">{customerName}</strong>! We&apos;ve fired up the grill and your dishes are being prepared fresh.
              </p>
            </div>

            {/* Pickup Details Card */}
            <div className="bg-sky-50/70 p-5 rounded-2xl border border-sky-200 text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Estimated Ready Time: In 14–18 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Pickup at: Chill Mama Truck • 10420 Chapel Hill Rd, Morrisville, NC 27560</span>
              </div>
              <p className="text-[11px] text-slate-500 border-t border-sky-100 pt-2 font-normal">
                An SMS confirmation has been simulated to <strong>{customerPhone}</strong>. Show this screen or your phone number at the food truck window.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm uppercase tracking-wider shadow-md shadow-sky-500/20"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-sky-600 block mb-1">
                Fast Online Pickup
              </span>
              <h3 className="text-2xl font-black text-slate-900">Complete Your Order</h3>
              <p className="text-xs text-slate-500 mt-1 font-normal">
                Pay at window or via simulated digital card. Total due: <strong className="text-sky-600 font-bold">${total.toFixed(2)}</strong>
              </p>
            </div>

            {/* Pickup Mode Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setPickupType('window')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  pickupType === 'window'
                    ? 'bg-white text-sky-700 font-black shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Window Walk-up
              </button>
              <button
                type="button"
                onClick={() => setPickupType('curbside')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  pickupType === 'curbside'
                    ? 'bg-white text-sky-700 font-black shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Curbside Car Delivery
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Turner"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Phone (for Ready SMS) *</label>
                <input
                  type="tel"
                  required
                  placeholder="(919) 555-0182"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              {pickupType === 'curbside' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Vehicle Model & Color (for runner) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Silver Honda CR-V (Hazard lights on)"
                    value={vehicleDesc}
                    onChange={(e) => setVehicleDesc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              )}
            </div>

            {/* Timing selection */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Pickup Timing:</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPickupTime('asap')}
                  className={`p-2.5 rounded-xl border-2 font-bold text-left ${
                    pickupTime === 'asap'
                      ? 'border-sky-500 bg-sky-50 text-sky-800 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <span className="block font-black">ASAP (Standard)</span>
                  <span className="text-[10px] font-normal text-slate-500">~14–18 minutes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPickupTime('later')}
                  className={`p-2.5 rounded-xl border-2 font-bold text-left ${
                    pickupTime === 'later'
                      ? 'border-sky-500 bg-sky-50 text-sky-800 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <span className="block font-black">Later Tonight</span>
                  <span className="text-[10px] font-normal text-slate-500">Specify in notes</span>
                </button>
              </div>
            </div>

            {/* Simulated Payment Badge */}
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 flex items-center justify-between text-xs text-sky-900 font-semibold">
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-sky-600" /> Pay with Apple Pay / Card at Window
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20 transition-transform active:scale-95"
            >
              Confirm & Fire Up Order (${total.toFixed(2)})
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
