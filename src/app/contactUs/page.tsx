import React from "react";
import img from "../../../public/assets/contact/banner.jpg";
import SectionBanner from "@/components/shered/sectionBanner/SectionBanner";
import SectionHeading from "@/components/shered/sectionHeading/SectionHeading";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";

const page = () => {
  return (
    <div>
      <SectionBanner
        img={img}
        heading={"contact us"}
        subHeading={"Would you like to try our dish?"}
      />
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px]">
        <SectionHeading first="Visit Us" second="our location" />
      </div>
      <ContactCard />
      <div className="mt-[30px] md:mt-[50px] lg:mt-[130px]">
        <SectionHeading first="Send Us Message" second="contact form" />
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
