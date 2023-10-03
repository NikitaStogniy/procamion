"use client";

import React, { useEffect, useState } from "react";
import PopupComponent from "../components/PopupComponent";
import { set } from "react-native-reanimated";

interface PopupProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, setOpen }) => {
  return (
    <div>
      <PopupComponent showPopup={isOpen} onClose={setOpen} />
    </div>
  );
};

export default Popup;
