import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/contact/telephone.png";
import image2 from "../../../public/assets/contact/time.png";
import image3 from "../../../public/assets/contact/location.png";

const ContactCard = () => {
  return (
    <div className="max-w-[370px] md:max-w-[870px] lg:max-w-[1320px] mx-auto grid grid-cols-3 gap-1 md:gap-4 lg:gap-10 mt-[20px] md:pt-[30px] lg:mt-[54px]">
      <div className="w-[120px] md:w-[270px] lg:w-[424px]  ">
        <div className="bg-[#D1A054] flex items-center justify-center h-[22px] md:h-[50px] lg:h-[80px]">
          <Image
            src={image1}
            alt="telephone_image"
            height={32}
            width={32}
            className="h-[12px] w-[12px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] "
          />
        </div>
        <div className="flex justify-center border-[1px] border-[#e8e8e8] border-t-0 pb-[7px] md:pb-[22px] lg:pb-[26px]">
          <div className="w-[105px] md:w-[220px] lg:w-[364px] bg-[#f3f3f3] h-[55px] md:h-[120px] lg:h-[190px] flex flex-col items-center">
            <h3 className="uppercase pt-[4px] md:pt-[23px] lg:pt-[38px] lg:pb-[10px] text-[10px] md:text-[18px] lg:text-[24px] lg:font-medium">
              phone
            </h3>
            <p className="text-[8px] md:text-[13px] lg:text-[16px] ">
              +38 (012) 34 56 789
            </p>
          </div>
        </div>
      </div>
      <div className="w-[120px] md:w-[270px] lg:w-[424px]  ">
        <div className="bg-[#D1A054] flex items-center justify-center h-[22px] md:h-[50px] lg:h-[80px]">
          <Image
            src={image2}
            alt="telephone_image"
            height={32}
            width={32}
            className="h-[12px] w-[12px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] "
          />
        </div>
        <div className="flex justify-center border-[1px] border-[#e8e8e8] border-t-0 pb-[7px] md:pb-[22px] lg:pb-[26px]">
          <div className="w-[105px] md:w-[220px] lg:w-[364px] bg-[#f3f3f3] h-[55px] md:h-[120px] lg:h-[190px] flex flex-col items-center">
            <h3 className="uppercase pt-[4px] md:pt-[23px] lg:pt-[38px] lg:pb-[10px] text-[10px] md:text-[18px] lg:text-[24px] lg:font-medium">
              address
            </h3>
            <p className="text-[8px] md:text-[13px] lg:text-[16px] ">
              +38 (012) 34 56 789
            </p>
          </div>
        </div>
      </div>
      <div className="w-[120px] md:w-[270px] lg:w-[424px]  ">
        <div className="bg-[#D1A054] flex items-center justify-center h-[22px] md:h-[50px] lg:h-[80px]">
          <Image
            src={image3}
            alt="telephone_image"
            height={32}
            width={32}
            className="h-[12px] w-[12px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] "
          />
        </div>
        <div className="flex justify-center border-[1px] border-[#e8e8e8] border-t-0 pb-[7px] md:pb-[22px] lg:pb-[26px]">
          <div className="w-[105px] md:w-[220px] lg:w-[364px] bg-[#f3f3f3] h-[55px] md:h-[120px] lg:h-[190px] flex flex-col items-center">
            <h3 className="uppercase pt-[4px] md:pt-[23px] lg:pt-[38px] lg:pb-[10px] text-[10px] md:text-[18px] lg:text-[24px] lg:font-medium">
              working hours
            </h3>
            <p className="text-[8px] md:text-[13px] lg:text-[16px] ">
              Mon - Fri: 08:00 - 22:00
            </p>
            <p className="text-[8px] md:text-[13px] lg:text-[16px] ">
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
