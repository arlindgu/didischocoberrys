"use client";

import HeroSection from "@/components/HeroSection";
import PictureText from "@/components/PictureText";
import { FloatingParticles } from "@/components/Strawberrys";
import Testimonials from "@/components/Testamonials";
import Image from "next/image";
import { Sparkles, Heart, Droplets } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <FloatingParticles />
      <HeroSection />
      <div className="flex flex-col gap-16">
        <div className="text-center">
          <h2>Warum unsere Schokoladen besonders sind</h2>
          <p>
            Jedes Stück wird mit hochwertigen Zutaten und endloser Liebe
            gefertigt, um Momente purer Freude zu schaffen.
          </p>
        </div>
        <div className="flex-col lg:flex-row flex gap-8">
          <PictureText
            title="Mit Liebe gemacht"
            icon={<Heart className="w-8 h-8 stroke-2" />}
          >
            Jede Schokolade wird mit Leidenschaft und Liebe zum Detail
            handgefertigt, was man auch schmeckt.
          </PictureText>
          <PictureText
            title="Hochwertige Zutaten"
            icon={<Droplets className="w-8 h-8 stroke-2" />}
          >
            Wir verwenden nur die feinste Schokolade und die frischesten
            Erdbeeren für aussergewöhnliche Qualität.
          </PictureText>
          <PictureText
            title="Liebevolle Dekorationen"
            icon={<Sparkles className="w-8 h-8 stroke-2" />}
          >
            Unsere Erdbeeren sind nicht nur lecker, sondern auch wunderschön
            dekoriert, perfekt für jeden Anlass.
          </PictureText>
        </div>
      </div>

      <Testimonials />

      <div className="w-full flex flex-col justify-center items-center h-screen">
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
