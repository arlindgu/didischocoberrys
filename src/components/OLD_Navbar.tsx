"use client";

import Link from 'next/link';
import {motion } from 'framer-motion';

export default function Navbar() {

    type FooterLinks = {
        about: { href: string; label: string; };
        pricing: { href: string; label: string; };
        instagram: { href: string; label: string; };
        order: { href: string; label: string; };
        pictures: { href: string; label: string; };
    }

    const FooterLinks: FooterLinks = {
        about: { href: "/about", label: "Über Uns" },
        pricing: { href: "/pricing", label: "Preise" },
        instagram: { href: "https://instagram.com/didischocoberrys", label: "Instagram" },
        order: { href: "/order", label: "Bestellen" },
        pictures: { href: "/pictures", label: "Bilder" },
    }

    return (
        <header className="w-full border-b-2 top-0 bg-chocolate-900 pt-4">
            <nav className="grid grid-cols-1 grid-rows-2">
                <Link href="/" className='flex items-center justify-center text-5xl font-serif text-chocolate-50 italic font-bold'>
                    <motion.span
                        whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                    >
                        didischocoberrys
                    </motion.span>
                </Link>
                <ul className="flex flex-row gap-4 items-center justify-center">
                    {Object.entries(FooterLinks).map(([key, value]: [string, { href: string; label: string; }]) => (
                        <motion.li key={key} whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}>
                            <Link href={value.href} className='text-chocolate-50 font-bold uppercase text-xs md:text-base'>{value.label}</Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}