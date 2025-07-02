"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logInImage from "../../../../public/assets/others/logIn.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cart from "../../../../public/assets/icon/cart2.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathName = usePathname();
  const nav = (
    <>
      <li>
        <Link
          href={"/"}
          onClick={closeDrawer}
          className={`${pathName === "/" ? "text-[#EEFF25]" : "text-white"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/contactUs"}
          onClick={closeDrawer}
          className={`${
            pathName === "/contactUs" ? "text-[#EEFF25]" : "text-white"
          }`}
        >
          Contact us
        </Link>
      </li>
      <li>
        <Link
          href={"/dashboard"}
          onClick={closeDrawer}
          className={`${
            pathName === "/dashboard" ? "text-[#EEFF25]" : "text-white"
          }`}
        >
          dashboard
        </Link>
      </li>
      <li>
        <Link
          href={"/ourMenu"}
          onClick={closeDrawer}
          className={`${
            pathName === "/ourMenu" ? "text-[#EEFF25]" : "text-white"
          }`}
        >
          our menu
        </Link>
      </li>
      <li className="flex items-center">
        <p>
          <Link
            href={"/ourShop"}
            onClick={closeDrawer}
            className={`${
              pathName === "/ourShop" ? "text-[#EEFF25]" : "text-white"
            }`}
          >
            our shop
          </Link>
        </p>
        <p className="pt-2 hidden lg:block">
          <Link href={"/cart"}>
            <button className=" pl-[7px] relative ">
              <Image
                src={cart}
                alt="cart_image"
                height={31}
                width={34}
                className="md:h-[49px] md:w-[52px]"
              />{" "}
              <div className="absolute bg-[#fd000a] p-[1px] rounded-full top-7 left-9  w-6 text-sm text-[#9e0f0e]">
                1
              </div>
            </button>
          </Link>
        </p>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black/50 shadow-sm height">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="relative lg:hidden">
            <div
              onClick={toggleDrawer}
              tabIndex={0}
              role="button"
              className=" p-4 md:pr-8 md:pl-[53px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-9 md:w-9 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {mounted && isOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg z-50 p-2 flex flex-col space-y-2  text-xs md:text-xl uppercase">
                {nav}
              </ul>
            )}
          </div>
        </div>
        <Link
          href={"/"}
          className="md:pt-5 md:pb-[18px] lg:pt-[27px] lg:pb-[28px] lg:pl-[55px]"
        >
          <h1 className="uppercase text-[32px] font-black  text text-white">
            bistro boss
          </h1>
          <p className="text-[24px] font-semibold  sText text-white">
            Restaurant
          </p>
        </Link>
      </div>
      <div className="navbar-end flex items-center gap-[20px] pr-[20px] md:pr-[54px]">
        <ul className=" text-[20px] font-extrabold hidden lg:flex items-center gap-[20px] uppercase">
          {nav}
        </ul>
        <div className="flex items-center gap-4 lg:gap-[7px]">
          <p className=" block lg:hidden">
            <Link href={"/cart"}>
              <button className=" pl-[7px] relative ">
                <Image
                  src={cart}
                  alt="cart_image"
                  height={31}
                  width={34}
                  className="md:h-[49px] md:w-[52px]"
                />{" "}
                <div className="absolute bg-[#fd000a] p-[1px] rounded-full top-4 left-7 h-4 w-4 text-xs text-white">
                  1
                </div>
              </button>
            </Link>
          </p>
          <h3 className="text-[20px] font-extrabold hidden md:block text-white uppercase">
            sign in
          </h3>
          <Image
            src={logInImage}
            alt="logged_person_image"
            height={31}
            width={34}
            className="bg-black rounded-full md:h-[41px] md:w-[45px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
