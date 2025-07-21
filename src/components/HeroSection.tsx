"use client";

import Link from "next/link";
import {motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center mt-16 gap-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-7xl">Schoko Erdbeeren</h1>
        <h2 className="opacity-75 w-full -mt-4">
          Frisch. Fruchtig. Handgemacht.
        </h2>
        <p className="lg:max-w-2/3">
          Entdecke unsere mit Liebe veredelten Erdbeeren, umhüllt von feinster
          Schokolade und verpackt mit Stil.
        </p>
      </div>
        <div className="flex flex-row space-x-2">
            <motion.div
          animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/pricing"
              className="btn btn-primary"
            >
              Preisliste
            </Link>
          </motion.div>
          <motion.div
          animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/pricing"
              className="btn btn-secondary"
            >
              Bestellen
            </Link>
          </motion.div>
      </div>
    </section>
  );
}
