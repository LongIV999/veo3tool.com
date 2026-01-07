import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const AlgorithmicBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sketch = (p: p5) => {
            let logicNodes: { x: number; y: number; active: boolean }[] = [];
            const cols = 20;
            const rows = 10;

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight).parent(containerRef.current!);
                // Initialize grid nodes
                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        logicNodes.push({
                            x: i * (p.windowWidth / cols) + (p.windowWidth / cols) / 2,
                            y: j * (p.windowHeight / rows) + (p.windowHeight / rows) / 2,
                            active: false
                        });
                    }
                }
            };

            p.draw = () => {
                p.background('#141413'); // LongBest Dark
                p.stroke('#e8e6dc'); // LongBest Light Gray
                p.strokeWeight(0.5);
                p.noFill();

                // Draw "Strata" lines - representing organized information
                for (let y = 0; y < p.height; y += 40) {
                    p.beginShape();
                    for (let x = 0; x <= p.width; x += 20) {
                        // Subtle Perlin noise for "organic" data feel
                        const yOffset = p.map(p.noise(x * 0.005, y * 0.01 + p.frameCount * 0.002), 0, 1, -15, 15);
                        p.vertex(x, y + yOffset);
                    }
                    p.endShape();
                }

                // Animated "Scan" line - inspecting the data
                const scanY = (p.frameCount * 1.5) % p.height;
                p.stroke('#d97757'); // LongBest Orange
                p.strokeWeight(1.5);
                p.line(0, scanY, p.width, scanY);

                // Nodes reacting to scan line
                p.noStroke();
                p.fill('#6a9bcc'); // LongBest Blue
                logicNodes.forEach(node => {
                    if (Math.abs(node.y - scanY) < 30) {
                        p.circle(node.x, node.y, 4);
                    }
                });
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        };

        const p5Instance = new p5(sketch);

        return () => {
            p5Instance.remove();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
            aria-hidden="true"
        />
    );
};

export default AlgorithmicBackground;
