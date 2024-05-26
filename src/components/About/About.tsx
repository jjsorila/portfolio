import { memo, useCallback } from "react"
import type { TAboutProps } from "./About.types"
import AboutBGLightBot from "/light-bg-bottom.png"
import AboutBGDarkBot from "/dark-bg-bottom.png"
import AboutMan from "/images/about_man.svg"
import { TypeAnimation } from 'react-type-animation';

const About = ({ ui }: TAboutProps) => {
  return (
    <div id="about-container" className={`section transition-all ease-in-out duration-300 relative max-w-[1600px] mx-auto min-h-[800px] flex justify-between max-[1200px]:justify-center pt-16 px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60`}>
      <img className={`z-0 absolute top-0 left-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-100" : "opacity-0"}`} 
      src={AboutBGLightBot} />
      <img className={`z-0 absolute top-0 left-0 transition-opacity duration-500 w-full h-full ${ui ? "opacity-0" : "opacity-100"}`} 
      src={AboutBGDarkBot} />

      <div className="w-6/12 relative flex max-[1200px]:grow flex-col justify-center gap-5 h-[500px] transition-all ease-in-out duration-300">

        <h1 className="transition-all ease-in-out duration-300 dark:text-white text-black text-xl max-[1200px]:text-center font-medium">HELLO, I'M JJ SORILA</h1>
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
          className="text-4xl font-extrabold dark:text-white text-black max-[1200px]:h-20 max-[1200px]:flex max-[1200px]:text-center items-center justify-center"
          repeat={Infinity}
        />

        <h1 className="transition-all ease-in-out duration-300 dark:text-white text-black text-xl text-justify max-[1200px]:text-center leading-relaxed">
          As a recent IT graduate, I'm eager to apply my academic knowledge to real-world tech challenges, contribute to a dynamic team, and stay updated on the latest technologies in the field.
        </h1>

        <button onClick={useCallback(() => window.open("https://drive.google.com/file/d/1ge9vEpAZwGrlMsRF31Pi671VjxF9ZHlH/view?usp=drive_link"), [])} className="dark:bg-neutral-900 dark:text-cyan-400 border dark:border-cyan-400 bg-violet-950 text-white border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-fit max-[1200px]:mx-auto">
          <span className="dark:bg-cyan-400 dark:shadow-cyan-400 bg-violet-400 shadow-violet-400 absolute top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          CURRICULUM VITAE
        </button>
        
      </div>


      <img className="transition-all ease-in-out duration-300 block relative w-[500px] h-[500px] animate-glow-light dark:animate-glow-dark max-[1200px]:hidden" src={AboutMan} />

    </div>
  )
}

export default memo(About)