"use client";

import { motion } from 'framer-motion';

export default function PricingPage() {




    return (
        <div className="flex flex-col max-w-5xl gap-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col items-center justify-center"
            >
                <h1>Pricing</h1>
                <p>Check out our pricing plans below</p>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.05 }}
                className="flex flex-col">
                <h2 className="text-2xl font-bold">Erdbeerboxen</h2>
                <div className="flex flex-row justify-between gap-4">
                    <p>15 Stück</p>
                    <p>CHF 45.00</p>
                </div>
                <div className="flex flex-row justify-between gap-4">
                    <p>35 Stück</p>
                    <p>CHF 80.00</p>
                </div>
            </motion.div>

            <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}>
                <h2 className="text-2xl font-bold">I ❤️ Boxen</h2>
                <div className="flex flex-row justify-between gap-8">
                    <p>Box</p>
                    <p>CHF 50.00</p>
                </div>
                <div className="flex flex-row justify-between gap-8">
                    <p>+ Rosen</p>
                    <p>CHF 10.00</p>
                </div>


            </motion.div>


            <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.15 }}>
                <h2 className="text-2xl font-bold">Berry-Bag</h2>
                <div className="flex flex-row justify-between gap-8">
                    <p>Bag</p>
                    <p>CHF 70.00</p>
                </div>
            </motion.div>
        </div>
    )
}