import { useState } from "react";

function Home() {
  return (
    <div className=" h-screen w-screen bg-slate-800 overflow-hidden pt-[100px]">
      <h2>Home</h2>
      <div className="fixed transform sm:w-[200%] sm:h-[200%] sm:-translate-x-[5%] sm:-rotate-45 rotate-45 w-[150%] h-[150%] translate-x-[15%] bg-slate-600">
        <div className="w-full h-full scale-95"></div>
      </div>
    </div>
  );
}

export default Home;
