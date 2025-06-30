// src/hooks/useMenus.ts
import dotenv from "dotenv";
dotenv.config();
import { useQuery } from "@tanstack/react-query";

const baseRoute = process.env.BASE_ROUTES;
console.log(baseRoute);

const fetchMenus = async () => {
  const res = await fetch(`${baseRoute}/menu/get-all-menu`);
  if (!res.ok) {
    throw new Error("Failed to fetch menus");
  }
  return res.json();
};

export const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: fetchMenus,
  });
};
