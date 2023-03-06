import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import humanNews from "../assets/human-news.png";
import siteSrc from "../assets/personal-site.png";
import malaria from "../assets/malaria1.png";
import Card from "./Card";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" h-full min-h-screen w-screen bg-slate-800  pt-[10vh] flex flex-col items-center p-5 stagger-children">
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
    title: "This Website",
    data: ["Typescript", "React", "Tailwind"],
    description:
      "My personal website and portfolio portal made with Typescript, React, Vite, Tailwind, & Framer Motion.",
    image: {
      src: siteSrc,
      base64: import.meta.env.VITE_SITE_64,
    },
  },
  {
    title: "Malaria Detection",
    data: ["Python", "Conv. Neural Netwrk", "Jupyter", "Matplot"],
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
];
