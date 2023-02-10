import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../features/counter/counterSlice";

export default function Navbar() {
  const menuOpen = useSelector((state) => state.glob.menuOpen);
  const lang = useSelector(state=>state.glob.lang)
  const dispatch = useDispatch();
  const info = [
    {
      to: "./about",
      i: "fa-solid fa-user",
      title_en: "About",
      title_fa:"درباره من"
    },
    {
      to: "./resume",
      i: "fa-solid fa-address-card",
      title_en: "Resume",
      title_fa:"رزومه"
    },
    {
      to: "./work",
      i: "fa-solid fa-cube",
      title_en: "Work",
      title_fa:"کار ها"
    },
    {
      to: "./fun",
      i: "fa-solid fa-gamepad",
      title_en: "Fun",
      title_fa:"سرگرمی"
    },
    {
      to: "./contact",
      i: "fa-solid fa-address-book",
      title_en: "Contact",
      title_fa:"تماس"
    },
  ];
  return (
    <div
      className={`max-lg:absolute top-[88px] py-2 w-full bg-white dark:bg-[#111111] lg:items-center lg:p-[30px] lg:w-[526px] ${
        menuOpen ? "grid" : "hidden"
      } ${lang==="en"?"L lg:ml-auto":"R lg:mr-auto"} gap-y-4 lg:flex lg:rounded-xl lg:justify-between  max-lg:rounded-b-xl max-lg:drop-shadow-2xl`}
    >
      {info.map((item) => {
        return (
          <NavLink
            key={Math.random(16).toString()}
            to={item.to}
            className="lg:bg-[#f3f6f6] lg:dark:bg-[#212425] lg:h-20 lg:w-[74px] lg:rounded-lg lg:hover:bg-[#fe4060] transition duration-300 lg:hover:dark:bg-[#fe4060] lg:flex lg:justify-center lg:items-center dark:text-white lg:hover:text-white max-lg:hover:text-[#ef4060]"
            onClick={() => dispatch(actions.menuOpenToggle(false))}
          >
            <div className="text-center max-lg:flex max-lg:justify-start max-lg:items-center max-lg:gap-x-2">
              <i className={`${item.i} text-xl max-lg:w-10`}></i>
              <h6>{lang==="en"?item.title_en:item.title_fa}</h6>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

// <div className="max-lg:absolute top-20 w-full bg-white dark:bg-[#111111] lg:items-center lg:p-[30px] lg:w-[526px]  lg:flex rounded-xl lg:justify-between L">
//   <NavLink
//     to="./about"
//     className="lg:bg-[#f3f6f6] lg:dark:bg-[#212425] lg:h-20 lg:w-[74px] lg:rounded-lg lg:hover:bg-[#fe4060] transition duration-300 lg:hover:dark:bg-[#fe4060] lg:flex lg:justify-center lg:items-center dark:text-white lg:hover:text-white "
//   >
//     <div className="text-center">
//       <i className="fa-solid fa-user text-xl"></i>
//       <h6>About</h6>
//     </div>
//   </NavLink>
//   <NavLink
//     to="./resume"
//     className="bg-[#f3f6f6] dark:bg-[#212425] h-20 w-[74px] rounded-lg hover:bg-[#fe4060] transition duration-300 hover:dark:bg-[#fe4060] flex justify-center items-center dark:text-white hover:text-white "
//   >
//     <div className="text-center">
//       <i className="fa-solid fa-address-card text-xl"></i>
//       <h6>Resume</h6>
//     </div>
//   </NavLink>
//   <NavLink
//     to="./work"
//     className="bg-[#f3f6f6] dark:bg-[#212425] h-20 w-[74px] rounded-lg hover:bg-[#fe4060] transition duration-300 hover:dark:bg-[#fe4060] flex justify-center items-center dark:text-white hover:text-white "
//   >
//     <div className="text-center">
//       <i className="fa-solid fa-cube text-xl"></i>
//       <h6>Work</h6>
//     </div>
//   </NavLink>
//   <NavLink
//     to="./fun"
//     className="bg-[#f3f6f6] dark:bg-[#212425] h-20 w-[74px] rounded-lg hover:bg-[#fe4060] transition duration-300 hover:dark:bg-[#fe4060] flex justify-center items-center dark:text-white hover:text-white "
//   >
//     <div className="text-center">
//       <i className="fa-solid fa-gamepad text-xl"></i>
//       <h6>Fun</h6>
//     </div>
//   </NavLink>
//   <NavLink
//     to="./contact"
//     className="bg-[#f3f6f6] dark:bg-[#212425] h-20 w-[74px] rounded-lg hover:bg-[#fe4060] transition duration-300 hover:dark:bg-[#fe4060] flex justify-center items-center dark:text-white hover:text-white "
//   >
//     <div className="text-center">
//       <i className="fa-solid fa-address-book text-xl"></i>
//       <h6>Contact</h6>
//     </div>
//   </NavLink>
// </div>
