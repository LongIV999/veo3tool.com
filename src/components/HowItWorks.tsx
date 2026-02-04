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
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 backdrop-blur-md shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500">
                <img
                    src={icon}
                    alt={title}
                    className="w-14 h-14 object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                />
            </div>
            {!isLast && (
                <div className="h-[1px] bg-gradient-to-r from-white/10 to-transparent flex-grow ml-4 hidden md:block"></div>
            )}
        </div>

        <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-glow transition-all">
            <span className="text-aurora-cyan mr-2">0{number}</span>
            {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed font-body">
            {description}
        </p>
    </motion.div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-24 bg-dark-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-aurora-cyan/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
                        Quy Trình <span className="gradient-text">Tự Động Hóa</span>
                    </h2>
                    <p className="text-slate-400 text-lg">Đơn giản hóa workflow của bạn trong 4 bước</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 relative">
                    <Step
                        number={1}
                        icon="/illustrations/step-1-upload.png"
                        title="Upload Prompts"
                        description="CSV, Google Sheets, hoặc paste trực tiếp. Hỗ trợ đến 1000 prompts/lần."
                        delay={0}
                    />
                    <Step
                        number={2}
                        icon="/illustrations/step-2-config.png"
                        title="Cấu Hình"
                        description="Chọn platform (Sora/Veo/Grok), style, resolution, duration. Save preset cho lần sau."
                        delay={0.2}
                    />
                    <Step
                        number={3}
                        icon="/illustrations/step-3-generate.png"
                        title="Generate"
                        description="Hệ thống tự động xếp hàng, phân bổ accounts, và retry khi cần. Real-time dashboard."
                        delay={0.4}
                    />
                    <Step
                        number={4}
                        icon="/illustrations/step-4-download.png"
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
