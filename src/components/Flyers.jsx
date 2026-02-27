import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import image75_1 from "../assets/image 75_1-018.png";
import image75 from "../assets/image 75-008.png";
import image76 from "../assets/image 76-010.png";
import image77_1 from "../assets/image 77_1-004.png";
import image77_2 from "../assets/image 77_2-009.png";
import image77 from "../assets/image 77-003.png";
import image80 from "../assets/image 80-005.png";
import image82_1 from "../assets/image 82_1-007.png";
import image82_2 from "../assets/image 82_2-017.png";
import image82 from "../assets/image 82-001.png";
import image83_1 from "../assets/image 83_1-006.png";
import image83_2 from "../assets/image 83_2-011.png";
import image83_3 from "../assets/image 83_3-019.png";
import image83 from "../assets/image 83-002.png";
import image84 from "../assets/image 84-012.png";
import image85 from "../assets/image 85-013.png";
import image86 from "../assets/image 86-014.png";
import image87 from "../assets/image 87-015.png";
import image88 from "../assets/image 88-016.png";

export const Flyers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Flatten all 19 images into a single array for navigation
    const allImages = [
        { src: image82, aspectRatio: "aspect-[0.86]", alt: "Gallery image 1" },
        { src: image75, aspectRatio: "aspect-[1]", alt: "Gallery image 2" },
        { src: image83, aspectRatio: "aspect-[0.86]", alt: "Gallery image 3" },
        { src: image82_1, aspectRatio: "aspect-[0.86]", alt: "Gallery image 4" },
        { src: image77_1, aspectRatio: "aspect-[1.78]", alt: "Gallery image 5" },
        { src: image84, aspectRatio: "aspect-[1.78]", alt: "Gallery image 6" },
        { src: image85, aspectRatio: "aspect-[1.78]", alt: "Gallery image 7" },
        { src: image86, aspectRatio: "aspect-[1.78]", alt: "Gallery image 8" },
        { src: image87, aspectRatio: "aspect-[1.78]", alt: "Gallery image 9" },
        { src: image88, aspectRatio: "aspect-[1.78]", alt: "Gallery image 10" },
        { src: image75_1, aspectRatio: "aspect-[1]", alt: "Gallery image 11" },
        { src: image77, aspectRatio: "aspect-[0.8]", alt: "Gallery image 12" },
        { src: image76, aspectRatio: "aspect-[1]", alt: "Gallery image 13" },
        { src: image82_2, aspectRatio: "aspect-[0.8]", alt: "Gallery image 14" },
        { src: image77_2, aspectRatio: "aspect-[0.8]", alt: "Gallery image 15" },
        { src: image80, aspectRatio: "aspect-[1.33]", alt: "Gallery image 16" },
        { src: image83_2, aspectRatio: "aspect-[1]", alt: "Gallery image 17" },
        { src: image83_1, aspectRatio: "aspect-[0.86]", alt: "Gallery image 18" },
        { src: image83_3, aspectRatio: "aspect-[0.9]", alt: "Gallery image 19" },
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
        <>
            <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4 w-full px-2 md:px-4 overflow-hidden">
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
                                    className="fixed inset-0 bg-white/5 backdrop-blur-2xl z-50 flex items-center justify-center overflow-hidden cursor-pointer"
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
        </>
    );
};
