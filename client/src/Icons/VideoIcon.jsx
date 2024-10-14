import React from 'react';

const VideoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4*"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c800ff"
      strokeWidth="2" // Changed from stroke-width to strokeWidth
      strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
      strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
      className="lucide lucide-video"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
};

export default VideoIcon;
