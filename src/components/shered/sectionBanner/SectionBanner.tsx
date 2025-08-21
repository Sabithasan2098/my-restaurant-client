import Image, { StaticImageData } from "next/image";
import React from "react";
import { TSectionBanner } from "../../../../types/Types";

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
          className="h-[800px] object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[110px] bg-[#15151599] w-[1320px] text-[#FFFFFF] flex flex-col items-center justify-center pt-[145px] pb-[146px] text">
          <h1 className="text-[88px] font-bold leading-normal uppercase">
            {heading}
          </h1>
          <p className="text-[24px] font-semibold leading-normal">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
