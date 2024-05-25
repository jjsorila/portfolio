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


      <div className="relative min-h-[300px] w-[500px] rounded-lg dark:bg-neutral-800 dark:shadow-cyan-400 shadow-lg grid grid-cols-1 divide-double divide-y-8 px-16">
        <div className="h-full w-full flex justify-center items-center">
          <a className="dark:text-white text-4xl font-bold min-[1200px]:tracking-wide cursor-pointer transition-all dark:hover:text-cyan-400 underline decoration-solid underline-offset-8" href="mailto:jjsorila@gmail.com">VIA EMAIL</a>
        </div>
        <div className="h-full w-full flex justify-evenly items-center">

          <FaFacebook className="dark:text-neutral-800 outline outline-2 dark:outline-white outline-offset-2 dark:bg-white hover:text-[#0866FF] hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://www.facebook.com/dklrjgrg"), [])} />

          <FaGithub className="dark:text-white outline outline-2 dark:outline-white outline-offset-2 dark:bg-neutral-800 hover:text-neutral-800 hover:bg-white hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://github.com/jjsorila"), [])} />

          <TfiLinkedin className="dark:text-white outline outline-2 dark:outline-white outline-offset-2 dark:bg-neutral-800 hover:bg-[#0077B5] hover:text-white hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://www.linkedin.com/in/john-jhovir-sorila-447545229/"), [])} />

        </div>
      </div>

    </div>
  )
}

export default memo(Contact)