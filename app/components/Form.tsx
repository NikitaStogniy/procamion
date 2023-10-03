import React, { useState } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";
import useGoogleSheets from "../lib/hooks/useAuthGoogleSheets";

const ContactForm = () => {
  const { isLoading, error, success, sendToGoogleSheets } = useGoogleSheets({
    scriptUrl:
      "https://script.google.com/macros/s/AKfycbzZM8zPOp_WfPbMnGoIjG1a2E8pYCZcAq3yk7-ZLdQzSxuATmAyac8SrE4TWSaZJpCR/exec",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming formData matches the expected format in your Google Apps Script
    await sendToGoogleSheets(formData);

    // Handle success or error states here
    if (success) {
      // Data sent successfully
      console.log("Data sent successfully");
    } else {
      // Error occurred
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-4 justify-center align-center items-center">
      <Title children={"Contact us"} color="white" size={"large"} />
      <Subtitle
        children={
          <>
            Fill out this simple form <br /> for feedback
          </>
        }
        className={"text-[#B0B0B0] text-center"}
        size={"small"}
      />
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="rounded-xl mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-2 px-3 border-gray-600/30 bg-black/0 border-2 border-gray-200 text-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="rounded-xl mb-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-2 px-3 border-gray-600/30 bg-black/0 border-2 border-gray-200 text-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="rounded-xl mb-4">
          <input
            id="comment"
            name="message"
            placeholder="Comment"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full py-2 px-3 border-gray-600/30 bg-black/0 border-2 border-gray-200 text-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <Button
            children={"Submit"}
            type="submit"
            className="w-full bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90"
            level={"primary"}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
