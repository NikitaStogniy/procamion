import React, { FormEvent, useState } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let form = {
      name,
      email,
      message,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();

    // print to screen
    console.log(content);

    // Reset the form fields
    setMessage("");
    setName("");
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-4 justify-center align-center items-center">
      <Title children={"Contact us"} color="white" size={"large"} />
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
            id="comment"
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
            type="submit"
            className="w-full bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90"
            level={"primary"}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
