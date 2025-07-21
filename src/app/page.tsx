"use client";

import HeroSection from "@/components/HeroSection";
import PictureText from "@/components/PictureText";
import { FloatingParticles } from "@/components/Strawberrys";
import Testimonials from "@/components/Testamonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FloatingParticles />
      <HeroSection />
      <div className="flex flex-col gap-16 hidden">
        <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
          <PictureText
            title="Mit Liebe gemacht"
            src="/picturetext_1.png"
          >
            Jede Schokolade wird mit Leidenschaft und Liebe zum Detail
            handgefertigt, was man auch schmeckt.
          </PictureText>
          </div>
          <div className="lg:col-span-2">
          <PictureText
            title="Hochwertige Zutaten"
            src="/picturetext_2.png"
          >
            Wir verwenden nur die feinste Schokolade und die frischesten
            Erdbeeren für aussergewöhnliche Qualität.
          </PictureText>
          </div>
          <div className="col-span-4">
          <PictureText
            title="Liebevolle Dekorationen"
            src="/picturetext_3.png"
          >
            Unsere Erdbeeren sind nicht nur lecker, sondern auch wunderschön
            dekoriert, perfekt für jeden Anlass.
          </PictureText>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="w-full flex flex-col justify-center items-center mt-16 hidden">
        <div className="relative flex flex-col justify-center items-center p-4 h-2/3 w-full">
          <Image
            src="/picturetext/bg.png"
            alt="Erdbeere"
            fill={true}
            className="object-cover -z-2 bg-brand rounded-xl"
          />
          <h3 className="text-white">Kaufe jetzt deine!</h3>
          <p className="text-white mb-4 text-center">
            Versüsse dein Leben mit unseren frischen Erdbeeren!
          </p>
          <button className="btn btn-primary">
            <a href="/order" className="text-white">
              Jetzt bestellen!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
