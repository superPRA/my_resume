import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { APIcontext } from "../App";

export default function PcardStart() {
  const lang = useSelector((state) => state.glob.lang);
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

  return (
    <div className="bg-white dark:bg-[#111111] pt-24 pb-12 lg:mt-40 px-20 lg:rounded-xl lg:my-20 dark:text-white">
      <img
        src={authorIMG}
        className="w-[240px] h-[240px] rounded-2xl mx-auto drop-shadow-lg lg:absolute lg:-my-[240px] "
      />
      <h2 className="text-center mt-6 text-[30px] font-semibold">
        {lang === "en" ? name_en : name_fa}
      </h2>
      <h3 className="text-center mt-5 text-gray-600">
        {lang === "en" ? field_en : field_fa}
      </h3>
      <div className="flex justify-center mt-5">
        <a
          href={instagram}
          className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg mx-3 transition-all duration-300 hover:bg-[#ef4060] text-[#ef4060] hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110"
        >
          <i className="fa-brands fa-instagram font-bold text-2xl"></i>
        </a>
        <a
          href={telegram}
          className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg mx-3 transition-all duration-300 hover:bg-[#ef4060] text-blue-600 hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110"
        >
          <i className="fa-brands fa-telegram font-bold text-2xl"></i>
        </a>
        <a
          href={linkdin}
          className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg mx-3 transition-all duration-300 hover:bg-[#ef4060] text-green-600 hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110"
        >
          <i className="fa-brands fa-linkedin font-bold text-2xl"></i>
        </a>
        <a
          href={github}
          className="bg-[#f3f6f6] flex justify-center items-center w-[40px] h-[40px] rounded-lg mx-3 transition-all duration-300 hover:bg-[#ef4060] text-blue-600 hover:text-white dark:bg-[#212425] dark:hover:bg-[#ef4060] hover:scale-110 "
        >
          <i className="fa-brands fa-github font-bold text-2xl"></i>
        </a>
      </div>
      <Link
        to="/PooriyaMosavi/about"
        className="text-center block mx-auto mb-4 mt-7 bg-[#f3f6f6] p-3 rounded-xl transition-all duration-300 w-36 hover:bg-[#ef4060] hover:text-white hover:w-64 dark:bg-[#212425]  dark:hover:bg-[#ef4060]"
      >
        {lang === "en" ? "More About Me" : "اطلاعات بیشتر"}
      </Link>
    </div>
  );
}
