"use client";
import React from "react";
import {
  useScreenSizeCategory,
  ScreenSizeCategory,
} from "../lib/hooks/useScreenSize";

interface SubtitleProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  className?: string;
  color?: "black" | "white";
}

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  size,
  className,
  color = "black",
}) => {
  const screenSizeCategory = useScreenSizeCategory();

  const fontSizes = {
    Desktop: {
      small: "text-[16px]",
      medium: "text-[18px]",
      large: "text-[20px]",
    },
    Tablet: {
      small: "text-[14px]",
      medium: "text-[16px]",
      large: "text-[18px]",
    },
    Mobile: {
      small: "text-[12px]",
      medium: "text-[14px]",
      large: "text-[16px]",
    },
  };

  const getFontSize = (
    size: "small" | "medium" | "large",
    category: ScreenSizeCategory
  ) => {
    return fontSizes[category][size] || fontSizes.Desktop[size];
  };

  const fontSelector = () => {
    const fontSize = getFontSize(size, screenSizeCategory);
    return `font-normal ${fontSize} ${className}`;
  };

  return (
    <h3 className={`${color ?? `text-${color}`} ${fontSelector()} `}>
      {children}
    </h3>
  );
};

export default Subtitle;
