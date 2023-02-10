import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import React from "react";

export default function DoosBlocks({
  id,
  clickHandle,
  crossBlocks,
  circleBlocks,
  UAB,
  winBlocks,
  winStatus,
}) {
  const [content, setContent] = useState();
  useEffect(() => {
    if (circleBlocks.includes(id)) {
      setContent(circle);
    } else if (crossBlocks.includes(id)) {
      setContent(cross);
    }
  }, [UAB, crossBlocks, circleBlocks]);
  return (
    <div
      className={`border flex justify-center items-center col-span-4 border-black h-24 w-24 ${
        winStatus === "o" && winBlocks.includes(id)
          ? "bg-blue-600"
          : winStatus === "x" && winBlocks.includes(id)
          ? "bg-red-600"
          : "bg-white"
      }`}
      onClick={() => clickHandle(id)}
    >
      {content}
    </div>
  );
}

const cross = (
  <div className="">
    <div className="bg-red-600 h-1 w-10 rotate-45 relative top-[1.5px]"></div>
    <div className="bg-red-600 h-1 w-10 -rotate-45 relative -top-[1.5px]"></div>
  </div>
);

const circle = (
  <div className="w-10 h-10 border-4 border-blue-600 rounded-full"></div>
);
