import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, NewspaperIcon } from './ui/icons';
import { Link } from 'react-router-dom';
import FeaturedPost from './blog/FeaturedPost';
import BlogList from './blog/BlogList';
import { getFeaturedPost, getRegularPosts } from '../data/blogPosts';

const NewsSection: React.FC = () => {
    const featuredPost = getFeaturedPost();
    const regularPosts = getRegularPosts().slice(0, 5); // Get 5 posts (featured + 5 = 6 total)

    return (
        <section className="py-24 bg-gradient-to-br from-light-primary via-white to-light-primary relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Section Label */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-accent/10 via-orange-accent/5 to-transparent px-6 py-3 rounded-full mb-6 border border-orange-accent/20">
                        <NewspaperIcon className="w-5 h-5 text-orange-accent" />
                        <span className="text-sm font-bold uppercase tracking-widest text-orange-accent">
                            Tin Tức & Insights
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark-primary mb-6 leading-tight">
                        Cập Nhật Mới Nhất Về{' '}
                        <span className="bg-gradient-to-r from-orange-accent to-orange-600 bg-clip-text text-transparent">
                            AI & Kỹ Năng
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-dark-primary/70 max-w-3xl mx-auto leading-relaxed">
                        Khám phá xu hướng AI mới nhất, kỹ năng thời đại mới, và cách tận dụng công nghệ để phát triển sự nghiệp của bạn.
                    </p>
                </motion.div>

                {/* Featured Post */}
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <FeaturedPost post={featuredPost} />
                    </motion.div>
                )}

                {/* Regular Posts Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <BlogList posts={regularPosts} />
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-dark-primary to-dark-primary/90 text-light-primary font-bold uppercase text-sm tracking-wider rounded-xl hover:from-orange-accent hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                    >
                        <span>Xem Tất Cả Bài Viết</span>
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Bottom Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 h-1 bg-gradient-to-r from-transparent via-orange-accent/30 to-transparent"
                />
            </div>
        </section>
    );
};

export default NewsSection;
