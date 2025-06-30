// src/hooks/useReviews.ts
import dotenv from "dotenv";
dotenv.config();
import { useQuery } from "@tanstack/react-query";

const baseRoute = process.env.BASE_ROUTES;

const fetchReviews = async () => {
  const res = await fetch(`${baseRoute}/review/get-all-review`);
  if (!res.ok) {
    throw new Error("Failed to fetch review");
  }
  return res.json();
};

export const useReviews = () => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });
};
