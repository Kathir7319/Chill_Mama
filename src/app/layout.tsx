import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://chillmamafoodtruck.com'),
  title: 'Chill Mama – Fusion Indian Food Truck | Morrisville & Cary, NC',
  description:
    'Street Food Soul. Fusion Attitude. Savor artisanal Frankies, Tandoori Chicken Burgers, hot Cutting Chai, and warm Bun Maska under the fairy lights at 10420 Chapel Hill Rd, Morrisville, NC 27560. Call +1 919-337-8472. 100% Halal and Veg-friendly.',
  keywords: [
    'Indian Food Truck',
    'Fusion Indian Food',
    'Morrisville NC Food Trucks',
    'Cary NC Food Trucks',
    'Triangle Indian Street Food',
    'Frankie Rolls',
    'Cutting Chai',
    'Bun Maska',
    'Halal Food Truck Cary',
  ],
  icons: {
    icon: '/images/chill_mama_logo.png',
    apple: '/images/chill_mama_logo.png',
  },
  openGraph: {
    title: 'Chill Mama – Fusion Indian Food Truck & Street Bites',
    description: 'Street Food Soul. Fusion Attitude. Women-Owned, Flavor-Driven.',
    images: ['/images/chill_mama_logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
        <CartProvider>
          {children}
          <CartDrawer />
          <CheckoutModal />
        </CartProvider>
      </body>
    </html>
  );
}
