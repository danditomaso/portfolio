import React from "react";

export const Button = ({ title, icon, alt, url, extraClass = {}, handleClick }) => {
  const { containerClass } = extraClass;
  return (
    <button className={`button ${containerClass ? containerClass : ""}`} onClick={handleClick}>
      {url ? <a href={url}>{title}</a> : title}
      {icon ? <img loading="lazy" className="h-7 w-7 ml-2 m-1 p-1" alt={alt} src={icon} /> : null}
    </button>
  );
};
