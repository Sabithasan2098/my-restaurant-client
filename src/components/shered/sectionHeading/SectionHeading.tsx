import React from "react";

type TProps = {
  first: string;
  second: string;
  className?: string;
};

const SectionHeading: React.FC<TProps> = ({ first, second, className }) => {
  return (
    // responsive-complete
    <div className="text-center ">
      <p className="text-[#D99904] italic text-xs font-light lg:text-[20px] lg:font-normal mb-[4px] md:mb-[12px] lg:mb-[16px] text-center">
        ---{first}---
      </p>
      <p className="h-[1px] lg:h-1 w-[424px] bg-[#e8e8e8] mb-[5px] md:mb-[16px] lg:mb-[20px] max-w-[250px] md:max-w-[424px] mx-auto"></p>
      <p
        className={`text-[14px] md:text-[30px] lg:text-[40px] font-medium md:font-normal mb-[7px] md:mb-[18px] lg:mb-[24px] uppercase ${className}`}
      >
        {second}
      </p>
      <p className="h-[1px] lg:h-1 w-[424px] bg-[#e8e8e8] max-w-[250px] md:max-w-[424px] mx-auto"></p>
    </div>
  );
};

export default SectionHeading;
