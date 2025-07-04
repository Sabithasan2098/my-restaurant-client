// components/layouts/InnerLayout.tsx
import ShopBanner from "@/components/ourShop/ShopBanner";
import ShopNavbar from "@/components/ourShop/ShopNavbar";
import React from "react";

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ShopBanner />
      <ShopNavbar />
      <div className="mt-[48px] max-w-[1320px] mx-auto">{children}</div>
    </main>
  );
};

export default InnerLayout;
