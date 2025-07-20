"use client";

import { motion } from 'framer-motion';

export default function OrderPage() {

    // Hilfsfunktion, um Minuten auf nächste halbe Stunde aufzurunden
    function roundUpToNextHalfHour(date: Date) {
        const rounded = new Date(date);
        const minutes = rounded.getMinutes();
        if (minutes === 0 || minutes === 30) {
            rounded.setSeconds(0, 0);
            return rounded;
        }
        if (minutes < 30) {
            rounded.setMinutes(30, 0, 0);
        } else {
            rounded.setHours(rounded.getHours() + 1);
            rounded.setMinutes(0, 0, 0);
        }
        return rounded;
    }

    const DateNow = new Date();
    const roundedOrderDate = roundUpToNextHalfHour(DateNow);

    // Bestellung: DDDD, DD MMMM
    const OrderDateString = roundedOrderDate.toLocaleDateString('de-CH', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
    });

    // Bestellung: HH:MM (aufgerundet auf nächste halbe Stunde)
    const OrderTimeString = roundedOrderDate.toLocaleTimeString('de-CH', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // Nach der Bestellung: Zeit minus 4 Stunden, aufgerundet auf nächste halbe Stunde
    const afterOrderRaw = new Date(roundedOrderDate.getTime() - 4 * 60 * 60 * 1000);
    const roundedAfterOrderDate = roundUpToNextHalfHour(afterOrderRaw);

    const AfterOrderFullString = roundedAfterOrderDate.toLocaleDateString('de-CH', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }) + ' ' + roundedAfterOrderDate.toLocaleTimeString('de-CH', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className='flex flex-col bg-chocolate-100 items-center justify-center gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-center'>Schreib uns deine Bestellung einfach per Instagram an<a href='https://ig.me/m/didischocoberrys' className="font-semibold"> @didischocoberrys</a></p>
            </div>
            <motion.div
            animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.15, type: 'spring', stiffness: 100 }}

             className="flex flex-col gap-4 bg-chocolate-200 rounded-3xl p-4 max-w-md">
                <motion.p
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25, type: 'spring', stiffness: 100 }}
                    className='p-4 rounded-2xl bg-chocolate-50 ml-auto w-9/10'>
                    Hallo

                    Könnte ich bitte für den {OrderDateString} eine 15 Stück Erdbeerbox im pink-weissen Design bestellen?
                    Und könnte ich sie an dem Tag um {OrderTimeString} abholen?

                    Ausserdem wäre es schön, wenn auf der Box ein kleines “Happy Birthday”-Täfelchen dabei sein könnte.
                    Bitte sag mir Bescheid, ob das möglich wäre.

                    Vielen lieben Dank im Voraus!
                </motion.p>
                <motion.p
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5, type: 'spring', stiffness: 100 }}
                    className='p-4 rounded-2xl bg-chocolate-800 text-chocolate-50 w-9/10 mr-auto'>
                    Vielen Dank für deine Bestellung! Ich sag dir dann rechtzeitig Bescheid, sobald sie fertig ist. Danke dir! ☺️
                </motion.p>
                <motion.p
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.75, type: 'spring', stiffness: 100 }}
                    className='w-full text-center'>
                    {AfterOrderFullString}
                </motion.p>
                <motion.p
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 1, type: 'spring', stiffness: 100 }}
                    className='p-4 rounded-2xl bg-chocolate-800 text-chocolate-50 w-9/10 mr-auto'>
                    Deine Bestellung ist bereit! Du darfst sie abholen kommen. ☺️ ❤️
                </motion.p>
                <motion.p
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.25, type: 'spring', stiffness: 100 }}
                    className='p-4 rounded-2xl bg-chocolate-50 w-9/10 ml-auto'>
                    Danke, bin unterwegs! 🚗💨
                </motion.p>
            </motion.div>
        </div>
    );
}