export default function Footer() {



    return (
        <footer className="bottom-0 flex flex-col items-center justify-center w-full p-4 gap-4">
            <a className="text-sm">
                &copy; {new Date().getFullYear()} didischocoberrys. All rights reserved.
            </a>
            <div className="flex flex-row gap-4">
            <a href="/about" className="text-sm">
                Über uns
            </a>
            <a href="https://www.instagram.com/didischocoberrys" className="text-sm">
                Instagram
            </a>
            </div>
        </footer>
    );
}