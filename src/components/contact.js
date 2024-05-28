import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-center mt-12 mb-12 bg-[#ffda79] py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight my-10 mx-4 md:mx-20 lg:mx-40 xl:mx-64">
          Find your next designer today
        </h1>
        <p className="leading-7 md:leading-8 lg:leading-9 text-lg md:text-xl mx-6 md:mx-24 lg:mx-40 xl:mx-72">
          The world’s leading brands use Dribbble to hire creative talent.
          Browse millions of top-rated portfolios to find your perfect creative
          match.
        </p>
        <div className="mt-12 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
          <button className="px-6 py-4 text-sm bg-black rounded-full text-white">
            Get Started now
          </button>
          <button className="px-6 py-4 text-sm bg-white rounded-full text-black border border-black">
            Learn about hiring
          </button>
        </div>
        <p className="leading-7 md:leading-8 lg:leading-9 text-lg md:text-xl mt-12">
          Are you a designer? <u>Join Dribbble</u>
        </p>
      </section>
    </>
  );
};

export default Contact;
