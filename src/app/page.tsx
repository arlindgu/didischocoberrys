"use client";

import HeroSection from '@/components/HeroSection';
import { FloatingParticles } from '@/components/Strawberrys';

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">
      <FloatingParticles />
      <HeroSection />
    </div>
  );
}
