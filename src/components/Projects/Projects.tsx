import { memo } from "react"
import type { TProjectsProps } from "./Projects.types"
import AboutBGLightBot from "/light-bg-bottom.png"
import AboutBGDarkBot from "/dark-bg-bottom.png"

const Projects = ({ ui }: TProjectsProps) => {
  return (
    <div id="projects-container" className={`section relative max-w-[2048px] mx-auto h-[800px] p-5`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightBot} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkBot} />

        <h1 className="relative text-center dark:text-white text-neutral-900 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">PROJECTS</h1>

      </div>
  )
}

export default memo(Projects)