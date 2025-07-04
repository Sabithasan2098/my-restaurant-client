"use client";
import { useMenus } from "@/service/api/menu";
import React from "react";
import { TMenuData } from "../../../../types/Types";
import ShopCard from "@/components/shered/shopCard/ShopCard";

const Drink = () => {
  const { data } = useMenus();
  const drink = data?.data?.filter(
    (data: TMenuData) => data.category === "drinks"
  );
  return (
    <div className="grid grid-cols-3 gap-6">
      {drink?.map((data: TMenuData) => (
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

export default Drink;
