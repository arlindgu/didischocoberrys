"use client"

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

    const Links = {
        pricing: { href: "/pricing", label: "Preise" },
        order: { href: "/order", label: "Bestellen" },
    };



    return (
        <header className='flex flex-col justify-center items-center mt-8 -space-y-4'>
                    <Link href="/">
                    <Image src="/logo.webp" alt="Logo" width={1000} height={1000} className='object-contain w-42 h-42'/>
                    </Link>
                                <nav className='flex flex-wrap rounded-full justify-center items-center bg-brand-700'>
                {Object.values(Links).map((link) => (
                    <Link key={link.label} href={link.href} className="text-white hover:font-bold text-lg font-heading font-semibold px-4 py-2">
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}