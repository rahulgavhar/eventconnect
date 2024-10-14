import React from 'react';

const UsersRoundIcon = () => {
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
      className="lucide lucide-users-round"
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  );
};

export default UsersRoundIcon;
