import React from "react";
import style from "./hero.module.css";
const Hero = () => {
  return (
    <>
      <section className="text-center mt-[50px] mb-[50px]">
        <span
          className={`${style.colorChange} colorChange text-base font-semibold px-[12px] py-[10px] bg-red-300 rounded-3xl animate-colorChange`}
        >
          Over 3 million ready-to-work creatives!
        </span>

        <h1 className="text-[72px] leading-none my-[40px] mx-[230px]">
          The world’s destination for design
        </h1>
        <p className="leading-9 text-xl">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <button className="px-[30px] py-[20px] text-[14px] leading-none bg-black rounded-[32px] text-white mt-[50px]">
          Get Started
        </button>
      </section>
    </>
  );
};

export default Hero;
