import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

const AnimatedCircularProgressBar = () => {
  const [value, setValue] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // Set the value to the desired percentage (e.g., 20%)
      setValue(20);
    }
  }, [inView]);

  return (
    <div ref={inViewRef}>
      <CircularProgressbar
        styles={buildStyles({
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          textColor: "#000000",
          textSize: "24px",

          pathColor: `#F89C2C`,
          trailColor: "#f0f0ef",
          backgroundColor: "#3e98c7",
        })}
        value={value}
        text={`-20%`}
      />
    </div>
  );
};

export default AnimatedCircularProgressBar;
