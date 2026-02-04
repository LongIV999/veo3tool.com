import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2Icon, XIcon, AlertCircleIcon, InfoIcon } from './ui/icons';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    message: string;
    type?: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number; // milliseconds
}

const Toast: React.FC<ToastProps> = ({
    message,
    type = 'success',
    isVisible,
    onClose,
    duration = 4000
}) => {
    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const icons = {
        success: CheckCircle2Icon,
        error: AlertCircleIcon,
        info: InfoIcon
    };

    const styles = {
        success: {
            bg: 'bg-gradient-to-r from-green-accent to-green-600',
            border: 'border-green-accent/50',
            icon: 'text-white'
        },
        error: {
            bg: 'bg-gradient-to-r from-red-500 to-red-600',
            border: 'border-red-500/50',
            icon: 'text-white'
        },
        info: {
            bg: 'bg-gradient-to-r from-blue-accent to-blue-600',
            border: 'border-blue-accent/50',
            icon: 'text-white'
        }
    };

    const Icon = icons[type];
    const style = styles[type];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                    className="fixed top-6 right-6 z-[100] max-w-md"
                >
                    <div className={`${style.bg} rounded-2xl border-2 ${style.border} shadow-2xl overflow-hidden`}>
                        <div className="flex items-center gap-4 p-4 pr-12">
                            {/* Icon */}
                            <div className="shrink-0">
                                <Icon className={`w-6 h-6 ${style.icon}`} />
                            </div>

                            {/* Message */}
                            <p className="text-white font-semibold leading-relaxed">
                                {message}
                            </p>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                                aria-label="Close notification"
                            >
                                <XIcon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        {duration > 0 && (
                            <motion.div
                                initial={{ scaleX: 1 }}
                                animate={{ scaleX: 0 }}
                                transition={{ duration: duration / 1000, ease: 'linear' }}
                                className="h-1 bg-white/30 origin-left"
                            />
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
