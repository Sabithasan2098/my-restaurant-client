import React from "react";
import banner from "../../../public/assets/shop/banner2.jpg";
import SectionBanner from "../shered/sectionBanner/SectionBanner";

const ShopBanner = () => {
  return (
    <div>
      <SectionBanner
        img={banner}
        heading={"our shop"}
        subHeading={"Would you like to try our dish?"}
      />
    </div>
  );
};

export default ShopBanner;
