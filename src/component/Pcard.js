import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { APIcontext } from "../App";



export default function Pcard() {
  const API = useContext(APIcontext);
  const {
    aboutme_fa,
    aboutme_en,
    authorIMG,
    birthday,
    cordinate,
    cv,
    email,
    field_en,
    field_fa,
    github,
    instagram,
    linkdin,
    location,
    name_en,
    name_fa,
    phone,
    telegram,
  } = API.pouryaApi.response.simpledata;
  const lang = useSelector((state) => state.glob.lang);
  return (
    <div className="bg-white dark:bg-[#111111] pt-24 pb-12 px-5 lg:rounded-xl w-full lg:mb-5 xl:w-96 relative lg:w-80 dark:text-white">
      <img
        src={authorIMG}
        className="w-[240px] lg:absolute lg:left-[50%] transform lg:-translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] lg:-mt-[240px]"
        alt=""
      />
      <h2 className="text-center mt-6 text-[30px] font-semibold">
        {lang === "en" ? name_en : name_fa}
      </h2>
      <h3 className="text-center mt-5 text-gray-600">
        {lang === "en" ? field_en : field_fa}
      </h3>
      <div className="flex justify-around mt-5 px-10">
        <a href={instagram} className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg  transition-all duration-300 hover:bg-[#ef4060] text-[#ef4060] hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110">
          <i className="fa-brands fa-instagram font-bold text-2xl"></i>
        </a>
        <a href={telegram} className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg  transition-all duration-300 hover:bg-[#ef4060] text-blue-600 hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110">
          <i className="fa-brands fa-telegram font-bold text-2xl"></i>
        </a>
        <a href={linkdin} className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg  transition-all duration-300 hover:bg-[#ef4060] text-green-600 hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110">
          <i className="fa-brands fa-linkedin font-bold text-2xl"></i>
        </a>
        <a href={github} className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg  transition-all duration-300 hover:bg-[#ef4060] text-blue-600 hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110 ">
          <i className="fa-brands fa-github font-bold text-2xl"></i>
        </a>
      </div>
      <div className="bg-[#f3f6f6] dark:bg-[#212425] w-full my-6 p-6 rounded-xl">
        <div className="flex items-center border-b-2 py-4">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-green-600 hover:text-white">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="mx-3 -mt-1">
            <h6 className="text-sm text-gray-600 ">
              {lang === "en" ? "phone" : "تلفن"}
            </h6>
            <Link className="transition duration-300 hover:text-[#ef4060]">
              {phone}
            </Link>
          </div>
        </div>

        <div className="flex items-center border-b-2 py-4">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-blue-600 hover:text-white">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="mx-3 -mt-1">
            <h6 className="text-sm text-gray-600 ">
              {lang === "en" ? "email" : "ایمیل"}
            </h6>
            <Link className="transition duration-300 hover:text-[#ef4060]">
              {email}
            </Link>
          </div>
        </div>

        <div className="flex items-center border-b-2 py-4">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-red-600 hover:text-white">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="mx-3 -mt-1">
            <h6 className="text-sm text-gray-600 ">
              {lang === "en" ? "location" : "مکان"}
            </h6>
            <Link className="transition duration-300 hover:text-[#ef4060]">
              {location}
            </Link>
          </div>
        </div>

        <div className="flex items-center py-4">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-purple -600 hover:text-white">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
          <div className="mx-3 -mt-1">
            <h6 className="text-sm text-gray-600 ">{lang === "en" ? "birth day" : "تولد"}</h6>
            <Link className="transition duration-300 hover:text-[#ef4060]">
              {birthday}
            </Link>
          </div>
        </div>
      </div>
      <button className="rounded-full py-3 px-5 bg-[#ef4060] mx-auto block text-white text-xl">
        <i className="fa-solid fa-download mr-3"></i>{lang === "en" ? "Download CV" : "دانلود رزومه"}
      </button>
    </div>
  );
}
