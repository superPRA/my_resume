import React from "react";

export default function PageTitle(prop) {
  
    return (
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="text-4xl font-semibold lg:font-bold dark:text-white0">{prop.title}</h1>
          {prop.withLine && <div className="bg-[#ef4060] w-64 h-[2px] hidden md:block mt-2 mx-6"></div>}
        </div>
      );
  
  
}
