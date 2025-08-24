import React from "react";

const ContactForm = () => {
  return (
    <div className="lg:max-w-[1320px] lg:h-[1071px] bg-[#f3f3f3] mx-auto mt-[20px] md:mt-[30px] lg:mt-[47px]">
      <div className="px-[30px] md:px-[55px] lg:px-[89px] py-[35px] md:py-65px lg:py-[90px]">
        <div className="flex gap-2 md:gap-4 lg:gap-7">
          <div className="w-full">
            <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold lg:pb-[13px]">
              Name*
            </legend>
            <input
              type="text"
              name=""
              id=""
              className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[20px] md:h-[35px] lg:h-[72px] px-[10px] md:px-[20px] lg:px-[36px]"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full">
            <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold lg:pb-[13px]">
              Email*
            </legend>
            <input
              type="email"
              name=""
              id=""
              className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[20px] md:h-[35px] lg:h-[72px] px-[10px] md:px-[20px] lg:px-[36px]"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full pt-[18px]">
          <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold lg:pb-[13px]">
            Phone*
          </legend>
          <input
            type="text"
            name=""
            id=""
            className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[20px] md:h-[35px] lg:h-[72px] px-[10px] md:px-[20px] lg:px-[36px]"
            placeholder="Enter your phone"
          />
        </div>
        <div className="w-full pt-[18px]">
          <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold lg:pb-[13px]">
            Message*
          </legend>
          <textarea
            name=""
            id=""
            className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[120px] md:h-[180px] lg:h-[300px] px-[10px] md:px-[20px] lg:px-[36px] pt-1 md:pt-2 lg:py-[26px]"
            placeholder="Enter your message here"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
