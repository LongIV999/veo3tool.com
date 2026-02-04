import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SpotlightCursor: React.FC = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the cursor (32px width / 2)
            cursorY.set(e.clientY - 16); // Center the cursor (32px height / 2)
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ai-purple bg-ai-purple/20 backdrop-blur-[1px] z-[9999] pointer-events-none mix-blend-screen"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
            {/* Large faint glow following cursor */}
            <motion.div
                className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-ai-purple/10 blur-[100px] pointer-events-none z-[9998] mix-blend-screen"
                style={{
                    translateX: useSpring(cursorX, { damping: 50, stiffness: 100 }), // Lag behind slightly
                    translateY: useSpring(cursorY, { damping: 50, stiffness: 100 }),
                    marginTop: -250,
                    marginLeft: -250,
                }}
            />
        </>
    );
};

export default SpotlightCursor;
