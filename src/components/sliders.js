import React from "react";
import img1 from "../../public/assets/img1.jpg";
import img2 from "../../public/assets/img2.jpg";
import img3 from "../../public/assets/img3.jpg";
import Image from "next/image";

const Sliders = () => {
  const images = [
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: ["brand", "illustration", "web"],
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: ["brand", "illustration", "web"],
    },
  ];
  return (
    <>
      <marquee
        width="100%"
        direction="left"
        height="500px"
        behavior="scroll"
        scrollamount="10"
      >
        {images.map((e, index) => {
          return (
            <div
              key={index}
              className="relative inline-block h-[270px] w-[320px] mr-[20px] px-[16px] py-[20px]"
            >
              <Image className="rounded-2xl" src={e.imgSrc} />
              <div className="absolute bottom-[-146px] left-[32px]">
                <span className="text-white font-semibold">{e.imgTitle}</span>
                <p className="text-white font-semibold">{e.imgDesc}</p>
                <div className="flex gap-[10px] text-white font-semibold mt-[20px]">
                  {e.jobrole.map((j) => (
                    <span className="border border-white border-solid p-[4px] rounded-2xl">
                      {j}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </marquee>
    </>
  );
};

export default Sliders;
