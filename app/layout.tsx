import './globals.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lzzy Tech | Premium Computer Peripherals & Accessories',
  description: 'Premium gaming peripherals and computer accessories in Pakistan.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
