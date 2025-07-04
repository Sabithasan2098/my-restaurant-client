"use client";
import { useMenus } from "@/service/api/menu";
import React from "react";
import { TMenuData } from "../../../../types/Types";
import ShopCard from "@/components/shered/shopCard/ShopCard";

const Soup = () => {
  const { data } = useMenus();
  const soup = data?.data?.filter(
    (data: TMenuData) => data.category === "soup"
  );
  return (
    <div className="grid grid-cols-3 gap-6">
      {soup?.map((data: TMenuData) => (
        <div key={data._id}>
          <ShopCard
            img={data.image}
            name={data.name}
            price={data.price}
            recipe={data.recipe}
          />
        </div>
      ))}
    </div>
  );
};

export default Soup;
