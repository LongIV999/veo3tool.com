import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitToSheet, type LeadData } from '../../services/google-sheet';

const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState<LeadData>({
        name: '',
        email: '',
        phone: '',
        role: 'Business Owner',
        interest: 'Content Creation'
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Add logic to get Source from URL params if needed
        const dataToSubmit = {
            ...formData,
            source: window.location.href
        };

        const response = await submitToSheet(dataToSubmit);

        if (response.result === 'success') {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', role: 'Business Owner', interest: 'Content Creation' });
        } else {
            setStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md mx-auto bg-neutral-900 border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Đăng Ký Tư Vấn Free</h3>

            {status === 'success' ? (
                <div className="text-center py-8">
                    <div className="text-5xl mb-4">🎉</div>
                    <h4 className="text-xl font-bold text-white mb-2">Đăng ký thành công!</h4>
                    <p className="text-neutral-400">Đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24h.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm text-purple-400 hover:text-purple-300 underline"
                    >
                        Đăng ký thêm
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Họ và tên</label>
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
                        <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="email@example.com"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Số điện thoại</label>
                        <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="0912345678"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-1">Vai trò</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                            >
                                <option value="Business Owner">Chủ DN</option>
                                <option value="Marketer">Marketer</option>
                                <option value="Creator">Content Creator</option>
                                <option value="Other">Khác</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-1">Quan tâm</label>
                            <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                            >
                                <option value="Content Creation">Viết Content</option>
                                <option value="Image Gen">Tạo Ảnh AI</option>
                                <option value="Automation">Tự Động Hóa</option>
                                <option value="All">Tất Cả</option>
                            </select>
                        </div>
                    </div>

                    <button
                        disabled={status === 'loading'}
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        {status === 'loading' ? 'Đang gửi...' : 'Nhận Tư Vấn Ngay'}
                    </button>

                    {status === 'error' && (
                        <p className="text-red-500 text-sm text-center">Có lỗi xảy ra. Vui lòng thử lại sau.</p>
                    )}
                </form>
            )}
        </motion.div>
    );
};

export default LeadForm;
