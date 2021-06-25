import PropTypes from "prop-types";

const Section = ({ title, column1, column2, spanCols = false, extraClass = {}, children }) => {
  const { containerClass } = extraClass;
  return (
    <section
      className={`my-12 grid lg:grid-cols-section  ${spanCols ? "" : "gap-1"} ${
        containerClass ? containerClass : ""
      }`}>
      <h3 className="section--title xs:text-5xl md:text-6xl lg:mx-8 sm:my-4 lg:text-8xl">
        {title}
      </h3>
      <div className={`${spanCols ? "col-span-2" : ""}`}>{column1}</div>
      {spanCols ? null : <div className="column2 my-4">{column2}</div>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  spanCols: PropTypes.bool.isRequired,
  extraClass: PropTypes.object,
  column1: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  column2: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
