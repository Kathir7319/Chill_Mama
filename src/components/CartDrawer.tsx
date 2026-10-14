'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, ArrowRight, Sparkles } from 'lucide-react';

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
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-2 border-sky-200 text-slate-800 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-sky-100 flex items-center justify-between bg-sky-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black text-slate-900">Your Order Tray</h2>
                <p className="text-xs text-sky-700 font-bold">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors border border-sky-100 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prep Time Notice */}
          <div className="px-6 py-3 bg-sky-100/70 border-b border-sky-200 flex items-center justify-between text-xs text-sky-900 font-semibold">
            <span className="flex items-center gap-1.5 font-bold">
              <Clock className="w-3.5 h-3.5 text-sky-600" /> Estimated Prep: 12–16 mins
            </span>
            <span className="font-bold text-sky-800">10420 Chapel Hill Rd</span>
          </div>

          {/* Cart Items List in Clean White */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 mx-auto flex items-center justify-center text-sky-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800">Your tray is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto font-normal">
                  Add Mama’s freshly rolled Frankies, hot chai, or crunchy Gobi bites to get started.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-sky-500 text-white text-xs font-bold hover:bg-sky-600 shadow-sm"
                >
                  Explore Food Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border-2 border-sky-100 shadow-sm flex gap-3.5 items-start"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-sky-150">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 truncate">{item.name}</h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-rose-500 p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.spiceLevel && (
                      <span className="inline-block text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full mt-1 border border-sky-200">
                        {item.spiceLevel.split(' ')[0]}
                      </span>
                    )}

                    {item.specialInstructions && (
                      <p className="text-[11px] text-slate-500 italic mt-1 line-clamp-1 font-normal">
                        &quot;{item.specialInstructions}&quot;
                      </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-black text-sky-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-slate-50 border border-sky-200 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-slate-600 hover:text-sky-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center text-slate-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-slate-600 hover:text-sky-600"
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
            <div className="p-6 bg-slate-50 border-t border-sky-200 space-y-4">
              {/* Tip Selector */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Support Mama’s Crew (Tip):</span>
                  <span className="text-sky-700 font-bold">${tip.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {tipOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTip(amount)}
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                        tip === amount
                          ? 'bg-sky-500 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated NC Tax (7.25%)</span>
                  <span className="text-slate-900 font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Crew Tip</span>
                  <span className="text-slate-900 font-semibold">${tip.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-sky-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
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
