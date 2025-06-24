import Link from 'next/link';

export default function Navbar() {

    const FooterLinksLeft = {
        about: "/about",
        instagram: "https://instagram.com/didischocoberrys",
    }

    const FooterLinksRight = {
        pricing: "/pricing",
        order: "/order",
    }

    return (
        <nav className="absolute top-0 flex flex-row items-center justify-center p-4 gap-8 w-full">
        <ul className="flex flex-row gap-x-4">
            {Object.entries(FooterLinksLeft).map(([key, value]: [string, string]) => (
            <li key={key}>
            <Link href={value} className="font-chewy">{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
            </li>
            ))}
        </ul>
        <h1 className="text-4xl font-bold text-center tracking-tighter leading-none">
            <a href="/" className="">
            
            <p>didis</p>
            <p>choco</p>
            <p>berrys</p>
            </a>
        </h1>
        <ul className="flex flex-row gap-x-4">
            {Object.entries(FooterLinksRight).map(([key, value]: [string, string]) => (
            <li key={key}>
            <Link href={value} className="font-chewy">{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
            </li>
            ))}
        </ul>
        </nav>
    );
    }