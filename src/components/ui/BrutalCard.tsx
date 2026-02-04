import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BrutalCardProps {
  variant?: 'light' | 'dark';
  neonColor?: 'lime' | 'cyan' | 'pink' | 'yellow';
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function BrutalCard({
  variant = 'light',
  neonColor,
  className,
  children,
  onClick
}: BrutalCardProps) {
  const baseClass = variant === 'light' ? 'brutal-card' : 'brutal-card-dark';
  const borderColorClass = neonColor ? `border-neon-${neonColor}` : '';
  const shadowColorClass = neonColor && variant === 'dark'
    ? `shadow-[8px_8px_0px_var(--tw-shadow-color)]`
    : '';

  return (
    <div
      className={cn(
        baseClass,
        borderColorClass,
        shadowColorClass,
        neonColor && variant === 'dark' && `shadow-neon-${neonColor}`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
