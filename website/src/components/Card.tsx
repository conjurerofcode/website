import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  data: string[];
  link?: string;
}

function Card(props: CardProps) {
  const title = props.title;
  const count = props.data.length;

  return (
    <motion.div
      className=" h-1/3 min-h-[33vh] sm:w-2/3 w-full bg-slate-200 rounded-lg m-5 flex flex-row items-center justify-evenly group text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ delay: 0.15 }}
    >
      <div className="m-2 h-full min-h-[30vh] w-[48%] bg-slate-400 rounded-lg duration-300 group-hover:translate-x-[105%] flex flex-row items-center justify-center">
        <h1 className="sm:text-5xl text-3xl text-shadow">{title}</h1>
      </div>
      <div className="relative m-2 rounded-lg h-[95%] min-h-[30vh] w-[48%] bg-slate-400 opacity-100 duration-300 group-hover:opacity-0 group-hover:-translate-y-10 flex flex-col flex-end items-center align-bottom ">
        {props.data.map((lang, idx) => (
          <motion.div
            viewport={{ once: true }}
            className="absolute bg-slate-700 min-h-[4vh] items-center text-center sm:text-2xl text-md justify-center flex m-1 rounded-lg "
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { rotate: 45, translateY: -100, scale: 0.2 },
              visible: { rotate: 0, translateY: 0, scale: 1 },
            }}
            transition={{ delay: 0.15 + idx * 0.05 }}
            style={{
              width: `${98 / (idx + 1)}%`,
              bottom: `${Math.max(4 * idx, idx * count)}rem`,
              height: `${75 * (1 / count)}%`,
            }}
            key={idx}
          >
            {lang}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Card;
