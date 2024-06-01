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
import LaravelIcon from "/images/laravel.svg"
import Cards from "src/components/Skills/Cards";

const SkillCards: Array<TCardsProps> = [
  {
    content: [{
      img: PhpIcon,
      position: "left-0",
      alt: "PHP"
    },
    {
      img: LaravelIcon,
      position: "-left-[5px]",
      alt: "Laravel"
    }],
    percentage: "55%"
  },
  {
    content: [{
      img: VbIcon,
      position: "left-0",
      alt: "Visual Basic"
    }],
    percentage: "45%"
  },
  {
    content: [{
      img: JavaIcon,
      position: "left-0",
      alt: "Java"
    }],
    percentage: "43%"
  },
  {
    content: [{
      img: CsharpIcon,
      position: "left-0",
      alt: "C#"
    }],
    percentage: "41%"
  },
  {
    content: [
      {
        img: MysqlIcon,
        position: "left-0",
        alt: "MySQL"
      },
      {
        img: MongoIcon,
        position: "-left-[5px]",
        alt: "MongoDB"
      }
    ],
    percentage: "52%"
  },
  {
    content: [
      {
        img: ReactIcon,
        position: "left-0",
        alt: "ReactJS"
      },
      {
        img: ExpressIcon,
        position: "-left-[5px]",
        alt: "ExpressJS"
      },
      {
        img: FasifyIcon,
        position: "-left-[10px]",
        alt: "Fastify"
      }
    ],
    percentage: "57%"
  },
  {
    content: [
      {
        img: HtmlIcon,
        position: "left-0",
        alt: "HTML"
      },
      {
        img: CssIcon,
        position: "-left-[5px]",
        alt: "CSS"
      },
      {
        img: JsIcon,
        position: "-left-[10px]",
        alt: "JavaScript"
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
