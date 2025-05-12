import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "TypeScript",
          "JavaScript",
          "Python",
          "Node.js",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 65,
      }}
    />
  );
}

export default Type;
