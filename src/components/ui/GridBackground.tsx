import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
  showDots?: boolean;
  dotColor?: 'lime' | 'cyan' | 'pink' | 'yellow';
}

export function GridBackground({
  children,
  className,
  showDots = false,
  dotColor = 'lime'
}: GridBackgroundProps) {
  return (
    <div className={cn("relative bg-brutal-grid", className)}>
      {children}
      {showDots && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Optional: Add animated neon dots at grid intersections */}
          <div
            className={cn(
              "absolute top-[50px] left-[50px] w-2 h-2 rounded-full",
              `bg-neon-${dotColor}`,
              "animate-neonPulse"
            )}
          />
          <div
            className={cn(
              "absolute top-[100px] left-[150px] w-2 h-2 rounded-full",
              `bg-neon-${dotColor}`,
              "animate-neonPulse",
              "animation-delay-200"
            )}
          />
          <div
            className={cn(
              "absolute top-[200px] left-[250px] w-2 h-2 rounded-full",
              `bg-neon-${dotColor}`,
              "animate-neonPulse",
              "animation-delay-400"
            )}
          />
        </div>
      )}
    </div>
  );
}
