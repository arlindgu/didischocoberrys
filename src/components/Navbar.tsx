"use client"

import Link from 'next/link';
import { SpinningText } from '../../components/motion-primitives/spinning-text';

export default function Navbar() {

    const HeaderLeft = {
        about: { href: "/about", label: "Über Uns" },
        instagram: { href: "https://www.instagram.com/didischocoberrys/", label: "Instagram" },


    }

    const HeaderUnder = {
        pictures: { href: "/pictures", label: "Bilder" },

    }

    const HeaderRight = {
        pricing: { href: "/pricing", label: "Preise" },
        order: { href: "/order", label: "Bestellen" },

    }



    return (
        <header className="flex flex-row justify-between items-center gap-2 p-2">
            <nav className='flex flex-col items-center gap-2'>
                {Object.entries(HeaderLeft).map(([key, value]: [string, { href: string; label: string; }]) => (
                    <Link href={value.href} key={key} className=''>{value.label}</Link>
                ))}
            </nav>
            <div>
                <div className='flex flex-col items-center gap-2'>
                    <Link href="/" className='text-chocolate font-bold hover:text-chocolate-300'>
                        <SpinningText
                            radius={3.5}
                            className="text-chocolate w-25 h-25"
                            reverse={true}
                            duration={10}
                        >
                            {`didis ♥ choco ♥ berrys ♥ `}
                        </SpinningText>
                    </Link>
                    <Link href={HeaderUnder.pictures.href}>
                        {HeaderUnder.pictures.label}
                    </Link>
                </div>
            </div>
            <nav className="flex flex-col gap-2">
                {Object.entries(HeaderRight).map(([key, value]: [string, { href: string; label: string; }]) => (
                    <Link href={value.href} key={key} className=''>{value.label}</Link>
                ))}
            </nav>
        </header>
    );
}