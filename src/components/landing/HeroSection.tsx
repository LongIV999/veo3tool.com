import React from 'react';
import { GridBackground } from '../ui/GridBackground';
import { NeonText } from '../ui/NeonText';
import { BrutalCard } from '../ui/BrutalCard';

interface HeroSectionProps {
    onscrollToPricing: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onscrollToPricing }) => {
    return (
        <GridBackground className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="z-10 max-w-6xl w-full text-center flex flex-col items-center gap-8">
                {/* Badge */}
                <BrutalCard
                    variant="light"
                    neonColor="lime"
                    className="inline-flex items-center gap-2 px-4 py-2"
                >
                    <span className="w-3 h-3 rounded-none bg-neon-lime animate-pulse" />
                    <span className="text-xs font-bold font-mono text-brutal-black tracking-widest uppercase">
                        CÔNG CỤ AI ĐA NĂNG
                    </span>
                </BrutalCard>

                {/* Headline */}
                <h1 className="font-heading font-black uppercase tracking-tighter text-brutal-white">
                    <span className="block text-6xl md:text-8xl lg:text-9xl">
                        TẠO VIDEO AI
                    </span>
                    <span className="block text-6xl md:text-8xl lg:text-9xl">
                        <NeonText color="lime" className="inline">TỰ ĐỘNG 24/7</NeonText>
                    </span>
                    <span className="block text-4xl md:text-6xl lg:text-7xl mt-4 text-brutal-white/70">
                        ĐĂNG YOUTUBE KHÔNG CẦN TAY
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-6 text-brutal-white/80 max-w-3xl text-lg md:text-xl font-body font-medium leading-relaxed">
                    Tích hợp <strong className="text-brutal-white font-bold">Veo 3, Sora 2, Flux Dev</strong> và 7+ tính năng AI.
                    Từ kịch bản → video → đăng YouTube <strong className="text-neon-lime">hoàn toàn tự động</strong>.
                    Clone YTb Short, Text to Speech, quản lý nhân vật - tất cả trong 1 tool.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full justify-center">
                    <button
                        onClick={onscrollToPricing}
                        className="group relative px-10 py-5 bg-brutal-black border-brutal-4 border-neon-lime text-neon-lime font-mono font-bold uppercase tracking-wider text-base shadow-brutal-lift hover:shadow-brutal-deep hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
                    >
                        DÙNG THỬ MIỄN PHÍ →
                    </button>

                    <button className="group px-10 py-5 bg-brutal-white border-brutal-4 border-brutal-black text-brutal-black font-mono font-bold uppercase tracking-wider text-base shadow-brutal hover:shadow-brutal-lift hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                        XEM VIDEO DEMO
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-col items-center gap-6">
                    <p className="text-sm text-brutal-white/50 uppercase tracking-widest font-mono font-bold">
                        HỖ TRỢ CÁC NÀ TẢNG
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <span className="text-2xl font-black font-mono text-brutal-white/70 hover:text-neon-lime transition-colors duration-200">
                            YOUTUBE
                        </span>
                        <span className="text-brutal-white/30">|</span>
                        <span className="text-2xl font-black font-mono text-brutal-white/70 hover:text-neon-cyan transition-colors duration-200">
                            VEO 3
                        </span>
                        <span className="text-brutal-white/30">|</span>
                        <span className="text-2xl font-black font-mono text-brutal-white/70 hover:text-neon-pink transition-colors duration-200">
                            SORA 2
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs font-mono text-brutal-white/40 uppercase tracking-widest">
                    SCROLL
                </span>
                <div className="w-[2px] h-12 bg-neon-lime animate-pulse" />
            </div>
        </GridBackground>
    );
};

export default HeroSection;
