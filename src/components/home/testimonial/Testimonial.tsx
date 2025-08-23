"use client";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import DynamicRating from "@/components/shered/dynamicRating/DynamicRating";

import { TReview } from "../../../../types/Types";
import { useReviews } from "@/service/api/review";

const Testimonial = () => {
  const { data } = useReviews();
  const reviews = data?.data || [];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] max-w-[1320px] mx-auto">
      <SectionHeading first="What's Your Client Say" second="testimonial" />
      <div className="mt-1 md:mt-2 lg:mt-12">
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {reviews.map((data: TReview) => (
              <SwiperSlide key={data._id}>
                <div className="flex flex-col items-center px-6 md:px-16 lg:px-32">
                  <DynamicRating initialRating={data?.rating} />
                  <FaQuoteLeft className="mt-1 md:mt-3 lg:mt-12 text-[30px] md:text-[55px] lg:text-[100px]" />
                  <p className="text-center mt-1 md:mt-3 lg:mt-10 text-[12px] md:text-[16px] lg:text-[20px] font-normal lg:leading-[35px]">
                    {data.details}
                  </p>
                  <h2 className="text-[18px] md:text-[26px] lg:text-[32px] font-medium leading-normal text-[#CD9003] mt-1 uppercase">
                    {data.name}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button
            className={`custom-prev absolute left-2 top-1/2 -translate-y-1/2 ${
              activeIndex === 0
                ? "text-blue-200 cursor-not-allowed"
                : "text-blue-400 cursor-pointer"
            } text-[40px] md:text-[60px] lg:text-[100px] z-10`}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className={`custom-next absolute right-2 top-1/2 -translate-y-1/2 ${
              activeIndex === reviews.length - 1
                ? "text-blue-200 cursor-not-allowed"
                : "text-blue-400 cursor-pointer"
            } text-[40px] md:text-[60px] lg:text-[100px] z-10`}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
