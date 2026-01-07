import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Star } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface FeaturedPostProps {
    post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    const categoryColors = {
        AI: 'bg-orange-accent/10 text-orange-accent border-orange-accent',
        Skills: 'bg-blue-accent/10 text-blue-accent border-blue-accent',
        Learning: 'bg-green-accent/10 text-green-accent border-green-accent',
        Automation: 'bg-purple-500/10 text-purple-400 border-purple-400'
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-dark-primary via-dark-primary to-orange-accent/10 rounded-3xl overflow-hidden border-2 border-orange-accent/30 shadow-2xl group"
        >
            {/* Featured Badge */}
            <div className="absolute top-6 right-6 z-10">
                <div className="flex items-center gap-2 bg-orange-accent text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    Featured
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left: Content */}
                <div className="flex flex-col justify-center">
                    {/* Category & Day */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[post.category]}`}>
                            {post.category}
                        </span>
                        <span className="text-xs font-mono text-mid-gray">
                            Ngày {post.day}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-primary mb-4 leading-tight">
                        {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-lg text-mid-gray font-body leading-relaxed mb-6">
                        {post.excerpt}
                    </p>

                    {/* Content Preview */}
                    <p className="text-sm text-light-primary/60 font-body leading-relaxed mb-8 line-clamp-4">
                        {post.content}
                    </p>

                    {/* Meta & CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-mid-gray">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} phút đọc</span>
                        </div>
                        <button className="flex items-center gap-2 bg-orange-accent text-white px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wider hover:bg-orange-600 transition-all hover:gap-3 group">
                            Đọc Bài Viết
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="flex items-center justify-center relative">
                    <div className="relative w-full aspect-square max-w-md">
                        {/* Background Gradient Orb */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-accent/30 via-blue-accent/20 to-green-accent/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

                        {/* Main Illustration */}
                        <div className="relative w-full h-full bg-gradient-to-br from-light-primary/5 to-light-primary/10 backdrop-blur-sm rounded-3xl border border-light-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <div className="text-9xl opacity-80 group-hover:scale-110 transition-transform duration-700">
                                {post.illustration}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-accent/20 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default FeaturedPost;
