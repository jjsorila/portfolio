import { useLayoutEffect, useCallback, useState } from "react";
import LightLogo from "/images/jjs-light.png";
import DarkLogo from "/images/jjs-dark.png";

const App = () => {
  const [ui, setUi] = useState<boolean>(JSON.parse(localStorage.getItem("ui") ?? "false"));
  const [choices, setChoices] = useState<Object[]>([
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
    }
  ])

  useLayoutEffect(() => {
    !ui ? document.querySelector("html")?.classList.add("dark") : document.querySelector("html")?.classList.remove("dark");
  }, [ui]);

  const toggleLogoColor = useCallback(() => {
    localStorage.setItem("ui", JSON.stringify(!ui));
    setUi((prev) => !prev);
  }, []);


  const changeActive: any = useCallback((e: any) => {
    const chosenId = e.target.getAttribute("for")
    
    setChoices(prev => prev.map((v: any) => ({
      title: v.title,
      id: v.id,
      selected: chosenId == v.id
    })))
  }, [])

  return (
    <div className="bg-violet-50 dark:bg-slate-900 min-h-[100vh]">

      {/* NAVBAR */}
      <nav className="bg-violet-50 dark:bg-slate-900 flex px-[10rem] py-[1.5rem] max-w-[1920px] mx-auto sticky top-0 border-b-4 border-violet-950 dark:border-cyan-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80">
        <div className="flex-1 flex justify-start items-center gap-[2rem]">
          <img
            className="w-[40px] h-[40px] object-cover rounded-full outline outline-2 dark:outline-white outline-zinc-800 outline-offset-4 cursor-pointer"
            onClick={toggleLogoColor}
            src={ui ? DarkLogo : LightLogo}
          />
          <h3 className="font-bold h-fit dark:text-white">JJ.S</h3>
        </div>
        <div className="flex-1">
          <ul className="list-none flex w-[100%] h-[100%] justify-end gap-[10rem] items-center font-semibold text-sl">
            { choices.map((v: any) => {
              return (
                <>
                  <input type="checkbox" className={`peer/${v.id} hidden`} checked={v.selected} id={v.id}/>
                  <li className="">
                    <label className="dark:text-white text-xl cursor-pointer" htmlFor={v.id} onClick={changeActive}>{v.title}</label>
                  </li>
                </>
              )
            }) }
          </ul>
        </div>
      </nav>

      {/* ABOUT */}
      <div className={`${ui ? "about-light" : "about-dark"} max-w-[1920px] mx-auto h-[90vh]`}></div>
    </div>
  );
};

export default App;
