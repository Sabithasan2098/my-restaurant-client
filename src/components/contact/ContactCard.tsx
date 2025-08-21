import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/contact/telephone.png";
import image2 from "../../../public/assets/contact/time.png";
import image3 from "../../../public/assets/contact/location.png";

const ContactCard = () => {
  return (
    <div className="max-w-[1320px] mx-auto grid grid-cols-3 gap-10 mt-[54px]">
      <div className="w-[424px] h-[300px] ">
        <div className="bg-[#D1A054] flex items-center justify-center h-[80px]">
          <Image src={image1} alt="telephone_image" height={32} width={32} />
        </div>
        <div className="flex justify-center border-[1px] border-[#e8e8e8] border-t-0 pb-[26px]">
          <div className="w-[364px] bg-[#f3f3f3] h-[190px] flex flex-col items-center">
            <h3 className="uppercase pt-[38px] pb-[10px] text-[24px] font-medium">
              phone
            </h3>
            <p className="">+38 (012) 34 56 789</p>
          </div>
        </div>
      </div>
      <div className="w-[424px] h-[300px] ">
        <div className="bg-[#D1A054] flex items-center justify-center h-[80px]">
          <Image src={image2} alt="telephone_image" height={32} width={32} />
        </div>
        <div className="flex justify-center border-[1px] border-[#e8e8e8] border-t-0 pb-[26px]">
          <div className="w-[364px] bg-[#f3f3f3] h-[190px] flex flex-col items-center">
            <h3 className="uppercase pt-[38px] pb-[10px] text-[24px] font-medium">
              address
            </h3>
            <p className="">+38 (012) 34 56 789</p>
          </div>
        </div>
      </div>
      <div className="w-[424px] h-[300px] ">
        <div className="bg-[#D1A054] flex items-center justify-center h-[80px]">
          <Image src={image3} alt="telephone_image" height={32} width={32} />
        </div>
        <div className="flex justify-center border-[1px] border-[#e8e8e8] border-t-0 pb-[26px]">
          <div className="w-[364px] bg-[#f3f3f3] h-[190px] flex flex-col items-center">
            <h3 className="uppercase pt-[38px] pb-[10px] text-[24px] font-medium">
              working hours
            </h3>
            <p className="">Mon - Fri: 08:00 - 22:00</p>
            <p className="">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
