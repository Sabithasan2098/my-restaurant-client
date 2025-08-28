// components/layouts/InnerLayout.tsx
import ShopBanner from "@/components/ourShop/ShopBanner";
import ShopNavbar from "@/components/ourShop/ShopNavbar";
import React from "react";

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ShopBanner />
      <ShopNavbar />
      <div className="mt-[20px] md:mt-[30px] lg:mt-[48px] max-w-fit lg:max-w-[1320px] mx-auto px-1 md:px-2 lg:px-0 ">
        {children}
      </div>
    </main>
  );
};

export default InnerLayout;
