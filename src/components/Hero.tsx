import React from 'react';
import { motion } from 'framer-motion';
import InfiniteLoop from './InfiniteLoop';

const Hero: React.FC = () => {

    return (
        <section className="hero hero-portal bg-dark-primary text-light-primary">
            <InfiniteLoop />

            <div className="hero-content relative z-10 max-w-4xl px-4 flex flex-col items-center">
                {/* Label */}


                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-headline text-center mb-8"
                >
                    Tạo video <br />
                    <span className="hero-headline-accent">không giới hạn</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="body-text text-center mb-12 max-w-2xl"
                >
                    Sức mạnh Veo 3 + Nano Banana Pro trong một Tool duy nhất
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <button className="btn-primary w-full sm:w-auto">
                        Bắt đầu miễn phí
                    </button>
                    <button className="btn-secondary w-full sm:w-auto">
                        Xem demo
                    </button>
                </motion.div>


            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="hero-scroll-indicator"
            >
                SCROLL TO EXPLORE
                <span className="scroll-arrow">↓</span>
            </motion.div>
        </section>
    );
}
    ;

export default Hero;
