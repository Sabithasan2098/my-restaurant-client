import React from "react";
import { TCard } from "../../../../types/Types";
import Image from "next/image";
import CommonBTN from "../commonBTN/CommonBTN";
import { CapitalizeEachWord } from "../capitalizeWord/CapitalizeWord";

const truncateTextByWords = (text: string, wordLimit = 84) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const ShopCard: React.FC<TCard> = ({ name, recipe, price, img }) => {
  const shortRecipe = truncateTextByWords(recipe, 10);
  return (
    <div className=" w-[424px] h-[541px]">
      <div className="relative">
        <Image
          src={img}
          alt="food_image"
          height={300}
          width={424}
          className="h-[300px] object-cover"
        />
        <p className="absolute bg-[#111827] w-[89px] py-[11px] text-center text-[#FFF] text-base font-semibold leading-[26px] top-5 right-5">
          ${price}
        </p>
      </div>
      <div className="bg-[#f3f3f3] h-[241px] relative pt-[32px]">
        <h3 className="text-[24px] font-semibold text-center leading-normal">
          {name}
        </h3>
        <p className="text-[16px] font-normal leading-6 text-start px-10 pt-[7px] first-letter:capitalize">
          {CapitalizeEachWord(`${shortRecipe}`)}
        </p>
        <div className="text-center mt-[24px] mb-8">
          <CommonBTN
            btnText="add to cart"
            className="text-[#BB8506] bg-[#e8e8e8] hover:bg-[#111827] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
