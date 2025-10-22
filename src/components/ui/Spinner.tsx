import React from 'react';

type SpinnerProps = {
  className?: string;
  label?: string;
};

export default function Spinner({ className = 'h-5 w-5 text-blue-600', label = 'Loading' }: SpinnerProps) {
  return (
    <div className={`flex items-center ${className.includes('text-') ? '' : ''}`} aria-live="polite" aria-busy="true">
      <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}
