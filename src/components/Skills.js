import React from "react";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/*         Container
       */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration 500">
            <img className="w-20 mx-auto" src={html}></img>
            <p className="my-4">HTML</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration 500">
            <img className="w-20 mx-auto" src={css}></img>
            <p className="my-4">Css/Sass</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration 500">
            <img className="w-20 mx-auto" src={javascript}></img>
            <p className="my-4">JavaScript</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration 500">
            <img className="w-20 mx-auto" src={react}></img>
            <p className="my-4">React</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration 500">
            <img className="w-20 mx-auto" src={node}></img>
            <p className="my-4">NodeJS</p>
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration 500">
            <img className="w-20 mx-auto" src={github}></img>
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
