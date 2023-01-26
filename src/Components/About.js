import React from "react";
import Avatar from "../Assets/Avatar.png"
import Gmail from "../Assets/Gmail.png"
import Google from "../Assets/google.png"
import Linkedin from "../Assets/Linkedin.png"
import AboutCarous from "./AboutCarous";

const About = () => {
  return (
    <div className="text-white p-10 font-medium text-2xl">
      {/* block div to keep a fixed distance from the fixed navbar */}
      <div className="block h-10 bg-black"></div>
      <div>
        <div className=" md:inline-block md:w-2/5 relative md:left-2/4 mx-auto">
        <img src={Avatar} className=" object-contain w-2/5 md:w-2/6 mx-auto "/>
          <p className=" text-center mt-5 text-[#D9D9D9] tracking-wider text-4xl">Paramita Haldar</p>
          <p className=" text-center text-[#D9D9D9] text-lg font-normal tracking-wider leading-5 mt-2">Department of Chemical Engineering</p>
          <p className=" text-center text-[#D9D9D9] text-lg font-normal tracking-wider">Molecular Simulations</p>
            <div className=" mx-auto px-8 md:px-36 md:my-16 my-6 grid grid-rows-1 w-full grid-flow-col gap-20">
            <button className=" ">
            <img src={Linkedin} className=" grayscale hover:grayscale-0" />
            </button>
            <button className=" ">
            <img src={Google} className=" grayscale hover:grayscale-0"/>
            </button>
            <button className=" ">
            <img src={Gmail} className=" grayscale hover:grayscale-0"/>
            </button>
            </div>
        </div>
        <div className=" md:inline-block text-lg text-justify md:text-left mx-auto my-10 md:my-0 w-10/12 font-sans font-normal text-[#D9D9D9] md:-top-20 relative md:right-1/3 md:w-4/12">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio 
          mattis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Curabitur tempus urna
          at turpis condimentum lobortis. Ut commodo efficitur neque.
          </p>
        </div>
      </div>
      <div className='  w-11/12 relative mx-auto'>
      <AboutCarous/>
      </div>
    </div>
    
  );
};

export default About;
