import React from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  // Generiere 6 Partikel mit zufälligen Startpositionen
  const particles = Array.from({ length: 7
   }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 8 + 32, // Größe zwischen 4-12px
    delay: Math.random() * 2, // Verzögerung bis 2 Sekunden
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-50">
      {particles.map((particle) => (
        <motion.img
            src="/strawberry.png" // Pfad zum Erdbeerbild
          key={particle.id}
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            x: [0, 100, -100, 50, -50, 0],
            y: [0, -80, 120, -60, 80, 0],
            scale: [1, 2, 0.8, 1.1, 0.9, 1],
            rotate: [0, 360, 0, -360, 0],
            opacity: [0, 0.5, 1, 0.5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 30, // 15-25 Sekunden pro Zyklus
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};