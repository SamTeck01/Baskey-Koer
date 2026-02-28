import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import illu1 from "../assets/illustrations/Frame 2147224654.svg";
import illu2 from "../assets/illustrations/Frame 2147224655.svg";
import illu3 from "../assets/illustrations/Frame 2147224656.svg";
import illu4 from "../assets/illustrations/image 75 (1).svg";
import illu5 from "../assets/illustrations/image 75 (2).svg";
import illu6 from "../assets/illustrations/image 75 (3).svg";
import illu7 from "../assets/illustrations/image 75.svg";
import illu8 from "../assets/illustrations/image 76.svg";
import illu9 from "../assets/illustrations/image 77 (1).svg";
import illu10 from "../assets/illustrations/image 77.svg";
import illu11 from "../assets/illustrations/image 78.svg";
import illu12 from "../assets/illustrations/image 79.svg";

export const Illustrations = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const allImages = [
        { src: illu1, alt: "Illustration 1" },
        { src: illu2, alt: "Illustration 2" },
        { src: illu3, alt: "Illustration 3" },
        { src: illu4, alt: "Illustration 4" },
        { src: illu5, alt: "Illustration 5" },
        { src: illu6, alt: "Illustration 6" },
        { src: illu7, alt: "Illustration 7" },
        { src: illu8, alt: "Illustration 8" },
        { src: illu9, alt: "Illustration 9" },
        { src: illu10, alt: "Illustration 10" },
        { src: illu11, alt: "Illustration 11" },
        { src: illu12, alt: "Illustration 12" },
    ];

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, [allImages.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }, [allImages.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleNext, handlePrev]);

    return (
        <section className="w-full">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 w-full px-2 md:px-4 overflow-hidden">
                {allImages.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(index)}
                        className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-zoom-in break-inside-avoid"
                    >
                        <div className="overflow-hidden w-full h-full">
                            <img
                                className={`${image.aspectRatio} relative self-stretch w-full object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none`}
                                alt={image.alt}
                                src={image.src}
                            />
                        </div>
                        <div className="absolute inset-0 bg-portfolio-dark/0 group-hover:bg-portfolio-dark/10 transition-colors duration-500" />
                    </div>
                ))}
            </div>

            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <AnimatePresence>
                    {isOpen && (
                        <Dialog.Portal forceMount>
                            <Dialog.Overlay asChild>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsOpen(false)}
                                    className="fixed inset-0 bg-white/10 backdrop-blur-2xl z-50 flex items-center justify-center overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-portfolio-dark/60 font-poppins text-sm tracking-widest z-50 bg-white/20 px-4 py-1 rounded-full backdrop-blur-md pointer-events-none">
                                        {currentIndex + 1} / {allImages.length}
                                    </div>

                                    <Dialog.Close asChild>
                                        <button
                                            className="absolute top-6 right-6 p-3 text-portfolio-dark/60 hover:text-portfolio-dark hover:bg-portfolio-dark/10 rounded-full transition-all duration-300 z-50"
                                            aria-label="Close"
                                        >
                                            <X size={28} />
                                        </button>
                                    </Dialog.Close>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                        className="absolute left-4 md:left-8 p-4 text-portfolio-dark/40 hover:text-portfolio-dark hover:bg-portfolio-dark/10 rounded-full transition-all duration-300 z-50 hidden md:block"
                                    >
                                        <ChevronLeft size={48} />
                                    </button>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                        className="absolute right-4 md:right-8 p-4 text-portfolio-dark/40 hover:text-portfolio-dark hover:bg-portfolio-dark/10 rounded-full transition-all duration-300 z-50 hidden md:block"
                                    >
                                        <ChevronRight size={48} />
                                    </button>

                                    <Dialog.Content asChild>
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ scale: 0.9, opacity: 0, x: 20 }}
                                            animate={{ scale: 1, opacity: 1, x: 0 }}
                                            exit={{ scale: 0.9, opacity: 0, x: -20 }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.2}
                                            onDragEnd={(e, { offset, velocity }) => {
                                                const swipe = offset.x;
                                                if (swipe < -100) handleNext();
                                                else if (swipe > 100) handlePrev();
                                            }}
                                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                            className="relative flex items-center justify-center outline-none w-full h-full p-12 md:p-24 lg:p-32"
                                        >
                                            <img
                                                src={allImages[currentIndex].src}
                                                alt={allImages[currentIndex].alt}
                                                onClick={(e) => e.stopPropagation()}
                                                className="max-w-full max-h-full object-contain rounded-sm select-none shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-none"
                                            />
                                        </motion.div>
                                    </Dialog.Content>
                                </motion.div>
                            </Dialog.Overlay>
                        </Dialog.Portal>
                    )}
                </AnimatePresence>
            </Dialog.Root>
        </section>
    );
};
