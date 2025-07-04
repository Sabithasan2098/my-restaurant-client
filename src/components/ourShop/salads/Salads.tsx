"use client";
import { useMenus } from "@/service/api/menu";
import React, { useState } from "react";
import { TMenuData } from "../../../../types/Types";
import ShopCard from "@/components/shered/shopCard/ShopCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Salads = () => {
  const { data } = useMenus();
  const soup =
    data?.data?.filter((data: TMenuData) => data.category === "salad") || [];

  const totalItems = soup.length;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Calculate current items to show
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = soup.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {currentItems?.map((data: TMenuData) => (
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

      {/* Pagination Controls */}
      <div className="flex items-center justify-start space-x-4 mt-[57px]">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`w-[66px] h-[66px] rounded-full flex items-center justify-center ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed text-[#afb3b6]"
              : "bg-yellow-800 text-black border-[2px] border-black"
          }`}
        >
          <HiArrowSmLeft size={30} />
        </button>

        {/* Page Info */}
        <span className="text-lg font-medium">
          {currentPage} / {totalPages}
        </span>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`w-[66px] h-[66px] rounded-full flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed text-[#afb3b6]"
              : "bg-yellow-600 text-black border-[2px] border-black"
          }`}
        >
          <HiArrowSmRight size={30} />
        </button>

        {/* Dots - Representing all items */}
        <div className="flex items-center space-x-2 ml-4">
          {Array.from({ length: totalItems }).map((_, i) => (
            <div
              key={i}
              className="w-[25px] h-[25px] rounded-full bg-green-700"
              style={{
                opacity: i >= startIndex && i < endIndex ? 1 : 0.4,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Salads;
