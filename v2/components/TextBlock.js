import PropTypes from "prop-types";

export const TextBlock = ({ title, content, extraClass = {}, children }) => {
  const { containerClass, titleClass, bodyClass } = extraClass;

  return (
    <article className={`mb-3 p-3 ${containerClass ? containerClass : ""}`}>
      {title ? <h4 className={`mb-3 ${titleClass ? titleClass : ""}`}>{title}</h4> : null}
      <p className={`${bodyClass ? bodyClass : ""} `}>{content}</p>
      {children}
    </article>
  );
};

TextBlock.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  extraClass: PropTypes.object,
};
