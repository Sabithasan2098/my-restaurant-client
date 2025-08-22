"use client";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import React from "react";
import Card from "@/components/shered/card/Card";
import { TMenuData } from "../../../../types/Types";
import { useMenus } from "@/service/api/menu";

const ChefRecommends = () => {
  const { data, isLoading } = useMenus();
  const menuData = data?.data.slice(0, 3);
  return (
    <div className="mt-[30px] md:mt-[50px] lg:mt-[130px] max-w-[1320px] mx-auto px-2 md:px-3 lg:px-0">
      <SectionHeading first="Should Try" second="chef recommends" />
      <div className="mt-[20px] md:mt-[34px] lg:mt-[48px] grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        {menuData?.map((data: TMenuData) =>
          isLoading ? (
            <span
              key={data._id}
              className="loading loading-spinner text-warning"
            ></span>
          ) : (
            <div key={data._id}>
              <Card
                _id={data._id}
                img={data.image}
                name={data.name}
                price={data.price}
                recipe={data.recipe}
              ></Card>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChefRecommends;
