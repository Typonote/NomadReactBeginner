import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-primary"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 text-primary hover:text-accent" to="/home">
        Home
      </Link>
      <Link className="p-4 text-primary hover:text-accent" to="/movie">
        Movie
      </Link>
      <Link className="p-4 text-primary hover:text-accent" to="/todos">
        Todos
      </Link>
      <Link className="p-4 text-primary hover:text-accent" to="/coin">
        Coin
      </Link>
    </div>
  );
};

export default Dropdown;
