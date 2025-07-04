import React from "react";
type TBtn = {
  btnText: string;
  className?: string;
};

const CommonBTN: React.FC<TBtn> = ({ btnText, className }) => {
  return (
    <button
      className={`px-[30px] py-[16px] text-[20px] font-medium uppercase border-b-[3px] rounded-lg leading-normal cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default CommonBTN;
