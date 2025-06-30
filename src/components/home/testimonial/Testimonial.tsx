"use client";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import DynamicRating from "@/components/shered/dynamicRating/DynamicRating";

import { TReview } from "../../../../types/Types";
import { useReviews } from "@/service/api/review";

const Testimonial = () => {
  const { data } = useReviews();
  const reviews = data?.data;
  return (
    <div className="mt-[130px] max-w-[1320px] mx-auto">
      <SectionHeading first="What's Your Client Say" second="testimonial" />
      <div className="mt-12">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((data: TReview) => (
            <div key={data._id}>
              <SwiperSlide key={data._id}>
                <div className="flex flex-col items-center px-32 ">
                  <DynamicRating initialRating={data?.rating} />
                  <FaQuoteLeft size={100} className="mt-12 " />

                  <p className="text-center mt-10 text-[20px] font-normal leading-[35px]">
                    {data.details}
                  </p>
                  <h2 className="text-[32px] font-medium leading-normal text-[#CD9003] mt-1 uppercase">
                    {data.name}
                  </h2>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
