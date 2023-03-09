import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import texture from "../assets/texture-1.png";
import BlurImage from "./BlurImage";

interface CardProps {
  title: string;
  data: string[];
  link?: string;
  description?: string;
  image?: {
    src: string;
    base64: string;
  };
}

function Card({ props }: { props: CardProps }) {
  const title = props.title;
  const count = props.data.length;
  let link = undefined;
  let description = undefined;
  let img = "";
  let base = "";

  if (props.image) {
    img = props.image.src;
    base = props.image.base64;
  }
  if (props.link) link = props.link;
  if (props.description) description = props.description;

  return (
    // TODO - Stagger odd cards maybe?
    <motion.div
      className="relative h-1/3 min-h-[33vh]  sm:w-2/3 w-full bg-slate-500 rounded-lg m-5 flex flex-row items-center justify-evenly group text-center transform"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ delay: 0.15 }}
      style={{ backgroundImage: `url(${texture})`, backgroundRepeat: "repeat" }}
    >
      <div className="m-2 h-full min-h-[30vh] sm:max-h-[20vh] w-[48%] bg-slate-400 rounded-lg duration-300 group-hover:translate-x-[105%] flex flex-row items-center justify-center ">
        {props.image && <BlurImage src={img} base64={base} isCard={true} />}
        <h1 className="absolute sm:text-5xl text-3xl text-shadow">{title}</h1>
      </div>
      <div className="flex flex-col gap-y-10 p-5 sm:text-2xl text-lg transition-all duration-300  opacity-0 absolute m-2 h-[85%] min-h-[30vh] w-[48%] bg-slate-400 rounded-lg group-hover:block group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 -translate-x-[50%] group-hover:translate-x-0 left-2 top-2 items-center justify-center">
        {link && (
          <a
            className="m-3 absolute bottom-5 left-[32%] duration-300 underline-animation"
            href={link}
          >
            Link to Project
          </a>
        )}
        {description && <p className="text-lg m-5">{description}</p>}
      </div>
      <div className="flex justify-center items-center  m-2 rounded-lg h-[95%] min-h-[30vh] w-[48%] bg-slate-400 opacity-100 duration-300 group-hover:opacity-0 group-hover:scale-x-0 group-hover:translate-x-[50%] ">
        {props.data.map((lang, idx) => {
          const isEven = idx % 2 == 0;
          const offset = isEven ? "mt-10" : "mb-10";

          return (
            <motion.div
              viewport={{ once: true }}
              className={` bg-slate-700 transform ${offset} min-h-[5vh] min-w-[7vw] items-center text-center sm:text-2xl text-md justify-center flex m-1 rounded-lg `}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { rotate: 45, translateY: -100, scale: 0.2 },
                visible: { rotate: 0, translateY: 0, scale: 1 },
              }}
              transition={{ delay: 0.15 + idx * 0.05 }}
              key={idx}
            >
              {lang}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Card;
