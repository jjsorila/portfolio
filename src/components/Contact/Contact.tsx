import { memo, useCallback } from "react"
import type { TContactProps } from "./Contact.types"
import AboutBGLightTop from "/light-bg-top.png" 
import AboutBGDarkTop from "/dark-bg-top.png"
import { FaFacebook, FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

const Contact = ({ ui }: TContactProps) => {

  return (
    <div id="contact-container" className={`section relative max-w-[1600px] mx-auto min-h-[800px] pt-32 px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60 flex justify-center items-center`}>
      <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-100" : "opacity-0"}`} 
      src={AboutBGLightTop} />
      <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-0" : "opacity-100"}`} 
      src={AboutBGDarkTop} />

      <div className="relative min-h-[300px] w-[500px] rounded-lg dark:bg-neutral-800 dark:shadow-cyan-400 shadow-violet-700 shadow-lg grid grid-cols-1 divide divide-y-4 px-16 dark:divide-white divide-violet-700">

        <div className="h-full w-full flex justify-center items-center max-[600px]:py-12">

          <a href="mailto:jjsorila@gmail.com" className="dark:bg-neutral-900 dark:text-cyan-400 border dark:border-cyan-400 bg-violet-950 text-white border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-fit max-[1200px]:mx-auto">
            <span className="dark:bg-cyan-400 dark:shadow-cyan-400 bg-violet-400 shadow-violet-400 absolute top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            REACH OUT VIA EMAIL
          </a>

        </div>
        <div className="h-full w-full flex justify-evenly items-center max-[600px]:flex-col max-[600px]:py-12 max-[600px]:gap-12">

          <FaFacebook className="dark:text-neutral-800 outline outline-4 dark:outline-white outline-violet-700 outline-offset-2 dark:bg-white hover:text-[#0866FF] hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://www.facebook.com/dklrjgrg"), [])} />

          <FaGithub className="text-neutral-800 outline outline-4 dark:outline-white outline-violet-700 outline-offset-2 bg-white hover:text-white hover:bg-neutral-800 hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://github.com/jjsorila"), [])} />

          <TfiLinkedin className="text-white outline outline-4 dark:outline-white outline-violet-700 outline-offset-2 bg-neutral-800 hover:bg-[#0077B5] hover:text-white hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://www.linkedin.com/in/john-jhovir-sorila-447545229/"), [])} />

        </div>
      </div>

    </div>
  )
}

export default memo(Contact)