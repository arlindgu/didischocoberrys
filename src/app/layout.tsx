import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fredoka } from "next/font/google";
import ModalMenu from "@/components/ModalMenu";

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
        <main className="h-screen flex flex-col justify-between items-center">
          <Navbar />
            <ModalMenu />
          <div className="p-4 flex flex-col mt-8 lg:max-w-5xl md:max-w-xl">
            {children}
          </div>
          <Footer />
        </main>

      </body>
    </html>
  );
}
