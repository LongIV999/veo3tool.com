import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClapperboardIcon, PaletteIcon, ZapIcon, CpuIcon, LayersIcon, MaximizeIcon } from './ui/icons';

const FeaturesGrid: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100
            }
        }
    };

    return (
        <section className="py-24 bg-dark-primary relative overflow-hidden" id="features">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aurora-cyan/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Công nghệ <span className="gradient-text">Lõi</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-body">
                        Kết hợp sức mạnh tối thượng của AI Video và Visual Design trong một platform duy nhất.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]"
                >

                    {/* Veo 3 Card - Large Left */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2, z: 10 }}
                        className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group perspective-1000"
                    >
                        {/* Spotlight Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                            <ClapperboardIcon className="w-48 h-48 text-white rotate-12" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-purple/20 border border-ai-purple/30 text-ai-purple text-xs font-bold uppercase tracking-wider mb-6">
                                    <ZapIcon className="w-3 h-3" /> Flagship Model
                                </div>
                                <h3 className="text-4xl font-heading font-bold text-white mb-4 group-hover:text-glow transition-all">
                                    Veo 3 Neural Engine
                                </h3>
                                <p className="text-xl text-slate-300 font-body leading-relaxed max-w-md">
                                    AI model mạnh nhất từ Google DeepMind. Tạo video chất lượng Hollywood 4K 60fps chỉ từ text prompt.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { icon: MaximizeIcon, label: "4K Resolution" },
                                    { icon: LayersIcon, label: "Multi-shot Sequences" },
                                    { icon: CpuIcon, label: "Real-time Rendering" },
                                    { icon: ClapperboardIcon, label: "Cinema Lighting" },
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                        <feature.icon className="w-5 h-5 text-aurora-cyan" />
                                        <span className="text-slate-200 font-medium">{feature.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Nano Banana Card - Top Right */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2, z: 10 }}
                        className="glass-card rounded-3xl p-8 relative overflow-hidden group border-aurora-cyan/20 perspective-1000"
                    >
                        {/* Spotlight Effect */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-aurora-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="absolute -bottom-4 -right-4 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                            <PaletteIcon className="w-32 h-32 text-aurora-cyan -rotate-12" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-cyan to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-aurora-cyan/20">
                                <PaletteIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-3">
                                Nano Banana Pro
                            </h3>
                            <p className="text-slate-400 mb-6">
                                3D minimalist aesthetic automation. Pop-color layouts hoàn hảo cho social media.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan" /> Brand consistency
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan" /> Custom palettes
                                </li>
                            </ul>
                        </div>

                        {/* Nano Banana Illustration */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-48 h-48 opacity-80 pointer-events-none">
                            <img
                                src="/illustrations/nano-banana-card.png"
                                alt="Nano Banana 3D Icon"
                                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            />
                        </div>
                    </motion.div>

                    {/* Coming Soon / Extra Card - Bottom Right */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="glass-card rounded-3xl p-8 relative overflow-hidden group bg-gradient-to-br from-white/5 to-white/0"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center mb-4 group-hover:border-aurora-magenta group-hover:animate-spin-slow transition-colors">
                                <span className="text-2xl">?</span>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-slate-300 mb-2">
                                Next Gen Audio
                            </h3>
                            <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-slate-400">
                                Coming Soon
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};

export default FeaturesGrid;