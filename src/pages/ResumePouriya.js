import React, { useContext } from "react";
import EdBox from "../component/EdBox";
import KnowlegeBox from "../component/KnowlegeBox";
import PageTitle from "../component/PageTitle";
import SecondTitle from "../component/SecondTitle";
import { useSelector } from "react-redux";
import { APIcontext } from "../App";

export default function ResumePouriya() {
  let src;
  const API = useContext(APIcontext)
  if(window.location.pathname.includes("alireza")){
    src = API.alirezaApi.response
  } else {
    src =  API.pouryaApi.response
  }
  const lang = useSelector(state=>state.glob.lang)
  
  const pageTitle = src.resumedata
  const pageIter = src.iterresumedata
  const pageAPI = [
    {
      title: "Education",
      icon: "fa-solid fa-graduation-cap",
      iteration: [
        {
          icon:"",
          color:'',
          title:'',
          text:"",
          border:"",
          date: "2021-now",
          bg: "bg-[rgb(252,244,255)]",
          fild: "Electrical Engneer",
          uni: "University of Qom",
        },
        {
          icon:"",
          color:'',
          title:'',
          text:"",
          border:"",
          date: "2010-2020",
          bg: "bg-[rgb(252,244,255)]",
          fild: "English",
          uni: "Kish Instotution",
        },
      ],
      type: "ED"
    },{
      title: "Front-End",
      icon: "fa-solid fa-labtop-code",
      iteration: [
        {
          icon: "fa-solid fa-code",
          color: "text-orange-600",
          title: "HTML",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          bg: "bg-[rgb(252,244,255)]",
          border: "dark:border-[rgb(252,244,255)]",
          date:"",
          fild:"",
          uni:""
        },
        {
          icon: "fa-brands fa-css3-alt",
          color: "text-blue-600",
          title: "CSS",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          bg: "bg-[rgb(252,244,255)]",
          border: "dark:border-[rgb(252,244,255)]",
          date:"",
          fild:"",
          uni:""
        },
        {
          icon: "fa-brands fa-sass",
          color: "text-red-600",
          title: "Sass",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          bg: "bg-[rgb(252,244,255)]",
          border: "dark:border-[rgb(252,244,255)]",
          date:"",
          fild:"",
          uni:""
        },
        {
          icon: "fa-brands fa-bootstrap",
          color: "text-purple-600",
          title: "BootStrap",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          bg: "bg-[rgb(252,244,255)]",
          border: "dark:border-[rgb(252,244,255)]",
          date:"",
          fild:"",
          uni:""
        },
        {
          icon: "fa-solid fa-file-code",
          color: "text-blue-400",
          title: "TailWind",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          bg: "bg-[rgb(252,244,255)]",
          border: "dark:border-[rgb(252,244,255)]",
          date:"",
          fild:"",
          uni:""
        },
        {
          icon: "fa-brands fa-square-js",
          color: "text-yellow-600",
          title: "JavaScript",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          bg: "bg-[rgb(252,244,255)]",
          border: "dark:border-[rgb(252,244,255)]",
          date:"",
          fild:"",
          uni:""
        },
      ],
      type: "KN"
    },
  ];
  return (
    <div className={`bg-white dark:bg-[#111111] px-6  lg:my-10 pt-16 lg:rounded-xl lg:px-12 ${lang==="en"?"L":"R"}`}>
      <PageTitle title={lang==="en"?"Resume":"رزومه"} withLine={true} />
      {pageTitle.map((item) => {
        const { title_en, title_fa, icon, id_iter, type } = item;
        const Element = pageIter.map(item2=>{
          if(item2.id_iter === id_iter){
            switch (type) {
            case "ED":
              return(
                <EdBox bg={item2.bg} field={lang==="en"?item2.field_en:item2.field_fa} uni={lang==="en"?item2.uni_en:item2.uni_fa} date={lang==="en"?item2.data_en:item2.data_fa} key={Math.random()} />
              )
            case "KN":
              return(
                <KnowlegeBox bg={item2.bg} icon={item2.icon} color={item2.color} title={lang==="en"?item2.title_en:item2.title_fa} text={lang==="en"?item2.text_en:item2.text_fa} border={item2.border} key={Math.random()} />
              )    
          }
          }
          
        })
        return (
          <div>
            <SecondTitle title={lang==="en"?title_en:title_fa} icon={icon} />
            <div className="grid grid-cols-12 my-6 gap-x-8">
              {Element}
            </div>
          </div>
        );
      })}
    </div>
  );
}

