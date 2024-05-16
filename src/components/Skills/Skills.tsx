import { memo } from "react"
import type { TSkillsProps } from "./Skills.types"
import AboutBGLightTop from "/light-bg-top.png" 
import AboutBGDarkTop from "/dark-bg-top.png"

const Skills = ({ ui }: TSkillsProps) => {
    return (
    <div id="skills-container" className={`relative max-w-[2048px] mx-auto h-[88vh] p-5`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightTop} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkTop} />

      <h1 className="relative text-center dark:text-white text-slate-900 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">SKILLS</h1>

    </div>
    )
  }
  
  export default memo(Skills)