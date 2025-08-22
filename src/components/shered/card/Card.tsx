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

const Card: React.FC<TCard> = ({ img, name, recipe }) => {
  const shortRecipe = truncateTextByWords(recipe, 10);
  return (
    <div className="w-[175px] md:w-[280px] lg:w-[424px] h-full">
      <Image
        src={img}
        alt="food_image"
        height={300}
        width={424}
        className="h-[110px] md:h-[200px] lg:h-[300px] object-cover"
      />
      <div className="bg-[#f3f3f3] h-[130px] md:h-[170px] lg:h-[241px] relative pt-2 md:pt-4 lg:pt-8">
        <h3 className="text-[14px] md:text-[18px] lg:text-[24px] font-semibold text-center leading-normal">
          {name}
        </h3>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-light md:font-normal lg:leading-6 text-center px-1 md:px-2 lg:px-10 pt-[3px] md:pt-[5px] lg:pt-[7px] first-letter:capitalize">
          {CapitalizeEachWord(`${shortRecipe}`)}
        </p>
        <div className="text-center lg:absolute left-1/2 lg:-translate-x-1/2 mt-1 md:mt-2 lg:mt-0 lg:bottom-8">
          <CommonBTN
            btnText="add to cart"
            className="text-[#b28419] hover:bg-[#1f293a] hover:border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
