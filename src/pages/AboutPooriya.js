import React from "react";
import PageTitle from "../component/PageTitle";
import WIDBox from "../component/WIDBox";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { APIcontext } from "../App";

export default function AboutPooriya() {
  const lang = useSelector(state=>state.glob.lang)
  const API = useContext(APIcontext);
  let src;
  if(window.location.pathname.includes("alireza")){
    src = API.alirezaApi.response.simpledata
  } else {
    src =  API.pouryaApi.response.simpledata
  }
  const {
    aboutme_fa,
    aboutme_en,
    authorIMG,
    birthday,
    cordinate,
    cv,
    email,
    field_en,
    field_fa,
    github,
    instagram,
    linkdin,
    location,
    name_en,
    name_fa,
    phone,
    telegram,
  } = src;

  const WID = API.pouryaApi.response.vidbox
  const WIDBoxElement = WID.map(item=>{
    const {img, title_fa, title_en, text_fa, text_en, bg, border} = item
    return <WIDBox img={img} title={lang==="en"?title_en:title_fa} text={lang==="en"?text_en:text_fa} bg={bg} key={Math.random()} border={border} />
  })
  return (
    <div className={`bg-white dark:bg-[#111111] w-full px-6  lg:my-10 pt-16 lg:rounded-xl lg:pl-12 ${lang === "en"?"L":"R"} `}>
      <PageTitle title={lang==="en"?"About Me":"درباره من"} withLine={true} />
      <p className="py-12 text-gray-700 dark:text-gray-400 text-[20px] pr-32">
        {lang==="en"?aboutme_en: aboutme_fa}
      </p>
      <PageTitle title={lang==="en"?"What I do?":"چه کار هایی بلدم؟"} withLine={false} />
      <div className="grid grid-cols-12 pb-10 mt-12">
        {WIDBoxElement}
      </div>
    </div>
  );
}
