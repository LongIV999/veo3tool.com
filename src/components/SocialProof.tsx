import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "10k+", label: "Videos Generated" },
    { value: "500+", label: "Active Creators" },
    { value: "1.2M", label: "Views Generated" },
    { value: "24/7", label: "System Uptime" }
];

const testimonials = [
    {
        quote: "Workflow của LongBest giúp team mình cắt giảm 80% thời gian sản xuất video daily news.",
        author: "Minh Anh",
        role: "Content Lead @ ViralAgency"
    },
    {
        quote: "Chất lượng video từ Veo 3 thực sự ấn tượng. Khó có thể phân biệt với stock footage quay thật.",
        author: "Hoàng Nam",
        role: "Freelance Video Editor"
    },
    {
        quote: "Nano Banana tạo thumbnail quá đỉnh. CTR tăng gấp đôi từ khi chuyển sang dùng tool này.",
        author: "Thảo Vy",
        role: "Youtuber (500k subs)"
    }
];

const SocialProof: React.FC = () => {
    return (
        <section className="py-24 bg-dark-primary text-light-primary border-t border-mid-gray/10">
            <div className="container mx-auto px-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-mid-gray/10 pb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-heading font-bold text-orange-accent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium tracking-widest uppercase text-mid-gray">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Creators Nói Gì Về Chúng Tôi
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-bg-primary/5 p-8 rounded-xl border border-mid-gray/20 relative"
                        >
                            <div className="text-4xl text-orange-accent font-serif absolute top-4 left-4 opacity-30">"</div>
                            <p className="text-lg font-body italic mb-6 relative z-10 text-light-primary/90">
                                {item.quote}
                            </p>
                            <div>
                                <div className="font-bold font-heading text-light-primary">{item.author}</div>
                                <div className="text-sm text-mid-gray">{item.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
