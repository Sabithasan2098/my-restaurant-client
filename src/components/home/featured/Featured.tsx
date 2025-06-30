import Image from "next/image";
import React from "react";
import img from "../../../../public/assets/home/featured.jpg";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import moment from "moment";
import CommonBTN from "@/components/shered/commonBTN/CommonBTN";
import Link from "next/link";

const Featured = () => {
  const date = moment().format("MMM DD, YYYY");
  return (
    <div className="mt-[130px] relative">
      {/* image wrapper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={img}
          alt="featured_image"
          height={848}
          width={1920}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* content over image */}
      <div className="min-h-[848px] w-full flex flex-col gap-12 items-center justify-center px-4">
        <SectionHeading
          first="Check it out"
          second="from our menu"
          className="text-white"
        />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[68px] items-center">
          <Image
            src={img}
            alt="featured_image"
            height={400}
            width={648}
            className="h-[300px] w-[100%] max-w-[648px] object-cover"
          />
          <div className="text-white max-w-[604px]">
            <h3 className="text-[24px] font-normal leading-9">{date}</h3>
            <h3 className="text-[24px] font-normal leading-9 uppercase">
              Where can I get some?
            </h3>
            <p className="text-[20px] font-normal leading-[30px] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link href="#">
              <CommonBTN btnText="read more" className="text-white mt-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
