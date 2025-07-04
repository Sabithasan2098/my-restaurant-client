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
          className={`pb-2 ${
            pathName === "/ourShop"
              ? "text-[#BB8506] border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          SALAD
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/pizzas"}
          className={`pb-2 ${
            pathName === "/ourShop/pizzas"
              ? "text-[#BB8506] border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          PIZZA
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/soups"}
          className={`pb-2 ${
            pathName === "/ourShop/soups"
              ? "text-[#BB8506] border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          SOUP
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/desserts"}
          className={`pb-2 ${
            pathName === "/ourShop/desserts"
              ? "text-[#BB8506] border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          DESSERT
        </Link>
      </li>
      <li>
        <Link
          href={"/ourShop/drinks"}
          className={`pb-2 ${
            pathName === "/ourShop/drinks"
              ? "text-[#BB8506] border-b-[4px] border-[#BB8506] transition-all duration-150 "
              : "text-black"
          }`}
        >
          DRINK
        </Link>
      </li>
    </>
  );

  return (
    <div className=" mt-[130px]">
      <div className="flex items-center justify-center ">
        <ul className=" text-[24px] font-bold leading-normal flex items-center gap-[54px] uppercase">
          {nav}
        </ul>
      </div>
    </div>
  );
};

export default ShopNavbar;
