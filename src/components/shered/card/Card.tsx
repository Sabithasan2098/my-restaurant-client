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
    <div className=" w-[424px]">
      <Image
        src={img}
        alt="food_image"
        height={300}
        width={424}
        className="h-[300px] object-cover"
      />
      <div className="bg-[#f3f3f3] h-[241px] relative pt-8">
        <h3 className="text-[24px] font-semibold text-center leading-normal">
          {name}
        </h3>
        <p className="text-[16px] font-normal leading-6 text-center px-10 pt-[7px] first-letter:capitalize">
          {CapitalizeEachWord(`${shortRecipe}`)}
        </p>
        <div className="text-center absolute left-1/2 -translate-x-1/2 bottom-8">
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
