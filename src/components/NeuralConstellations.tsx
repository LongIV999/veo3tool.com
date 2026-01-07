import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const NeuralConstellations: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sketch = (p: p5) => {
            // Configuration
            const PARTICLE_COUNT = 120;
            const CONNECTION_DISTANCE = 150;
            const FORCE_RADIUS = 200;

            // Brand Colors - defined as strings initially, converted to p5.Color in setup
            let COLORS: { [key: string]: p5.Color };

            class Particle {
                pos: p5.Vector;
                vel: p5.Vector;
                acc: p5.Vector;
                maxSpeed: number;
                connections: number;

                constructor() {
                    this.pos = p.createVector(p.random(p.width), p.random(p.height));
                    this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
                    this.acc = p.createVector(0, 0);
                    this.maxSpeed = 2; // "Slow, organic motion"
                    this.connections = 0;
                }

                applyForce(force: p5.Vector) {
                    this.acc.add(force);
                }

                update() {
                    // 1. Noise Currents (Guided Drift)
                    // "Directed drift through an invisible landscape"
                    const noiseScale = 0.005;
                    const n = p.noise(this.pos.x * noiseScale, this.pos.y * noiseScale, p.frameCount * 0.002);
                    const angle = n * p.TWO_PI * 2;
                    const noiseForce = p5.Vector.fromAngle(angle);
                    noiseForce.mult(0.05); // Gentle push
                    this.applyForce(noiseForce);

                    // 2. Mouse Interaction (Attraction/Disturbance)
                    const mouse = p.createVector(p.mouseX, p.mouseY);
                    const d = p.dist(this.pos.x, this.pos.y, mouse.x, mouse.y);
                    if (d < FORCE_RADIUS && d > 0) {
                        const repulsion = p5.Vector.sub(this.pos, mouse);
                        repulsion.normalize();
                        repulsion.mult(mapCustom(d, 0, FORCE_RADIUS, 2, 0)); // stronger when close
                        this.applyForce(repulsion);
                    }

                    // Physics integration
                    this.vel.add(this.acc);
                    this.vel.limit(this.maxSpeed);
                    this.pos.add(this.vel);
                    this.acc.mult(0); // Reset accel

                    // Screen wrapping
                    if (this.pos.x < 0) this.pos.x = p.width;
                    if (this.pos.x > p.width) this.pos.x = 0;
                    if (this.pos.y < 0) this.pos.y = p.height;
                    if (this.pos.y > p.height) this.pos.y = 0;
                }
            }

            // Custom map function effectively
            const mapCustom = (value: number, start1: number, stop1: number, start2: number, stop2: number) => {
                return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
            };

            const particles: Particle[] = [];
            let bgColorOffset = 0;

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight).parent(containerRef.current!);

                // Initialize colors after p5 is ready
                COLORS = {
                    charcoal: p.color('#141413'), // Background match (if needed for fades)
                    slate: p.color('#232322'),    // Dark nodes
                    lightGray: p.color('#faf9f5'), // Primary Signal (Light)
                    white: p.color('#faf9f5'),
                    accent: p.color('#d97757'), // Orange
                    blue: p.color('#6a9bcc')    // Blue
                };

                for (let i = 0; i < PARTICLE_COUNT; i++) {
                    particles.push(new Particle());
                }
            };

            p.draw = () => {
                // "Deep gradient that shifts subtly with time"
                // Approximating gradient with a fill rect loop or just a shifting solid for performance.
                // Using a solid color that shifts slightly in HSB is often cleaner for vectors.
                bgColorOffset += 0.1;
                p.clear(); // Transparent background to let CSS bg show through
                // OR p.background('#141413'); if we want to ensure coverage. 
                // Since parent has bg-primary, clear() is better for integration, 
                // BUT p5 clear() might leave trails if not careful. 
                // Safest is to match the background color for "Computational Silence"
                p.background('#141413');

                particles.forEach(part => {
                    part.update();
                    part.connections = 0; // Reset count
                });

                // Connections & Constellations
                // O(N^2) loop
                for (let i = 0; i < particles.length; i++) {
                    const pi = particles[i];

                    for (let j = i + 1; j < particles.length; j++) {
                        const pj = particles[j];
                        const d = p.dist(pi.pos.x, pi.pos.y, pj.pos.x, pj.pos.y);

                        if (d < CONNECTION_DISTANCE) {
                            // "Opacity mapped to inverse distance"
                            const alpha = p.map(d, 0, CONNECTION_DISTANCE, 200, 0);

                            // Color logic: "Highly connected nodes burn with intensity"
                            // We can't know total connections until end of loop, but we can visualize the link itself.

                            p.strokeWeight(0.5);
                            // Shift color based on noise or position to create "constellation" identity
                            const blendVal = p.noise(i * 0.1, j * 0.1, p.frameCount * 0.001);

                            let baseColor = COLORS.slate; // Darker connections by default
                            let alphaFactor = 0.4;

                            if (blendVal < 0.5) {
                                baseColor = COLORS.slate;
                            } else {
                                baseColor = COLORS.blue; // Logic structure
                                alphaFactor = 0.6;
                            }

                            // Use p.color with alpha override if possible, or manual RGBA
                            const c = p.color(p.red(baseColor), p.green(baseColor), p.blue(baseColor), alpha * alphaFactor);
                            p.stroke(c);

                            p.line(pi.pos.x, pi.pos.y, pj.pos.x, pj.pos.y);

                            pi.connections++;
                            pj.connections++;
                        }
                    }
                }

                // Draw Nodes
                particles.forEach(part => {
                    p.noStroke();

                    // "Highly connected nodes burn with intensity"
                    // "Isolated wanderers fade to near-invisibility"
                    const opacity = p.map(part.connections, 0, 5, 50, 255);
                    const size = p.map(part.connections, 0, 8, 2, 6);

                    // Color shift based on connectivity
                    let nodeColor = COLORS.slate; // Faint default
                    let finalOpacity = opacity;

                    if (part.connections > 4) {
                        nodeColor = COLORS.accent; // Orange for hotspots
                    } else if (part.connections > 2) {
                        nodeColor = COLORS.lightGray; // Signal
                    } else {
                        finalOpacity *= 0.5;
                        nodeColor = COLORS.slate;
                    }

                    p.fill(p.red(nodeColor), p.green(nodeColor), p.blue(nodeColor), finalOpacity);

                    p.circle(part.pos.x, part.pos.y, size);
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
            className="fixed inset-0 z-0 pointer-events-none"
            aria-label="Neural Constellations Background"
        />
    );
};

export default NeuralConstellations;
