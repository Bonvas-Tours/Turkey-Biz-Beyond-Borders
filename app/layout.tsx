// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Turkey Biz Beyond Borders 2025 | International Business Exploration Tour',
  description: 'Join Bonvas Tours for an exclusive business exploration tour to Turkey. Network with manufacturers, attend international trade fairs, and discover business opportunities in Istanbul, Bursa, and Kocaeli.',
  keywords: 'Turkey business tour, international trade, manufacturing, textile industry, business networking, trade fairs, Zuchex, TTM, Istanbul, Bursa, Kocaeli, Ghana entrepreneurs',
  metadataBase: new URL('https://turkeybiz.bonvastours.com'),
  openGraph: {
    title: 'Turkey Biz Beyond Borders 2025 | International Business Exploration',
    description: 'Expand your business horizons with our exclusive Turkey business tour. Factory visits, trade fairs, and networking opportunities await Ghanaian entrepreneurs.',
    url: 'https://turkeybiz.bonvastours.com',
    images: [
      {
        url: 'hero-bg-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Turkey business exploration tour featuring factories, trade fairs, and networking opportunities',
      },
    ],
    siteName: 'Turkey Biz Beyond Borders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkey Biz Beyond Borders 2025 | Business Exploration Tour',
    description: 'Join Ghanaian entrepreneurs on an exclusive business tour to Turkey. Factory visits, trade fairs, and international networking await!',
    images: ['hero-bg-turkey.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}