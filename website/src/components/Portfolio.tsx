import { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

function Portfolio() {
  const ex = ["Typescript", "React", "Tailwind"];
  const ex2 = ["Python", "Conv. Neural Netwrk", "Jupyter", "Matplot"];
  return (
    <div className=" h-full min-h-screen w-screen bg-slate-800 overflow-hidden pt-[100px] flex flex-col items-center p-5 ">
      <Card title={"This Website"} data={ex} />
      <Card title={"Malaria Analysis"} data={ex2} />
      <Card title={"This Website"} data={ex} />
      <Card title={"This Website"} data={ex} />
      <Card title={"This Website"} data={ex} />
      <Card title={"This Website"} data={ex} />
      <Card title={"This Website"} data={ex} />
    </div>
  );
}

export default Portfolio;
