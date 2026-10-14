import React from 'react';
import Image from '@/components/Image';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    tax,
    tip,
    setTip,
    total,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const tipOptions = [2, 3, 5, 7];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#242424] border-l border-[#333333] text-[#D0CBC3] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#333333] flex items-center justify-between bg-[#171717]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#333333] flex items-center justify-center text-[#FF8A24]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black text-[#FFF2DC]">Your Order Tray</h2>
                <p className="text-xs text-[#FF8A24] font-bold">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-[#242424] hover:bg-[#333333] text-[#D0CBC3] hover:text-[#FFF2DC] transition-colors border border-[#333333]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prep Time Notice */}
          <div className="px-6 py-3 bg-[#171717] border-b border-[#333333] flex items-center justify-between text-xs text-[#D0CBC3] font-semibold">
            <span className="flex items-center gap-1.5 font-bold text-[#FFF2DC]">
              <Clock className="w-3.5 h-3.5 text-[#FF8A24]" /> Estimated Prep: 12–16 mins
            </span>
            <span className="font-bold text-[#FF8A24]">10420 Chapel Hill Rd</span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#171717] border border-[#333333] mx-auto flex items-center justify-center text-[#D0CBC3]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-[#FFF2DC]">Your tray is empty</h3>
                <p className="text-xs text-[#D0CBC3]/70 max-w-xs mx-auto font-normal">
                  Add Mama’s freshly rolled Frankies, hot chai, or crunchy Gobi bites to get started.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] text-xs font-bold shadow-md transition-all"
                >
                  Explore Food Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#171717] border border-[#333333] shadow-md flex gap-3.5 items-start"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#333333]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#FFF2DC] truncate">{item.name}</h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#D0CBC3]/50 hover:text-[#E94B20] p-0.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.spiceLevel && (
                      <span className="inline-block text-[10px] font-bold text-[#FF8A24] bg-[#242424] px-2 py-0.5 rounded-full mt-1 border border-[#333333]">
                        {item.spiceLevel.split(' ')[0]}
                      </span>
                    )}

                    {item.specialInstructions && (
                      <p className="text-[11px] text-[#D0CBC3]/70 italic mt-1 line-clamp-1 font-normal">
                        &quot;{item.specialInstructions}&quot;
                      </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-black text-[#FFF2DC]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#242424] border border-[#333333] rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#D0CBC3] hover:text-[#FFF2DC]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center text-[#FFF2DC]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#D0CBC3] hover:text-[#FFF2DC]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Calculations */}
          {items.length > 0 && (
            <div className="p-6 bg-[#171717] border-t border-[#333333] space-y-4">
              {/* Tip Selector */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#D0CBC3] mb-2">
                  <span>Support Mama’s Crew (Tip):</span>
                  <span className="text-[#FF8A24] font-bold">${tip.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {tipOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTip(amount)}
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                        tip === amount
                          ? 'bg-[#E94B20] text-[#FFF2DC] shadow-sm'
                          : 'bg-[#242424] text-[#D0CBC3] hover:text-[#FFF2DC] border border-[#333333]'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#D0CBC3]/80 pt-2 border-t border-[#333333]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#FFF2DC] font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated NC Tax (7.25%)</span>
                  <span className="text-[#FFF2DC] font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Crew Tip</span>
                  <span className="text-[#FFF2DC] font-semibold">${tip.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-[#FFF2DC] pt-2 border-t border-[#333333]">
                  <span>Total Amount</span>
                  <span className="text-[#FF8A24]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-[#E94B20] hover:bg-[#FF8A24] text-[#FFF2DC] font-black text-sm uppercase tracking-wider shadow-lg shadow-[#E94B20]/25 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Review & Place Pickup Order</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
