import React from "react";
import style from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section className="text-center mt-10 md:mt-20 mb-10 md:mb-20">
        <span
          className={`${style.colorChange} text-base md:text-lg font-semibold px-4 md:px-6 py-3 md:py-4 bg-red-300 rounded-3xl animate-colorChange`}
        >
          Over 3 million ready-to-work creatives!
        </span>

        <h1 className="text-4xl md:text-6xl leading-none my-8 md:my-12 mx-4 md:mx-40">
          The world’s destination for design
        </h1>
        <p className="text-lg md:text-xl leading-9 mx-4 md:mx-64">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <button className="px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl leading-none bg-black rounded-full text-white mt-8 md:mt-12">
          Get Started
        </button>
      </section>
    </>
  );
};

export default Hero;
