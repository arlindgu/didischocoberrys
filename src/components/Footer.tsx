export default function Footer() {



    return (
        <footer className="absolute bottom-0 flex items-center justify-center w-full p-4">
            <div className="text-sm">
                &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </div>
        </footer>
    );
}