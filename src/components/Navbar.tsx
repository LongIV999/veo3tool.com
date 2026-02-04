import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowRightIcon } from './ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { usePopup } from '../context/PopupContext';

const Navbar: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const location = useLocation();
    const { openEmailPopup } = usePopup();

    const isHome = location.pathname === '/';

    const navItems = [
        { name: 'Trang chủ', href: '/' },
        { name: 'Sản phẩm', href: isHome ? '#features' : '/#features' },
        { name: 'Kiến thức', href: isHome ? '#kien-thuc' : '/#kien-thuc' },
        { name: 'Tin tức', href: '#' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 left-4 right-4 z-50 flex justify-center"
        >
            <div className="w-full max-w-7xl glass-card rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl shadow-aurora-purple/10 border border-white/10">
                {/* Logo */}
                <Link to="/" className="relative z-50 group flex items-center gap-2">
                    <div className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-glow-cyan transition-all duration-300">
                        LONG<span className="gradient-text font-extrabold">BEST</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1" onMouseLeave={() => setHoveredPath(null)}>
                        {navItems.map((item) => {
                            const isInternal = item.href.startsWith('/');
                            const isActive = hoveredPath === item.href;

                            return (
                                isInternal ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onMouseEnter={() => setHoveredPath(item.href)}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-glow"
                                                className="absolute inset-0 bg-white/10 rounded-lg -z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onMouseEnter={() => setHoveredPath(item.href)}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-glow"
                                                className="absolute inset-0 bg-white/10 rounded-lg -z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                )
                            );
                        })}
                    </div>

                    <button
                        onClick={openEmailPopup}
                        className="group flex items-center gap-2 px-6 py-2.5 bg-ai-purple/90 hover:bg-ai-purple text-white text-sm font-bold tracking-wide rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-300 border border-white/20"
                    >
                        <span>Start Building</span>
                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Mobile Trigger */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden relative z-50 p-2 text-white hover:text-ai-purple transition-colors"
                >
                    {isMobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 glass-card rounded-2xl p-6 md:hidden border border-white/10 shadow-2xl shadow-aurora-purple/20 overflow-hidden"
                        >
                            {/* Gradient Background for Menu */}
                            <div className="absolute inset-0 bg-aurora-dark/90 backdrop-blur-xl -z-10" />

                            <div className="flex flex-col gap-4 relative z-10">
                                {navItems.map((item) => (
                                    item.href.startsWith('/') ? (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3"
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all border-b border-white/5 pb-3"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}
                                <button
                                    onClick={() => {
                                        setIsMobileOpen(false);
                                        openEmailPopup();
                                    }}
                                    className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-ai-purple to-aurora-purple text-white font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-ai-purple/30"
                                >
                                    Start Building
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
