"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  areaLabel?: string;
  level: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  className?: string;
  isOpen?: boolean;
  togglePopup?: (isOpen: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  size = "medium", // Default to "medium" if 'size' is not specified
  areaLabel = "", // Default to an empty string if 'areaLabel' is not specified
  level = "primary", // Default to "primary" if 'level' is not specified
  disabled = false,
  className,
  togglePopup,
}) => {
  const getButtonStyles = () => {
    let buttonStyles =
      "py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 ";

    // Size styles
    if (size === "small") {
      buttonStyles += "text-sm ";
    } else if (size === "large") {
      buttonStyles += "text-lg ";
    }

    // Level styles
    if (level === "primary") {
      buttonStyles += " ";
    } else if (level === "secondary") {
      buttonStyles += " ";
    } else if (level === "tertiary") {
      buttonStyles += " ";
    }

    return buttonStyles;
  };

  const handleClick = () => {
    if (togglePopup) {
      togglePopup(true);
    }
  };

  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick()}
      disabled={disabled}
      className={`${getButtonStyles()} ${className}`}
      aria-label={areaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
