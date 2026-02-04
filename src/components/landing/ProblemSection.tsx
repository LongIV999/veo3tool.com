import React from 'react';
import { motion } from 'framer-motion';
import { BrutalCard } from '../ui/BrutalCard';
import { NeonText } from '../ui/NeonText';

const ProblemSection: React.FC = () => {
    const problems = [
        "Tốn 5-8 giờ để làm 1 video YouTube, từ viết kịch bản đến edit",
        "Thuê editor tốn 500k-1tr/video, khó kiểm soát chất lượng",
        "Không biết code để tự động hóa quy trình đăng video",
        "Clone video trending thủ công, mất thời gian và không scale được"
    ];

    return (
        <section className="py-24 bg-brutal-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brutal-black mb-6">
                        BẠN CÓ ĐANG GẶP{' '}
                        <NeonText color="pink" className="inline-block">
                            KHÓ KHĂN?
                        </NeonText>
                    </h2>
                    <p className="text-brutal-black/70 text-lg md:text-xl max-w-3xl mx-auto font-body font-medium">
                        Làm YouTube Shorts/TikTok thủ công tốn quá nhiều thời gian và công sức.
                        Bạn cần một hệ thống tự động hóa từ A-Z.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <BrutalCard
                                variant="light"
                                className="p-8 h-full flex items-start gap-6 group cursor-default"
                            >
                                {/* Neon Pink X Icon */}
                                <div className="flex-shrink-0">
                                    <NeonText
                                        color="pink"
                                        className="text-5xl font-black leading-none group-hover:scale-110 transition-transform"
                                    >
                                        ✕
                                    </NeonText>
                                </div>

                                {/* Problem Text */}
                                <p className="text-brutal-black font-body font-semibold text-lg leading-relaxed group-hover:translate-x-1 transition-transform">
                                    {item}
                                </p>
                            </BrutalCard>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight text-brutal-black">
                        GIẢI PHÁP TOÀN DIỆN CHỜ BẠN Ở PHÍA DƯỚI
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
