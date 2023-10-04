import React from "react";
import Title from "../components/Title";
import StepCard from "../components/StepCard";
import Image from "next/image";
import Subtitle from "../components/Subtitle";

const StepByStep = () => {
  return (
    <div className="max-w-[1250px] px-4 flex flex-col justify-center align-center items-center m-auto">
      <div className="text-center text-neutral-500 text-xl ">
        A STEP-BY-STEP APPROACH
      </div>
      <Title size={"large"}>Delivery, without the hassle</Title>
      <div className="flex flex-col justify-center align-center items-center m-auto gap-8 my-20 w-full relative h-full">
        <StepCard
          headline={"Shipper"}
          description={
            "Сreate a cargo card or choose a carrier that travels along the desired route"
          }
          level={"first"}
          step={1}
        />
        <StepCard
          headline={"Carrier"}
          description={
            "Сhoose a cargo to transport or add your own travel route"
          }
          level={"second"}
          step={2}
        />
        <StepCard
          headline={"Procamion"}
          description={
            "Оn average, the response time to the cargo card takes several hours, so feel free to add your cargo and probably today you will find your carrier"
          }
          level={"second"}
          step={3}
        />
        <div className="gap-4 flex  md:flex-row p-14 bg-gradient-to-b from-white to-stone-50 rounded-2xl border border-stone-900 border-opacity-30 justify-between items-center w-full justify-center items-center align-center ">
          <div className="max-w-[360px] m-auto">
            <Title className="mb-4" size={"medium"}>
              Safe transactions
            </Title>
            <Subtitle className="" size={"small"}>
              Make a contribution to the growth of the platform by leaving
              feedback about the carrier or sender. We are interested in you
              finding reliable partners for regular cooperation.
            </Subtitle>
          </div>
        </div>
        <StepCard headline={"Upcoming features"} level={"second"} step={4} />
        <div className="gap-4 flex p-14 bg-gradient-to-b from-white to-stone-50 rounded-2xl border border-stone-900 border-opacity-30 justify-between items-center w-full">
          <div className="m-auto max-w-[360px]">
            <Title size={"medium"}>Convenience</Title>
            <ul className="list-disc">
              <li>
                <Subtitle size={"small"}>
                  Add a comment to your card if you have any restrictions in
                  order to find a more suitable partner for you
                </Subtitle>
              </li>
              <li>
                <Subtitle size={"small"}>
                  Сall up after confirmation of the response to discuss all the
                  details of transportation
                </Subtitle>
              </li>
            </ul>
          </div>
        </div>
        <StepCard
          headline={"Finish"}
          description={"We delivered everything! "}
          level={"first"}
          step={2}
        />

        <div className="absolute inset-0 flex items-center justify-center w-[2px] m-auto -z-40 border-dashed border-2 border-orange-500"></div>
      </div>
    </div>
  );
};

export default StepByStep;
