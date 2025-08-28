"use client";
import React from "react";
import SectionHeading from "../shered/sectionHeading/SectionHeading";
import CheckItOutMenuCard from "../shered/checkItOutMenuCard/CheckItOutMenuCard";
import { useMenus } from "@/service/api/menu";
import { TMenuData } from "../../../types/Types";
import CommonBTN from "../shered/commonBTN/CommonBTN";
import OurMenuFeatured from "../shered/ourMenu/OurMenuFeatured";
import image from "../../../public/assets/home/chef-service.jpg";
import Link from "next/link";

const OurMenu = () => {
  const { data } = useMenus();
  const offered = data?.data?.filter(
    (data: TMenuData) => data.category === "offered"
  );
  const dessert = data?.data?.filter(
    (data: TMenuData) => data.category === "dessert"
  );
  const pizza = data?.data?.filter(
    (data: TMenuData) => data.category === "pizza"
  );
  const salad = data?.data?.filter(
    (data: TMenuData) => data.category === "salad"
  );
  const soup = data?.data?.filter(
    (data: TMenuData) => data.category === "soup"
  );

  return (
    <div>
      {/* todays-offer */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] mb-[20px] md:mb-[30px] lg:mb-12">
        <SectionHeading first={"Don't miss"} second={"today's offer"} />
      </div>
      <div className="max-w-[1320px] mx-auto flex flex-col items-center px-1 md:px-2 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[15px] lg:gap-6 mb-[10px] md:mb-[20px] lg:mb-[45px]">
          {offered?.map((data: TMenuData) => (
            <div key={data._id}>
              {" "}
              <CheckItOutMenuCard
                img={data.image}
                name={data.name}
                price={data.price}
                recipe={data.recipe}
              />
            </div>
          ))}
        </div>
        <Link href={"/ourShop"}>
          {" "}
          <CommonBTN btnText={"order you favorite food"} />
        </Link>
      </div>
      {/* dessert */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] mb-[20px] md:mb-[50px] lg:mb-[50px]">
        <OurMenuFeatured
          image={image}
          heading={"desserts"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="max-w-[1320px] mx-auto flex flex-col items-center px-1 md:px-2 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[15px] lg:gap-6 mb-[10px] md:mb-[20px] lg:mb-[45px]">
          {dessert?.map((data: TMenuData) => (
            <div key={data._id}>
              {" "}
              <CheckItOutMenuCard
                img={data.image}
                name={data.name}
                price={data.price}
                recipe={data.recipe}
              />
            </div>
          ))}
        </div>
        <Link href={"/ourShop/desserts"}>
          {" "}
          <CommonBTN btnText={"order you favorite food"} />
        </Link>
      </div>
      {/* pizza */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] mb-[20px] md:mb-[50px] lg:mb-[50px]">
        <OurMenuFeatured
          image={image}
          heading={"pizza"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="max-w-[1320px] mx-auto flex flex-col items-center px-1 md:px-2 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[15px] lg:gap-6 mb-[10px] md:mb-[20px] lg:mb-[45px]">
          {pizza?.map((data: TMenuData) => (
            <div key={data._id}>
              {" "}
              <CheckItOutMenuCard
                img={data.image}
                name={data.name}
                price={data.price}
                recipe={data.recipe}
              />
            </div>
          ))}
        </div>
        <Link href={"/ourShop/pizzas"}>
          {" "}
          <CommonBTN btnText={"order you favorite food"} />
        </Link>
      </div>
      {/* salad */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] mb-[20px] md:mb-[50px] lg:mb-[50px]">
        <OurMenuFeatured
          image={image}
          heading={"salads"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="max-w-[1320px] mx-auto flex flex-col items-center px-1 md:px-2 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[15px] lg:gap-6 mb-[10px] md:mb-[20px] lg:mb-[45px]">
          {salad?.map((data: TMenuData) => (
            <div key={data._id}>
              {" "}
              <CheckItOutMenuCard
                img={data.image}
                name={data.name}
                price={data.price}
                recipe={data.recipe}
              />
            </div>
          ))}
        </div>
        <Link href={"/ourShop/salads"}>
          {" "}
          <CommonBTN btnText={"order you favorite food"} />
        </Link>
      </div>
      {/* soup */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] mb-[20px] md:mb-[50px] lg:mb-[50px]">
        <OurMenuFeatured
          image={image}
          heading={"soups"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="max-w-[1320px] mx-auto flex flex-col items-center px-1 md:px-2 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[15px] lg:gap-6 mb-[10px] md:mb-[20px] lg:mb-[45px]">
          {soup?.map((data: TMenuData) => (
            <div key={data._id}>
              {" "}
              <CheckItOutMenuCard
                img={data.image}
                name={data.name}
                price={data.price}
                recipe={data.recipe}
              />
            </div>
          ))}
        </div>
        <Link href={"/ourShop/soups"}>
          {" "}
          <CommonBTN btnText={"order you favorite food"} />
        </Link>
      </div>
    </div>
  );
};

export default OurMenu;
