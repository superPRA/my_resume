import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaGamepad,
  FaPlay,
  FaTrophy,
} from "react-icons/fa";
import { BiWindowClose } from "react-icons/bi";
import { TbMathSymbols } from "react-icons/tb";
import { GiTicTacToe } from "react-icons/gi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { A11y, Pagination, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import uuid from "react-uuid";
import { AiOutlineLeft } from "react-icons/ai";

export default function DoosProfile() {
  return (
    <div className="col-span-3 bg-white bg-opacity-30 dark:bg-opacity-50 dark:backdrop-blur-[4px] backdrop-blur relative rounded-xl w-full pb-6 mb-20 dark:bg-[#111111] dark:text-white">
      <img
        src="https://bostamireact.ibthemespro.com/static/media/avatar.418c8afc380507acd425.jpg"
        className="absolute -top-[120px] w-[240px] left-[calc(50%-120px)] rounded-[20px]"
      />
      <h1 className="text-center mt-36 text-3xl font-semibold">Users Name</h1>
      <div className="bg-[#f3f6f6] dark:bg-[#212425] mt-12 mx-6 rounded-2xl">
        <div className="flex p-4 gap-x-4 items-center border-b">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[60px] h-[60px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-blue-600 hover:text-white text-3xl">
            <GiTicTacToe />
          </div>
          <h1>tic tac toe Status</h1>
        </div>

        <div className="flex p-4 gap-x-4 items-center">
          <div className="bg-white dark:bg-[#111111] dark:text-white dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-black hover:text-white">
            <FaPlay />
          </div>
          <h1>games played: 0</h1>
        </div>
        <div className="flex p-4 gap-x-4 items-center">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-amber-600 hover:text-white">
            <FaTrophy />
          </div>
          <h1>games won: 0</h1>
        </div>
        <div className="flex p-4 gap-x-4 items-center">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-green-600 hover:text-white">
            <BiWindowClose />
          </div>
          <h1>games lost: 0</h1>
        </div>
        <div className="flex p-4 gap-x-4 items-center">
          <div className="bg-white dark:bg-[#111111] dark:hover:bg-[#fe4060] w-[40px] h-[40px] flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 hover:bg-[#ef4060] text-purple-600 hover:text-white">
            <TbMathSymbols />
          </div>
          <h1>V/L rate: 0</h1>
        </div>
      </div>

      <div className="select-none">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          navigation
          grabCursor
        >
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <SwiperSlide key={uuid()}>
                <Link className="w-[50px] block hover:text-[#fe4060] group">
                  <div className="bg-[#f3f6f6] dark:bg-[#111111] dark:group-hover:bg-[#fe4060] w-[50px] h-[50px]  flex justify-center items-center rounded-lg drop-shadow-lg transition-all duration-300 group-hover:bg-[#ef4060] text-blue-600 group-hover:text-white text-3xl ">
                    <GiTicTacToe />
                  </div>
                  <h1 className="text-sm text-center mt-2 transition-all">
                    tic tac toe
                  </h1>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <a
        download={true}
        className="rounded-full py-3 px-5 mx-20 bg-[#ef4060] mt-5 block text-white text-xl"
      >
        edit your profile
      </a>
    </div>
  );
}
