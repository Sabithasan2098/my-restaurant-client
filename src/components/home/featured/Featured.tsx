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
    <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] relative">
      {/* image wrapper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={img}
          alt="featured_image"
          height={848}
          width={1920}
          className="h-[400px] md:h-[550px]  lg:h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* content over image */}
      <div className="min-h-[400px] md:min-h-[550px] lg:min-h-[848px] w-full flex flex-col gap-8 md:gap-7 lg:gap-12 items-center justify-center px-4">
        <SectionHeading
          first="Check it out"
          second="from our menu"
          className="text-white"
        />
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[40px] lg:gap-[68px] items-center">
          <Image
            src={img}
            alt="featured_image"
            height={400}
            width={648}
            className="h-[150px] md:h-[190px] lg:h-[300px] w-[100%] max-w-[260px] md:max-w-[320px] lg:max-w-[648px] object-cover"
          />
          <div className="text-white lg:max-w-[604px] text-center md:text-start">
            <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-normal lg:leading-9">
              {date}
            </h3>
            <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-normal lg:leading-9 uppercase">
              Where can I get some?
            </h3>
            <p className="text-[12px] md:text-[16px] lg:text-[20px] font-normal lg:leading-[30px] mt-1 md:lg-2 lg:mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link href="#">
              <CommonBTN
                btnText="read more"
                className="text-white mt-2 md:mt-4 lg:mt-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
