import { memo, useMemo } from "react";
import type { TSkillsProps, TCardsProps } from "./Skills.types";
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
import Cards from "src/components/Skills/Cards";

const SkillCards: Array<TCardsProps> = [
  {
    content: [{
      img: PhpIcon,
      zIndex: 1,
      position: "left-0"
    }],
    percentage: "40%"
  },
  {
    content: [{
      img: VbIcon,
      zIndex: 1,
      position: "left-0"
    }],
    percentage: "45%"
  },
  {
    content: [{
      img: JavaIcon,
      zIndex: 1,
      position: "left-0"
    }],
    percentage: "43%"
  },
  {
    content: [{
      img: CsharpIcon,
      zIndex: 1,
      position: "left-0"
    }],
    percentage: "41%"
  },
  {
    content: [
      {
        img: MysqlIcon,
        zIndex: 2,
        position: "left-0"
      },
      {
        img: MongoIcon,
        zIndex: 1,
        position: "-left-[10px]"
      }
    ],
    percentage: "52%"
  },
  {
    content: [
      {
        img: ReactIcon,
        zIndex: 3,
        position: "left-0"
      },
      {
        img: ExpressIcon,
        zIndex: 2,
        position: "-left-[10px]"
      },
      {
        img: FasifyIcon,
        zIndex: 1,
        position: "-left-[20px]"
      }
    ],
    percentage: "57%"
  },
  {
    content: [
      {
        img: HtmlIcon,
        zIndex: 3,
        position: "left-0"
      },
      {
        img: CssIcon,
        zIndex: 2,
        position: "-left-[10px]"
      },
      {
        img: JsIcon,
        zIndex: 1,
        position: "-left-[20px]"
      }
    ],
    percentage: "60%"
  }
]

const Skills = ({ ui }: TSkillsProps) => {
  return (
    <div
      id="skills-container"
      className={`section relative max-w-[1600px] mx-auto min-h-[900px] pt-40 pb-20 px-5 min-[1200px]:px-14 min-[1400px]:px-32 min-[1600px]:px-60 flex flex-col justify-end min-[1400px]:justify-start transition-all duration-300`}
    >
      <img
        className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${
          ui ? "opacity-100" : "opacity-0"
        }`}
        src={AboutBGLightTop}
      />
      <img
        className={`z-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 w-full h-full ${
          ui ? "opacity-0" : "opacity-100"
        }`}
        src={AboutBGDarkTop}
      />

      <div className="relative flex flex-wrap-reverse gap-8 lg:gap-16">

        {useMemo(() => {
          return SkillCards.map((props, index) => (
            <Cards key={index} content={props.content} percentage={props.percentage} />
          ))
        }, [])}

      </div>

    </div>
  );
};

export default memo(Skills);
