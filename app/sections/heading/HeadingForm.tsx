"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Switch from "@/app/components/Switch";
import TabbedSwitch from "@/app/components/TabbedSwitch";
import React, { useState } from "react";

interface HeadingFormProps {
  isOpen: boolean;
  togglePopup: (isOpen: boolean) => void;
}

const HeadingForm: React.FC<HeadingFormProps> = ({ isOpen, togglePopup }) => {
  return (
    <div className="flex flex-col gap-4">
      <TabbedSwitch />
      <form className="hidden md:flex flex-col md:flex-row border-2 w-fit rounded-xl w-full">
        <div className="border-gray-200 flex flex-col md:flex-row rounded-xl justify-center align-center items-center md:gap-4 w-full">
          <Input
            className="w-full h-[48px]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="8" fill="black" fill-opacity="0.2" />
                <circle cx="12" cy="12" r="4" fill="black" />
              </svg>
            }
            type={"text"}
            placeholder="From"
            value={"From"}
          />
          <div className="h-[20px] w-[1px] bg-gray-200" />
          <Input
            className="w-full h-[48px]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.96206C5 4.66931 8.13401 2 12 2C15.866 2 19 4.66931 19 7.96206C19 11.7968 14.625 17.6098 12 22C9.375 17.6098 5 11.7968 5 7.96206Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <rect
                  x="8.71582"
                  y="5.43091"
                  width="6.5692"
                  height="6.5692"
                  rx="3.2846"
                  fill="black"
                />
              </svg>
            }
            type={"text"}
            placeholder="To"
            value={"To"}
          />
          <div className="h-[20px] w-[1px] bg-gray-200" />
          <Input
            className="w-full h-[48px]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.57143 4C7.94025 4 7.42857 4.51167 7.42857 5.14286V5.28571C7.42857 5.838 6.98086 6.28571 6.42857 6.28571H5.14286C4.51167 6.28571 4 6.79739 4 7.42857V18.8571C4 19.4883 4.51168 20 5.14286 20H18.8571C19.4883 20 20 19.4883 20 18.8571V7.42857C20 6.79739 19.4883 6.28571 18.8571 6.28571H17.5714C17.0191 6.28571 16.5714 5.838 16.5714 5.28571V5.14286C16.5714 4.51167 16.0598 4 15.4286 4C14.7974 4 14.2857 4.51167 14.2857 5.14286V5.28571C14.2857 5.838 13.838 6.28571 13.2857 6.28571H10.7143C10.162 6.28571 9.71429 5.838 9.71429 5.28571V5.14286C9.71429 4.51167 9.20261 4 8.57143 4ZM7.28571 11.8571C7.28571 11.3049 7.73343 10.8571 8.28572 10.8571H15.7143C16.2666 10.8571 16.7143 11.3049 16.7143 11.8571V15.7143C16.7143 16.2666 16.2666 16.7143 15.7143 16.7143H8.28571C7.73343 16.7143 7.28571 16.2666 7.28571 15.7143V11.8571Z"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M16.7143 11.8571C16.7143 11.3049 16.2666 10.8571 15.7143 10.8571H8.28572C7.73343 10.8571 7.28571 11.3049 7.28571 11.8571V15.7143C7.28571 16.2666 7.73343 16.7143 8.28571 16.7143H15.7143C16.2666 16.7143 16.7143 16.2666 16.7143 15.7143V11.8571Z"
                  fill="black"
                />
              </svg>
            }
            type={"text"}
            placeholder="Date"
            value={"Date"}
          />
        </div>
        <Button
          children={"Submit"}
          type="submit"
          className=" w-[260px] bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90 w-[160px]"
          togglePopup={togglePopup}
          level={"primary"}
        />
      </form>
      <div className="flex md:hidden flex-col gap-2">
        <div className="border-2 border-gray-300 rounded-xl">
          <Input
            className="w-full h-[48px]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="8" fill="black" fill-opacity="0.2" />
                <circle cx="12" cy="12" r="4" fill="black" />
              </svg>
            }
            type={"text"}
            placeholder="From"
            value={"From"}
          />
        </div>
        <div className="border-2 border-gray-300 rounded-xl">
          <Input
            className="w-full h-[48px]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="8" fill="black" fill-opacity="0.2" />
                <circle cx="12" cy="12" r="4" fill="black" />
              </svg>
            }
            type={"text"}
            placeholder="To"
            value={"To"}
          />
        </div>
        <div className="border-2 border-gray-300 rounded-xl">
          <Input
            className="w-full h-[48px]"
            prefix={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="8" fill="black" fill-opacity="0.2" />
                <circle cx="12" cy="12" r="4" fill="black" />
              </svg>
            }
            type={"text"}
            placeholder="Date"
            value={"Date"}
          />
        </div>
        <Button
          className=" w-full bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90 w-[160px]"
          togglePopup={togglePopup}
          level={"primary"}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default HeadingForm;
