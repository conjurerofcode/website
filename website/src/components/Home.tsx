import { useState } from "react";
import work from "../assets/work.jpg"; // Photo by Andrew Neel on Unsplash
import play from "../assets/play.jpg";
import grid from "../assets/texture-grid.png";
import geo from "../assets/texture-geo.png";
import grain from "../assets/texture-1.png";
import squares from "../assets/texture-cubes.png";
import squiggles from "../assets/texture-squiggle.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlurImage from "./BlurImage";

function Home() {
  const work64 = import.meta.env.VITE_WORK_64;
  const play64 = import.meta.env.VITE_PLAY_64;
  const same = `transform duration-300  sm:h-[50vh] sm:w-[45vw] h-[30vh] w-[80vw] m-10 rounded-lg drop-shadow-2xl`;
  const [bg, setBg] = useState<string>(grain);

  return (
    <motion.div className="relative w-screen h-screen overflow-hidden flex sm:flex-row flex-col justify-center items-center">
      <div
        className="absolute top-0 left-0 h-[100%] w-[100%] transform scale-1.3 duration-300 animate-pan"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}
      ></div>
      <div
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
      </div>
    </motion.div>
  );
}

export default Home;

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
