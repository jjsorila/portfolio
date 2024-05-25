import React, { useCallback, useEffect, memo, useMemo } from "react";
import type {
  TChoices,
  TNavbarProps,
} from "src/components/Navbar/Navbar.types";
import LightLogo from "/images/jjs-light.png";
import DarkLogo from "/images/jjs-dark.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ ui, setUi, toggleSideBar, changeActive, choices, setChoices }: TNavbarProps) => {

  useEffect(() => {
    const sections = document.querySelectorAll("div.section")

    let observer: IntersectionObserver | null = new IntersectionObserver((entries) => {

      entries.forEach(el => {
        const currentVisible = el.isIntersecting && el.target.id.split("-")[0]

        currentVisible && setChoices(prev => {
          return prev.map(choice => ({
            title: choice.title,
            id: choice.id,
            selected: currentVisible == choice.id,
            icon: choice.icon
          }))
        })

      })
    },
    {
      threshold: 0.3
    })

    sections.forEach(el => observer?.observe(el))

    return () => {
      sections.forEach(el => observer?.unobserve(el))
      observer?.disconnect()
      observer = null
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    localStorage.setItem("ui", JSON.stringify(!ui));
    if(setUi != null) setUi((prev) => !prev)
  }, []);

  return (
    <nav
      id="navbar"
      className="z-[100] light-mode dark:dark-mode flex px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60 py-[1.5rem] max-w-[1600px] mx-auto sticky top-0 border-b-4 border-violet-950 dark:border-cyan-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-80"
    >
      <div className="flex-1 flex max-[1000px]:justify-between justify-start items-center gap-[2rem]">
        <RxHamburgerMenu className="h-[40px] w-[40px] dark:text-white text-black border border-black hover:shadow-violet-400 dark:border-white shadow-md p-1 rounded dark:hover:shadow-cyan-400 cursor-pointer min-[1000px]:hidden dark:bg-neutral-800 transition-all duration-100" onClick={toggleSideBar} />
        <h3 className="font-bold h-fit dark:text-white text-2xl min-[1000px]:hidden">{choices.find(v => v.selected)?.title}</h3>
        <img
          className="w-[40px] h-[40px] object-cover rounded-full outline outline-2 dark:outline-white outline-zinc-800 outline-offset-4 cursor-pointer"
          onClick={toggleDarkMode}
          src={ui ? DarkLogo : LightLogo}
        />
        <h3 className="font-bold h-fit dark:text-white text-3xl max-[1000px]:hidden">JJ.S</h3>
      </div>
      <div className="flex-1 max-[1000px]:hidden">
        <ul className="relative list-none flex w-[100%] h-[100%] justify-end gap-[4rem] items-center font-semibold text-sl">
          {useMemo(() => {
            return choices.map((v: TChoices, i) => {
              return (
                <React.Fragment key={i}>
                  <input
                    readOnly
                    type="checkbox"
                    className={`hidden`}
                    checked={v.selected}
                    id={v.id}
                  />
                  <li>
                    <label
                      className={`${
                        v.selected ? "active-nav" : "dark:text-white"
                      } p-2 rounded hover:active-nav text-base cursor-pointer`}
                      htmlFor={v.id}
                      onClick={changeActive}
                    >
                      {v.title}
                    </label>
                  </li>
                </React.Fragment>
              );
            })
          }, [choices])}
        </ul>
      </div>
    </nav>
  );
}

export default memo(Navbar);
