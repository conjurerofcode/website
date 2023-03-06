import { useState } from "react";
import work from "../assets/work.jpg"; // Photo by Andrew Neel on Unsplash
import play from "../assets/play.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlurImage from "./BlurImage";

function Home() {
  const work64 = import.meta.env.VITE_WORK_64;
  const play64 = import.meta.env.VITE_PLAY_64;
  return (
    <motion.div
      initial={{ translateY: -20 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 300 }}
      className="flex sm:h-screen sm:w-screen w-screen h-[90vh] bg-slate-800 sm:flex-row flex-col z-10 overflow"
    >
      <div className="block-left group">
        <Link to={"/portfolio"}>
          <div className="inner-left items-center bg-cover bg-bottom transform sm:hover:translate-x-10 hover:-translate-x-10 hover:shadow-none shadow-inner-large transition-all hover:duration-300 duration-300">
            <BlurImage src={work} base64={work64}></BlurImage>
            <h3 className="fixed left-[35%] top-[40%] w-[12%] font-catamaran text-5xl text-shadow after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 group-hover:after:w-[100%] duration-300 after:duration-300">
              My Work
            </h3>
          </div>
        </Link>
      </div>
      <div className="block-right group">
        <Link to={"/about"}>
          <button className="inner-right transform hover:translate-x-10 hover:shadow-none shadow-inner-large hover:duration-300 duration-300">
            <BlurImage src={play} base64={play64}></BlurImage>
            <h3 className="fixed left-[45%] top-[50%] w-[12%] font-catamaran text-5xl text-shadow after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 group-hover:after:w-[100%] duration-300 after:duration-300">
              My Life
            </h3>
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;

// for later
//fixed  transform sm:w-[200%] sm:h-[200%] sm:-translate-x-[75%] sm:-rotate-45 rotate-45 w-[150%] h-[150%] -translate-x-[15%] bg-slate-700 overflow-hidden
//fixed transform sm:w-[200%] sm:h-[200%] sm:-translate-x-[5%] sm:-rotate-45 rotate-45 w-[150%] h-[150%] translate-x-[15%] bg-slate-600 overflow-hidden
//  after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 hover:after:w-[100%] duration-300 after:duration-300
