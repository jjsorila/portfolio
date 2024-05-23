import React, { useCallback, useState, useEffect, memo, forwardRef } from "react";
import type {
  TChoices,
  TNavbarProps,
} from "src/components/Navbar/Navbar.types";
import LightLogo from "/images/jjs-light.png";
import DarkLogo from "/images/jjs-dark.png";

const Navbar = forwardRef(({ ui, setUi }: TNavbarProps, contactRef: HTMLLabelElement | any) => {
  
  const [choices, setChoices] = useState<TChoices[]>([
    {
      title: "ABOUT",
      id: "about",
      selected: true,
    },
    {
      title: "SKILLS",
      id: "skills",
      selected: false,
    },
    {
      title: "PROJECTS",
      id: "projects",
      selected: false,
    },
    {
      title: "CONTACT",
      id: "contact",
      selected: false,
    },
  ]);

  useEffect(() => {
    const sections = document.querySelectorAll("div.section")

    let observer: IntersectionObserver | null = new IntersectionObserver((entries) => {

      entries.forEach(el => {
        const currentVisible = el.isIntersecting && el.target.id.split("-")[0]

        currentVisible && setChoices(prev => {
          console.log("CHANGED")
          return prev.map(choice => ({
            title: choice.title,
            id: choice.id,
            selected: currentVisible == choice.id
          }))
        })

      })
    },
    {
      threshold: 0.5
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

  const changeActive = useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
    const el = e.target as HTMLLabelElement;
    const navbarHeight = document.getElementById("navbar")
      ?.offsetHeight as number;
    const chosenId = el.getAttribute("for");

    if (typeof chosenId === "string") {
      window.scrollTo(
        0,
        (document.getElementById(`${chosenId}-container`)
          ?.offsetTop as number) - (navbarHeight - 50)
      );
    }

    setChoices((prev) =>
      prev.map((v: TChoices) => ({
        title: v.title,
        id: v.id,
        selected: chosenId == v.id,
      }))
    );
  }, []);

  return (
    <nav
      id="navbar"
      className="z-[100] light-mode dark:dark-mode flex px-5 min-[1280px]:px-[8rem] py-[1.5rem] max-w-[2048px] mx-auto sticky top-0 border-b-4 border-violet-950 dark:border-cyan-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-80"
    >
      <div className="flex-1 flex justify-start items-center gap-[2rem]">
        <img
          className="w-[40px] h-[40px] object-cover rounded-full outline outline-2 dark:outline-white outline-zinc-800 outline-offset-4 cursor-pointer"
          onClick={toggleDarkMode}
          src={ui ? DarkLogo : LightLogo}
        />
        <h3 className="font-bold h-fit dark:text-white text-3xl">JJ.S</h3>
      </div>
      <div className="flex-1">
        <ul className="relative list-none flex w-[100%] h-[100%] justify-end gap-[4rem] items-center font-semibold text-sl">
          {choices.map((v: TChoices, i) => {
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
                    ref={v.id === "contact" ? contactRef : undefined}
                  >
                    {v.title}
                  </label>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </nav>
  );
})

export default memo(Navbar);
