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
        <nav className="flex flex-row items-center justify-center p-4 w-full">
        <ul className="flex flex-col gap-x-4 text-2xl md:flex-row">
            {Object.entries(FooterLinksLeft).map(([key, value]: [string, string]) => (
            <li key={key}>
            <Link href={value} className="font-chewy">{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
            </li>
            ))}
        </ul>
        <div className="flex flex-col items-center font-chewy text-chocolate-950 text-5xl">
            <a>didis</a>
            <a>choco</a>
            <a>berrys</a>
        </div>
        <ul className="flex flex-col gap-x-4 text-2xl md:flex-row">
            {Object.entries(FooterLinksRight).map(([key, value]: [string, string]) => (
            <li key={key}>
            <Link href={value} className="font-chewy">{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
            </li>
            ))}
        </ul>
        </nav>
    );
    }