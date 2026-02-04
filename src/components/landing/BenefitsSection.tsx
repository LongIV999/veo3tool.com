import React from 'react';
import { motion } from 'framer-motion';
import { BrutalCard } from '../ui/BrutalCard';
import { NeonText } from '../ui/NeonText';

const BenefitsSection: React.FC = () => {
    const neonColors: Array<'lime' | 'cyan' | 'pink' | 'yellow'> = ['lime', 'cyan', 'pink', 'yellow', 'lime', 'cyan', 'pink'];

    const features = [
        {
            title: "Tạo Kịch Bản Tự Động",
            desc: "AI viết kịch bản viral cho YouTube Shorts/TikTok theo trending topics. Tối ưu SEO và hook đầu video tự động.",
            icon: "📝"
        },
        {
            title: "Tạo Video AI",
            desc: "Tích hợp Veo 3 và Sora 2 - 2 model AI video hàng đầu thế giới. Chất lượng Hollywood, không cần quay phim.",
            icon: "🎬"
        },
        {
            title: "Tạo Ảnh AI Đa Dạng",
            desc: "3 models: Nano Banana Pro (chân dung), Flux Dev (concept art), Z-Image (realistic). Chọn style phù hợp từng niche.",
            icon: "🖼️"
        },
        {
            title: "Clone YouTube Shorts",
            desc: "Phân tích video trending, tự động tạo biến thể với giọng văn và visual khác. Scale nội dung 10x nhanh hơn.",
            icon: "📹"
        },
        {
            title: "Text to Speech",
            desc: "Giọng đọc tự nhiên như người thật, hỗ trợ tiếng Việt chuẩn. Điều chỉnh tốc độ, cảm xúc theo từng đoạn.",
            icon: "🎙️"
        },
        {
            title: "Tự Động Đăng YouTube",
            desc: "Schedule đăng video theo lịch, tự động tối ưu title/description/tags. Upload hàng loạt không cần giám sát.",
            icon: "🚀"
        },
        {
            title: "Quản Lý Nhân Vật",
            desc: "Tạo và lưu trữ character profiles. Giữ tính nhất quán diễn viên AI trong cả series video dài.",
            icon: "👤"
        }
    ];

    return (
        <section className="py-24 bg-brutal-black">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-center text-brutal-white mb-4"
                >
                    7 TÍNH NĂNG
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-center mb-20"
                >
                    <NeonText color="lime">ĐA NĂNG</NeonText>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, index) => {
                        const neonColor = neonColors[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BrutalCard
                                    variant="light"
                                    className="p-8 h-full flex flex-col relative overflow-hidden group"
                                >
                                    {/* Colored Top Stripe */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 bg-neon-${neonColor}`}
                                    />

                                    {/* Icon Box */}
                                    <div
                                        className={`w-16 h-16 border-brutal-3 border-brutal-black bg-brutal-black flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-200`}
                                    >
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-brutal-black mb-4 leading-tight">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-brutal-black/70 font-body font-medium text-base leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>
                                </BrutalCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
