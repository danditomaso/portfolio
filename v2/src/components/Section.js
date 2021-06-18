import PropTypes from "prop-types";
import "../styles/Section.css";

export const Section = ({ title, column1, column2, spanCols = false, extraClass }) => {
  return (
    <section
      className={`my-16 grid lg:grid-cols-section  ${spanCols ? "" : "gap-2"} ${extraClass}`}>
      <h3 className="section--title">{title}</h3>
      <div className={`my-4 lg:mr-6 xl:mr-8 ${spanCols ? "col-span-2" : ""}`}>{column1}</div>
      {spanCols ? null : <div className="column2 my-4">{column2}</div>}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  spanCols: PropTypes.bool.isRequired,
  extraClass: PropTypes.string.isRequired,
  column1: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  column2: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
