import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Components
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import CountUp from "react-countup";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "full Stack -Heapware Company",
        stage: "May-2023 - Cont",
      },
      {
        title: "Wordpress Developer - ShyftDigitally",
        stage: " May-2023 - Dec-2023",
      },
      {
        title: "Wordpres Developer - Digierapro",
        stage: "Jan-2022 - Dec-2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Web Development - Ideoversity",
        stage: "Oct-2022-May-2023",
      },
      {
        title: "Ms Office - Brains College",
        stage: "2015",
      },
      // {
      //   title: "Web Development - Lahore Leads University",
      //   stage: "200",
      // },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-40 overflow-hidden text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[400px]"
      >
        <Avatar />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"
      >
        <div className="flex-1 flex flex-col justify-center ml-0 lg:ml-9">
          <h2 className="h2 line-clamp-2 ">
            About <span className="text-accent">Me</span>
            <br />
          </h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
     I recently completed my BSc from Punjab University and am currently pursuing Software Engineering at Virtual University. I am a skilled and enthusiastic developer who enjoys tackling challenges and resolving them. I previously worked at Arfa Tower in Lahore and now, I am part of its branch at Heapware Software House, working as a frontend developer with a role in UI/UX design. Here, I am involved in various projects, utilizing advanced technologies such as ReactJS and NextJS.
          </motion.p>
          <div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              className="flex flex-1 xl-gap-6"
            >
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={240} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={240} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-10 xl:gap-x-10 mx-auto xl:mx-0 mb-4 mt-0 lg:mt-9">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg z-30 mt-10 relative after:w-8 after:h-[2px] 
        after:bg-white after:absolute after:bottom-0 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <h2>{item.title}</h2>
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md-mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
