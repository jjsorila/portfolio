import { useMemo, memo } from 'react'
import { motion } from "framer-motion"
import type { TCardsProps } from "./Skills.types"

const Cards = ({ content, percentage }: TCardsProps) => {

  return (
    <div className="mx-auto bg-white dark:bg-neutral-800 shadow-lg dark:shadow-cyan-400 shadow-violet-700 rounded-lg overflow-hidden grow basis-[500px]">
      <div className="p-5 flex justify-center items-center">
        {useMemo(() => {
            return content.map(({ img, position, alt }, index) => (
                <img className={`w-[40px] h-[40px] rounded-full bg-white relative ${position} outline dark:outline-neutral-800 outline-violet-700`} src={img} key={index} alt={alt} />
            ))
        }, [])}
      </div>
      <div className="px-5 pb-5">
        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-5">
          <motion.div
            className="dark:bg-cyan-400 bg-violet-700 overflow-hidden h-4 rounded-full flex justify-end items-center pr-2"
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
          <span className="text-md dark:text-black text-white font-bold">
            {percentage.toString()}
          </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default memo(Cards)