import React from 'react';

interface AnimatedCheckmarkProps {
  size?: number;
  className?: string;
}

export const AnimatedCheckmark: React.FC<AnimatedCheckmarkProps> = ({ 
  size = 64,
  className = ''
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 animate-checkmark-pulse ${className}`}
      style={{ width: size, height: size }}
      aria-label="Success confirmation"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Background Circle */}
        <circle
          className="animate-checkmark-circle text-emerald-500"
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Animated Check Icon */}
        <path
          className="animate-checkmark-check text-emerald-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.5 27.2L22.2 34.8L37.8 17.5"
        />
      </svg>
    </div>
  );
};
