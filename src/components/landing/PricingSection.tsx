import React from 'react';
import { motion } from 'framer-motion';
import { BrutalCard } from '../ui/BrutalCard';
import { NeonText } from '../ui/NeonText';

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-brutal-white relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brutal-black mb-4">
                        BẢNG GIÁ
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-6">
                        <NeonText color="lime">ĐƠN GIẢN</NeonText>
                    </h2>
                    <p className="text-brutal-black/70 text-lg md:text-xl max-w-2xl mx-auto font-body font-medium">
                        Trải nghiệm miễn phí 1 ngày. Chọn gói phù hợp để scale kênh YouTube.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <BrutalCard
                            variant="light"
                            className="p-8 flex flex-col h-full"
                        >
                            <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-brutal-black mb-2">
                                MIỄN PHÍ
                            </h3>
                            <div className="text-5xl font-black font-mono text-brutal-black mb-2">
                                0Đ
                            </div>
                            <p className="text-brutal-black/60 mb-8 font-body font-medium">
                                Thời gian: <strong className="text-brutal-black">1 ngày</strong>
                            </p>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-brutal-black font-body font-semibold">
                                    <span className="text-brutal-black text-xl">▸</span>
                                    <span>Full tính năng (7/7)</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-semibold">
                                    <span className="text-brutal-black text-xl">▸</span>
                                    <span>Tạo không giới hạn video</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-semibold">
                                    <span className="text-brutal-black text-xl">▸</span>
                                    <span>Hỗ trợ qua email</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black/50 font-body font-medium">
                                    <span className="text-brutal-black/50 text-xl">▸</span>
                                    <span>Không cần thẻ tín dụng</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 bg-brutal-white border-brutal-3 border-brutal-black text-brutal-black font-mono font-bold uppercase tracking-wider text-sm shadow-brutal hover:shadow-brutal-lift hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                                DÙNG THỬ NGAY
                            </button>
                        </BrutalCard>
                    </motion.div>

                    {/* Monthly Plan - Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:-mt-4"
                    >
                        <BrutalCard
                            variant="light"
                            className="p-8 flex flex-col h-full relative border-brutal-5 border-neon-lime shadow-brutal-deep scale-105"
                        >
                            {/* Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-neon-lime border-brutal-3 border-brutal-black">
                                <span className="text-brutal-black font-mono font-black text-xs uppercase tracking-widest">
                                    PHỔ BIẾN NHẤT
                                </span>
                            </div>

                            <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-brutal-black mb-2 mt-4">
                                1 THÁNG
                            </h3>
                            <div className="mb-2">
                                <span className="text-5xl font-black font-mono text-neon-lime">
                                    750K
                                </span>
                                <span className="text-xl font-mono text-brutal-black/50 ml-2">
                                    /THÁNG
                                </span>
                            </div>
                            <p className="text-brutal-black/60 mb-8 font-body font-medium">
                                Thời hạn: <strong className="text-brutal-black">30 ngày</strong>
                            </p>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-lime text-xl">▸</span>
                                    <span>Full tính năng (7/7)</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-lime text-xl">▸</span>
                                    <span>Tạo không giới hạn video</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-lime text-xl">▸</span>
                                    <span>Hỗ trợ TeamViewer trực tiếp</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-lime text-xl">▸</span>
                                    <span>Cài đặt & setup tận tay</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-lime text-xl">▸</span>
                                    <span>Hỗ trợ ưu tiên 24/7</span>
                                </li>
                            </ul>
                            <button className="w-full py-5 bg-brutal-black border-brutal-4 border-neon-lime text-neon-lime font-mono font-black uppercase tracking-wider text-base shadow-brutal-lift hover:shadow-brutal-deep hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                                MUA NGAY →
                            </button>
                        </BrutalCard>
                    </motion.div>

                    {/* Yearly Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <BrutalCard
                            variant="light"
                            className="p-8 flex flex-col h-full border-brutal-4 border-neon-cyan"
                        >
                            {/* Best Value Badge */}
                            <div className="mb-4 px-3 py-1 bg-neon-cyan/20 border-brutal-3 border-neon-cyan inline-block w-fit">
                                <span className="text-neon-cyan font-mono font-black text-xs uppercase tracking-wider">
                                    TIẾT KIỆM 30%
                                </span>
                            </div>

                            <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-brutal-black mb-2">
                                1 NĂM
                            </h3>
                            <div className="mb-2">
                                <span className="text-5xl font-black font-mono text-neon-cyan">
                                    7TR9
                                </span>
                                <span className="text-xl font-mono text-brutal-black/50 ml-2">
                                    /NĂM
                                </span>
                            </div>
                            <p className="text-brutal-black/60 mb-8 font-body font-medium">
                                Chỉ <strong className="text-neon-cyan">658k/tháng</strong>
                            </p>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-cyan text-xl">▸</span>
                                    <span>Mọi tính năng gói 1 tháng</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-cyan text-xl">▸</span>
                                    <span>Support 1:1 riêng biệt</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-cyan text-xl">▸</span>
                                    <span>Hướng dẫn làm video AI trên project thật</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-cyan text-xl">▸</span>
                                    <span>Tư vấn chiến lược kiếm tiền từ AI</span>
                                </li>
                                <li className="flex items-start gap-3 text-brutal-black font-body font-bold">
                                    <span className="text-neon-cyan text-xl">▸</span>
                                    <span>Update tính năng mới miễn phí</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 bg-neon-cyan border-brutal-3 border-brutal-black text-brutal-black font-mono font-bold uppercase tracking-wider text-sm shadow-brutal hover:shadow-brutal-lift hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                                ĐẦU TƯ DÀI HẠN
                            </button>
                        </BrutalCard>
                    </motion.div>
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-brutal-black/60 font-mono text-sm uppercase tracking-wider">
                        ⚡ Thanh toán 1 lần • Không ẩn phí • Hỗ trợ 24/7 ⚡
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
