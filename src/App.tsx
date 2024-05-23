import { useLayoutEffect, useState, useRef } from "react";
import { About, Navbar, Projects, Contact, Skills } from "src/components";

const App = () => {
  const contactRef = useRef<HTMLLabelElement | any>()
  const [ui, setUi] = useState<boolean>(JSON.parse(localStorage.getItem("ui") ?? "false"));

  useLayoutEffect(() => {
    document.querySelector("html")?.classList.toggle("dark", !ui)
  }, [ui]);

  return (
    <div id="main" className="bg-violet-50 dark:dark-mode">
      <Navbar ui={ui} setUi={setUi} ref={contactRef} />
      <About ui={ui} ref={contactRef} />
      <Skills ui={ui} />
      <Projects ui={ui} />
      <Contact ui={ui} />
    </div>
  );
};

export default App;
