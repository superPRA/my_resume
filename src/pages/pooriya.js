import React from "react";
import Nav from "../component/nav";
import Pcard from "../component/Pcard";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { APIcontext } from "../App";
import Loading from "../component/Loading";
import Error from "../component/Error";
import { useSelector } from "react-redux";



export default function Pooriya() {
  const API = useContext(APIcontext);
  const lang = useSelector(state=>state.glob.lang)
  if (API.pouryaApi.loading || API.alirezaApi.loading) {
    return <Loading />;
  }
  if (!(API.pouryaApi.loading || API.alirezaApi.loading) && (API.pouryaApi.error || API.alirezaApi.error)) {return <Error />}
  return (
    <>
      <Nav />
      <div className={`grid lg:mt-60 grid-cols-12 md:gap-x-10 lg:justify-items-end lg:mx-3 xl:mx-10 ${lang === "en"?"L":"R"}`}>
        <div className="lg:container col-span-12 lg:col-span-4 gap-x-5 lg:w-11/12  lg:mx-auto">
          <Pcard />
        </div>  
        <div className="col-span-12 lg:col-span-8 w-full ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
