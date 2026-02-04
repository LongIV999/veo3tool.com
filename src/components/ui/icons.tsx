import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Icon Design System - Based on 24x24 grid
 * - Icon Area: 20x20
 * - Safe Area: 2px margin on all sides
 * - Stroke width: 1.5-2px for consistency
 */

// Verified Badge / Checkmark Icon
export const VerifiedIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L14.4 4.8L18 4L18.4 7.6L21.6 9.2L20 12L21.6 14.8L18.4 16.4L18 20L14.4 19.2L12 22L9.6 19.2L6 20L5.6 16.4L2.4 14.8L4 12L2.4 9.2L5.6 7.6L6 4L9.6 4.8L12 2Z"
      fill="currentColor"
    />
    <path
      d="M8.5 12L11 14.5L16 9.5"
      stroke="white"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Checkmark Circle Icon
export const CheckCircleIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M8 12L11 15L16 9"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// X Circle Icon
export const XCircleIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M15 9L9 15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Checkbox / Task Icon
export const TaskIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M8 12L11 15L16 9"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Calendar Icon
export const CalendarIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="17"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path d="M3 9H21" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M8 2V5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M16 2V5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <rect x="7" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
    <rect x="7" y="16" width="3" height="3" rx="0.5" fill="currentColor" />
    <rect x="11" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
    <rect x="15" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
  </svg>
);

// Document Icon
export const DocumentIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 13H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M8 17H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// Mail / Email Icon
export const MailIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M2 7L12 13L22 7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Upload Icon
export const UploadIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3V15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 8L12 3L17 8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Dollar / Money Icon
export const DollarIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M12 6V18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Printer Icon
export const PrinterIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9V2H18V9"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 18H4C2.89543 18 2 17.1046 2 16V11C2 9.89543 2.89543 9 4 9H20C21.1046 9 22 9.89543 22 11V16C22 17.1046 21.1046 18 20 18H18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="6"
      y="14"
      width="12"
      height="8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
  </svg>
);

// Grid Icon (for layout)
export const GridIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

// Settings Icon
export const SettingsIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74494 20.1656 6.23584 20.3766 5.705 20.3766C5.17416 20.3766 4.66506 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95226 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87226 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74494 3.62343 6.23584 3.62343 5.705C3.62343 5.17416 3.83445 4.66506 4.21 4.29C4.58506 3.91445 5.09416 3.70343 5.625 3.70343C6.15584 3.70343 6.66494 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95226 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87226 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58506 20.2966 5.09416 20.2966 5.625C20.2966 6.15584 20.0856 6.66494 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// X / Close Icon
export const XIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Menu / Hamburger Icon
export const MenuIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M3 12H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M3 6H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M3 18H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// Arrow Right Icon
export const ArrowRightIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow Left Icon
export const ArrowLeftIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19 12H5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ChevronLeft Icon
export const ChevronLeftIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ChevronRight Icon
export const ChevronRightIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Plus Icon
export const PlusIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Play Icon
export const PlayIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 3L19 12L5 21V3Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
  </svg>
);

// Clock Icon
export const ClockIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M12 6V12L16 14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star Icon
export const StarIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sparkles Icon
export const SparklesIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3L13.5 7.5L18 9L13.5 10.5L12 15L10.5 10.5L6 9L10.5 7.5L12 3Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
    <path
      d="M19 4L19.5 5.5L21 6L19.5 6.5L19 8L18.5 6.5L17 6L18.5 5.5L19 4Z"
      stroke="currentColor"
      strokeWidth={strokeWidth / 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
    <path
      d="M19 17L19.5 18.5L21 19L19.5 19.5L19 21L18.5 19.5L17 19L18.5 18.5L19 17Z"
      stroke="currentColor"
      strokeWidth={strokeWidth / 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
  </svg>
);

// Circle Icon
export const CircleIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

// Trash Icon
export const TrashIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 6H5H21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Send Icon
export const SendIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Filter Icon
export const FilterIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Newspaper Icon
export const NewspaperIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 5.10457 22 4 22ZM4 22C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7H6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M18 14H10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M15 18H10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <rect x="10" y="6" width="8" height="4" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

// Info Icon
export const InfoIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M12 16V12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
  </svg>
);

// AlertCircle Icon
export const AlertCircleIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M12 8V12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

// Zap / Lightning Icon
export const ZapIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Layers Icon
export const LayersIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Palette Icon
export const PaletteIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19V18.5C15 17.9477 15.4477 17.5 16 17.5H17C19.7614 17.5 22 15.2614 22 12.5C22 6.70101 17.5228 2 12 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="10" r="1.5" fill="currentColor" />
    <circle cx="11" cy="7" r="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// CPU / Chip Icon
