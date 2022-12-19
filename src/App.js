import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPooriya from "./pages/AboutPooriya";
import FunPooriya from "./pages/Funpooriya";
import ContactPooriya from "./pages/ContactPooriya";
import Home from "./pages/home";
import Pooriya from "./pages/pooriya";
import ResumePouriya from "./pages/ResumePouriya";
import WorkPooriya from "./pages/WorkPooriya";
import { useSelector } from "react-redux";
import { createContext } from "react";
import useAxios from "./features/api.js/axios";
import { useEffect } from "react";
import Alireza from "./pages/alireza";

export const APIcontext = createContext();

function App() {
  
    const pouryaApi = useAxios({
      url: "https://personal-api.iran.liara.run/pourya",
      method: "GET",
    });
    
    const alirezaApi = useAxios({
      url: "https://personal-api.iran.liara.run/alireza",
      method: "GET",
    });
    
  

  const isdark = useSelector((state) => state.glob.darkMode);
  return (
    <>
      <APIcontext.Provider value={{ pouryaApi, alirezaApi }}>
        <div className={isdark ? "dark" : ""}>
          <div className="bg-[url('https://bostamireact.ibthemespro.com/static/media/bg.54122ef3ac6eced211d3.jpg')] dark:bg-[url('https://bostamireact.ibthemespro.com/static/media/bgtwo.181487f3237d7ff109fa.jpg')] h-screen w-full fixed top-0 -z-10"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PooriyaMosavi" element={<Pooriya />}>
              <Route path="about" element={<AboutPooriya />} />
              <Route path="resume" element={<ResumePouriya />} />
              <Route path="work" element={<WorkPooriya />} />
              <Route path="fun" element={<FunPooriya />} />
              <Route path="contact" element={<ContactPooriya />} />
            </Route>
            <Route path="/alireza" element={<Alireza />}>
              <Route path="about" element={<AboutPooriya />} />
              <Route path="resume" element={<ResumePouriya />} />
              <Route path="work" element={<WorkPooriya />} />
              <Route path="fun" element={<FunPooriya />} />
              <Route path="contact" element={<ContactPooriya />} />
            </Route>
          </Routes>
        </div>
      </APIcontext.Provider>
    </>
  );
}

export default App;
