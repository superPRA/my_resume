import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { actions } from "../features/counter/counterSlice";
import { Link } from "react-router-dom";
export default function Nav() {
  const isdark = useSelector((state) => state.glob.darkMode);
  const lang = useSelector((state) => state.glob.lang);
  const menuOpen = useSelector((state) => state.glob.menuOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center lg:py-12 py-5 lg:px-32 px-6 bg-[#f3f6f6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
      <Link to="/" className="text-3xl text-[#ef4060] cursor-pointer">
        Home
      </Link>

      <div className="flex gap-x-5">
        <button
          className="bg-white dark:bg-[#111111] dark:text-white rounded-full w-12 h-12 transition-colors duration-500 transform hover:bg-[#ef4060] dark:hover:bg-[#ef4060] hover:text-white"
          onClick={() => dispatch(actions.langToggle())}
        >
          {lang}
        </button>
        <button
          className="bg-white dark:bg-[#111111] dark:text-white rounded-full w-12 h-12 transition-colors duration-500 transform hover:bg-[#ef4060] dark:hover:bg-[#ef4060] hover:text-white"
          onClick={() => dispatch(actions.darkModeToggle())}
        >
          {!isdark ? (
            <FontAwesomeIcon icon={faMoon} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faSun} size="xl" />
          )}
        </button>
        <button
          className="lg:hidden bg-[#ef4060] rounded-full w-12 h-12 text-white text-3xl"
          onClick={() => dispatch(actions.menuOpenToggle("toggle"))}
        >
          {menuOpen ? "X" : "#"}
        </button>
      </div>
    </div>
  );
}
