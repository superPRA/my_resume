import React from "react";

export default function KnowlegeBox({bg, icon, color, title, text, border}) {
  return (
    <div
      className={`flex p-5 font-semibold justify-between items-start ${bg} dark:bg-[#111111] ${border} dark:border dark:text-white rounded-lg mb-5 col-span-12 md:col-span-6 md:mx-5`}
    >
      <i className={`${icon} text-3xl mt-2 ${color}`}></i>
      <div className="mx-6">
        <h3 className="text-xl font-semibold mt-1 mb-3 ">{title}</h3>
        <p className="text-gray-700 leading-8">{text}</p>
      </div>
    </div>
  );
}
