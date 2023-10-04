"use client";

import PopupComponent from "../components/PopupComponent";

interface PopupProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  setOpen,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  return (
    <div>
      <PopupComponent
        isOpen={isOpen}
        setOpen={setOpen}
        email={email}
        setEmail={setEmail}
        isDone={isDone}
        setIsDone={setIsDone}
      />
    </div>
  );
};

export default Popup;
