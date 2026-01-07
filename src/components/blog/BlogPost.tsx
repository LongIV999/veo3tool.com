import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import type { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
    post: BlogPostType;
    index?: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, index = 0 }) => {
    const categoryColors = {
        AI: 'bg-orange-accent/10 text-orange-accent border-orange-accent',
        Skills: 'bg-blue-accent/10 text-blue-accent border-blue-accent',
        Learning: 'bg-green-accent/10 text-green-accent border-green-accent',
        Automation: 'bg-purple-500/10 text-purple-400 border-purple-400'
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-primary rounded-2xl overflow-hidden border-2 border-transparent hover:border-orange-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
        >
            {/* Illustration Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-orange-accent/20 via-blue-accent/20 to-green-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {post.illustration}
                </div>
                {/* Day Badge */}
                <div className="absolute top-4 left-4 bg-dark-primary/80 backdrop-blur-sm text-light-primary px-3 py-1 rounded-full text-xs font-bold font-mono">
                    Ngày {post.day}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${categoryColors[post.category]}`}>
                    {post.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-dark-primary mb-3 line-clamp-2 group-hover:text-orange-accent transition-colors">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-dark-primary/70 font-body leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Meta Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-primary/10">
                    <div className="flex items-center gap-2 text-xs text-mid-gray">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} phút đọc</span>
                    </div>
                    <button className="flex items-center gap-1 text-sm font-semibold text-orange-accent hover:gap-2 transition-all group-hover:text-orange-600">
                        Đọc thêm
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogPost;
