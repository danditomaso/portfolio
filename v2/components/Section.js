import PropTypes from "prop-types";

export const Section = ({
  title,
  column1,
  column2,
  spanCols = false,
  extraClass = {},
  children,
}) => {
  const { containerClass } = extraClass;
  return (
    <section
      className={`my-16 grid lg:grid-cols-section  ${spanCols ? "" : "gap-2"} ${
        containerClass ? containerClass : ""
      }`}>
      <h3 className="section--title sm:text-5xl lg:text-[5.5rem]">{title}</h3>
      <div className={`my-4 lg:mr-6 xl:mr-8 ${spanCols ? "col-span-2" : ""}`}>{column1}</div>
      {spanCols ? null : <div className="column2 my-4">{column2}</div>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  spanCols: PropTypes.bool.isRequired,
  extraClass: PropTypes.object.isRequired,
  column1: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  column2: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
