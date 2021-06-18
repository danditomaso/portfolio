import PropTypes from "prop-types";

export const TextBlock = ({ title, content, extraClass }) => {
  console.log(extraClass);

  const { titleClass, bodyClass, containerClass } = extraClass;
  return (
    <article className={`mb-6 p-3 ${containerClass}`}>
      <h4 className={`mb-3 ${titleClass}`}>{title}</h4>
      <p className={`${bodyClass}`}>{content}</p>
    </article>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  extraClass: PropTypes.object,
};
