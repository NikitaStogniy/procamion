"use client";

import PopupComponent from "../components/PopupComponent";

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
