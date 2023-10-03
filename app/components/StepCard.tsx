import React from "react";
import Title from "./Title";

interface StepCardProps {
  headline: React.ReactNode;
  description?: React.ReactNode;
  level: "first" | "second";
  step: number;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  level,
  headline,
  description,
}) => {
  return (
    // Card with stack positioning and flexbox, circle on the top, rounded square on the bottom
    <div className="w-full md:w-fit">
      <div className="flex justify-center items-center z-10 relative">
        {level === "first" ? (
          <div
            className="w-14 h-14 border-4 border-white relative rounded-full bg-gradient-to-b from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-xl"
            aria-label={`Step ${step === 1 ? "A" : "B"}`}
          >
            {step === 1 ? "A" : "B"}
          </div>
        ) : (
          <div
            className="w-10 h-10 border-2 border-white bg-gradient-to-b from-amber-300 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl"
            aria-label={`Step ${step}`}
          >
            {step}
          </div>
        )}
      </div>
      <div className="-mt-[20px] w-full md:w-[312px] px-5 pt-10 pb-5 bg-gradient-to-bl from-orange-50 to-stone-50 rounded-lg border border-stone-900 border-opacity-30 flex-col justify-center items-center gap-3.5 inline-flex">
        <div className="justify-center items-center gap-3.5 inline-flex">
          <Title children={headline} size="medium" className="text-center" />
        </div>
        <div className="self-stretch text-center text-black text-base font-normal leading-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
