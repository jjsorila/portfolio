import { useLayoutEffect, useState, useRef, useCallback } from "react";
import { About, Navbar, Projects, Contact, Skills, Sidebar } from "src/components";
import { TChoices } from "./components/Navbar/Navbar.types";

const App = () => {
  const collapseSide = useRef<HTMLInputElement>(null);
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
  const [ui, setUi] = useState<boolean>(JSON.parse(localStorage.getItem("ui") ?? "false"));

  useLayoutEffect(() => {
    document.querySelector("html")?.classList.toggle("dark", !ui);
  }, [ui]);

  const changeActive = useCallback((e: React.MouseEvent<HTMLLabelElement>) => {
    const el = e.target as HTMLElement;
    const navbarHeight = document.getElementById("navbar")?.offsetHeight as number;
    const chosenId = el.getAttribute("for") || el.getAttribute("data-id");

    if (typeof chosenId === "string") {
      window.scrollTo(0,(document.getElementById(`${chosenId}-container`)?.offsetTop as number) - (navbarHeight - 50));
    }

    if(el.tagName == "H1" && collapseSide.current) collapseSide.current.checked = false

    setChoices((prev) =>
      prev.map((v: TChoices) => ({
        title: v.title,
        id: v.id,
        selected: chosenId == v.id,
      }))
    )

  }, []);

  const toggleSideBar = useCallback(() => {
    collapseSide.current && (collapseSide.current.checked = !collapseSide.current.checked)
  }, [])

  return (
    <div id="main" className="bg-violet-50 dark:bg-[#191819] relative">
      <Navbar ui={ui} setUi={setUi} toggleSideBar={toggleSideBar} choices={choices} setChoices={setChoices} changeActive={changeActive} />
      <About ui={ui} />
      <Skills ui={ui} />
      <Projects ui={ui} />
      <Contact ui={ui} />
      <Sidebar toggleSideBar={toggleSideBar} ref={collapseSide} changeActive={changeActive} choices={choices} />
    </div>
  );
};

export default App;
