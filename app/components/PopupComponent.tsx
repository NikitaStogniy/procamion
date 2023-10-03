"use client";
import React, { use, useEffect } from "react";
import Form from "./Form";

interface PopupComponentProps {
  showPopup: boolean;
  onClose: (showPopup: boolean) => void; // Add an onClose callback prop to handle closing the popup
}

const PopupComponent: React.FC<PopupComponentProps> = ({
  showPopup,
  onClose,
}) => {
  useEffect(() => {
    console.log("showPopup", showPopup);
  }, [showPopup]);
  if (!showPopup) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      {/* Background overlay with backdrop blur */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 backdrop-blur-xl"></div>

      {/* Popup container */}
      <div className="bg-[#252523] rounded-lg shadow-lg w-96 p-4 relative">
        {/* Close button */}
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onClose(false)
          }
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200 hover:text-gray-800 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.84 11.7793L17.2958 7.32354C17.5887 7.03065 17.5887 6.55578 17.2958 6.26288C17.0029 5.96999 16.528 5.96999 16.2351 6.26288L11.7793 10.7187L7.32354 6.26288C7.03065 5.96999 6.55578 5.96999 6.26288 6.26288C5.96999 6.55578 5.96999 7.03065 6.26288 7.32354L10.7187 11.7793L6.26294 16.2351C5.97005 16.5279 5.97005 17.0028 6.26294 17.2957C6.55584 17.5886 7.03071 17.5886 7.3236 17.2957L11.7793 12.84L16.2351 17.2957C16.5279 17.5886 17.0028 17.5886 17.2957 17.2957C17.5886 17.0028 17.5886 16.5279 17.2957 16.2351L12.84 11.7793Z"
              fill="#757575"
            />
          </svg>
        </button>

        {/* Popup content */}
        <Form />
      </div>
    </div>
  );
};

export default PopupComponent;
