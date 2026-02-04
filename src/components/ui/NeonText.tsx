import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonTextProps {
  color: 'lime' | 'cyan' | 'pink' | 'yellow';
  className?: string;
  children: ReactNode;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  animate?: boolean;
}

export function NeonText({
  color,
  className,
  children,
  as: Component = 'span',
  animate = false
}: NeonTextProps) {
  const neonClass = `text-neon-${color}`;
  const animateClass = animate ? 'animate-neonPulse' : '';

  return (
    <Component
      className={cn(
        neonClass,
        animateClass,
        className
      )}
    >
      {children}
    </Component>
  );
}
