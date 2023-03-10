import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import humanNews from "../assets/human-news.png";
import grid from "../assets/texture-grid.png";
import concrete from "../assets/texture-concrete.png";
import grain from "../assets/texture-1.png";
import squares from "../assets/texture-cubes.png";
import squiggles from "../assets/texture-squiggle.png";
import wave from "../assets/wave.jpg";
import malaria from "../assets/malaria1.png";
import Card from "./Card";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" relative h-full min-h-screen w-screen bg-primary  grid sm:grid-cols-2 grid-cols-1 auto-rows-min place-items-center sm:gap-[100px] gap-y-10 sm:p-10 pt-[15vh] sm:pt-[15vh]">
      <div
        className="absolute top-0 left-0 h-[100%] w-[100%] transform scale-1 duration-300 animate-pan-small"
        style={{
          backgroundImage: `url(${squiggles})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
      {/* // TODO - Stagger odd cards maybe? */}

      {items.map((item, idx) => (
        <Card key={idx} props={item} />
      ))}
    </div>
  );
}

export default Portfolio;

const items = [
  {
    title: "Malaria Detection",
    data: ["Python", "Conv. Neural Netwrk", "Jupyter Notebook", "Tensorflow"],
    description:
      "Using Python and Convolutional Neural Networks, I trained a model to detect blood cells which were parasitized with Malaria.",
    image: {
      src: malaria,
      base64: import.meta.env.VITE_MALARIA_64,
    },
  },
  {
    title: "Human News",
    data: ["Typescript", "React", "OpenAI", "Vercel"],
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API. The API provides a randomized passage cooked up by OpenAI's davinci-3 Chatbot.",
    image: {
      src: humanNews,
      base64: import.meta.env.VITE_HUMAN_64,
    },
    link: "https://human-news.vercel.app/",
  },
  {
    title: "Human News",
    data: ["Typescript", "React", "OpenAI", "Vercel"],
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API. The API provides a randomized passage cooked up by OpenAI's davinci-3 Chatbot.",
    image: {
      src: humanNews,
      base64: import.meta.env.VITE_HUMAN_64,
    },
    link: "https://human-news.vercel.app/",
  },
  {
    title: "Human News",
    data: ["Typescript", "React", "OpenAI", "Vercel"],
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API. The API provides a randomized passage cooked up by OpenAI's davinci-3 Chatbot.",
    image: {
      src: humanNews,
      base64: import.meta.env.VITE_HUMAN_64,
    },
    link: "https://human-news.vercel.app/",
  },
  {
    title: "Human News",
    data: ["Typescript", "React", "OpenAI", "Vercel"],
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API. The API provides a randomized passage cooked up by OpenAI's davinci-3 Chatbot.",
    image: {
      src: humanNews,
      base64: import.meta.env.VITE_HUMAN_64,
    },
    link: "https://human-news.vercel.app/",
  },
  {
    title: "Human News",
    data: ["Typescript", "React", "OpenAI", "Vercel"],
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API. The API provides a randomized passage cooked up by OpenAI's davinci-3 Chatbot.",
    image: {
      src: humanNews,
      base64: import.meta.env.VITE_HUMAN_64,
    },
    link: "https://human-news.vercel.app/",
  },
];
