import React from 'react';
import { motion } from 'framer-motion';
import { BrutalCard } from '../ui/BrutalCard';
import { NeonText } from '../ui/NeonText';

const SocialProofSection: React.FC = () => {
    const testimonials = [
        {
            text: "Từ khi dùng LongBest AI, tôi đã sa thải được... chính sự lười biếng của mình. Content ra đều đặn, traffic tăng gấp 3.",
            name: "Nguyễn Văn A",
            role: "Content Creator",
            avatar: "https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random",
            neonColor: 'lime' as const
        },
        {
            text: "Công cụ này không chỉ viết bài, nó tư duy chiến lược giúp tôi. Đáng giá từng xu.",
            name: "Trần Thị B",
            role: "Marketing Manager",
            avatar: "https://ui-avatars.com/api/?name=Tran+Thi+B&background=random",
            neonColor: 'cyan' as const
        },
        {
            text: "Tôi đã thử nhiều tool AI, nhưng LongBest AI là cái duy nhất hiểu được 'hồn' của thương hiệu.",
            name: "Lê Văn C",
            role: "CEO - Tech Startup",
            avatar: "https://ui-avatars.com/api/?name=Le+Van+C&background=random",
            neonColor: 'pink' as const
        }
    ];

    return (
        <section className="py-24 bg-brutal-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brutal-black mb-4">
                        ĐƯỢC TIN DÙNG BỞI
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-2">
                        <NeonText color="lime">10,000+</NeonText>
                        {' '}CREATOR
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
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
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-neon-${item.neonColor}`} />

                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <NeonText color={item.neonColor} className="text-6xl font-black leading-none">
                                        "
                                    </NeonText>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-brutal-black font-body font-medium text-lg leading-relaxed mb-8 flex-grow">
                                    {item.text}
                                </p>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-6 h-6 border-brutal-3 border-neon-${item.neonColor} bg-neon-${item.neonColor}/20 flex items-center justify-center`}
                                        >
                                            <span className={`text-neon-${item.neonColor} text-sm font-black`}>
                                                ★
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-brutal-black/10">
                                    <div className="w-14 h-14 border-brutal-3 border-brutal-black overflow-hidden bg-brutal-black/5 flex-shrink-0">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-heading font-black text-brutal-black uppercase text-sm tracking-tight">
                                            {item.name}
                                        </div>
                                        <div className="font-mono text-xs text-brutal-black/60 uppercase tracking-wider">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Right Corner Accent */}
                                <div className={`absolute -bottom-2 -right-2 w-16 h-16 border-brutal-3 border-neon-${item.neonColor} bg-neon-${item.neonColor}/10 -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200`} />
                            </BrutalCard>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { number: '10K+', label: 'Người dùng' },
                        { number: '100K+', label: 'Bài viết' },
                        { number: '4.9★', label: 'Đánh giá' },
                        { number: '24/7', label: 'Hỗ trợ' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-heading font-black text-brutal-black mb-2">
                                {stat.number}
                            </div>
                            <div className="text-brutal-black/60 font-mono text-xs uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProofSection;
