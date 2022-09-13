import React, { useState } from "react";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";

export default function DemoAnimation() {
  const [styles, api] = useSpring(() => ({
    opacity: 1,
    color: "black",
    fontSize: 30,
  }));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    return () => {
      api.stop();
    };
  });

  return (
    <div className="container">
      <button
        onClick={() => {
          api.start({ opacity: 1, color: "red", fontSize: 16 });
        }}
      >
        start
      </button>

      <button
        onClick={() => {
          api.start({ opacity: 0, color: "blue", fontSize: 20 });
        }}
      >
        stop
      </button>

      <animated.div style={styles}>i will fade</animated.div>
    </div>
  );
}
