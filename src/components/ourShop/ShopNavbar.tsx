"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ShopNavbar = () => {
  const pathName = usePathname();
  const nav = (
    <>
      <li>
        <Link
          href={"/ourShop"}
          className={`pb-[3px] md:pb-[5px] lg:pb-2 ${
            pathName === "/ourShop"
              ? "text-[#BB8506] border-b-[2px] md:border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          SALAD
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/pizzas"}
          className={`pb-[3px] md:pb-[5px] lg:pb-2 ${
            pathName === "/ourShop/pizzas"
              ? "text-[#BB8506] border-b-[2px] md:border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          PIZZA
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/soups"}
          className={`pb-[3px] md:pb-[5px] lg:pb-2 ${
            pathName === "/ourShop/soups"
              ? "text-[#BB8506] border-b-[2px] md:border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          SOUP
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/desserts"}
          className={`pb-[3px] md:pb-[5px] lg:pb-2 ${
            pathName === "/ourShop/desserts"
              ? "text-[#BB8506] border-b-[2px] md:border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          DESSERT
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/drinks"}
          className={`pb-[3px] md:pb-[5px] lg:pb-2 ${
            pathName === "/ourShop/drinks"
              ? "text-[#BB8506] border-b-[2px] md:border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          DRINK
        </Link>
      </li>
    </>
  );

  return (
    <div className="mt-[30px] md:mt-[50px] lg:mt-[130px]">
      <div className="flex items-center justify-center ">
        <ul className="text-[12px] md:text-[16px] lg:text-[24px] font-medium md:font-semibold lg:font-bold leading-normal flex items-center gap-[10px] md:gap-[20px] lg:gap-[54px] uppercase">
          {nav}
        </ul>
      </div>
    </div>
  );
};

export default ShopNavbar;
