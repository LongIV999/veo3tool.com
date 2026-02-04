import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-aurora-dark flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-aurora opacity-20" />
            <div className="absolute inset-0 mesh-gradient opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-purple/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Decorative Orbs */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-aurora-cyan/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-aurora-magenta/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white tracking-tight">
                        Ready to <span className="gradient-text-aurora text-glow-cyan">Create?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-body leading-relaxed">
                        Tham gia cộng đồng 500+ creators đang sử dụng LongBest để sản xuất video mỗi ngày.
                    </p>

                    <form
                        className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto relative group"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-ai-purple focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            />
                            {/* Input Glow on Focus (implied by focus:border-ai-purple) */}
                        </div>

                        <button className="h-14 px-8 rounded-xl bg-ai-purple text-white font-heading font-bold uppercase tracking-wider hover:bg-ai-purple/90 transition-all duration-300 shadow-lg shadow-ai-purple/25 hover:shadow-ai-purple/50 whitespace-nowrap active:scale-95">
                            Join Waitlist
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-slate-500 font-mono">
                        *Limited slots available for beta access. No credit card required.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
