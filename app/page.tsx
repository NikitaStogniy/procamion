"use client";
import Benefits from "./sections/Benefits";
import Cta from "./sections/Cta";
import Faq from "./sections/Faq";
import Heading from "./sections/heading/Heading";
import Offer from "./sections/Offer";
import Popup from "./sections/Popup";
import StepByStep from "./sections/StepByStep";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isDone, setIsDone] = useState(false);
  return (
    <main>
      <Popup
        isOpen={isOpen}
        setOpen={setIsOpen}
        email={email}
        setEmail={setEmail}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      <Menu />
      <Heading
        isOpen={isOpen}
        togglePopup={setIsOpen}
        email={email}
        setEmail={setEmail}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      <StepByStep />
      <Offer />
      <Cta
        type="black"
        isOpen={isOpen}
        togglePopup={setIsOpen}
        email={email}
        setEmail={setEmail}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      <Benefits />
      <Faq />
      <Cta
        type="yellow"
        isOpen={isOpen}
        togglePopup={setIsOpen}
        email={email}
        setEmail={setEmail}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      <Footer />
    </main>
  );
}
