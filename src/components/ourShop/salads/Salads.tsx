"use client";
import { useMenus } from "@/service/api/menu";
import React from "react";
import { TMenuData } from "../../../../types/Types";
import ShopCard from "@/components/shered/shopCard/ShopCard";

const Salads = () => {
  const { data } = useMenus();
  const salad = data?.data?.filter(
    (data: TMenuData) => data.category === "salad"
  );
  return (
    <div className="grid grid-cols-3 gap-6">
      {salad?.map((data: TMenuData) => (
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

export default Salads;
