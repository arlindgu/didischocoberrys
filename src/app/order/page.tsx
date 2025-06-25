"use client";

import { motion } from 'framer-motion';

export default function OrderPage() {

    const DateNow = new Date();
    const DateString = DateNow.toLocaleDateString('de-CH', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long',
        hour: '2-digit',
    });

    // Hilfsfunktion, um Minuten auf nächste Viertelstunde aufzurunden
    function roundUpToNextQuarterHour(date: Date) {
        const rounded = new Date(date);
        const minutes = rounded.getMinutes();
        const remainder = minutes % 15;
        if (remainder !== 0) {
            rounded.setMinutes(minutes + (15 - remainder));
        }
        rounded.setSeconds(0, 0);
        return rounded;
    }

    const dateChatRaw = new Date(DateNow.getTime() - 4 * 60 * 60 * 1000);
    const roundedDateChat = roundUpToNextQuarterHour(dateChatRaw);
    const DateChat = roundedDateChat.toLocaleDateString('de-CH', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });

    console.log(DateString);

    return (
        <div className='flex flex-col bg-chocolate-100 items-center justify-center gap-4'>
            <div className='flex flex-col justify-center items-center'>
            <h1>Bestellung aufgeben</h1>
            <p className='text-center'>Schreib uns deine Bestellung einfach per Instagram an<a href='https://ig.me/m/didischocoberrys' className="font-semibold"> @didischocoberrys</a></p>
            </div>
        <div className="flex flex-col gap-4 bg-chocolate-200 rounded-3xl p-4 max-w-md">
            <motion.p
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
                className='p-4 rounded-2xl bg-chocolate-50 ml-auto w-9/10'>
                Hey, ich würde gerne eine Erdbeerbox mit 35 Stück bestellen. Könntest du auch Rosen mit reinpacken? Ich würde sie am {DateString} abholen und bezahlen.
            </motion.p>
            <motion.p
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }} 
                className='p-4 rounded-2xl bg-chocolate-800 text-chocolate-50 w-9/10 mr-auto'>
                Vielen Dank für deine Bestellung! Ich sag dir dann rechtzeitig Bescheid, sobald sie fertig ist. Danke dir! ☺️
            </motion.p>
            <motion.p 
            animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 3 }} 
            className='w-full text-center'>
                {DateChat}
            </motion.p>
            <motion.p
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 4 }} 
                className='p-4 rounded-2xl bg-chocolate-800 text-chocolate-50 w-9/10 mr-auto'>
                Deine Bestellung ist bereit! Du darfst sie abholen kommen. ☺️ ❤️
            </motion.p>
            <motion.p
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 5 }}
                className='p-4 rounded-2xl bg-chocolate-50 w-9/10 ml-auto'>
                Danke, bin unterwegs! 🚗💨
            </motion.p>
        </div>
        </div>
    );
}