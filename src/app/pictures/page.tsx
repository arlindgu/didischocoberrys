"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageData {
    src: string;
    alt: string;
}

export default function Pictures() {
    const [selected, setSelected] = useState<string | null>(null);
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/pictures')
            .then(res => res.json())
            .then(data => {
                setImages(data.images || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Fehler beim Laden der Bilder:', err);
                setLoading(false);
            });
    }, []);

    // ESC-Taste zum Schließen
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelected(null);
            }
        };

        if (selected) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Verhindert Scrollen im Hintergrund
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selected]);

    if (loading) {
        return <div className="p-8 text-center"></div>;
    }

    return (
        <>
            {/* Bildergalerie */}
            <div
                style={{
                    columnCount: 3,
                    columnGap: '16px',
                }}
            >
                {images.map((image, idx) => (
                    <div
                        key={image.src}
                        style={{
                            breakInside: 'avoid',
                            marginBottom: '16px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onClick={() => setSelected(image.src)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.01 }}
                            loading="lazy"
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={500}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selected && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '20px',
                        animation: 'fadeIn 0.3s ease-out',
                    }}
                    onClick={() => setSelected(null)}
                >
                    {/* Schließen Button */}
                    <button
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '24px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.2s',
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelected(null);
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        }}
                    >
                        ×
                    </button>

                    {/* Großes Bild */}
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            animation: 'zoomIn 0.3s ease-out',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            src={selected}
                            alt="Vergrößertes Bild"
                            width={1200}
                            height={1200}
                            style={{
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '12px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                            }}
                        />
                    </div>
                </div>
            )}

            {/* CSS Animationen */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes zoomIn {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}