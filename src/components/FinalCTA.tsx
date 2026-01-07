import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-dark-primary flex items-center justify-center">
            {/* Background Gradient/Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-accent/20 to-transparent opacity-50 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-heading font-bold mb-6 text-light-primary"
                >
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-accent to-blue-accent">Create?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-mid-gray mb-10 max-w-2xl mx-auto font-body"
                >
                    Tham gia cộng đồng 500+ creators đang sử dụng LongBest để sản xuất video mỗi ngày.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-light-primary placeholder-mid-gray focus:outline-none focus:border-orange-accent transition-colors flex-grow"
                    />
                    <button className="btn-primary whitespace-nowrap">
                        Join Waitlist
                    </button>
                </motion.form>

                <p className="mt-4 text-sm text-mid-gray/50">
                    *Limited slots available for beta access.
                </p>
            </div>
        </section>
    );
};

export default FinalCTA;
