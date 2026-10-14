'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, ChefPairing, SpiceLevel } from '@/types';

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addItem: (item: MenuItem, spiceLevel?: SpiceLevel, specialInstructions?: string) => void;
  addPairing: (pairing: ChefPairing) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  tax: number;
  tip: number;
  setTip: (tip: number) => void;
  total: number;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [tip, setTip] = useState(3.00);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('chill_mama_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('chill_mama_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (item: MenuItem, spiceLevel?: SpiceLevel, specialInstructions?: string) => {
    const selectedSpice = spiceLevel || item.spiceLevelDefault || 'Mama\'s Classic (Warm Kick)';
    const cartItemId = `${item.id}-${selectedSpice}-${specialInstructions || 'none'}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItemId: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          spiceLevel: selectedSpice,
          specialInstructions,
          image: item.image,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const addPairing = (pairing: ChefPairing) => {
    const cartItemId = `pairing-${pairing.id}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItemId: pairing.id,
          name: `${pairing.title} Combo`,
          price: pairing.price,
          quantity: 1,
          spiceLevel: 'Mama\'s Classic (Warm Kick)',
          specialInstructions: pairing.itemsIncluded.join(', '),
          image: pairing.image,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const tax = Number((subtotal * 0.0725).toFixed(2)); // NC state & local tax
  const total = Number((subtotal + tax + (subtotal > 0 ? tip : 0)).toFixed(2));

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addItem,
        addPairing,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        tax,
        tip,
        setTip,
        total,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
