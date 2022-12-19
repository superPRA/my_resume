import React from "react";

export default function PageTitle(prop) {
  if (prop.withLine){
    return (
        <div className="flex justify-start items-center">
          <h1 className="text-4xl font-semibold lg:font-bold dark:text-white">{prop.title}</h1>
          <div className="bg-[#ef4060] w-64 h-[2px] mt-2 mx-6"></div>
        </div>
      );
  }
  return (
    <div className="flex justify-start items-center">
      <h1 className="text-4xl font-semibold lg:font-bold dark:text-white">{prop.title}</h1>
    </div>
  );
}
