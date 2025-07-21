import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "didischocoberrys",
  description: "Discover the delightful world of Didi's Choco Berries, where every bite is a burst of flavor and joy. Indulge in our handcrafted chocolate-covered strawberries, perfect for any occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${fredoka.variable} subpixel-antialiased`}>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4">
            {children}
            </div>
          <Footer />
      </body>
    </html>
  );
}
