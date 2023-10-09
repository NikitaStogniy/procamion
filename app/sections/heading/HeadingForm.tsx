"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Subtitle from "@/app/components/Subtitle";
import Switch from "@/app/components/Switch";
import TabbedSwitch from "@/app/components/TabbedSwitch";
import Title from "@/app/components/Title";
import React, { useState } from "react";

interface HeadingFormProps {
  isOpen: boolean;
  togglePopup: (isOpen: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const HeadingForm: React.FC<HeadingFormProps> = ({
  isOpen,
  togglePopup,
  email,
  isDone,
  setIsDone,
  setEmail,
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a JavaScript object containing the form data
    const formData = {
      email,
    };

    try {
      // Send the form data to the API route
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully");
      } else {
        // Handle error
        console.error("Form submission failed");
      }
      setIsDone(true);
    } catch (error) {
      setIsDone(true);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-4">
        <Subtitle size={"large"} className="font-bold">
          <b>Subsribe newsletter</b>
        </Subtitle>
        <div className="flex flex-col md:flex-row gap-4 border-0 w-full">
          <form
            className="flex flex-col md:flex-row gap-4 border-0 w-full"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 border-gray-200 w-full max-w-[400px] h-[48px] px-4 rounded-xl"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className=" bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90 w-[160px] w-full md:w-[160px]  max-w-[400px]"
              level={"primary"}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeadingForm;
