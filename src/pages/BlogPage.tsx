import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, FilterIcon } from '../components/ui/icons';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogList from '../components/blog/BlogList';
import { getFeaturedPost, getRegularPosts, getPostsByCategory, blogPosts } from '../data/blogPosts';
import type { BlogCategory } from '../types/blog';

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
    const featuredPost = getFeaturedPost();

    // Get posts based on selected category
    const getFilteredPosts = () => {
        if (selectedCategory === 'All') {
            return getRegularPosts();
        }
        return getPostsByCategory(selectedCategory);
    };

    const filteredPosts = getFilteredPosts();

    // Categories for filter
    const categories: Array<BlogCategory | 'All'> = ['All', 'AI', 'Skills', 'Learning', 'Automation'];

    // Category colors
    const categoryStyles: Record<BlogCategory | 'All', string> = {
        All: 'bg-dark-primary text-white hover:bg-dark-primary/90',
        AI: 'bg-orange-accent/10 text-orange-accent hover:bg-orange-accent/20 border-orange-accent',
        Skills: 'bg-blue-accent/10 text-blue-accent hover:bg-blue-accent/20 border-blue-accent',
        Learning: 'bg-green-accent/10 text-green-accent hover:bg-green-accent/20 border-green-accent',
        Automation: 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 border-purple-400'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-light-primary via-white to-light-primary">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-dark-primary via-dark-primary to-dark-primary/95 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-light-primary/70 hover:text-light-primary transition-colors group"
                        >
                            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Quay lại trang chủ</span>
                        </Link>
                    </motion.div>

                    {/* Page Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-light-primary mb-6 leading-tight">
                            Blog & Insights về{' '}
                            <span className="bg-gradient-to-r from-orange-accent to-orange-600 bg-clip-text text-transparent">
                                AI & Skills
                            </span>
                        </h1>
                        <p className="text-xl text-light-primary/80 leading-relaxed">
                            Khám phá kiến thức mới nhất về AI, kỹ năng thời đại mới, và cách tận dụng công nghệ để phát triển sự nghiệp.
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-center gap-8 mt-8 text-light-primary/60">
                            <div>
                                <span className="text-3xl font-bold text-orange-accent">{blogPosts.length}</span>
                                <span className="ml-2">Bài viết</span>
                            </div>
                            <div className="w-px h-8 bg-light-primary/20" />
                            <div>
                                <span className="text-3xl font-bold text-orange-accent">4</span>
                                <span className="ml-2">Chủ đề</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-dark-primary/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 overflow-x-auto pb-2"
                    >
                        <div className="flex items-center gap-2 text-dark-primary/70 shrink-0">
                            <FilterIcon className="w-5 h-5" />
                            <span className="font-semibold">Lọc theo:</span>
                        </div>
                        <div className="flex gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border shrink-0 ${selectedCategory === category
                                            ? categoryStyles[category]
                                            : 'bg-light-primary text-dark-primary/60 hover:bg-dark-primary/5 border-dark-primary/10'
                                        }`}
                                >
                                    {category === 'All' ? 'Tất cả' : category}
                                    {category !== 'All' && (
                                        <span className="ml-2 opacity-60">
                                            ({getPostsByCategory(category).length})
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Featured Post - Only show when "All" is selected */}
                    {selectedCategory === 'All' && featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-heading font-bold text-dark-primary flex items-center gap-3">
                                    <span className="text-3xl">⭐</span>
                                    Bài Viết Nổi Bật
                                </h2>
                            </div>
                            <FeaturedPost post={featuredPost} />
                        </motion.div>
                    )}

                    {/* All Posts */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {filteredPosts.length > 0 ? (
                            <>
                                <div className="mb-8">
                                    <h2 className="text-2xl font-heading font-bold text-dark-primary">
                                        {selectedCategory === 'All'
                                            ? 'Tất Cả Bài Viết'
                                            : `Bài Viết Về ${selectedCategory}`}
                                        <span className="ml-3 text-orange-accent">
                                            ({filteredPosts.length})
                                        </span>
                                    </h2>
                                </div>
                                <BlogList posts={filteredPosts} />
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-xl text-dark-primary/60">
                                    Không có bài viết nào trong danh mục này.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
