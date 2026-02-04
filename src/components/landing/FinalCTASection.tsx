import React from 'react';
import { motion } from 'framer-motion';
import { GridBackground } from '../ui/GridBackground';
import { NeonText } from '../ui/NeonText';
import { BrutalCard } from '../ui/BrutalCard';
import LeadForm from './LeadForm';

const FinalCTASection: React.FC = () => {
    return (
        <GridBackground className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <BrutalCard
                        variant="light"
                        className="p-8 md:p-12 lg:p-16 border-brutal-5 border-neon-pink shadow-brutal-deep"
                    >
                        {/* Top Neon Stripe */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-neon-pink" />

                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-brutal-black mb-4 leading-none">
                                    SẴN SÀNG BẮT ĐẦU
                                </h2>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter mb-6 leading-none">
                                    HÀNH TRÌNH{' '}
                                    <NeonText color="pink" className="inline-block">
                                        THỐNG TRỊ?
                                    </NeonText>
                                </h2>

                                <p className="text-lg md:text-xl text-brutal-black/70 mb-10 max-w-xl mx-auto lg:mx-0 font-body font-medium leading-relaxed">
                                    Gia nhập cộng đồng <strong className="text-brutal-black font-bold">10,000+</strong> người sáng tạo nội dung hàng đầu.
                                    Đừng để đối thủ bỏ xa bạn trong cuộc đua AI.
                                </p>

                                {/* Benefits List */}
                                <div className="flex flex-col gap-5 mb-10">
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <div className="w-8 h-8 border-brutal-3 border-neon-pink bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
                                            <span className="text-neon-pink text-xl font-black leading-none">✓</span>
                                        </div>
                                        <span className="text-brutal-black font-body font-semibold text-base md:text-lg">
                                            Dùng thử miễn phí không giới hạn thời gian
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <div className="w-8 h-8 border-brutal-3 border-neon-pink bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
                                            <span className="text-neon-pink text-xl font-black leading-none">✓</span>
                                        </div>
                                        <span className="text-brutal-black font-body font-semibold text-base md:text-lg">
                                            Không cần thẻ tín dụng
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <div className="w-8 h-8 border-brutal-3 border-neon-pink bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
                                            <span className="text-neon-pink text-xl font-black leading-none">✓</span>
                                        </div>
                                        <span className="text-brutal-black font-body font-semibold text-base md:text-lg">
                                            Hủy bất kỳ lúc nào
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile CTA Button (shown only on mobile when form is on separate card) */}
                                <div className="lg:hidden">
                                    <button className="w-full py-5 bg-brutal-black border-brutal-4 border-neon-pink text-neon-pink font-mono font-black uppercase tracking-wider text-base shadow-brutal-lift hover:shadow-brutal-deep hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                                        BẮT ĐẦU NGAY →
                                    </button>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="flex-1 w-full max-w-md">
                                <LeadForm />
                            </div>
                        </div>

                        {/* Bottom Decorative Elements */}
                        <div className="mt-12 pt-8 border-t border-brutal-black/10">
                            <p className="text-center text-brutal-black/50 font-mono text-sm uppercase tracking-widest">
                                ⚡ Hơn 100,000+ bài viết đã được tạo ⚡
                            </p>
                        </div>
                    </BrutalCard>
                </motion.div>

                {/* Decorative Background Elements */}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 border-brutal-4 border-neon-yellow bg-neon-yellow/10 -z-10" />
                <div className="absolute -top-20 -right-20 w-60 h-60 border-brutal-4 border-neon-cyan bg-neon-cyan/10 -z-10" />
            </div>
        </GridBackground>
    );
};

export default FinalCTASection;
