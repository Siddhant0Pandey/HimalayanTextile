import React from "react";
import { BiPhone } from "react-icons/bi";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="relative  text-darkText  overflow-hidden font-display">
      {/* SVG wave background */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0 bg-[url('/assets/img/nav/nav-wave.png')]">
       
      </div> */}

      <div className="relative z-10 flex justify-between items-center px-4 py-6 h-full shadow-md  ">
        <div className="">
          <h1 className="text-2xl ">Logo</h1>
        </div>
        <div className="flex gap-8 text-primary">
          <Link>
            <h3 className="text-xl">About</h3>
          </Link>
          <Link to={"/fiber"}>
            <h3 className="text-xl">Fiber</h3>
          </Link>
          <Link>
            <h3 className="text-xl">Yarn</h3>
          </Link>
          <Link>
            <h3 className="text-xl">Fabrics</h3>
          </Link>
        </div>
        <div>
          <BiPhone size={32} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
