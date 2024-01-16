import { cn } from "@/libs/style";
import React from "react";

type ButtonProps = {
  title: string;
  type: "link" | "button";
  icon?: string;
  alt?: string;
  url?: string;
  extraClasses?: string;
  handleClick?: () => void;
};

const Button = ({ title, type = "button", icon, alt, url, extraClasses = "", handleClick }: ButtonProps) => {
  if (type === "button" && url) {
    <button
      className={cn(
        "flex place-items-center text-white bg-gray-800 hover:bg-gray-900 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        extraClasses
      )}
      onClick={handleClick}>
      {title}
      {icon ? <img loading="lazy" width="28px" height="28px" className="h-7 w-7 ml-2 m-1 p-1" alt={alt} src={icon} /> : null}
    </button>;
  }

  return (
    <button
      className={cn(
        "flex place-items-center  text-white bg-gray-800 hover:bg-gray-900 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        extraClasses
      )}
      onClick={handleClick}>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
      {icon ? <img loading="lazy" width="28px" height="28px" className="h-7 w-7 ml-2 m-1 p-1" alt={alt} src={icon} /> : null}
    </button>
  );
};

export default Button;
