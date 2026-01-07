import React from 'react';
import { motion } from 'framer-motion';

const Workflow: React.FC = () => {
    return (
        <section className="workflow-viz py-32 bg-dark-primary text-light-primary relative overflow-hidden">
            {/* Background Pattern - Subtle Grid or Glow if needed */}

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white"
                    >
                        Quy Trình 3 Bước
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-mid-gray font-mono uppercase tracking-widest"
                    >
                        Từ ý tưởng đến content hoàn chỉnh
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line - Behind circles */}
                    <div className="absolute top-[40px] left-0 w-full h-[1px] border-t border-dashed border-white/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {/* Step 1 */}
                        <motion.div
                            className="flex flex-col items-center text-center relative bg-[#1C1C1C] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-orange-accent/30 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-orange-accent/10 flex items-center justify-center mb-8 relative z-10">
                                <span className="text-orange-accent font-mono text-xl font-bold">01</span>
                            </div>

                            <h3 className="text-xl font-mono font-bold mb-4 text-white uppercase tracking-wider">
                                Nhập Prompt
                            </h3>
                            <p className="text-mid-gray font-mono text-sm leading-relaxed max-w-xs">
                                Mô tả video/ảnh bạn cần bằng tiếng Việt hoặc English.
                                AI tự động tối ưu prompt cho cả Veo 3 và Nano Banana.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            className="flex flex-col items-center text-center relative bg-[#1C1C1C] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-orange-accent/30 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-orange-accent/10 flex items-center justify-center mb-8 relative z-10">
                                <span className="text-orange-accent font-mono text-xl font-bold">02</span>
                            </div>

                            <h3 className="text-xl font-mono font-bold mb-4 text-white uppercase tracking-wider">
                                Xử Lý Song Song
                            </h3>
                            <p className="text-mid-gray font-mono text-sm leading-relaxed max-w-xs">
                                Veo 3 render video + Nano Banana tạo thumbnail và
                                carousel backgrounds. Workflow n8n tự động orchestrate.
                            </p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            className="flex flex-col items-center text-center relative bg-[#1C1C1C] p-8 rounded-2xl shadow-sm border border-white/5 hover:border-orange-accent/30 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-orange-accent/10 flex items-center justify-center mb-8 relative z-10">
                                <span className="text-orange-accent font-mono text-xl font-bold">03</span>
                            </div>

                            <h3 className="text-xl font-mono font-bold mb-4 text-white uppercase tracking-wider">
                                Xuất Bundle
                            </h3>
                            <p className="text-mid-gray font-mono text-sm leading-relaxed max-w-xs">
                                Nhận trọn bộ: video chính, 5 variations, 10 carousel
                                images, thumbnail pack. Ready to post mọi platform.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
