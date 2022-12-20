import React from "react";

export default function WIDBox(prop) {
  return (
    <div
      className={`flex p-5 font-semibold justify-between items-start ${prop.bg} dark:bg-[#111111] ${prop.border} dark:border dark:text-white rounded-lg mb-5 col-span-12 md:col-span-6 md:mx-5`}
    >
      <img src={prop.img}  />
      <div className="mx-6">
        <h3 className="text-xl font-semibold mt-1 mb-3 ">{prop.title}</h3>
        <p className="text-gray-700 dark:text-gray-400 leading-8">{prop.text}</p>
      </div>
    </div>
  );
}
