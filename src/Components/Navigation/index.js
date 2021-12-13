import React from "react";
import { Link } from "react-router-dom";
import Dummy from "../../Asset/Dummy";

const Navigation = ({ toggle }) => {
  return (
    <div>
      <div className="flex items-center justify-between  py-3  bg-gray-100 text-primary font-mono">
        <Link to="/" className="pl-8 text-black ">
          KIMRADIUM
        </Link>
        <div className="px-8 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className="pr-8 md:block hidden">
          {Dummy.map((link, index) => {
            return (
              <Link to={link.to}>
                <span
                  key={index}
                  className="text-xl mr-4 cursor-pointer hover:text-accent"
                >
                  {link.text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
