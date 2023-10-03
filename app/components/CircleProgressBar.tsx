"use client";
import React from "react";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (20 / 100) * circumference;

  return (
    <svg className="w-16 h-16">
      <circle
        className="text-blue-500"
        cx="50%"
        cy="50%"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

export default ProgressBar;
