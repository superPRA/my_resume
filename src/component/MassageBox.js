import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../features/counter/counterSlice";

export default function MassageBox() {
  const dispatch = useDispatch()
  const massageBox = useSelector(state=>state.glob.massageBox)
  const lang = useSelector(state=>state.glob.lang)
  return (
    <div
      className={`flex justify-between fixed w-full bottom-12 left-0 L items-center`}
    >
      <div
        className={` md:w-[600px] w-[320px] text-base lg:text-3xl bg-white shadow-2xl rounded-r-full relative top-0 ${
          massageBox.exist ? "left-0" : "-left-[600px]"
        } delay-100 transition-all duration-300 text-xl py-6 px-6`}
      >
        {massageBox.massage}
      </div>
      <div
        className={`w-16 h-16 flex justify-center relative ${massageBox.exist?"right-0":"-right-32"} transition-all duration-300 top-0 items-center mx-6 bg-red-600 text-white rounded-full cursor-pointer`}
        onClick={() =>
           dispatch(actions.massageBoxHandle({massage:massageBox.massage, exist:false}))
        }
      >
        X
      </div>
    </div>
  );
}
