import React from "react";
type TBtn = {
  btnText: string;
};

const CommonBTN: React.FC<TBtn> = ({ btnText }) => {
  return (
    <button className="px-[30px] py-[20px] text-[20px] font-medium uppercase border-b-[3px] rounded-lg leading-normal cursor-pointer">
      {btnText}
    </button>
  );
};

export default CommonBTN;
