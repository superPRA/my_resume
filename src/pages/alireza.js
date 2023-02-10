import Navbar from "../component/mainPage/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { APIcontext } from "../App";
import Loading from "../component/mainPage/Loading";
import Error from "../component/mainPage/Error";
import { useSelector } from "react-redux";
import React from "react";
import Nav from "../component/mainPage/nav";
import Acard from "../component/mainPage/Acard";




export default function Alireza() {
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
          <Acard />
        </div>  
        <div className="col-span-12 lg:col-span-8 w-full ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
