import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Oxanium } from 'next/font/google';
import './globals.css';

const oxanium = Oxanium({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'V-Port | Home',
  description: 'V-Port is a blog for Motocross Enthusiasts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(oxanium.className, 'bg-white text-black antialiased')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
