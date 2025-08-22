"use client";
import Image from "next/image";
import React from "react";
import { TCard } from "../../../../types/Types";
import "./CheckItOutMenuCard.css";

const CheckItOutMenuCard: React.FC<TCard> = ({ img, name, recipe, price }) => {
  return (
    <div className="flex gap-2 md:gap-[10px] lg:gap-[32px] items-center">
      <Image
        src={img}
        alt="menu_item_image"
        height={104}
        width={118}
        className="h-[51px] lg:h-[104px] w-[57px] lg:w-[118px] rounded-full rounded-tl-none hover:rounded-tr-none hover:rounded-tl-full transition-all duration-200"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <h2 className="flex-1 custom-text font-normal text-[13px] md:text-[16px] lg:text-[20px]">
            {name}
            <span className="hidden lg:inline pl-1">------------------</span>
            <span className="hidden md:inline lg:hidden pl-1">------</span>
            <span className="md:hidden inline pl-1">------------</span>
          </h2>
          <p className="text-right min-w-[40px] text-[12px] md:text-[16px] lg:text-[20px] font-normal text-[#BB8506]">
            ${price}
          </p>
        </div>
        <p className="font-normal text-[10px] md:text-[12px] lg:text-[16px] md:mt-1 lg:mt-2">
          {recipe}
        </p>
      </div>
    </div>
  );
};

export default CheckItOutMenuCard;
