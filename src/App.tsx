import React, { useLayoutEffect, useCallback, useState } from "react";
import type { TChoices } from "src/App.types.ts";
import LightLogo from "/images/jjs-light.png";
import DarkLogo from "/images/jjs-dark.png";
import AboutBGLightBot from "/light-bg-bottom.png"
import AboutBGDarkBot from "/dark-bg-bottom.png"
import AboutBGLightTop from "/light-bg-top.png" 
import AboutBGDarkTop from "/dark-bg-top.png"

const App = () => {
  const [ui, setUi] = useState<boolean>(JSON.parse(localStorage.getItem("ui") ?? "false"));
  const [choices, setChoices] = useState<TChoices[]>([
    {
      title: "ABOUT",
      id: "about",
      selected: true
    },
    {
      title: "SKILLS",
      id: "skills",
      selected: false
    },
    {
      title: "PROJECTS",
      id: "projects",
      selected: false
    },
    {
      title: "CONTACT",
      id: "contact",
      selected: false
    }
  ])

  useLayoutEffect(() => {
    !document.querySelector("html")?.classList.contains("scroll-smooth") ? document.querySelector("html")?.classList.add("scroll-smooth") : null

    !ui ? document.querySelector("html")?.classList.add("dark") : document.querySelector("html")?.classList.remove("dark");
  }, [ui]);

  const toggleLogoColor = useCallback(() => {
    localStorage.setItem("ui", JSON.stringify(!ui));
    setUi((prev) => !prev);
  }, []);

  const changeActive = useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
    const el = e.target as HTMLLabelElement
    
    const chosenId = el.getAttribute("for")
    
    setChoices(prev => prev.map((v: TChoices) => ({
      title: v.title,
      id: v.id,
      selected: chosenId == v.id
    })))
  }, [])

  return (
    <div className="bg-violet-50 dark:bg-slate-900 h-screen overflow-y-auto">

      {/* NAVBAR */}
      <nav className="z-[1] bg-violet-50 dark:bg-slate-900 flex px-[10rem] py-[1.5rem] max-w-[1920px] mx-auto sticky top-0 border-b-4 border-violet-950 dark:border-cyan-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-80">
        <div className="flex-1 flex justify-start items-center gap-[2rem]">
          <img
            className="w-[40px] h-[40px] object-cover rounded-full outline outline-2 dark:outline-white outline-zinc-800 outline-offset-4 cursor-pointer"
            onClick={toggleLogoColor}
            src={ui ? DarkLogo : LightLogo}
          />
          <h3 className="font-bold h-fit dark:text-white">JJ.S</h3>
        </div>
        <div className="flex-1">
          <ul className="relative list-none flex w-[100%] h-[100%] justify-end gap-[4rem] items-center font-semibold text-sl">
            { choices.map((v: TChoices) => {
              return (
                <>
                  <input type="checkbox" className={`peer/${v.id} hidden`} checked={v.selected} id={v.id}/>
                  <li className="">
                    <label className={`${v.selected ? "active-nav" : "dark:text-white" } p-2 rounded hover:active-nav text-base cursor-pointer`} htmlFor={v.id} onClick={changeActive}>
                      {v.title}
                      </label>
                  </li>
                </>
              )
            }) }
          </ul>
        </div>
      </nav>

      {/* ABOUT */}
      <div className={`relative max-w-[1920px] mx-auto h-[88vh] p-5`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightBot} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkBot} />


      </div>


      {/* SKILLS */}
      <div className={`relative max-w-[1920px] mx-auto h-[88vh] p-5`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightTop} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkTop} />


      </div>
    </div>
  );
};

export default App;
