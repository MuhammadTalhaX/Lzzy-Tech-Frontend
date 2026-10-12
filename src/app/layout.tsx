import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/components/cart-provider";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://lzzy.tech"),
  title: {
    default: "Lzzy Tech — Your Setup. Your Standard.",
    template: "%s | Lzzy Tech",
  },
  description:
    "Thoughtfully selected computer peripherals and accessories for work, play, and everything in between.",
  openGraph: {
    title: "Lzzy Tech — Your Setup. Your Standard.",
    description: "Premium peripherals, considered for your setup.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
