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
    <div className="max-w-[1920px] mx-auto relative">
      <Image
        src={image as StaticImageData}
        alt="bg_image"
        height={700}
        width={1920}
        className="h-[700px] object-cover"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#15151599] w-[1096px] text-[#FFFFFF] flex flex-col items-center px-[127px] pt-[102px] pb-[127px]">
        <h1 className="text-[45px] font-semibold leading-normal uppercase text">
          {heading}
        </h1>
        <p className="text-[16px] font-semibold leading-[26px] text-center">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default OurMenuFeatured;
