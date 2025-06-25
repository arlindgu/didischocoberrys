"use client";

import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
    </div>
  );
}
