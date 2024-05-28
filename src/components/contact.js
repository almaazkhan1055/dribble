import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-center mt-[50px] mb-[50px] bg-[#ffda79] py-20">
        <h1 className="text-[72px] leading-none my-[40px] mx-[330px]">
          Find your next designer today
        </h1>
        <p className="leading-9 text-xl mx-[370px]">
          The world’s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <button className="px-[30px] py-[20px] text-[14px] leading-none bg-black rounded-[32px] text-white mt-[50px] mr-[20px]">
          Get Started now
        </button>
        <button className="px-[30px] py-[20px] text-[14px] leading-none bg-white rounded-[32px] text-black mt-[50px] border border-black border-solid">
          Learn about hiring
        </button>
        <p className="leading-9 text-xl mt-[50px]">
          Are you a designer? <u>Join Dribble</u>
        </p>
      </section>
    </>
  );
};

export default Contact;
