import { memo } from "react"
import type { TProjectsProps } from "./Projects.types"
import AboutBGLightBot from "/light-bg-bottom.png"
import AboutBGDarkBot from "/dark-bg-bottom.png"

const Projects = ({ ui }: TProjectsProps) => {
  return (
    <div id="projects-container" className={`section relative max-w-[1600px] mx-auto min-h-[900px] px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightBot} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkBot} />

      </div>
  )
}

export default memo(Projects)