import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, icon, alt, url, extraClass = {}, handleClick }) => {
  const { containerClass } = extraClass;
  return (
    <button className={`button ${containerClass ? containerClass : ""}`} onClick={handleClick}>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
      {icon ? (
        <img
          loading="lazy"
          width="28px"
          height="28px"
          className="h-7 w-7 ml-2 m-1 p-1"
          alt={alt}
          src={icon}
        />
      ) : null}
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  handleClick: PropTypes.func,
  extraClass: PropTypes.object,
};
