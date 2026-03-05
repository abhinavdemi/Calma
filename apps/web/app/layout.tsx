import type { Metadata, Viewport } from 'next';
import { Lora, DM_Sans } from 'next/font/google';
import './globals.css';
import { BottomNav } from '@/components/layout/BottomNav';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Steady — A companion for caregiving parents',
  description:
    'A quiet space for parents of children with CP or Autism. Chat, breathe, and find community wisdom.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#FDFAF6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="bg-sand-50 text-sand-900 antialiased">
        <main className="min-h-screen pb-20">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
