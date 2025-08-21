import React from "react";
import banner from "../../../public/assets/menu/banner3.jpg";
import "./style.css";
import OurMenu from "@/components/ourMenu/OurMenu";
import SectionBanner from "@/components/shered/sectionBanner/SectionBanner";

const page = () => {
  return (
    <div>
      {/* banner */}
      <SectionBanner
        img={banner}
        heading={"our menu"}
        subHeading={"Would you like to try our dish?"}
      />
      {/* our-menu-data */}
      <OurMenu />
    </div>
  );
};

export default page;
