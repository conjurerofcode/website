import { useEffect, useState } from "react";

import squiggles from "../assets/texture-squiggle.png";
import selfie from "../assets/selfie.jpg";

import substack from "../assets/icons/substack.png";
import git from "../assets/icons/github.png";
import linked from "../assets/icons/linked.png";
import selfie3 from "../assets/selfie-3.jpg";
import selfie4 from "../assets/selfie-4.jpg";

import { AnimatePresence, motion } from "framer-motion";
import BlurImage from "./BlurImage";

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
const blog = {
  icon: substack,
  url: "https://notthatmichaelmoore.substack.com/",
};
const github = {
  icon: git,
  url: "https://github.com/conjurerofcode",
};
const link = {
  icon: linked,
  url: "https://www.linkedin.com/in/conjurerofcode/",
};

function Home() {
  const bgs = [selfie, selfie3];
  const selfie64 = import.meta.env.VITE_SELFIE_64;
  const icons = [blog, github, link];

  return (
    <motion.div className=" pt-[12vh] relative w-screen sm:h-screen h-full overflow-x-hidden sm:overflow-hidden flex sm:flex-row flex-col justify-start items-center  sm:items-center ">
      <div className="relative  overflow-hidden rounded-xl sm:ml-10 sm:w-1/3 w-full sm:h-[75vh] h-[50vh] ">
        <BlurImage src={selfie4} base64={selfie64} style={""} />
      </div>
      <motion.div
        className=" h-2/3 sm:w-1/2 w-[95vw]  rounded-lg sm:mt-[60vh]  sm:mx-5"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
      >
        <h1 className="sm:text-5xl text-3xl font-bold sm:text-start text-center sm:mt-0 mt-5">
          Hey, I'm Michael.
        </h1>
        <p className="m-0 p-8 sm:p-0 sm:translate-y-0 -translate-y-10">
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          cursus in hac habitasse platea dictumst. Tortor posuere ac ut
          consequat semper viverra nam libero justo. Ipsum nunc aliquet bibendum
          enim facilisis gravida neque. Tellus pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras. Pellentesque pulvinar pellentesque
          habitant morbi tristique senectus et netus et. Adipiscing commodo elit
          at imperdiet. Quis enim lobortis scelerisque fermentum dui faucibus
          in. Fringilla ut morbi tincidunt augue. Cras fermentum odio eu
          feugiat. Dui ut ornare lectus sit amet est placerat in egestas.
          Dignissim convallis aenean et tortor at. Nibh venenatis cras sed felis
          eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque
          viverra. Cursus mattis molestie a iaculis at. Netus et malesuada fames
          ac turpis egestas sed tempus urna. Condimentum lacinia quis vel eros
          donec ac odio tempor. Faucibus nisl tincidunt eget nullam. Vulputate
          mi sit amet mauris commodo quis imperdiet massa tincidunt. Suspendisse
          in est ante in nibh mauris. Sagittis purus sit amet volutpat consequat
          mauris nunc.
        </p>
      </motion.div>
      <div className="absolute  sm:w-[10vw] sm:h-[35vh] sm:left-[80%] sm:top-[15%] w-2/3 h-[2vh] -bottom-10 flex sm:flex-col justify-center items-center">
        {icons.map(({ icon, url }) => {
          return <Icon src={icon} link={url} />;
        })}
      </div>

      <div
        className="absolute top-0 left-0 h-[100%] w-[100%] transform scale-1 duration-300 sm:animate-pan animate-pan-small -z-10"
        style={{
          backgroundImage: `url(${squiggles})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </motion.div>
  );
}

export default Home;

const Icon = ({ src, link }: { src: string; link?: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="h-[5vh] w-[5vh]  m-2 transform duration-300 hover:scale-125 "
      style={{ backgroundImage: `url(${src})`, backgroundSize: "contain" }}
    ></a>
  );
};
// , שלום, 你好, Hola
{
}
// sandy #c9bdae
// Old Tan #a0928a
// Green #636b58
// Old index.css
// .block-left {
//   @apply sm:fixed sm:-left-[30%]  sm:-top-[25%]  bg-slate-700 sm:w-full w-screen sm:h-[110vh] h-1/2 sm:-rotate-45  overflow-hidden transition-all duration-300;
// }
// .block-right {
//   @apply sm:fixed sm:-right-[30%]  sm:-bottom-[25%] bg-slate-500 sm:w-full w-screen sm:h-[110vh] h-1/2 sm:-rotate-45 overflow-hidden transition-all duration-300;
// }
// .inner-left {
//   @apply sm:absolute sm:left-0 sm:top-[25%]   h-full w-full hover:bg-slate-50 sm:rotate-45 bg-contain;
// }
// .inner-right {
//   @apply sm:absolute sm:left-0  sm:-top-[25%]   h-full w-full  hover:bg-slate-50 sm:rotate-45 bg-contain;
// }
{
  /* <div
        className={` ${same} overflow-hidden group `}
        onMouseEnter={() => setBg((prev) => grid)}
        onMouseLeave={() => setBg((prev) => grain)}
      >
        <Link to={"/portfolio"}>
          <button className="items-center relative transform  duration-300 w-full h-full">
            <BlurImage src={work} base64={work64}></BlurImage>
            <h3 className="fixed top-1/3 left-1/3 sm:text-5xl text-3xl text-shadow after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 group-hover:after:w-[100%] duration-300 after:duration-300">
              My Work
            </h3>
          </button>
        </Link>
      </div>
      <div
        className={` ${same} overflow-hidden group `}
        onMouseEnter={() => setBg((prev) => geo)}
        onMouseLeave={() => setBg((prev) => grain)}
      >
        <Link to={"/about"}>
          <button className="items-center relative transform  duration-300 w-full h-full">
            <BlurImage src={play} base64={play64}></BlurImage>
            <h3 className="absolute sm:left-1/2 left-1/2 top-1/3  sm:text-5xl text-3xl text-shadow after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 group-hover:after:w-[100%] duration-300 after:duration-300">
              My Life
            </h3>
          </button>
        </Link>
      </div> */
}
