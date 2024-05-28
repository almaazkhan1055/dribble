import React from "react";
import img1 from "../../public/assets/img1.jpg";
import img2 from "../../public/assets/img2.jpg";
import img3 from "../../public/assets/img3.jpg";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Cards = () => {
  const images = [
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["119", "40k"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["119", "40k"],
    },
  ];
  return (
    <>
      <section className="text-center px-[32px] ">
        <h1 className="text-[48px] mb-[50px]">Explore inspiring designs</h1>
        <div className="flex flex-wrap gap-4 justify-around">
          {images.map((img, i) => {
            return (
              <div>
                <div className="w-[354px] h-[265px]" key={i}>
                  <Image
                    className=" w-[354px] h-[265px] rounded-2xl"
                    src={img.imgSrc}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="mt-[10px] flex gap-[10px] items-center ">
                    <Image
                      src={img.imgSrc}
                      className="h-[20px] w-[20px] rounded-xl"
                    />
                    <span className="">{img.imgTitle}</span>
                    <span className="bg-[#cccccc] px-[2px] text-[#ebebeb]">
                      PRO
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-[5px] ">
                    <FaHeart /> <span>{img.jobrole[0]}</span>
                    <FaEye />
                    <span>{img.jobrole[1]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="w-[220px] h-[50px] px-[10px] py-[10px] rounded-3xl mt-[50px] mb-[100px] border border-black border-solid">
          Browse more inspiration
        </button>
      </section>
    </>
  );
};

export default Cards;
