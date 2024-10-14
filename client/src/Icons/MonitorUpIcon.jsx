import React from 'react';

const MonitorUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e100ff"
      strokeWidth="2" // Changed from stroke-width to strokeWidth
      strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
      strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
      className="lucide lucide-monitor-up"
    >
      <path d="m9 10 3-3 3 3" />
      <path d="M12 13V7" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  );
};

export default MonitorUpIcon;
