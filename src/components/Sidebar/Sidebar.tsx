import { memo, Fragment, forwardRef, useMemo } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { TSidebarProps } from "./Sidebar.types";

const Sidebar = forwardRef<HTMLInputElement, TSidebarProps>(({ toggleSideBar, choices, changeActive }, collapseSide) => {
    return (
      <Fragment>
        <input type="checkbox" className="peer hidden" ref={collapseSide} />
        <div className="fixed z-[101] top-0 -left-[100%] peer-checked:left-0 bottom-0 w-full bg-neutral-800/80 transition-all duration-500 flex justify-center items-center p-4 min-[1000px]:hidden">
          <div className="bg-neutral-800 h-full min-w-[350px] overflow-auto rounded-lg border-2 border-cyan-400 relative py-8 px-12">
            <div className="grid grid-cols-1 text-white">
              <h1 className="relative font-bold h-fit w-full text-white text-3xl text-start py-4 border-b-2">
                JJ.S
                <IoMdCloseCircle
                  className="font-normal absolute -top-[20px] -right-[35px] z-10 cursor-pointer"
                  onClick={toggleSideBar}
                />
              </h1>

              {useMemo(() => {
                return choices.map((v, i) => (
                <h1 
                    data-id={v.id}
                    className={`relative font-medium h-fit text-xl sidenav ${v.selected ? "active-sidenav" : ""} flex items-center justify-start ${i == 0 ? "mt-8" : "mt-12"} py-4`} 
                    key={i}
                    onClick={changeActive}
                >
                    <i className={`${v.icon} transition-all duration-100 hover:text-cyan-400 mr-5`}></i>
                    {v.title}
                </h1>
                ))
              }, [choices])}
  
              {/* <h1 className="relative font-medium h-fit text-xl sidenav flex items-center justify-start mt-8 py-4">
                <i className="fa-solid fa-address-card transition-all duration-100 hover:text-cyan-400 mr-5"></i>
                ABOUT
              </h1>
  
              <h1 className="relative font-medium h-fit text-xl sidenav active-sidenav flex items-center justify-start mt-12 py-4">
                <i className="fa-solid fa-computer transition-all duration-100 hover:text-cyan-400 mr-5"></i>
                SKILLS
              </h1>
  
              <h1 className="relative font-medium h-fit text-xl sidenav flex items-center justify-start mt-12 py-4">
                <i className="fa-solid fa-boxes-stacked transition-all duration-100 hover:text-cyan-400 mr-5"></i>
                PROJECTS
              </h1>
  
              <h1 className="relative font-medium h-fit text-xl sidenav flex items-center justify-start mt-12 py-4">
                <i className="fa-solid fa-address-book transition-all duration-100 hover:text-cyan-400 mr-5"></i>
                CONTACT
              </h1> */}

            </div>
          </div>
        </div>
      </Fragment>
    );
  })

export default memo(Sidebar);
