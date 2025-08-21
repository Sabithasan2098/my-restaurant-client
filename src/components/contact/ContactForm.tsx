import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[1320px] h-[1071px] bg-[#f3f3f3] mx-auto mt-[47px]">
      <div className="lg:px-[89px] lg:py-[90px]">
        <div className="flex gap-7">
          <div className="w-full">
            <legend className="text-[20px] font-semibold pb-[13px]">
              Name*
            </legend>
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-white rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[72px] px-[36px]"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-full">
            <legend className="text-[20px] font-semibold pb-[13px]">
              Email*
            </legend>
            <input
              type="email"
              name=""
              id=""
              className="w-full bg-white rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[72px] px-[36px]"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full pt-[18px]">
          <legend className="text-[20px] font-semibold pb-[13px]">
            Phone*
          </legend>
          <input
            type="text"
            name=""
            id=""
            className="w-full bg-white rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[72px] px-[36px]"
            placeholder="Enter your phone"
          />
        </div>
        <div className="w-full pt-[18px]">
          <legend className="text-[20px] font-semibold pb-[13px]">
            Message*
          </legend>
          <textarea
            name=""
            id=""
            className="w-full bg-white rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[300px] px-[36px] py-[26px]"
            placeholder="Enter your message here"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
