import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeonText } from '../ui/NeonText';

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Tôi không rành công nghệ thì có dùng được không?",
            answer: "Chắc chắn được! LongBest AI được thiết kế tối giản, chỉ cần biết gõ chữ là dùng được. Chúng tôi cũng có video hướng dẫn chi tiết từng bước."
        },
        {
            question: "Nội dung AI tạo ra có bị trùng lặp không?",
            answer: "Hoàn toàn không. Mỗi lần tạo là một lần AI sáng tạo mới dựa trên dữ liệu và yêu cầu cụ thể của bạn tại thời điểm đó. Đảm bảo tính độc bản 100%."
        },
        {
            question: "Tôi có được dùng thử miễn phí không?",
            answer: "Có, gói Starter cho phép bạn dùng thử miễn phí vĩnh viễn với giới hạn số lượng bài viết để trải nghiệm chất lượng."
        },
        {
            question: "Dữ liệu của tôi có được bảo mật không?",
            answer: "Bảo mật là ưu tiên hàng đầu. Dữ liệu của bạn được mã hóa và không được chia sẻ với bất kỳ bên thứ ba nào, cũng không dùng để train AI chung."
        },
        {
            question: "Có hỗ trợ tiếng Việt tốt không?",
            answer: "LongBest AI được tối ưu hóa đặc biệt cho tiếng Việt, hiểu rõ các sắc thái ngôn ngữ, tiếng lóng và văn phong tự nhiên của người Việt."
        }
    ];

    return (
        <section className="py-24 bg-brutal-black">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-brutal-white mb-4">
                        CÂU HỎI
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-6">
                        <NeonText color="cyan">THƯỜNG GẶP</NeonText>
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {faqs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-brutal-black border-brutal-3 overflow-hidden transition-all duration-200 ${
                                openIndex === index
                                    ? 'border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                                    : 'border-brutal-white/20'
                            }`}
                        >
                            {/* Top Neon Border when open */}
                            {openIndex === index && (
                                <div className="h-1 bg-neon-cyan" />
                            )}

                            <button
                                onClick={() => setOpenIndex(active => active === index ? null : index)}
                                className="w-full p-6 md:p-8 text-left flex items-start justify-between hover:bg-brutal-white/5 transition-colors group"
                            >
                                <span className="text-lg md:text-xl font-body font-bold text-brutal-white pr-6 leading-relaxed">
                                    {item.question}
                                </span>

                                {/* Square Plus Icon */}
                                <div className={`flex-shrink-0 w-10 h-10 border-brutal-3 flex items-center justify-center transition-all duration-200 ${
                                    openIndex === index
                                        ? 'border-neon-cyan bg-neon-cyan rotate-45'
                                        : 'border-brutal-white/40 bg-brutal-black group-hover:border-neon-cyan'
                                }`}>
                                    <span className={`text-2xl font-black leading-none transition-colors ${
                                        openIndex === index
                                            ? 'text-brutal-black'
                                            : 'text-brutal-white/40 group-hover:text-neon-cyan'
                                    }`}>
                                        +
                                    </span>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-brutal-white/80 leading-relaxed border-t border-neon-cyan/20 font-body text-base md:text-lg">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
