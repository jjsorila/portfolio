import { memo } from "react"
import type { TProjectsProps } from "./Projects.types"
import IdSystem from "/images/id.png"
import Opis from "/images/opis.png"
import Piggery from "/images/piggery.png"
import AboutBGLightBot from "/light-bg-bottom.png"
import AboutBGDarkBot from "/dark-bg-bottom.png"

const Projects = ({ ui }: TProjectsProps) => {
  return (
    <div id="projects-container" className={`section relative max-w-[1600px] mx-auto min-h-[900px] px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60 flex justify-center items-center`}>
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
        src={AboutBGLightBot} />
        <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
        src={AboutBGDarkBot} />

        <div className="flex gap-16 lg:gp-16 flex-wrap justify-center relative">

          <div className="relative flex w-80 flex-col rounded-xl text-neutral-950 dark:text-white bg-white dark:bg-neutral-800 bg-clip-border shadow-lg dark:shadow-cyan-400 shadow-violet-700">
            <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={Opis} className="h-full w-full object-cover"/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block text-xl font-semibold text-center leading-snug tracking-normal text-blue-gray-900 antialiased">Online Patient Information System</h5>
              <p className="block text-lg font-light text-center leading-relaxed text-inherit antialiased">School Activity</p>
            </div>
          </div>

          <div className="relative flex w-80 flex-col rounded-xl text-neutral-950 dark:text-white bg-white dark:bg-neutral-800 bg-clip-border shadow-lg dark:shadow-cyan-400 shadow-violet-700">
            <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={Piggery} className="h-full w-full object-cover"/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block text-xl font-semibold text-center leading-snug tracking-normal text-blue-gray-900 antialiased">Transaction Sales Record Management System</h5>
              <p className="block text-lg font-light text-center leading-relaxed text-inherit antialiased">Semi Capstone</p>
            </div>
          </div>

          <div className="relative flex w-80 flex-col rounded-xl text-neutral-950 dark:text-white bg-white dark:bg-neutral-800 bg-clip-border shadow-lg dark:shadow-cyan-400 shadow-violet-700">
            <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img src={IdSystem} className="h-full w-full object-cover"/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block text-xl font-semibold text-center leading-snug tracking-normal text-blue-gray-900 antialiased">School ID System</h5>
              <p className="block text-lg font-light text-center leading-relaxed text-inherit antialiased">Capstone</p>
            </div>
          </div>

        </div>

      </div>
  )
}

export default memo(Projects)