import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline  ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi. I'm Ivo, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Started my journey out of a hobby as a self-taught without technical
              background and quickly developed a deep passion for creating new
              things. It is challenging as well as rewarding and gives me
              opportunity to make new things out of nothing. The fact that you
              can show your creativity along with logical thinking and
              immediately get response kept me keen on from the first day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
