import React from "react";
import { Nav } from "./Nav";
import "../styles/Header.css";

export const Header = (props) => {
  return (
    <header id="header" className="h-full flex flex-col font-sans">
      {/* <Nav /> */}
      {/* <img src="./assets/danlogo.svg" alt="" /> */}
      <div className="flex flex-col items-center justify-center space-y-6 h-full">
        <h1 className="text-6xl font-light text-white uppercase">dan ditomaso</h1>
        <h2 className="text-8xl font-serif font-light text-white">Web Developer</h2>
      </div>
      {/* <a href="#contact" class="btn">
          Get In Touch
        </a> */}
    </header>
  );
};
