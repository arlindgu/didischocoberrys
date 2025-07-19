"use client"

import Link from 'next/link';
import { SpinningText } from '../../components/motion-primitives/spinning-text';

export default function Navbar() {



    return (
        <header className="flex justify-between items-center gap-2 p-2 mt-8">
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
        </header>
    );
}