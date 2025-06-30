import Image from "next/image";
import React from "react";
import image from "../../../../public/assets/home/chef-service.jpg";
import "./ChefService.css";

const ChefService = () => {
  return (
    <div className="max-w-[1320px] mx-auto relative mb-[92px]">
      <Image
        src={image}
        alt="chef_service"
        height={572}
        width={1320}
        className="h-[572px] object-cover"
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white py-[96px] px-[167px] w-[1096px]">
        <h1 className="text-[45px] font-normal text text-center">
          Bistro Boss
        </h1>
        <p className="font-normal text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
