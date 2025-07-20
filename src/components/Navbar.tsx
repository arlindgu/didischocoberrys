"use client"

import Link from 'next/link';
import { SpinningText } from '../../components/motion-primitives/spinning-text';

export default function Navbar() {

    const Links = {
        pricing: { href: "/pricing", label: "Preise" },
        order: { href: "/order", label: "Bestellen" },
    };



    return (
        <header className='flex flex-col mt-16 items-center gap-8'>
                    <Link href="/" className='flex items-center gap-2 font-semibold'>
                        <SpinningText
                            radius={2.5}
                            fontSize={1}
                            className='w-10 h-10'
                        >
                            {`didis • choco • berrys • `}
                        </SpinningText>
                    </Link>
                                <nav className='border flex flex-wrap rounded-full justify-center items-center bg-chocolate'>
                {Object.values(Links).map((link) => (
                    <Link key={link.label} href={link.href} className="text-white hover:font-bold text-lg font-heading font-semibold px-4 py-2">
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}