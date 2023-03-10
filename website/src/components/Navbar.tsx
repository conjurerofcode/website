import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import { motion } from "framer-motion";
import squiggles from "../assets/texture-squiggle.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Navbar() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const size = getWindowDimensions();

  return windowDimensions.width >= 500 ? (
    <div className="fixed z-50 sm:w-full w-screen h-[5vh] top-0 flex flex-row items-center justify-center shadow-inner-bottom group backdrop-blur-sm bg-white/1 ">
      <h1 className="absolute left-0 m-5 text-4xl bg-transparent    duration-300 ">
        Michael Moore
        <p className="absolute -bottom-[75%] sm:w-[20vw] w-full left-0 sm:text-lg text-sm text-[#fb9870] text-glow-none">
          ...but not <em>that</em> Michael Moore.
        </p>
      </h1>

      <>
        <Link
          className={`${
            location.pathname == "/" ? "underline" : ""
          } mx-5 text-white hover:text-white `}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname == "/portfolio" ? "underline" : ""
          } mx-5 text-white text-md   hover:text-white`}
          to="/portfolio"
        >
          My Work
        </Link>

        <Link
          className={`${
            location.pathname == "/about" ? "underline" : ""
          } mx-5 text-white hover:text-white `}
          to="/about"
        >
          My Life
        </Link>
      </>
    </div>
  ) : (
    <div className="fixed z-50 sm:w-full w-screen h-[9vh] top-0 flex flex-row items-center justify-center shadow-inner-bottom group backdrop-blur-sm bg-white/1 ">
      <h1 className="absolute left-0 top-2 mx-5 text-4xl bg-transparent    duration-300 ">
        Michael Moore
        <p className="absolute -bottom-[55%] sm:w-[20vw] w-full left-0 sm:text-lg text-sm text-[#fb9870] text-glow-none">
          ...but not <em>that</em> Michael Moore.
        </p>
      </h1>
      <button
        className="fixed right-0 mx-5 h-[30px] w-[30px]"
        onClick={() => setShowNav((prev) => !prev)}
        style={{
          backgroundImage: `url(${hamburger})`,
          backgroundSize: "contain",
          backgroundRepeat: "none",
        }}
      ></button>
      <motion.div
        className="absolute rounded-b-lg bg-secondary text-xl h-[15vh]  w-1/4 right-0 top-[9vh] flex flex-col  justify-start items-start"
        animate={showNav ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, scaleY: 0, translateY: -50 },
          visible: { scaleX: 1 },
        }}
      >
        <Link
          onClick={() => setShowNav((prev) => !prev)}
          className={`mx-5 py-1 text-white`}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setShowNav((prev) => !prev)}
          className={`mx-5 py-1 text-white    hover:text-white`}
          to="/portfolio"
        >
          My Work
        </Link>

        <Link
          className={`mx-5 py-1 text-white hover:text-white `}
          to="/about"
          onClick={() => setShowNav((prev) => !prev)}
        >
          My Life
        </Link>
      </motion.div>
    </div>
  );
}

export default Navbar;
