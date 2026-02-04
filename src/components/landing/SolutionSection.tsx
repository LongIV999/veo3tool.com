import React from 'react';
import { motion } from 'framer-motion';
import { NeonText } from '../ui/NeonText';
import OptimizedImage from '../ui/OptimizedImage';

const SolutionSection: React.FC = () => {
    const workflow = [
        "Nhập chủ đề/keyword → AI tạo kịch bản viral",
        "Chọn AI model (Veo 3/Sora 2) → Tạo video tự động",
        "AI clone giọng hoặc Text-to-Speech",
        "Tự động đăng YouTube theo lịch đã setup"
    ];

    return (
        <section className="relative overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* LEFT SIDE - Black Background */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-brutal-black py-16 px-8 md:px-12 lg:px-16 flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brutal-white mb-4 leading-none">
                        QUY TRÌNH
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-8 leading-none">
                        <NeonText color="cyan">TỰ ĐỘNG 100%</NeonText>
                    </h2>

                    <p className="text-brutal-white/80 text-lg md:text-xl mb-10 font-body font-medium leading-relaxed max-w-lg">
                        Từ kịch bản → video → đăng YouTube, mọi thứ đều <strong className="text-neon-cyan">tự động hóa</strong>.
                        Bạn chỉ cần kiểm tra và thưởng thức kết quả.
                    </p>

                    <div className="space-y-5">
                        {workflow.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-4 group"
                            >
                                {/* Step Number Box */}
                                <div className="flex-shrink-0 w-10 h-10 border-brutal-3 border-neon-cyan bg-neon-cyan/20 flex items-center justify-center group-hover:bg-neon-cyan transition-colors duration-200">
                                    <span className="text-neon-cyan text-xl font-black leading-none group-hover:text-brutal-black transition-colors duration-200">
                                        {index + 1}
                                    </span>
                                </div>
                                <span className="text-brutal-white font-body font-semibold text-base md:text-lg leading-relaxed pt-2">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12"
                    >
                        <button className="px-10 py-5 bg-neon-cyan border-brutal-4 border-neon-cyan text-brutal-black font-mono font-bold uppercase tracking-wider text-base shadow-[8px_8px_0px_#00FFFF] hover:shadow-[12px_12px_0px_#00FFFF] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                            XEM VIDEO HƯỚNG DẪN
                        </button>
                    </motion.div>
                </motion.div>

                {/* DIVIDER - Neon Cyan Vertical Line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-2 bg-neon-cyan transform -translate-x-1/2 z-10" />

                {/* RIGHT SIDE - White Background */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-brutal-white py-16 px-8 md:px-12 lg:px-16 flex items-center justify-center"
                >
                    <div className="relative w-full max-w-lg">
                        {/* Brutal Card Container */}
                        <div className="relative bg-brutal-black border-brutal-4 border-brutal-black shadow-brutal overflow-hidden aspect-square group">
                            <OptimizedImage
                                src="/illustrations/step-2-config.png"
                                alt="AI Video Tool Dashboard"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Top Neon Accent Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-neon-cyan" />

                            {/* Tech Stack Badge */}
                            <div className="absolute top-4 right-4 px-4 py-2 bg-brutal-black border-brutal-3 border-neon-cyan">
                                <span className="text-neon-cyan font-mono font-bold text-xs uppercase tracking-wider">
                                    VEO 3 • SORA 2
                                </span>
                            </div>

                            {/* Bottom Stats */}
                            <div className="absolute bottom-0 left-0 right-0 bg-brutal-black/90 backdrop-blur-sm border-t border-neon-cyan p-4">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-neon-cyan font-mono font-black text-lg">7</div>
                                        <div className="text-brutal-white/60 font-mono text-xs uppercase">Tính năng</div>
                                    </div>
                                    <div>
                                        <div className="text-neon-cyan font-mono font-black text-lg">24/7</div>
                                        <div className="text-brutal-white/60 font-mono text-xs uppercase">Tự động</div>
                                    </div>
                                    <div>
                                        <div className="text-neon-cyan font-mono font-black text-lg">10X</div>
                                        <div className="text-brutal-white/60 font-mono text-xs uppercase">Nhanh hơn</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-brutal-4 border-neon-pink bg-neon-pink/20 -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-brutal-4 border-neon-yellow bg-neon-yellow/20 -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;
