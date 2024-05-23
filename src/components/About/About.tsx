import { memo ,forwardRef } from "react"
import type { TAboutProps } from "./About.types"
import AboutBGLightBot from "/light-bg-bottom.png"
import AboutBGDarkBot from "/dark-bg-bottom.png"
import AboutMan from "/images/about_man.svg"
import { TypeAnimation } from 'react-type-animation';

const About = forwardRef(({ ui }: TAboutProps, contactRef: HTMLLIElement | any) => {
  return (
    <div id="about-container" className={`section relative max-w-[2048px] mx-auto h-[800px] flex justify-between max-[1280px]:justify-center py-5 px-5 min-[1280px]:px-[8rem]`}>
      <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-100" : "opacity-0"}`} 
      src={AboutBGLightBot} />
      <img className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${ui ? "opacity-0" : "opacity-100"}`} 
      src={AboutBGDarkBot} />

      <div className="w-6/12 relative flex max-[1280px]:grow flex-col justify-center gap-5 h-[500px]">
        <h1 className="dark:text-white text-black text-xl max-[1280px]:text-center font-medium">HELLO, I'M JJ SORILA</h1>
        <TypeAnimation
          sequence={[
            ' 40% PROGRAMMER',
            1000,
            ' 30% FLEXIBLE WORKER',
            1000,
            ' 20% GAMER',
            1000,
            ' 10% FOR YOU TO DISCOVER',
            1000
          ]}
          wrapper="h1"
          speed={50}
          className="text-4xl font-extrabold dark:text-white text-black max-[1280px]:text-center"
          repeat={Infinity}
        />
        <h1 className="dark:text-white text-black text-xl text-justify max-[1280px]:text-center leading-relaxed">
          As a recent IT graduate, I'm eager to apply my academic knowledge to real-world tech challenges, contribute to a dynamic team, and stay updated on the latest technologies in the field.
        </h1>
        <button onClick={() => contactRef.current?.click()} className="dark:bg-neutral-900 dark:text-cyan-400 border dark:border-cyan-400 bg-violet-950 text-white border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="dark:bg-cyan-400 dark:shadow-cyan-400 bg-violet-400 shadow-violet-400 absolute top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          HIRE ME
        </button>
      </div>

      {/* <div className="w-6/12 relative h-[720px] flex justify-end max-[1280px]:hidden">
        <img className="block relative w-[500px] h-[500px] animate-glow-light dark:animate-glow-dark" src={AboutMan} />
      </div> */}
      <img className="block relative w-[500px] h-[500px] animate-glow-light dark:animate-glow-dark max-[1280px]:hidden" src={AboutMan} />

    </div>
  )
})

export default memo(About)