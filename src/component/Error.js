import React from "react";
import Nav from "./nav";

export default function Error() {
  return (
    <div className="max-lg:h-screen max-lg:bg-white">
      <Nav />
      <h1 className="text-center text-4xl py-40">Some thing went wrong while fetching API</h1>
    </div>
  );
}
