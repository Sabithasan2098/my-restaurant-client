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
    <div className="mt-[130px] max-w-[1320px] mx-auto">
      <SectionHeading first="Should Try" second="chef recommends" />
      <div className="mt-[48px] grid grid-cols-3 gap-6">
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
