import React from "react";

interface TabProps {
  childrenIco: React.ReactNode;
  childrenText: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({
  childrenIco,
  childrenText,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex flex-row w-full md:w-fit py-1 px-2 gap-2 md:py-2 md:px-4 rounded-xl justify-center align-center items-center ${
        isActive ? "text-white bg-black" : "text-black bg-black/0"
      }`}
    >
      {childrenIco}
      <p className="text-[14px] md:text-sm">{childrenText}</p>
    </div>
  );
};

export default Tab;
