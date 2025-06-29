// src/hooks/useMenus.ts
import { useQuery } from "@tanstack/react-query";

const baseRoute = "https://my-restaurant-server-ten.vercel.app/api";

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
