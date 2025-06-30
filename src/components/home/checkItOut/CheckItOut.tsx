"use client";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import React from "react";
import CheckItOutMenuCard from "@/components/shered/checkItOutMenuCard/CheckItOutMenuCard";
import { TMenuData } from "../../../../types/Types";
import CommonBTN from "@/components/shered/commonBTN/CommonBTN";
import Link from "next/link";
import { useMenus } from "@/service/api/menu";

const CheckItOut = () => {
  const { data, isLoading } = useMenus();
  const menuData = data?.data.slice(0, 6);
  return (
    <div className="">
      <SectionHeading first="Check it out" second="FROM OUR MENU" />
      <div className="mt-[48px] max-w-[1320px] mx-auto grid grid-cols-2 gap-[24px]">
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          menuData?.map((data: TMenuData) => (
            <div key={data?._id}>
              <CheckItOutMenuCard
                img={data?.image}
                name={data?.name}
                recipe={data?.recipe}
                price={data?.price}
              />
            </div>
          ))
        )}
      </div>
      <div className="text-center mt-[48px]">
        <Link href={"/menu"}>
          <CommonBTN btnText="view full menu" />
        </Link>
      </div>
    </div>
  );
};

export default CheckItOut;
