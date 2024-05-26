import { memo, useCallback } from "react"
import type { TContactProps } from "./Contact.types"
import AboutBGLightTop from "/light-bg-top.png" 
import AboutBGDarkTop from "/dark-bg-top.png"
import AvatarDark from "/images/jjs-dark-circle.png"
import AvatarLight from "/images/jjs-light-circle.png"
import AvatarBG from "/images/avatarBg.svg"
import { FaFacebook, FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

const Contact = ({ ui }: TContactProps) => {
  const mailTo = useCallback(() => {
    location.href = "mailto:jjsorila@gmail.com"
  }, [])

  return (
    <div id="contact-container" className={`section relative max-w-[1600px] mx-auto min-h-[800px] pt-32 pb-16 px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60 flex justify-center items-center`}>
      <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-100" : "opacity-0"}`} 
      src={AboutBGLightTop} />
      <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-0" : "opacity-100"}`} 
      src={AboutBGDarkTop} />

      <div className="relative w-[500px] h-[500px] flex flex-col items-center rounded-[20px] overflow-hidden dark:bg-neutral-800 shadow-lg dark:shadow-cyan-400 bg-white shadow-violet-700">
        <div className="w-full h-[192px]" >
          <img src={AvatarBG} className="w-full h-full" />
        </div>
        <div className="absolute overflow-hidden w-[150px] h-[150px] bg-neutral-800 rounded-full flex justify-center items-center top-[115px] outline outline-8 outline-black dark:outline-white outline-offset-2 cursor-pointer hover:outline-offset-8 transition-all duration-300" onClick={mailTo}>
          <img src={!ui ? AvatarLight : AvatarDark} className="w-full h-full" />
        </div>
        <div className="dark:text-white text-black mt-28 font-medium text-2xl">John Jhovir A. Sorila</div>
        <div className="mt-[10px] font-normal text-lg dark:text-white text-black">Web Developer</div>
        <div className="flex w-full justify-evenly mt-10">
          <FaFacebook className="dark:text-neutral-800 outline outline-4 dark:outline-white outline-black outline-offset-2 dark:bg-white hover:text-[#0866FF] hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://www.facebook.com/dklrjgrg"), [])} />

          <FaGithub className="text-neutral-800 outline outline-4 dark:outline-white outline-black outline-offset-2 bg-white hover:text-white hover:bg-neutral-800 hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://github.com/jjsorila"), [])} />

          <TfiLinkedin className="text-white outline outline-4 dark:outline-white outline-black outline-offset-2 bg-neutral-800 hover:bg-[#0077B5] hover:text-white hover:outline-offset-8 rounded-full cursor-pointer h-[40px] w-[40px] transition-all duration-100" onClick={useCallback(() => window.open("https://www.linkedin.com/in/john-jhovir-sorila-447545229/"), [])} />
        </div>
    </div>

    </div>
  )
}

export default memo(Contact)