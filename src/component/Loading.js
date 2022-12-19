import React from "react";
import Nav from "./nav";

export default function Loading() {
  return (
    <>
      <div className="max-lg:h-screen max-lg:bg-white">
        <Nav />
        <div className="mx-auto flex justify-center gap-x-12 w-[50%] items-center py-40">
          <div className="w-12 h-12 rounded-full bg-red-600 animate-bounce"></div>
          <div
            className="w-12 h-12 rounded-full bg-red-600 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="w-12 h-12 rounded-full bg-red-600 animate-bounce"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
      </div>
    </>
  );
}
