import React from "react";
import "../styles/DetailsButton.css";

export const DetailsButton = ({ title, icon, url, extraClass }) => {
  return (
    <button
      className={`w-[12rem] h-14 p-3 uppercase cursor-pointer bg-black filter text-white font-light flex items-center justify-center transition duration-[250ms] ${extraClass}`}>
      {url ? (
        <a href={url} target="blank" rel="noopener">
          {title}
        </a>
      ) : (
        title
      )}
      {icon ? (
        <img
          className="h-7 w-7 ml-2 m-1 p-1"
          alt="will expand to show additional portfolio item details details"
          src={icon}
        />
      ) : null}
    </button>
  );
};
