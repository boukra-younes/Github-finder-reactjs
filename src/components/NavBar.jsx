import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navnar  shadow-lg bg-neutral text-neutral-content p-4 ">
      <div className=" flex conatiner mx-auto justify-between">
        <div className="flex-none px-2 mx-2 ">
          <Link to="/" className="">
            <FaGithub className="inline text-4xl pr-2" />
            <span className="inline text-lg font-bold align-middle">
              Github Finder
            </span>
          </Link>
        </div>
        <div className="flex px-2 -mx2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              Aout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
