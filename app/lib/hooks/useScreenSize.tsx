"use client";

import { useState, useEffect } from "react";

// Define breakpoints for tablet and mobile
const TABLET_BREAKPOINT = 768;
const MOBILE_BREAKPOINT = 576;

// Define screen size categories
export enum ScreenSizeCategory {
  Desktop = "Desktop",
  Tablet = "Tablet",
  Mobile = "Mobile",
}

// Define a custom hook to get screen size category
export function useScreenSizeCategory() {
  const [screenSizeCategory, setScreenSizeCategory] =
    useState<ScreenSizeCategory>(ScreenSizeCategory.Desktop);

  useEffect(() => {
    // Function to update screen size category
    function updateScreenSizeCategory() {
      const width = window.innerWidth;

      if (width >= TABLET_BREAKPOINT) {
        setScreenSizeCategory(ScreenSizeCategory.Desktop);
      } else if (width >= MOBILE_BREAKPOINT) {
        setScreenSizeCategory(ScreenSizeCategory.Tablet);
      } else {
        setScreenSizeCategory(ScreenSizeCategory.Mobile);
      }
    }

    // Add event listener to update screen size category when the window is resized
    window.addEventListener("resize", updateScreenSizeCategory);

    // Initial screen size category
    updateScreenSizeCategory();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSizeCategory);
    };
  }, []);

  return screenSizeCategory;
}
