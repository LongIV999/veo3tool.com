import React from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    type?: 'word' | 'character';
}

export const TextReveal: React.FC<TextRevealProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    type = 'word'
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const items = type === 'word' ? children.split(" ") : children.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: type === 'word' ? 0.12 : 0.05, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: duration
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: duration
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            style={{ display: "inline-block" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {items.map((item, index) => (
                <motion.span
                    variants={child}
                    style={{ display: "inline-block", marginRight: type === 'word' ? "0.25em" : "0.05em" }}
                    key={index}
                >
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.span>
    );
};
