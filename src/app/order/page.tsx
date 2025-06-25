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
        <div className='flex flex-col p-8 bg-chocolate-100 justify-center items-center gap-4 max-w-5xl'>
            <div className='flex flex-col items-center justify-center gap-4'>
            <h1>Bestellung aufgeben</h1>
            <p className='text-center'>Schreib uns deine Bestellung einfach per Instagram an<a href='https://ig.me/m/didischocoberrys' className="font-semibold"> @didischocoberrys</a></p>

            </div>
        <div className="grid grid-cols-3 gap-3 bg-chocolate-200 rounded-3xl p-4 max-w-sm">
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
                className='col-span-2 col-start-2 flex flex-col gap-8 p-4 w-fit rounded-2xl bg-chocolate-50'>
                <p className='text-chocolate-800'>Hey, ich würde gerne eine Erdbeerbox mit 35 Stück bestellen. Könntest du auch Rosen mit reinpacken? Ich würde sie am {DateString} abholen und bezahlen.</p>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }} 
                className='col-start-1 col-span-2 row-start-2 flex w-fit flex-row gap-8'>
                <p className='text-chocolate-50 p-4 rounded-2xl bg-chocolate-900'>Vielen Dank für deine Bestellung! Ich sag dir dann rechtzeitig Bescheid, sobald sie fertig ist. Danke dir! ☺️</p>
                <div className='flex justify-end items-end'>
                </div>
            </motion.div>
            <motion.div 
            animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 3 }} 
            className='col-start-1 col-span-3 w-full row-start-3 flex flex-col gap-8 rounded-2xl'>
                <p className="text-center">{DateChat}</p>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 4 }} 
                className='col-start-1 col-span-2 row-start-4 flex flex-row gap-8'>
                <p className='text-chocolate-50 p-4 rounded-2xl bg-chocolate-900'>Deine Bestellung ist bereit! Du darfst sie abholen kommen. ☺️ ❤️</p>
                <div className='flex justify-end items-end'>
                </div>
            </motion.div>
                        <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 5 }}
                className='col-span-2 col-start-2 row-start-5 flex flex-col gap-8 p-4 rounded-2xl bg-chocolate-50'>
                <p className='text-chocolate-800 ml-auto'>Danke, bin unterwegs! 🚗💨</p>
            </motion.div>
        </div>
        </div>
    );
}