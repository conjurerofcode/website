import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="fixed z-50 sm:w-full w-screen h-[10vh] bg-slate-800 top-0 flex flex-row items-center font-catamaran shadow-inner-bottom group">
      <Link
        className="m-5 text-4xl bg-transparent relative after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500   hover:text-white hover:after:w-[100%] duration-300 after:duration-300"
        to="/"
      >
        Michael Moore
      </Link>

      {location.pathname == "/about" && (
        <Link
          className="mx-10 text-stone-300 opacity-0 -translate-x-10 group-hover:translate-x-10 group-hover:opacity-100 text-2xl relative after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 transition-all duration-300 after:duration-300 hover:text-white hover:after:w-[100%]"
          to="/portfolio"
        >
          My Work
        </Link>
      )}

      {location.pathname == "/portfolio" && (
        <Link
          className="mx-10 text-stone-300 text-2xl relative opacity-0 -translate-x-10 group-hover:translate-x-10 group-hover:opacity-100 after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 transition-all duration-300 after:duration-300 hover:text-white hover:after:w-[100%]"
          to="/about"
        >
          My Life
        </Link>
      )}
    </div>
  );
}

export default Navbar;
