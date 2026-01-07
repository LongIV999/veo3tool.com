import React from 'react';
import { motion } from 'framer-motion';

const Step: React.FC<{
    number: number;
    icon: string;
    title: string;
    description: string;
    isLast?: boolean;
    delay: number;
}> = ({ number, icon, title, description, isLast, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative flex-1"
    >
        <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-bg-secondary border border-accent-blue/30 flex items-center justify-center text-2xl relative z-10">
                {icon}
            </div>
            {!isLast && (
                <div className="h-[1px] bg-border-subtle flex-grow ml-4 hidden md:block"></div>
            )}
        </div>

        <h3 className="text-xl font-display font-medium mb-3 text-fg-primary">
            <span className="text-accent-blue mr-2">0{number}</span>
            {title}
        </h3>
        <p className="text-fg-secondary text-sm leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-24 bg-bg-tertiary border-y border-border-subtle">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Quy Trình <span className="text-fg-secondary font-light">Tự Động Hóa</span>
                    </h2>
                    <p className="text-fg-tertiary">Đơn giản hóa workflow của bạn trong 4 bước</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12">
                    <Step
                        number={1}
                        icon="📝"
                        title="Upload Prompts"
                        description="CSV, Google Sheets, hoặc paste trực tiếp. Hỗ trợ đến 1000 prompts/lần."
                        delay={0}
                    />
                    <Step
                        number={2}
                        icon="⚙️"
                        title="Cấu Hình"
                        description="Chọn platform (Sora/Veo/Grok), style, resolution, duration. Save preset cho lần sau."
                        delay={0.2}
                    />
                    <Step
                        number={3}
                        icon="🚀"
                        title="Generate"
                        description="Hệ thống tự động xếp hàng, phân bổ accounts, và retry khi cần. Real-time dashboard."
                        delay={0.4}
                    />
                    <Step
                        number={4}
                        icon="✅"
                        title="Download"
                        description="Nhận notification khi xong. Bulk download hoặc export thẳng lên Google Drive."
                        isLast={true}
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
