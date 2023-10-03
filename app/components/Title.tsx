"use client";
import {
  useScreenSizeCategory,
  ScreenSizeCategory,
} from "../lib/hooks/useScreenSize";

interface TitleProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  color?: "black" | "white";
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size,
  className,
  color = "black",
}) => {
  const screenSizeCategory = useScreenSizeCategory();

  const getFontSize = (
    size: "small" | "medium" | "large",
    category: ScreenSizeCategory
  ) => {
    switch (size) {
      case "small":
        return category === ScreenSizeCategory.Mobile
          ? "text-[12px]"
          : "text-[22px]";
      case "medium":
        return category === ScreenSizeCategory.Mobile
          ? "text-[18px]"
          : "text-[28px]";
      case "large":
        return category === ScreenSizeCategory.Mobile
          ? "text-[20px]"
          : "text-[45px]";
      default:
        return category === ScreenSizeCategory.Mobile
          ? "text-[16px]"
          : "text-[20px]";
    }
  };

  const fontSelector = () => {
    const defaultSize =
      screenSizeCategory === ScreenSizeCategory.Mobile
        ? "text-[16px]"
        : "text-[22px]";
    switch (size) {
      case "small":
        return getFontSize("small", screenSizeCategory);
      case "medium":
        return getFontSize("medium", screenSizeCategory);
      case "large":
        return getFontSize("large", screenSizeCategory);
      default:
        return defaultSize;
    }
  };

  return (
    <h2
      className={`font-bold ${fontSelector()} ${
        color == "white" ? "text-white" : "text-black"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
