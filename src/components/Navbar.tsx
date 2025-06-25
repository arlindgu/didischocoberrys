import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

    const FooterLinks = {
        about: "/about",
        pricing: "/pricing",
        instagram: "https://instagram.com/didischocoberrys",
        order: "/order",
        pictures: "/pictures",
    }

    return (
        <header className="w-full p-8">
            <nav className="grid grid-cols-1 grid-rows-2">
                <Link href="/" className='flex items-center justify-center text-5xl font-serif text-chocolate-950 italic font-bold'>
                    didischocoberrys
                </Link>
                <ul className="flex flex-row gap-4 items-center justify-center">
                    {Object.entries(FooterLinks).map(([key, value]: [string, string]) => (
                        <li key={key}>
                            <Link href={value} className='text-chocolate-950'>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}