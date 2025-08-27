"use client";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type TFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const baseRoute = "http://localhost:4000/api";

  console.log(baseRoute);
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${baseRoute}/message/create-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Error:" + data.error);
    }

    // send message
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        formData,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      )
      .then(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast("Message sent successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:max-w-[1320px]  bg-[#f3f3f3] mx-auto mt-[20px] md:mt-[30px] lg:mt-[47px]"
    >
      <div className="px-[30px] md:px-[55px] lg:px-[89px] py-[35px] md:py-65px lg:py-[90px]">
        <div className="flex gap-2 md:gap-4 lg:gap-7">
          <div className="w-full">
            <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold pb-[4px] md:pb-[7px] lg:pb-[13px]">
              Name*
            </legend>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id=""
              className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[20px] md:h-[35px] lg:h-[72px] px-[10px] md:px-[20px] lg:px-[36px]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full">
            <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold pb-[4px] md:pb-[7px] lg:pb-[13px]">
              Email*
            </legend>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id=""
              className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[20px] md:h-[35px] lg:h-[72px] px-[10px] md:px-[20px] lg:px-[36px]"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full pt-[18px]">
          <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold pb-[4px] md:pb-[7px] lg:pb-[13px]">
            Phone*
          </legend>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id=""
            className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[20px] md:h-[35px] lg:h-[72px] px-[10px] md:px-[20px] lg:px-[36px]"
            placeholder="Enter your phone"
          />
        </div>
        <div className="w-full pt-[18px]">
          <legend className="text-[12px] md:text-[14px] lg:text-[20px] lg:font-semibold pb-[4px] md:pb-[7px] lg:pb-[13px]">
            Message*
          </legend>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            id=""
            className="w-full placeholder:text-[10px] md:placeholder:text-[13px] lg:placeholder:text-[16px] bg-white rounded-xs md:rounded-sm lg:rounded-md outline-none focus:outline-none focus:ring-0 focus:border-transparent h-[120px] md:h-[180px] lg:h-[300px] px-[10px] md:px-[20px] lg:px-[36px] pt-1 md:pt-2 lg:py-[26px]"
            placeholder="Enter your message here"
          />
        </div>
      </div>
      <div className="flex justify-center mx-auto pb-5 md:pb-8 lg:pb-14">
        <button
          className="bg-gradient-to-r from-[#855e24]  to-[#b67f2f] px-4 md:px-6 lg:px-10 py-[5px] md:py-[12px] lg:py-[15px] text-white text-[11px] md:text-[15px] lg:text-[20px] font-light md:font-medium lg:font-semibold flex gap-[2px] md:gap-[4px] lg:gap-[7px] items-center "
          type="submit"
        >
          Send Message{" "}
          <span>
            <FaTelegramPlane className="text-[14px] md:text-[19px] lg:text-[26px]" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
