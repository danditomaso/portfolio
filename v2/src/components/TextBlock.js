import React from "react";
import PropTypes from "prop-types";

export const TextBlock = ({ title, content }) => {
  return (
    <section className="mb-6">
      <h4 className="mb-3">{title}</h4>
      <p class="text-base font-normal">{content}</p>
    </section>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
