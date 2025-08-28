import React from "react";
import { TOurMenu } from "../../../../types/Types";
import Image, { StaticImageData } from "next/image";
import "./OurMenuFeatured.css";

const OurMenuFeatured: React.FC<TOurMenu> = ({
  image,
  heading,
  subHeading,
}) => {
  return (
    <div className="max-w-fit lg:max-w-[1920px] mx-auto relative">
      <Image
        src={image as StaticImageData}
        alt="bg_image"
        height={700}
        width={1920}
        className="h-[210px] md:h-[420px] lg:h-[700px] object-cover"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#15151599] w-[300px] md:w-[650px] lg:w-[1096px] text-[#FFFFFF] flex flex-col items-center px-[40px] md:px-[70px] lg:px-[127px] pt-[20px] md:pt-[55px] lg:pt-[102px] pb-[22px] md:pb-[62px] lg:pb-[127px]">
        <h1 className="text-[20px] md:text-[30px] lg:text-[45px] font-medium md:font-semibold leading-normal uppercase text">
          {heading}
        </h1>
        <p className="text-[10px] md:text-[14px] lg:text-[16px] font-light md:font-medium lg:font-semibold  lg:leading-[26px] text-center">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default OurMenuFeatured;
