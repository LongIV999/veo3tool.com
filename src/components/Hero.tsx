import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePopup } from '../context/PopupContext';
import { PlayIcon, SparklesIcon } from './ui/icons';
import { TextReveal } from './ui/TextReveal';

const Hero: React.FC = () => {
    const { openEmailPopup } = usePopup();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aurora">
            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 mesh-gradient opacity-60 z-0" />

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-purple/30 rounded-full blur-[100px] -z-0 mix-blend-screen"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-aurora-cyan/20 rounded-full blur-[120px] -z-0 mix-blend-screen"
            />

            <div className="relative z-10 max-w-7xl px-4 flex flex-col items-center w-full">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
                    <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">AI Video Generation Revolution</span>
                </motion.div>

                {/* Headline */}
                <div className="text-center mb-6 max-w-5xl">
                    <h1 className="sr-only">Tạo video không giới hạn</h1>
                    <div className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-2">
                        <TextReveal type="character" delay={0.2} duration={0.8}>
                            Tạo video
                        </TextReveal>
                    </div>
                    <div className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight gradient-text-aurora text-glow filter">
                        <TextReveal type="character" delay={0.6} duration={0.8}>
                            không giới hạn
                        </TextReveal>
                    </div>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mb-12 max-w-2xl text-lg md:text-xl text-slate-300 font-body leading-relaxed"
                >
                    Sức mạnh <span className="text-white font-bold">Veo 3</span> + <span className="text-white font-bold">Nano Banana Pro</span> trong một Tool duy nhất.
                    <br className="hidden md:block" /> Biến ý tưởng thành hiện thực chỉ trong vài giây.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <button
                        onClick={openEmailPopup}
                        className="group relative px-8 py-4 bg-white text-aurora-dark font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-aurora-cyan via-white to-aurora-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-2">
                            <SparklesIcon size={20} />
                            Bắt đầu miễn phí
                        </span>
                    </button>

                    <button className="group px-8 py-4 bg-white/5 text-white font-bold text-lg rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <PlayIcon size={12} />
                        </div>
                        Xem demo
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"
                />
            </motion.div>

            {/* Parallax Background Elements */}
            <motion.div style={{ y: y1 }} className="absolute rotate-45 top-0 -right-20 w-96 h-96 bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute -rotate-12 bottom-0 -left-20 w-80 h-80 bg-gradient-to-t from-ai-purple/10 to-transparent blur-3xl opacity-30 pointer-events-none" />
        </section>
    );
};

export default Hero;
