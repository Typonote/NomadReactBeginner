import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Navigation from "./Components/Navigation";
import Coin from "./Routes/Coin";
import Home from "./Routes/Home";
import Movie from "./Routes/Movie";
import Todos from "./Routes/Todos";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 760 && isOpen) {
        setIsOpen(false);
        console.log("resize");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <BrowserRouter>
      <Navigation toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
