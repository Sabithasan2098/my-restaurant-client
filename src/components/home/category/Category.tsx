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
    <div className="mb-[137px]">
      <SectionHeading
        first={"From 11:00am to 10:00pm"}
        second={"order online"}
      />
      <div className="mt-12 max-w-[1320px] mx-auto">
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
          <SwiperSlide>
            <Image
              src={img1}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img2}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img3}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img4}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={img5}
              alt="category_image"
              className="lg:h-[450px] lg:w-[312]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
