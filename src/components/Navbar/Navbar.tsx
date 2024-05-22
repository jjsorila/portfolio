import React, { useCallback, useState, useEffect, memo } from "react";
import type {
  TChoices,
  TNavbarProps,
} from "src/components/Navbar/Navbar.types";
import LightLogo from "/images/jjs-light.png";
import DarkLogo from "/images/jjs-dark.png";

const Navbar = ({ ui, setUi }: TNavbarProps) => {
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
  const autoChange = choices.find((v) => v.selected) as TChoices;

  useEffect(() => {
    const aboutDiv = document.getElementById("about-container")
      ?.offsetHeight as number;
    const skillsDiv =
      aboutDiv +
      (document.getElementById("skills-container")?.offsetHeight as number);
    const projectsDiv =
      skillsDiv +
      (document.getElementById("projects-container")?.offsetHeight as number);
    const contactDiv =
      projectsDiv +
      (document.getElementById("contact-container")?.offsetHeight as number);
    let current = "";

    const listener = function () {
      const eye = window.scrollY + 200;

      if (eye < aboutDiv) {
        current = "about";
      } else if (eye < skillsDiv) {
        current = "skills";
      } else if (eye < projectsDiv) {
        current = "projects";
      } else if (eye < contactDiv) {
        current = "contact";
      }

      if (current != autoChange.id) {
        setChoices((prev) =>
          prev.map((v) => ({
            title: v.title,
            id: v.id,
            selected: current == v.id,
          }))
        );
      }
    };
    window?.addEventListener("scroll", listener);

    return () => {
      window?.removeEventListener("scroll", listener);
    };
  }, [autoChange]);

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
          ?.offsetTop as number) - navbarHeight
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
      className="z-[1] light-mode dark:dark-mode flex px-[10rem] py-[1.5rem] max-w-[2048px] mx-auto sticky top-0 border-b-4 border-violet-950 dark:border-cyan-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-80"
    >
      <div className="flex-1 flex justify-start items-center gap-[2rem]">
        <img
          className="w-[40px] h-[40px] object-cover rounded-full outline outline-2 dark:outline-white outline-zinc-800 outline-offset-4 cursor-pointer"
          onClick={toggleDarkMode}
          src={ui ? DarkLogo : LightLogo}
        />
        <h3 className="font-bold h-fit dark:text-white">JJ.S</h3>
      </div>
      <div className="flex-1">
        <ul className="relative list-none flex w-[100%] h-[100%] justify-end gap-[4rem] items-center font-semibold text-sl">
          {choices.map((v: TChoices) => {
            return (
              <>
                <input
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
              </>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);
