import React from "react";
import "../styles/Nav.css";

export const Nav = (props) => {
  return (
    <nav className="text-black bg-black w-full h-full h-6">
      <label for="hamburger-menu" className="sr-only">
        Menu
        <input type="checkbox" id="hamburger-menu" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </nav>
  );
};
