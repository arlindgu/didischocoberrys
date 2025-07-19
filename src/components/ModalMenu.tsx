"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalMenu() {

    const [isOpen, setIsOpen] = useState(false);

    // Scroll deaktivieren/aktivieren
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const Links = {
        home: { href: "/", label: "Home" },
        about: { href: "/about", label: "Über Uns" },
        instagram: { href: "https://www.instagram.com/didischocoberrys/", label: "Instagram" },
        pictures: { href: "/pictures", label: "Bilder" },
        pricing: { href: "/pricing", label: "Preise" },
        order: { href: "/order", label: "Bestellen" },
    };

    return (

// In deiner Komponente:
<div className="absolute h-screen w-screen">
    <a onClick={() => setIsOpen(true)} className="p-2 absolute m-4 text-chocolate">
        <Menu />
    </a>
    
    <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ y: -1500 }}
                animate={{ y: 0 }}
                exit={{ y: -1500 }} // Änder das auch auf -1000 für konsistenz
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute flex flex-col gap-8 h-screen w-screen bg-chocolate z-10 justify-center items-center"
            >
                {Object.values(Links).map((link) => (
                    <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-white hover:font-bold text-4xl font-heading font-semibold">
                        {link.label}
                    </a>
                ))}
                <a onClick={() => setIsOpen(false)} className="p-2 m-4 text-white">
                    <X />
                </a>
            </motion.div>
        )}
    </AnimatePresence>
</div>
    );
}