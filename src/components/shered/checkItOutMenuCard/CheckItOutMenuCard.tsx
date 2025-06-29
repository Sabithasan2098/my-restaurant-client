"use client";
import Image from "next/image";
import React from "react";
import { TCard } from "../../../../types/Types";
import "./CheckItOutMenuCard.css";

const CheckItOutMenuCard: React.FC<TCard> = ({ img, name, recipe, price }) => {
  return (
    <div className="flex gap-[32px] items-center">
      <Image
        src={img}
        alt="menu_item_image"
        height={104}
        width={118}
        className="h-[104px] w-[118px] rounded-full rounded-tl-none hover:rounded-tr-none hover:rounded-tl-full transition-all duration-200"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <h2 className="flex-1 font-normal text-[20px] text">
            {name}------------------
          </h2>
          <p className="text-right min-w-[40px] text-[20px] font-normal text-[#BB8506]">
            ${price}
          </p>
        </div>
        <p className="font-normal text-[16px]">{recipe}</p>
      </div>
    </div>
  );
};

export default CheckItOutMenuCard;
