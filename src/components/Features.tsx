import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        id: "01",
        title: "Generative Systems",
        description: "Dynamic content generation powered by advanced algorithmic patterns.",
        icon: "◈"
    },
    {
        id: "02",
        title: "Craftsmanship",
        description: "Meticulous attention to detail in every line of code and pixel.",
        icon: "▣"
    },
    {
        id: "03",
        title: "Automated Logic",
        description: "Self-optimizing workflows that adapt to user behavior.",
        icon: "◉"
    },
    {
        id: "04",
        title: "Future Proof",
        description: "Built on resilient architectures designed for the long term.",
        icon: "◎"
    }
];

const Features: React.FC = () => {
    return (
        <section className="bg-white text-minimalist-charcoal py-32 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 flex flex-col items-center">
                    <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-minimalist-slate mb-4">Capabilities</h3>
                    <div className="w-12 h-[1px] bg-minimalist-lightGray" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group p-10 border border-minimalist-lightGray hover:border-minimalist-slate transition-all duration-500 bg-white"
                        >
                            <div className="font-sans text-[10px] tracking-widest text-minimalist-slate mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                                {feature.id} / {feature.icon}
                            </div>
                            <h4 className="font-sans font-bold text-lg mb-4 text-minimalist-charcoal tracking-tight">
                                {feature.title}
                            </h4>
                            <p className="font-sans text-minimalist-slate text-sm leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
