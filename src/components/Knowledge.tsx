import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, BookOpen, Layers } from 'lucide-react';
import FeaturedPost from './blog/FeaturedPost';
import BlogList from './blog/BlogList';
import { getFeaturedPost, getRegularPosts } from '../data/blogPosts';

const Knowledge: React.FC = () => {
    return (
        <section className="knowledge-section" id="kien-thuc">
            {/* Knowledge Hero */}
            <div className="knowledge-hero">
                <div className="container mx-auto">
                    <div className="knowledge-hero-content">
                        {/* Section Label */}
                        <div className="section-label">
                            <span className="label-icon">📚</span>
                            <span className="label-text">KIẾN THỨC</span>
                        </div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="knowledge-hero-title"
                        >
                            Học Từ Những Người Tạo Ra<br />
                            <span className="highlight-orange">Hàng Ngàn Video</span>
                        </motion.h2>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="knowledge-hero-subtitle"
                        >
                            Từ beginner đến pro, chúng tôi có mọi thứ bạn cần để master
                            Veo 3 và Nano Banana Pro. Học từ real-world workflows và
                            best practices từ 500+ professional creators.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="knowledge-stats"
                        >
                            <div className="stat-item">
                                <div className="stat-number">150+</div>
                                <div className="stat-label">Video Tutorials</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">50hrs</div>
                                <div className="stat-label">Content Library</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">2,000+</div>
                                <div className="stat-label">Active Students</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Blog Section - NEW */}
            <div className="blog-section py-24 bg-light-primary">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-accent/10 px-4 py-2 rounded-full mb-4">
                            <span className="text-2xl">📝</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-orange-accent">
                                Blog & Insights
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-primary mb-4">
                            Kiến Thức Mới Nhất Về <span className="text-orange-accent">AI & Skills</span>
                        </h2>
                        <p className="text-lg text-dark-primary/70 max-w-2xl mx-auto">
                            Cập nhật hàng tuần về xu hướng AI, kỹ năng thời đại mới, và cách tận dụng công nghệ để phát triển sự nghiệp.
                        </p>
                    </motion.div>

                    {/* Featured Post */}
                    {getFeaturedPost() && (
                        <div className="mb-16">
                            <FeaturedPost post={getFeaturedPost()!} />
                        </div>
                    )}

                    {/* Blog Grid */}
                    <BlogList posts={getRegularPosts()} limit={6} />

                    {/* View All CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button className="px-8 py-4 bg-dark-primary text-light-primary font-bold uppercase text-sm tracking-wider rounded-lg hover:bg-orange-accent transition-colors">
                            Xem Tất Cả Bài Viết →
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Category Grid */}
            <div className="category-grid">
                <div className="container mx-auto px-4">
                    <div className="category-grid-wrapper">

                        {/* Category Card 1: Veo 3 */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="category-card veo3"
                        >
                            <div className="category-icon">
                                <span className="icon-emoji">🎬</span>
                            </div>

                            <div className="category-badge">VEO 3</div>

                            <h3 className="category-title">
                                Video Generation<br />Mastery
                            </h3>

                            <p className="category-description">
                                Từ prompts cơ bản đến advanced cinematography.
                                Học cách tạo video quality Hollywood với AI.
                            </p>

                            <div className="category-meta">
                                <span className="article-count">
                                    <BookOpen className="w-4 h-4" />
                                    45 Articles
                                </span>
                                <span className="difficulty">
                                    <TrendingUp className="w-4 h-4" />
                                    All Levels
                                </span>
                            </div>

                            <a href="#" className="category-cta">
                                Khám Phá Veo 3
                                <span className="arrow">→</span>
                            </a>

                            {/* Decorative gradient bar */}
                            <div className="category-accent"></div>
                        </motion.article>

                        {/* Category Card 2: Nano Banana Pro */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="category-card nanobana"
                        >
                            <div className="category-icon">
                                <span className="icon-emoji">🎨</span>
                            </div>

                            <div className="category-badge">NANO BANANA PRO</div>

                            <h3 className="category-title">
                                3D Visual<br />Design System
                            </h3>

                            <p className="category-description">
                                Master phong cách 3D minimalist signature. Color theory,
                                composition, và carousel templates.
                            </p>

                            <div className="category-meta">
                                <span className="article-count">
                                    <Layers className="w-4 h-4" />
                                    38 Articles
                                </span>
                                <span className="difficulty">
                                    <TrendingUp className="w-4 h-4" />
                                    Beginner-Advanced
                                </span>
                            </div>

                            <a href="#" className="category-cta">
                                Khám Phá Design
                                <span className="arrow">→</span>
                            </a>

                            <div className="category-accent"></div>
                        </motion.article>

                        {/* Category Card 3: Workflow Automation */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="category-card workflow"
                        >
                            <div className="category-icon">
                                <span className="icon-emoji">⚡</span>
                            </div>

                            <div className="category-badge">AUTOMATION</div>

                            <h3 className="category-title">
                                Workflow<br />Orchestration
                            </h3>

                            <p className="category-description">
                                N8n workflows, API integration, và production pipelines.
                                Scale từ 10 videos/week lên 100+.
                            </p>

                            <div className="category-meta">
                                <span className="article-count">
                                    <BookOpen className="w-4 h-4" />
                                    32 Articles
                                </span>
                                <span className="difficulty">
                                    <TrendingUp className="w-4 h-4" />
                                    Intermediate-Pro
                                </span>
                            </div>

                            <a href="#" className="category-cta">
                                Khám Phá Automation
                                <span className="arrow">→</span>
                            </a>

                            <div className="category-accent"></div>
                        </motion.article>

                    </div>
                </div>
            </div>

            {/* Featured Content */}
            <div className="featured-content">
                <div className="container mx-auto px-4">
                    <div className="featured-content-wrapper">

                        {/* Left: Latest Video Tutorial */}
                        <motion.article
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="featured-video"
                        >
                            <div className="video-thumbnail">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 bg-gray-600 flex items-center justify-center text-gray-400">
                                    Video Thumbnail
                                </div>
                                <div className="play-overlay">
                                    <div className="play-button">
                                        <Play className="w-8 h-8 ml-1 text-white fill-white" />
                                    </div>
                                </div>
                                <div className="video-duration">15:32</div>
                            </div>

                            <div className="video-content">
                                <div className="video-category-badge">
                                    <span>🎬 VEO 3</span>
                                </div>

                                <h3 className="video-title">
                                    5 Advanced Prompts Để Tạo Cinematic Shots
                                </h3>

                                <p className="video-description">
                                    Học cách sử dụng camera angles, lighting modifiers, và
                                    temporal keywords để tạo video professional-grade.
                                </p>

                                <div className="video-meta">
                                    <span className="meta-date">2 days ago</span>
                                    <span className="meta-separator">•</span>
                                    <span className="meta-views">1.2K views</span>
                                    <span className="meta-separator">•</span>
                                    <span className="meta-level">Intermediate</span>
                                </div>

                                <a href="#" className="video-cta btn-primary bg-orange-accent text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                    Xem Ngay →
                                </a>
                            </div>
                        </motion.article>

                        {/* Right: Quick Start Guide */}
                        <motion.article
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="featured-guide"
                        >
                            <div className="guide-illustration flex items-center justify-center bg-gray-100 rounded-lg mb-6 h-64">
                                {/* SVG Illustration Placeholder */}
                                <span className="text-4xl">📘</span>
                            </div>

                            <div className="guide-content">
                                <div className="guide-badge">
                                    <span>📘 HƯỚNG DẪN</span>
                                </div>

                                <h3 className="guide-title">
                                    Quick Start Guide:<br />
                                    Tạo Video Đầu Tiên Trong 10 Phút
                                </h3>

                                <ul className="guide-steps">
                                    <li>
                                        <span className="step-number">01</span>
                                        <span className="step-text">Setup account và API keys</span>
                                    </li>
                                    <li>
                                        <span className="step-number">02</span>
                                        <span className="step-text">Viết prompt đầu tiên</span>
                                    </li>
                                    <li>
                                        <span className="step-number">03</span>
                                        <span className="step-text">Generate và export video</span>
                                    </li>
                                    <li>
                                        <span className="step-number">04</span>
                                        <span className="step-text">Tối ưu cho social media</span>
                                    </li>
                                </ul>

                                <a href="#" className="guide-cta btn-secondary border-2 border-dark-primary py-3 rounded-lg hover:bg-dark-primary hover:text-white transition-colors">
                                    Tải PDF (2.5 MB) ↓
                                </a>
                            </div>
                        </motion.article>

                    </div>
                </div>
            </div>

            {/* Learning Path */}
            <div className="learning-path">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="learning-path-header">
                        <h2 className="section-title">
                            Con Đường Trở Thành<br />
                            <span className="highlight-orange">Creator Chuyên Nghiệp</span>
                        </h2>
                        <p className="section-subtitle">
                            Follow roadmap này để đi từ zero đến master trong 12 tuần
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="learning-timeline">

                        {/* Stage 1: Beginner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="timeline-stage" data-stage="1"
                        >
                            <div className="stage-marker">
                                <div className="marker-circle">
                                    <span className="marker-number">01</span>
                                </div>
                                <div className="marker-line"></div>
                            </div>

                            <div className="stage-content">
                                <div className="stage-icon">🌱</div>
                                <h3 className="stage-title">Beginner</h3>
                                <div className="stage-duration">Week 1-3</div>

                                <ul className="stage-tasks">
                                    <li>✓ Hiểu cơ bản về AI video generation</li>
                                    <li>✓ Viết prompts hiệu quả</li>
                                    <li>✓ Tạo 10 videos đầu tiên</li>
                                    <li>✓ Export và edit cơ bản</li>
                                </ul>

                                <div className="stage-cta">
                                    <a href="#">Bắt Đầu →</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stage 2: Intermediate */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="timeline-stage" data-stage="2"
                        >
                            <div className="stage-marker">
                                <div className="marker-circle">
                                    <span className="marker-number">02</span>
                                </div>
                                <div className="marker-line"></div>
                            </div>

                            <div className="stage-content">
                                <div className="stage-icon">🔥</div>
                                <h3 className="stage-title">Intermediate</h3>
                                <div className="stage-duration">Week 4-6</div>

                                <ul className="stage-tasks">
                                    <li>✓ Advanced prompt engineering</li>
                                    <li>✓ Cinematography techniques</li>
                                    <li>✓ Design với Nano Banana</li>
                                    <li>✓ Multi-platform optimization</li>
                                </ul>

                                <div className="stage-cta">
                                    <a href="#">Tiếp Tục →</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stage 3: Advanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="timeline-stage" data-stage="3"
                        >
                            <div className="stage-marker">
                                <div className="marker-circle">
                                    <span className="marker-number">03</span>
                                </div>
                                <div className="marker-line"></div>
                            </div>

                            <div className="stage-content">
                                <div className="stage-icon">⚡</div>
                                <h3 className="stage-title">Advanced</h3>
                                <div className="stage-duration">Week 7-9</div>

                                <ul className="stage-tasks">
                                    <li>✓ Workflow automation với n8n</li>
                                    <li>✓ API integration</li>
                                    <li>✓ Batch processing</li>
                                    <li>✓ Custom brand guidelines</li>
                                </ul>

                                <div className="stage-cta">
                                    <a href="#">Học Nâng Cao →</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stage 4: Expert */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="timeline-stage" data-stage="4"
                        >
                            <div className="stage-marker">
                                <div className="marker-circle">
                                    <span className="marker-number">04</span>
                                </div>
                                {/* No line for last stage */}
                            </div>

                            <div className="stage-content">
                                <div className="stage-icon">🏆</div>
                                <h3 className="stage-title">Expert</h3>
                                <div className="stage-duration">Week 10-12</div>

                                <ul className="stage-tasks">
                                    <li>✓ Production-scale workflows</li>
                                    <li>✓ AI model fine-tuning</li>
                                    <li>✓ Team collaboration setup</li>
                                    <li>✓ Monetization strategies</li>
                                </ul>

                                <div className="stage-cta">
                                    <a href="#">Master Level →</a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="newsletter-cta">
                <div className="container mx-auto px-4">
                    <div className="newsletter-content">
                        {/* Background decoration (portal pattern subtle) */}
                        <div className="newsletter-bg-pattern"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="newsletter-inner"
                        >
                            <div className="newsletter-icon">📬</div>

                            <h2 className="newsletter-title">
                                Nhận Kiến Thức Mới<br />
                                <span className="highlight-orange">Mỗi Tuần</span>
                            </h2>

                            <p className="newsletter-subtitle">
                                Tips, tutorials, và insider secrets từ 500+ professional creators.
                                Không spam, chỉ content chất lượng cao.
                            </p>

                            {/* Email Form */}
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder="Email của bạn"
                                        required
                                    />
                                    <button type="submit" className="form-submit">
                                        Đăng Ký Ngay →
                                    </button>
                                </div>

                                <div className="form-footer">
                                    <div className="trust-indicator">
                                        ✓ 10,000+ subscribers
                                    </div>
                                    <div className="trust-indicator">
                                        ✓ Unsubscribe bất cứ lúc nào
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;
