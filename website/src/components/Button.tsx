import { MouseEventHandler, useState } from "react";
import "../index.css";

function Button({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <button
      onClick={onClick}
      className="flex h-1/4 w-1/3 bg-wave bg-left m-10 z-20 items-start justify-end"
    >
      <div className="w-full h-full transition-al duration-[250ms] ease-out hover:-translate-y-5 bg-slate-400"></div>
    </button>
  );
}

export default Button;
