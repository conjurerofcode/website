import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed w-full h-[10vh] bg-transparent top-0 flex flex-row items-center  font-catamaran ">
      <Link
        className="m-5 text-4xl bg-transparent relative after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500   hover:text-white hover:after:w-[100%] duration-300 after:duration-300"
        to="/"
      >
        Michael Moore
      </Link>

      <Link
        className="mx-10 text-stone-300 text-2xl relative after:absolute after:left-0 after:rounded-lg after:-bottom-[5px] after:w-[0%] after:h-[3px] after:bg-orange-500 transition-all duration-300 after:duration-300 hover:text-white hover:after:w-[100%]"
        to="/portfolio"
      >
        Portfolio
      </Link>
    </div>
  );
}

export default Navbar;
