import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const slides = [
    {
        title: "LONG",
        description: "Architecture of Thought. Building resilient systems that stand the test of time. Not instant gratification, but enduring value.",
        color: "text-minimalist-slate"
    },
    {
        title: "BEST",
        description: "Computational Silence. Creating the best outcome by removing the noise. Perfection through subtraction.",
        color: "text-minimalist-charcoal"
    },
    {
        title: "LONGBEST",
        description: "Algorithmic Essentialism. The convergence of longevity and quality. Where the code meets the soul.",
        color: "text-minimalist-slate"
    }
];

const Manifesto: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="min-h-screen bg-white text-minimalist-charcoal flex flex-col justify-center items-center py-20 px-8">
            <div className="max-w-4xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="aspect-square relative flex items-center justify-center bg-minimalist-white border border-minimalist-lightGray rounded-sm overflow-hidden cursor-pointer group" onClick={nextSlide}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className={cn("text-9xl font-bold font-sans", slides[currentSlide].color)}
                            >
                                {slides[currentSlide].title[0]}
                            </motion.div>
                        </AnimatePresence>

                        {/* Interactive overlay indicators */}
                        <div className="absolute bottom-6 flex space-x-3">
                            {slides.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "w-1.5 h-1.5 rounded-full transition-all duration-500",
                                        idx === currentSlide ? "bg-minimalist-charcoal w-6" : "bg-minimalist-lightGray"
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className={cn("text-7xl font-bold mb-8 tracking-tighter", slides[currentSlide].color)}>
                                    {slides[currentSlide].title}
                                </h2>
                                <p className="text-xl font-sans text-minimalist-slate leading-relaxed font-light">
                                    {slides[currentSlide].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="pt-12">
                            <button
                                onClick={nextSlide}
                                className="px-8 py-3 border border-minimalist-slate text-minimalist-charcoal hover:bg-minimalist-charcoal hover:text-white font-sans text-xs tracking-[0.3em] transition-all duration-300 uppercase"
                            >
                                Next Concept
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Manifesto;
