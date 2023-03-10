import { useEffect, useState } from "react";
import work from "../assets/work.jpg"; // Photo by Andrew Neel on Unsplash
import play from "../assets/play.jpg";
import grid from "../assets/texture-grid.png";
import geo from "../assets/texture-geo.png";
import grain from "../assets/texture-1.png";
import squares from "../assets/texture-cubes.png";

import selfie from "../assets/selfie.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlurImage from "./BlurImage";

function Home() {
  const work64 = import.meta.env.VITE_WORK_64;
  const play64 = import.meta.env.VITE_PLAY_64;
  const selfie64 = import.meta.env.VITE_SELFIE_64;

  const same = `transform duration-300  sm:h-[50vh] sm:w-[45vw] h-[30vh] w-[80vw] m-10 rounded-lg `;
  const [bg, setBg] = useState<string>(grain);

  // const [index, setIndex] = useState(0)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //       setIndex(index + 1)
  //     }, 5000)

  //   return (() => clearInterval(interval)) //This is a cleanup function
  // })

  return (
    <motion.div className="sm:pt-10 pt-[20vh] relative w-screen sm:h-screen h-full overflow-hidden flex sm:flex-row flex-col justify-start px-20 items-center">
      <div className="relative  overflow-hidden fade-right rounded-lg mx-10 sm:w-1/2 w-[80vw]">
        <BlurImage src={selfie} base64={selfie64} />
      </div>

      <motion.div
        className=" h-2/3 sm:w-1/2 w-[80vw] bg-secondary rounded-lg p-10  m-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
      >
        <h1 className="text-3xl ">Hey, welcome.</h1>
        <p>
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
          mauris nunc. Enim nunc faucibus a pellentesque sit. Arcu dui vivamus
          arcu felis bibendum ut tristique et. Id cursus metus aliquam eleifend.
          Euismod lacinia at quis risus. Felis imperdiet proin fermentum leo vel
          orci porta. In fermentum posuere urna nec tincidunt. Turpis egestas
          sed tempus urna et pharetra pharetra massa. Non consectetur a erat nam
          at lectus.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Home;
// , שלום, 你好, Hola
{
  /* <div
        className="absolute top-0 left-0 h-[100%] w-[100%] transform scale-1.3 duration-300 animate-pan"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}
      ></div> */
}

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
