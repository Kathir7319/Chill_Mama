import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, CheckCircle2, MapPin, Clock, CreditCard, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, total, clearCart } = useCart();
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
      colors: ['#E94B20', '#FF8A24', '#FFF2DC', '#3D6B45'],
    });

    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#242424] border border-[#333333] rounded-3xl max-w-lg w-full text-[#D0CBC3] overflow-hidden shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#171717] hover:bg-[#333333] text-[#D0CBC3] hover:text-[#FFF2DC] z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isCompleted ? (
          /* Order Confirmation Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#3D6B45]/20 border border-[#3D6B45]/40 text-[#3D6B45] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-black text-[#FF8A24] uppercase tracking-widest block mb-1">
                Order Received by Mama’s Kitchen
              </span>
              <h3 className="text-3xl font-black text-[#FFF2DC]">Order #{orderNumber}</h3>
              <p className="text-sm text-[#D0CBC3] mt-2 font-normal">
                Thank you, <strong className="text-[#FFF2DC] font-bold">{customerName}</strong>! We&apos;ve fired up the grill and your dishes are being prepared fresh.
              </p>
            </div>

            {/* Pickup Details Card */}
            <div className="bg-[#171717] p-5 rounded-2xl border border-[#333333] text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFF2DC]">
                <Clock className="w-4 h-4 text-[#FF8A24]" />
                <span>Estimated Ready Time: In 14–18 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D0CBC3]">
                <MapPin className="w-4 h-4 text-[#FF8A24] shrink-0" />
                <span>Pickup at: Chill Mama Truck • 10420 Chapel Hill Rd, Morrisville, NC 27560</span>
              </div>
              <p className="text-[11px] text-[#D0CBC3]/60 border-t border-[#333333] pt-2 font-normal">
                An SMS confirmation has been simulated to <strong>{customerPhone}</strong>. Show this screen or your phone number at the food truck window.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-sm uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FF8A24] block mb-1">
                Fast Online Pickup
              </span>
              <h3 className="text-2xl font-black text-[#FFF2DC]">Complete Your Order</h3>
              <p className="text-xs text-[#D0CBC3]/70 mt-1 font-normal">
                Pay at window or via simulated digital card. Total due: <strong className="text-[#FFF2DC] font-bold">${total.toFixed(2)}</strong>
              </p>
            </div>

            {/* Pickup Mode Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#171717] rounded-xl border border-[#333333]">
              <button
                type="button"
                onClick={() => setPickupType('window')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  pickupType === 'window'
                    ? 'bg-[#E94B20] text-[#FFF2DC] font-black shadow-md'
                    : 'text-[#D0CBC3] hover:text-[#FFF2DC]'
                }`}
              >
                Window Walk-up
              </button>
              <button
                type="button"
                onClick={() => setPickupType('curbside')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  pickupType === 'curbside'
                    ? 'bg-[#E94B20] text-[#FFF2DC] font-black shadow-md'
                    : 'text-[#D0CBC3] hover:text-[#FFF2DC]'
                }`}
              >
                Curbside Car Delivery
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Turner"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#171717] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#D0CBC3] block mb-1">Mobile Phone (for Ready SMS) *</label>
                <input
                  type="tel"
                  required
                  placeholder="(919) 555-0182"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#171717] border border-[#333333] rounded-xl px-4 py-2.5 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                />
              </div>

              {pickupType === 'curbside' && (
                <div>
                  <label className="text-xs font-bold text-[#D0CBC3] block mb-1">
                    Vehicle Model & Color (for runner) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Silver Honda CR-V (Hazard lights on)"
                    value={vehicleDesc}
                    onChange={(e) => setVehicleDesc(e.target.value)}
                    className="w-full bg-[#171717] border border-[#333333] rounded-xl px-4 py-2 text-xs text-[#FFF2DC] placeholder-[#D0CBC3]/50 focus:outline-none focus:border-[#FF8A24]"
                  />
                </div>
              )}
            </div>

            {/* Timing selection */}
            <div>
              <label className="text-xs font-bold text-[#D0CBC3] block mb-1.5">Pickup Timing:</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPickupTime('asap')}
                  className={`p-2.5 rounded-xl border font-bold text-left ${
                    pickupTime === 'asap'
                      ? 'border-[#FF8A24] bg-[#FF8A24]/15 text-[#FFF2DC] shadow-sm'
                      : 'border-[#333333] bg-[#171717] text-[#D0CBC3]'
                  }`}
                >
                  <span className="block font-black">ASAP (Standard)</span>
                  <span className="text-[10px] font-normal text-[#D0CBC3]/60">~14–18 minutes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPickupTime('later')}
                  className={`p-2.5 rounded-xl border font-bold text-left ${
                    pickupTime === 'later'
                      ? 'border-[#FF8A24] bg-[#FF8A24]/15 text-[#FFF2DC] shadow-sm'
                      : 'border-[#333333] bg-[#171717] text-[#D0CBC3]'
                  }`}
                >
                  <span className="block font-black">Later Tonight</span>
                  <span className="text-[10px] font-normal text-[#D0CBC3]/60">Specify in notes</span>
                </button>
              </div>
            </div>

            {/* Simulated Payment Badge */}
            <div className="p-3 bg-[#171717] rounded-xl border border-[#333333] flex items-center justify-between text-xs text-[#D0CBC3] font-semibold">
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#FF8A24]" /> Pay with Apple Pay / Card at Window
              </span>
              <ShieldCheck className="w-4 h-4 text-[#3D6B45]" />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 transition-transform active:scale-95"
            >
              Confirm & Fire Up Order (${total.toFixed(2)})
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
