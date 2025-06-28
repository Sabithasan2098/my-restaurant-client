"use client";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import React from "react";
import "./Category.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../../../public/assets/home/slide1.jpg";
import img2 from "../../../../public/assets/home/slide2.jpg";
import img3 from "../../../../public/assets/home/slide3.jpg";
import img4 from "../../../../public/assets/home/slide4.jpg";
import img5 from "../../../../public/assets/home/slide5.jpg";
import Image from "next/image";

const Category = () => {
  return (
    // category text not responsive
    <div className="mb-[25px] md:mb-[50px] lg:mb-[90px]">
      <SectionHeading
        first={"From 11:00am to 10:00pm"}
        second={"order online"}
      />
      <div className="mt-5 md:mt-8 lg:mt-12 max-w-[1320px] mx-auto px-4 md:px-8 lg:px-0">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper custom-swiper"
        >
          <SwiperSlide className="relative">
            <Image
              src={img1}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
            <h2 className="absolute category-text bottom-[25px] left-1/2 -translate-x-1/2">
              <span className="text-[30px]">s</span>alads
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={img2}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
            <h2 className="absolute category-text bottom-[25px] left-1/2 -translate-x-1/2">
              <span className="text-[30px]">s</span>oup
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={img3}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
            <h2 className="absolute category-text bottom-[25px] left-1/2 -translate-x-1/2">
              <span className="text-[30px]">p</span>izza
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={img4}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
            <h2 className="absolute category-text bottom-[25px] left-1/2 -translate-x-1/2">
              <span className="text-[30px]">d</span>essert
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={img5}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
            <h2 className="absolute category-text bottom-[25px] left-1/2 -translate-x-1/2">
              <span className="text-[30px]">d</span>rink
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
