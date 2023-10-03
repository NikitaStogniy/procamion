// usePopup.ts
import { useState, useEffect } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add any logic here that you want to execute when the popup state changes.
    // You can add event listeners, animations, or any other behavior.
  }, [isOpen]);

  const openPopup = () => {
    console.log("test");
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openPopup,
    closePopup,
  };
};

export default usePopup;