export const CpuIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M9 2V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M15 2V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M9 20V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M15 20V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M2 9H4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M2 15H4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M20 9H22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M20 15H22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// Clapperboard / Video Icon
export const ClapperboardIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="2"
      y="6"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path d="M2 12H22" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M7 6L10 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M12 6L15 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M17 6L20 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// Maximize / Expand Icon
export const MaximizeIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 3H21V9"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21H3V15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3L14 10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 21L10 14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// BookOpen Icon
export const BookOpenIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// TrendingUp Icon
export const TrendingUpIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M23 6L13.5 15.5L8.5 10.5L1 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 6H23V12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// CheckSquare Icon
export const CheckSquareIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// FileText Icon
export const FileTextIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16 13H8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M16 17H8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M10 9H8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// CheckCircle2 Icon (filled version)
export const CheckCircle2Icon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M8 12L11 15L16 9"
      stroke="white"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Check Icon (Simple tick)
export const CheckIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Search / Magnifying Glass Icon
export const SearchIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Target / Bullseye Icon
export const TargetIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

// Handshake Icon
export const HandshakeIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M9.11 9H14.89C15.9922 8.99596 16.892 8.10093 16.9 7V7C16.9 5.89543 16.0046 5 14.9 5H11.1C9.65863 5.03454 8.32454 5.79521 7.5 7.05L7.33 7.3C6.73356 8.19693 5.74288 8.74952 4.67 8.8L4.31 8.82C3.59363 8.85404 2.92388 9.25687 2.5 9.91L2 10.66V10.66C2 13.9737 4.68629 16.66 8 16.66H10.13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16.66H18.13C20.3129 16.66 22.0838 14.8912 22.0838 12.7093C22.0838 11.2394 21.2952 9.91494 20.04 9.27L19.46 8.98C19.1415 8.82023 18.788 8.73892 18.43 8.74H15.69C14.588 8.73596 13.6882 9.63098 13.68 10.73V10.73C13.6766 11.4398 14.0537 12.0955 14.67 12.45L15 12.64" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Brain Icon
export const BrainIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M9.5 2C11.433 2 13 3.567 13 5.5C13 5.92502 12.9262 6.33177 12.7905 6.70884C13.9189 6.25265 15.1517 6 16.5 6C19.5376 6 22 8.46243 22 11.5C22 14.2862 19.9515 16.5888 17.2796 16.9419C16.8906 19.8247 14.4326 22 11.5 22C8.46243 22 6 19.5376 6 16.5C6 16.1963 6.01955 15.8979 6.05739 15.606C3.76632 14.8988 2 12.7161 2 10C2 6.96243 4.46243 4.5 7.5 4.5C8.20459 4.5 8.87784 4.6322 9.5 4.86908V5.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 2V5.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Globe Icon
export const GlobeIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M2.05 12H21.95" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M12 2.05C14.5 4.5 16.5 8 16.5 12C16.5 16 14.5 19.5 12 21.95C9.5 19.5 7.5 16 7.5 12C7.5 8 9.5 4.5 12 2.05Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

// Export all icons as a collection
export const Icons = {
  Verified: VerifiedIcon,
  CheckCircle: CheckCircleIcon,
  CheckCircle2: CheckCircle2Icon,
  Task: TaskIcon,
  Calendar: CalendarIcon,
  Document: DocumentIcon,
  FileText: FileTextIcon,
  Mail: MailIcon,
  Upload: UploadIcon,
  Dollar: DollarIcon,
  Printer: PrinterIcon,
  Grid: GridIcon,
  Settings: SettingsIcon,
  X: XIcon,
  Menu: MenuIcon,
  ArrowRight: ArrowRightIcon,
  ArrowLeft: ArrowLeftIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  Plus: PlusIcon,
  Play: PlayIcon,
  Clock: ClockIcon,
  Star: StarIcon,
  Sparkles: SparklesIcon,
  Circle: CircleIcon,
  Trash: TrashIcon,
  Send: SendIcon,
  Filter: FilterIcon,
  Newspaper: NewspaperIcon,
  Info: InfoIcon,
  AlertCircle: AlertCircleIcon,
  Zap: ZapIcon,
  Layers: LayersIcon,
  Palette: PaletteIcon,
  Cpu: CpuIcon,
  Clapperboard: ClapperboardIcon,
  Maximize: MaximizeIcon,
  BookOpen: BookOpenIcon,
  TrendingUp: TrendingUpIcon,
  CheckSquare: CheckSquareIcon,
  Check: CheckIcon,
  Search: SearchIcon,
  Target: TargetIcon,
  Handshake: HandshakeIcon,
  Brain: BrainIcon,
  Globe: GlobeIcon,
};

export default Icons;
