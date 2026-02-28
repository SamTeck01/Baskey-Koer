import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import logo1 from "../../assets/1_frame_1618870344.png";
import logo2 from "../../assets/2_frame_1618870345.png";
import logo3 from "../../assets/3_frame_1618869065.png";
import logo4 from "../../assets/4_frame_1618869086.png";
import logo5 from "../../assets/5_frame_1618869673.png";
import logo6 from "../../assets/6_frame_1618869175.png";
import logo7 from "../../assets/7_frame_1618869179.png";
import logo8 from "../../assets/8_frame_2147224660.png";
import logo9 from "../../assets/9_frame_69.png";

export function Logofolio() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const logos = [
        logo1, logo2, logo3,
        logo4, logo5, logo6,
        logo7, logo8, logo9
    ];

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, [logos.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
    }, [logos.length]);

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
        <section className="w-full bg-portfolio-cream py-16 md:py-32 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-24">
                    <h3 className="text-portfolio-dark font-poppins text-[40px] mb-2">
                        Logofolio
                    </h3>
                    <p className="text-portfolio-dark/50 text-base md:text-lg italic">
                        2025 Edition
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 relative">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(index)}
                            className="relative flex items-center justify-center p-8 md:p-6 lg:p-12 cursor-zoom-in"
                        >
                            {/* 1. Vertical Custom Dashed Line (Right Side) */}
                            <div 
                                className={`
                                    absolute right-0 top-0 bottom-0 w-px
                                    ${(index + 1) % 2 === 0 ? 'hidden' : 'block'} 
                                    ${(index + 1) % 3 === 0 ? 'md:hidden' : 'md:block'}
                                `} 
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, #28293E 50%, transparent 50%)`,
                                    backgroundSize: '1px 12px', /* Increase 12px for wider gaps */
                                    backgroundRepeat: 'repeat-y'
                                }}
                            />

                            {/* 2. Horizontal Custom Dashed Line (Bottom Side) */}
                            <div 
                                className={`
                                    absolute bottom-0 left-0 right-0 h-px
                                    ${index >= logos.length - 2 ? 'hidden' : 'block'} 
                                    ${index >= logos.length - 3 ? 'md:hidden' : 'md:block'}
                                `} 
                                style={{
                                    backgroundImage: `linear-gradient(to right, #28293E 50%, transparent 50%)`,
                                    backgroundSize: '12px 1px', /* Increase 12px for wider gaps */
                                    backgroundRepeat: 'repeat-x'
                                }}
                            />

                            {/* Logo Content */}
                            <div className="w-full max-w-[150px] md:max-w-[180px] transition-all duration-500 hover:scale-110">
                                <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-auto" />
                            </div>
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
                                            {currentIndex + 1} / {logos.length}
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
                                                <div className="p-32 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg">
                                                    <img
                                                        src={logos[currentIndex]}
                                                        alt={`Logo ${currentIndex + 1}`}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="max-w-full max-h-full object-contain select-none pointer-events-none"
                                                    />
                                                </div>
                                            </motion.div>
                                        </Dialog.Content>
                                    </motion.div>
                                </Dialog.Overlay>
                            </Dialog.Portal>
                        )}
                    </AnimatePresence>
                </Dialog.Root>
            </div>
        </section>
    );
}
