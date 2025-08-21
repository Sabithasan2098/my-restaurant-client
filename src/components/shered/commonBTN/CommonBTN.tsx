import React from "react";
type TBtn = {
  btnText: string;
  className?: string;
};

const CommonBTN: React.FC<TBtn> = ({ btnText, className }) => {
  return (
    <button
      className={`px-[10px] md:px-[16px] lg:px-[30px] py-[4px] md:py-[9px] lg:py-[16px] text-[11px] md:text-[17px] lg:text-[20px] font-medium uppercase border-b-[2px] lg:border-b-[3px] rounded-lg leading-normal cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default CommonBTN;
