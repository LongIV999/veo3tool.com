import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const InfiniteLoop: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        console.log("InfiniteLoop mounted");
        const sketch = (p: p5) => {
            // Configuration
            const ARCH_COUNT = 30;
            const SPEED = 0.005; // Progression speed

            // Brand Colors


            const arches: Arch[] = [];

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight).parent(containerRef.current!);



                // Initialize Arches
                for (let i = 0; i < ARCH_COUNT; i++) {
                    arches.push(new Arch(i / ARCH_COUNT, i));
                }
            };

            class Arch {
                z: number; // 0 to 1 (1 is close, 0 is far)
                id: number;

                constructor(startZ: number, id: number) {
                    this.z = startZ;
                    this.id = id;
                }

                update() {
                    this.z += SPEED;
                    if (this.z > 1) {
                        this.z = 0; // Loop back
                    }
                }

                draw() {
                    // Perspective mapping
                    // Non-linear z-mapping for better depth feel: z^2 or similar
                    // Let's use simple perspective: scale = 1 / (distance)
                    // Visual Z (0 to inf): 1 = close, 0 = far

                    // Let's map normalized Z (0..1) to scale (0..1) exponentially
                    const scale = p.pow(this.z, 2.5);

                    if (scale < 0.01) return; // Too small to draw

                    const w = p.width * 1.5 * scale;
                    const h = p.height * 1.2 * scale;
                    // const yOffset = p.map(scale, 0, 1, 0, 100);

                    p.push();
                    p.translate(p.width / 2, p.height / 2); // Perfectly center horizontally and vertically

                    p.noFill();

                    // Dynamic Stroke Weight based on proximity
                    p.strokeWeight(2 * scale + 0.5);

                    // Dynamic Color
                    // Fade in from distance
                    const opacity = p.map(this.z, 0, 0.2, 0, 255);
                    const fadeOut = p.map(this.z, 0.8, 1, 255, 0); // Fade out when passing camera
                    const finalAlpha = p.min(opacity, fadeOut);

                    // Gradient Stroke
                    // We need to use the native Canvas API for gradients on strokes in p5
                    const ctx = (p as any).drawingContext;

                    let gradient;
                    // Assign gradients based on ID
                    if (this.id % 3 === 0) {
                        // Copper
                        gradient = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
                        gradient.addColorStop(0, '#d97757');
                        gradient.addColorStop(1, '#b86548');
                    } else if (this.id % 3 === 1) {
                        // Teal
                        gradient = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
                        gradient.addColorStop(0, '#6a9bcc');
                        gradient.addColorStop(1, '#527a99');
                    } else {
                        // Purple (or default light)
                        gradient = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
                        gradient.addColorStop(0, '#9b7bb5');
                        gradient.addColorStop(1, '#7a5f8f');
                    }

                    ctx.strokeStyle = gradient;

                    // Opacity needs to be managed via globalAlpha since gradient objects don't support easy alpha manipulation
                    // independent of the stops.
                    // Or we can just use setAlpha on p5 colors if we weren't using gradients.
                    // For gradients, we use globalAlpha.
                    ctx.globalAlpha = finalAlpha / 255;
                    // p.stroke(c); // Overridden by strokeStyle

                    // Start Loop
                    // Draw Arch (Top half circle, bottom straight lines)
                    // Actually, let's draw a full "Portal" shape: Rounded Rectangle
                    // Or the classic Arch: Line up, Arc over, Line down

                    const hw = w / 2;
                    const hh = h / 2;
                    const r = hw; // Radius for top arc
                    // const straightH = h - r;

                    // Draw Arch Shape using p.rect with rounded top corners
                    // p.rect(x, y, w, h, tl, tr, br, bl)
                    // We draw from center, but rect expects top-left by default unless RECTMODE(CENTER)
                    // Let's use coordinates calculated: top-left is (-hw, -hh)
                    p.rect(-hw, -hh, w, h, r, r, 0, 0);

                    // Floor lines (Grid effect)
                    // p.stroke(COLORS.logic);
                    // p.strokeWeight(1 * scale);
                    // p.line(-hw, hh, hw, hh);

                    p.pop();
                }
            }

            // const arches declaration moved up

            // p.setup moved up

            p.draw = () => {
                p.clear(); // Transparent canvas
                // p.background(COLORS.bg);

                // Center gradient / glow (The "Singularity")
                // p.noStroke();
                // let centerGlow = p.color(COLORS.accent);
                // centerGlow.setAlpha(20);
                // p.fill(centerGlow);
                // p.circle(p.width/2, p.height/2, 100);

                // Sort arches by Z (drawing order: far to near)
                // Actually, if we draw transparency, order matters.
                // We want to draw FAR first (z=0) to NEAR (z=1).
                // They are already roughly ordered by creation, but z changes.
                // Re-sort every frame or just iterate carefully?
                // Our Z logic wraps. Let's just sort.
                arches.sort((a, b) => a.z - b.z);

                arches.forEach(arch => {
                    arch.update();
                    arch.draw();
                });

                // Grain Effect for "Texture"
                p.loadPixels();
                // Creating grain efficiently in p5 is slow with pixels loop.
                // Better to use an overlay div in CSS or a pre-generated noise image.
                // Skipping pixel manipulation for performance.
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
            className="absolute inset-0 z-0 pointer-events-none"
        // style={{ opacity: 0.8 }} // Removed for clarity
        />
    );
};

export default InfiniteLoop;
