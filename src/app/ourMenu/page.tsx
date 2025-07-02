import Image from "next/image";
import React from "react";
import banner from "../../../public/assets/menu/banner3.jpg";
import "./style.css";
import OurMenu from "@/components/ourMenu/OurMenu";

const page = () => {
  return (
    <div>
      {/* banner */}
      <div className="max-w-[1920px] mx-auto relative  ">
        <Image
          src={banner}
          alt="bg_image"
          height={800}
          width={1920}
          className="h-[800px] object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[110px] bg-[#15151599] w-[1320px] text-[#FFFFFF] flex flex-col items-center justify-center pt-[145px] pb-[146px] text">
          <h1 className="text-[88px] font-bold leading-normal uppercase">
            our menu
          </h1>
          <p className="text-[24px] font-semibold leading-normal">
            Would you like to try a dish?
          </p>
        </div>
      </div>
      {/* our-menu-data */}
      <OurMenu />
    </div>
  );
};

export default page;
