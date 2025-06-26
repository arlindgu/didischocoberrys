"use client";

import HeroSection from '@/components/HeroSection';
import { FloatingParticles } from '@/components/Strawberrys';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center max-w-2xl">
      <FloatingParticles />
      <HeroSection />
    </div>
  );
}
