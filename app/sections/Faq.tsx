import React from "react";
import Title from "../components/Title";
import TabbedSwitch from "../components/TabbedSwitch";
import FaqComponent from "../components/FaqComponent";

const Faq = () => {
  return (
    <div className="max-w-[1250px] my-20 px-4 m-auto flex flex-col justify-center align-center items-center">
      <div className="flex flex-row justify-center align-center items-center mb-10">
        <Title size={"large"}>Frequently Asked Questions</Title>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8609 28.3118H10.1156C9.29716 28.3118 8.69546 27.9532 8.30936 27.2349C7.92436 26.5177 7.97276 25.8181 8.45456 25.1361L24.4387 2.09218C24.7434 1.66758 25.1306 1.38158 25.5981 1.23198C26.0656 1.08348 26.5342 1.10218 27.0039 1.28808C27.4736 1.46188 27.8421 1.76768 28.1083 2.20548C28.3756 2.64328 28.4768 3.11188 28.4097 3.61347L26.6684 17.5043H33.9306C34.7897 17.5043 35.3991 17.8893 35.7577 18.6604C36.1174 19.4304 36.0272 20.1487 35.4893 20.8131L18.0125 41.8374C17.6968 42.2312 17.3019 42.482 16.8267 42.5887C16.3515 42.6965 15.8884 42.6492 15.4363 42.4479C14.9963 42.2576 14.6564 41.9507 14.4177 41.5272C14.1779 41.1037 14.0921 40.6384 14.1592 40.1313L15.8609 28.3118Z"
            fill="#FF9400"
          />
        </svg>
      </div>
      <TabbedSwitch />
      <FaqComponent />
    </div>
  );
};

export default Faq;
