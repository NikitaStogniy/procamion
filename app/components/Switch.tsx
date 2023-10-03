"use client";
import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  onText?: string;
  offText?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  onIcon,
  offIcon,
  onText,
  offText,
}) => {
  const toggleSwitch = () => {
    onChange(!checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={toggleSwitch}
      />
      <div className="flex items-center">
        <div
          className={`w-5 h-5 mr-2 ${
            checked ? "text-green-500" : "text-red-500"
          }`}
        >
          {checked ? onIcon : offIcon}
        </div>
        <div className="slider h-5 w-10 bg-gray-400 rounded-full relative">
          <div
            className={`knob h-5 w-5 bg-white rounded-full absolute top-0 left-0 transition-transform ${
              checked ? "transform-translate-x-full" : ""
            }`}
          ></div>
        </div>
        <div className="ml-2">
          {checked ? onText || "On" : offText || "Off"}
        </div>
      </div>
    </label>
  );
};

export default Switch;
