import { useLayoutEffect, useState } from "react";
import { About, Navbar, Projects, Contact, Skills } from "src/components";

const App = () => {
  const [ui, setUi] = useState<boolean>(JSON.parse(localStorage.getItem("ui") ?? "false"));

  useLayoutEffect(() => {
    !document.querySelector("html")?.classList.contains("scroll-smooth") ? document.querySelector("html")?.classList.add("scroll-smooth") : null

    !ui ? document.querySelector("html")?.classList.add("dark") : document.querySelector("html")?.classList.remove("dark");
  }, [ui]);

  return (
    <div id="main" className="bg-violet-50 dark:bg-slate-900">
      <Navbar ui={ui} setUi={setUi} />
      <About ui={ui} />
      <Skills ui={ui} />
      <Projects ui={ui} />
      <Contact ui={ui} />
    </div>
  );
};

export default App;
