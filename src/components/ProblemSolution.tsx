import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution: React.FC = () => {
    return (
        <section className="py-24 bg-bg-primary text-fg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">

                {/* Part 1: Pain Point */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-fg-primary">
                            Bạn Đang Tạo Video <br />
                            <span className="text-accent-orange">Như Thế Nào?</span>
                        </h2>
                        <ul className="space-y-4 text-fg-secondary font-body text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Mở Veo 3 → tạo 1 video → đợi</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Mở Sora 2 → tạo thêm 1 video → đợi tiếp</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Chuyển sang Nano Banana → tạo thumbnail → đợi nữa</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✗</span>
                                <span>Lặp lại 50-100 lần cho một chiến dịch content</span>
                            </li>
                        </ul>
                        <p className="text-fg-tertiary italic pt-4 border-t border-border-subtle">
                            → Mất cả ngày chỉ để generate, chưa kể editing và upload
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-bg-tertiary rounded-sm p-8 border border-border-subtle shadow-2xl relative"
                    >
                        <div className="absolute top-4 right-4 text-red-500/20 text-6xl">
                            {/* Material Icon Clock maybe? Just text for now */}
                        </div>
                        <div className="space-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Mockup UI of single processing */}
                            <div className="h-4 bg-bg-secondary w-3/4 rounded-sm animate-pulse"></div>
                            <div className="h-32 bg-bg-secondary w-full rounded-sm flex items-center justify-center border border-dashed border-fg-tertiary">
                                <span className="text-xs uppercase tracking-widest text-fg-tertiary">Processing 1/1...</span>
                            </div>
                            <div className="h-4 bg-bg-secondary w-1/2 rounded-sm"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1 bg-bg-tertiary rounded-sm p-8 border border-accent-blue/20 shadow-[0_0_30px_rgba(106,155,204,0.1)] relative overflow-hidden"
                    >
                        {/* Abstract Bulk Processing UI Mockup */}
                        <div className="grid grid-cols-4 gap-2 opacity-80">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="aspect-video bg-bg-secondary border border-accent-blue/30 rounded-xs relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors"></div>
                                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-accent-green rounded-full shadow-[0_0_5px_#788c5d]"></div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-accent-blue">
                            <span>QUEUE: ACTIVE</span>
                            <span>100/100 COMPLETED</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-fg-primary">
                            Long Best <span className="text-accent-blue">Làm Điều Này</span> <br />
                            Cho Bạn
                        </h2>
                        <ul className="space-y-4 text-fg-secondary font-body text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-accent-green mt-1">✓</span>
                                <span>Upload 100 prompts/scripts cùng lúc</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent-green mt-1">✓</span>
                                <span>Chọn platform: Sora 2 / Veo 3 / Grok</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent-green mt-1">✓</span>
                                <span>Set style: Live-action / Multishot / VFX</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent-green mt-1">✓</span>
                                <span>Nhấn "Generate" → Đi ngủ → Sáng dậy có 100 videos</span>
                            </li>
                        </ul>
                        <p className="text-accent-blue font-medium pt-4 border-t border-border-subtle">
                            Không cần ngồi giữ máy. Hệ thống tự động xếp hàng & notify khi xong.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
