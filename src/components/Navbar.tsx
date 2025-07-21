"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const Links = {
    pricing: { href: "/pricing", label: "Preise" },
    order: { href: "/order", label: "Bestellen" },
  };

  return (
    <header
      className="flex flex-col justify-center items-center pt-8 pb-8 mx-auto"
    >
        <motion.div
        animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
        whileHover={{ rotate: 360,  }}
        whileTap={{ rotate: 0 }}
        >
      <Link href="/">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain w-32 h-32"
        />
      </Link>
      </motion.div>
      <nav className="flex flex-wrap justify-center items-center gap-2 mt-4">
        {Object.values(Links).map((link, index) => (
          <motion.div
          animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 * 0.15 * index, type: 'spring', stiffness: 100 }}
            key={link.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              key={link.label}
              href={link.href}
              className="text-white bg-brand-700 rounded-full text-lg font-heading font-semibold px-4 py-2"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
}
