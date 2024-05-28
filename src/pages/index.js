import Cards from "@/components/cards";
import Carousel from "@/components/carouselFooter";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/Hero/hero";
import Navbar from "@/components/navbar";
import Sliders from "@/components/sliders";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sliders />
      <Cards />
      <Contact />
      <Carousel />
      <Footer />
    </>
  );
};

export default index;
