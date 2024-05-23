import { memo } from "react";
import { motion } from "framer-motion";
import type { TSkillsProps } from "./Skills.types";
import AboutBGLightTop from "/light-bg-top.png";
import AboutBGDarkTop from "/dark-bg-top.png";
import HtmlIcon from "/images/html.svg"
import CssIcon from "/images/css.svg"
import JsIcon from "/images/js.svg"
import ExpressIcon from "/images/express.svg"
import FasifyIcon from "/images/fastify.svg"
import JavaIcon from "/images/java.svg"
import CsharpIcon from "/images/csharp.svg"
import ReactIcon from "/images/react.svg"
import VbIcon from "/images/vb.svg"
import PhpIcon from "/images/php.svg"
import MysqlIcon from "/images/mysql.svg"
import MongoIcon from "/images/mongodb.svg"

const Skills = ({ ui }: TSkillsProps) => {
  return (
    <div
      id="skills-container"
      className={`section relative max-w-[2048px] mx-auto h-[900px] pt-[6rem] pb-1 px-5 min-[1280px]:px-[8rem] flex flex-col justify-end`}
    >
      <img
        className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${
          ui ? "opacity-100" : "opacity-0"
        }`}
        src={AboutBGLightTop}
      />
      <img
        className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-[100%] h-[100%] ${
          ui ? "opacity-0" : "opacity-100"
        }`}
        src={AboutBGDarkTop}
      />

      <div className="relative flex flex-wrap-reverse gap-4 lg:gap-16">

        {/* PHP */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-white relative z-[3] outline outline-neutral-800" src={PhpIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-full rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "45%" }}
                transition={{ duration: 1 }}
              >
                <span className="text-md dark:text-black font-bold">
                45%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* VB.NET */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-white relative z-[3] outline outline-neutral-800" src={VbIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-full rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "48%" }}
                transition={{ duration: 1 }}
              >
                <span className="text-md dark:text-black font-bold">
                48%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* JAVA */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-white relative z-[3] outline outline-neutral-800" src={JavaIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-full rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "37%" }}
                transition={{ duration: 1 }}
              >
                <span className="text-md dark:text-black font-bold">
                37%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* C# */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-white relative z-[3] outline outline-neutral-800" src={CsharpIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-full rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 1 }}
              >
                <span className="text-md dark:text-black font-bold">
                40%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* MONGODB */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-white p-1 relative z-[2] outline outline-neutral-800" src={MysqlIcon} />
            <img className="block w-[40px] h-[40px] rounded-full bg-white relative z-[1] left-[-10px] outline outline-neutral-800" src={MongoIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-full rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "49%" }}
                transition={{ duration: 1 }}
              >
                <span className="text-md dark:text-black font-bold">
                46%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* REACTJS/EXPRESSJS/FASTIFY */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-white p-1 relative z-[3] outline outline-neutral-800" src={ReactIcon} />
            <img className="block w-[40px] h-[40px] rounded-full bg-white p-1 relative left-[-10px] z-[2] outline outline-neutral-800" src={ExpressIcon} />
            <img className="block w-[40px] h-[40px] rounded-full bg-white p-1 relative left-[-20px] z-[1] outline outline-neutral-800" src={FasifyIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-4 rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "51%" }}
                transition={{ duration: 1 }}
              >
              <span className="text-md dark:text-black font-bold">
                51%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* HTML/CSS/JS */}
        <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg shadow-cyan-400 rounded-lg overflow-hidden grow basis-[500px] md:shrink-0">
          <div className="p-5 flex justify-center items-center">
            <img className="block w-[40px] h-[40px] rounded-full bg-[#E34F26] relative z-[3] outline outline-neutral-800" src={HtmlIcon} />
            <img className="block w-[40px] h-[40px] rounded-full bg-[#1172B8] relative left-[-10px] z-[2] outline outline-neutral-800" src={CssIcon} />
            <img className="block w-[40px] h-[40px] rounded-full bg-[#F5DE19] relative left-[-20px] z-[1] outline outline-neutral-800" src={JsIcon} />
          </div>
          <div className="px-5 pb-5">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
              <motion.div
                className="dark:bg-cyan-400 h-4 rounded-full flex justify-end items-center pr-2"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 1 }}
              >
              <span className="text-md dark:text-black font-bold">
                60%
              </span>
              </motion.div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default memo(Skills);
