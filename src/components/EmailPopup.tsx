import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface EmailPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (email: string) => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; terms?: string }>({});

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        // Validation
        const newErrors: { email?: string; terms?: string } = {};

        if (!email) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        if (!agreedToTerms) {
            newErrors.terms = 'Bạn cần đồng ý với điều khoản';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            onSubmit(email);
            setIsSubmitting(false);
            setEmail('');
            setAgreedToTerms(false);
            onClose();
        }, 1000);
    };

    const handleClose = () => {
        setEmail('');
        setAgreedToTerms(false);
        setErrors({});
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={handleClose}
                    >
                        {/* Popup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                            className="relative w-full max-w-md bg-gradient-to-br from-dark-primary via-dark-primary to-dark-primary/95 rounded-3xl border-2 border-orange-accent/30 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-accent/10 rounded-full blur-3xl -z-0" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-accent/10 rounded-full blur-3xl -z-0" />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 z-10 p-2 bg-light-primary/10 hover:bg-light-primary/20 rounded-full transition-colors group"
                                aria-label="Close popup"
                            >
                                <X className="w-5 h-5 text-light-primary/70 group-hover:text-light-primary transition-colors" />
                            </button>

                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-10">
                                {/* Icon & Badge */}
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-orange-accent/20 rounded-full blur-xl animate-pulse" />
                                        <div className="relative bg-gradient-to-br from-orange-accent to-orange-600 p-4 rounded-2xl">
                                            <Sparkles className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-primary text-center mb-3">
                                    Bắt Đầu Miễn Phí
                                </h2>

                                {/* Subtitle */}
                                <p className="text-light-primary/70 text-center mb-8 leading-relaxed">
                                    Nhận ngay quyền truy cập vào công cụ tạo video AI mạnh nhất.
                                    Không cần thẻ tín dụng.
                                </p>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-light-primary mb-2 uppercase tracking-wider">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-light-primary/40">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                className={`w-full pl-12 pr-4 py-4 bg-light-primary/5 border-2 ${
                                                    errors.email
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : 'border-light-primary/10 focus:border-orange-accent'
                                                } rounded-xl text-light-primary placeholder:text-light-primary/40 focus:outline-none transition-colors`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Terms Checkbox */}
                                    <div>
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center mt-0.5">
                                                <input
                                                    type="checkbox"
                                                    checked={agreedToTerms}
                                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                    className="sr-only"
                                                />
                                                <div className={`w-5 h-5 rounded border-2 transition-all ${
                                                    agreedToTerms
                                                        ? 'bg-orange-accent border-orange-accent'
                                                        : errors.terms
                                                            ? 'border-red-500'
                                                            : 'border-light-primary/30 group-hover:border-orange-accent/50'
                                                }`}>
                                                    {agreedToTerms && (
                                                        <CheckCircle2 className="w-5 h-5 text-white -mt-0.5 -ml-0.5" />
                                                    )}
                                                </div>
                                            </div>
                                            <span className="text-sm text-light-primary/70 leading-relaxed">
                                                Tôi đồng ý với{' '}
                                                <a href="/terms" className="text-orange-accent hover:underline">
                                                    Điều khoản sử dụng
                                                </a>{' '}
                                                và{' '}
                                                <a href="/privacy" className="text-orange-accent hover:underline">
                                                    Chính sách bảo mật
                                                </a>
                                            </span>
                                        </label>
                                        {errors.terms && (
                                            <p className="mt-2 text-sm text-red-400">{errors.terms}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-accent to-orange-600 text-white font-bold uppercase text-sm tracking-wider rounded-xl hover:shadow-lg hover:shadow-orange-accent/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Đang xử lý...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Bắt Đầu Ngay</span>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Footer Note */}
                                <div className="mt-6 pt-6 border-t border-light-primary/10">
                                    <p className="text-xs text-light-primary/50 text-center">
                                        🔒 Thông tin của bạn được bảo mật an toàn
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EmailPopup;
