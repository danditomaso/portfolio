import React from "react";
import { Nav } from "./Nav";
import "../styles/Header.css";

export const Header = (props) => {
  return (
    <header id="header" className="w-full h-full flex flex-col font-sans">
      <div className="flex">
        <label for="hamburger-menu" className="sr-only">
          Menu
        </label>
        <Nav />
        {/* <img src="./assets/danlogo.svg" alt="" /> */}
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 h-full">
        <h1 className="text-6xl font-light text-white">Dan Ditomaso</h1>
        <h2 className="text-8xl font-serif font-light text-white">Web Developer</h2>
      </div>
      {/* <a href="#contact" class="btn">
          Get In Touch
        </a> */}
    </header>
  );
};
