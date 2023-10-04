import React from "react";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Input from "../components/Input";
import Button from "../components/Button";

interface CtaProps {
  type: "black" | "yellow";
  isOpen: boolean;
  togglePopup: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const Cta: React.FC<CtaProps> = ({
  type,
  togglePopup,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  if (type === "black") {
    return (
      <div className="bg-black">
        <div className="max-w-[1250px] p-4 flex flex-col justify-center items-center align-center m-auto gap-4 py-20">
          <Title className="text-white" size="large">
            Global mission: available
            <br /> sustainble transportation
          </Title>
          <Subtitle className="text-zinc-400" size={"medium"}>
            Doubts remain? just look at these numbers..
          </Subtitle>
          <div className="flex flex-row max-w-[500px] w-full gap-4 m-auto">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full py-2 px-3 border-gray-600/30 bg-black/0 border-2 border-gray-200 text-white rounded-xl focus:outline-none focus:ring focus:border-blue-300"
            />
            <Button
              togglePopup={togglePopup}
              className="w-full bg-gradient-to-b from-orange-400 to-amber-500 color-white text-white hover:opacity-90"
              level={"primary"}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-amber-300">
        <div className="max-w-[686px] m-auto p-4 flex flex-col justify-center items-center align-center gap-4 py-20">
          <div className="flex justify-center align-center items-center">
            <div className="absolute">
              <svg
                width="100%"
                height="92"
                viewBox="0 0 688 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 91C1 91 110.76 0.997489 344 1C577.24 1.00251 687 91 687 91"
                  stroke="url(#paint0_linear_228_994)"
                  stroke-dasharray="15 15"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_228_994"
                    x1="344"
                    y1="1"
                    x2="344"
                    y2="69"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Title size="medium">Procamion</Title>
          </div>

          <Subtitle className="text-center" size={"medium"}>
            Оn average, the response time to the cargo card takes several hours,
            so feel free to add your cargo and probably today you will find your
            carrier
          </Subtitle>

          <div className="flex flex-col md:flex-row gap-4 mt-10 w-full">
            <Button
              togglePopup={togglePopup}
              className="bg-black/0 border-2 border-black w-full"
              level={"secondary"}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Cta;
