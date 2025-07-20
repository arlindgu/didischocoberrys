"use client";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col items-start justify-center">
      <h1 className="text-4xl text- mb-4 text-center w-full">Über uns</h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        className="text-brand  mb-2">
        Was als kleines Küchenhobby begann, wurde schnell zu einer echten Leidenschaft. Eines Tages tauchte Didi ein paar Erdbeeren in zartschmelzende Schokolade – liebevoll dekoriert und mit einer Prise Kreativität – für den Geburtstag einer Freundin. Die Resonanz war überwältigend.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className="text-chocolate  mb-2">
        Seitdem kreiert sie hausgemachte, schokoladenüberzogene Erdbeeren für besondere Momente wie Geburtstage, Valentinstag oder einfach so. Jede Beere wird mit Liebe und viel Sorgfalt handgefertigt – frisch, hausgemacht und von Herzen.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
        className="text-chocolate-900 ">
        Bei Didis ChocoBerrys geht es nicht nur um Schokolade und Früchte – es geht um Freude, Geschmack und das Teilen kleiner Glücksmomente.
      </motion.p>
      <br />
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
        src="/signature.png"
        alt="Schokolade und Erdbeeren"
        width={200}
        height={200}
        className="mx-auto mt-4"
      />
    </motion.div>
  );
}