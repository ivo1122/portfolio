import React from "react";
import Particle from "./Particle";
import { useTypeEffect } from "../hooks/typeEffect";

const Home = () => {
  
const description = useTypeEffect("Individual who is trying to bring ideas into life. Started my journey out of a hobby as a self-taught without technical background and quickly developed a deep passion for creating new things.",0.02)

  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col align-center justify-center relative bg-[#000000]"
    >
      <Particle/>
      {/*     Container
       */}
      <div className="max-w-[1000px] left-[30%] px-8 flex flex-col justify-center h-full absolute ">

        <h3 className="text-[#bac4e1] text-xl">Hi, my name is</h3>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ivo Pavić
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a web Developer.
        </h2>
        <p className="text-[#bac4e1] px-2 mt-5 max-w-[700px] text-xl ">
        {description}

        </p>

      </div>
    </div>
  );
};

export default Home;