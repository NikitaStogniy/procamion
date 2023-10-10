import React, { FormEvent, useState } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";

interface ContactFormProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isOpen,
  setOpen,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a JavaScript object containing the form data
    const formData = {
      email,
      name,
      message,
    };

    try {
      // Send the form data to the API route
      const response = await fetch("/api/submit", {
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

      setName("");
      setEmail("");
      setMessage("");
      setOpen(false);
    } catch (error) {
      setName("");
      setEmail("");
      setMessage("");
      console.error(error);
    }

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

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setName("");
      setEmail("");
      setMessage("");

      console.error(error);
    }
  };

  return isDone === false ? (
    <div className="flex flex-col gap-4 justify-center align-center items-center">
      <Title color="white" size={"large"}>
        Contact us
      </Title>
      <Subtitle className={"text-[#B0B0B0] text-center"} size={"small"}>
        Fill out this simple form <br /> for feedback
      </Subtitle>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="rounded-xl mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full py-2 px-3 border-gray-600/30 bg-black/0 border-2 border-gray-200 text-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="rounded-xl mb-4">
          <input
            id="message"
            name="message"
            placeholder="Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full py-2 px-3 border-gray-600/30 bg-black/0 border-2 border-gray-200 text-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <Button
            className="w-full bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90"
            level={"primary"}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  ) : (
    <div className="flex flex-col gap-4 p-8">
      <Title color="white" size={"medium"}>
        Thank you for your feedback!
      </Title>
      <Subtitle className={"text-[#B0B0B0] "} size={"small"}>
        We will contact you shortly
      </Subtitle>
    </div>
  );
};

export default ContactForm;
