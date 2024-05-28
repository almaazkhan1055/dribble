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
      jobrole: "illustration",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "web",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "brand",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "web",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "web",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "brand",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "web",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "web",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "brand",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "web",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "web",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "brand",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "web",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "web",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "brand",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "web",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "illustration",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "web",
    },
    {
      imgSrc: img1,
      imgTitle: "Almaaz khan",
      imgDesc: "Web Developer",
      jobrole: "brand",
    },
    {
      imgSrc: img2,
      imgTitle: "Aftab khan",
      imgDesc: "Front-end Developer",
      jobrole: "web",
    },
    {
      imgSrc: img3,
      imgTitle: "kalim khan",
      imgDesc: "React Developer",
      jobrole: "illustration",
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
              <div>
                <p className="mt-[15px] font-semibold text-[#0d0c22]">
                  {e.jobrole}
                </p>
              </div>
            </div>
          );
        })}
      </marquee>
    </>
  );
};

export default Sliders;
