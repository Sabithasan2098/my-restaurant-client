import Image, { StaticImageData } from "next/image";
import React from "react";
import { TSectionBanner } from "../../../../types/Types";
import "./SectionBanner.css";

const SectionBanner: React.FC<TSectionBanner> = ({
  img,
  heading,
  subHeading,
}) => {
  return (
    <div>
      <div className="max-w-[1920px] mx-auto relative  ">
        <Image
          src={img as StaticImageData}
          alt="bg_image"
          height={800}
          width={1920}
          className="h-[200px] md:h-[400px] lg:h-[800px] object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] md:bottom-[60px] lg:bottom-[110px] bg-[#15151599] w-[250px] md:w-[650px] lg:w-[1320px] text-[#FFFFFF] flex flex-col items-center justify-center py-[10px] md:py-[50px] lg:pt-[145px] lg:pb-[146px] text">
          <h1 className="text-[18px] md:text-[33px] lg:text-[88px] font-medium md:font-semibold lg:font-bold leading-normal uppercase custom-text">
            {heading}
          </h1>
          <p className="text-[12px] md:text-[20px] lg:text-[24px] font-light md:font-medium lg:font-semibold leading-normal custom-text">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
