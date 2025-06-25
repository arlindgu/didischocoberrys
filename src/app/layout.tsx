import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="">

        <main className="h-screen flex flex-col justify-between items-center">
                  <Navbar />
                  <div className="p-8 flex flex-col">
          {children}
          </div>
                  <Footer />
        </main>

      </body>
    </html>
  );
}
