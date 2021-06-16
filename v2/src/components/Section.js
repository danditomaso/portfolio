import PropTypes from "prop-types";

export const Section = ({ title, column1, column2, spanCols = false }) => {
  return (
    <section className={`my-12 grid grid-cols-section gap-8 ${spanCols ? "col-span-2" : ""}`}>
      <h3>{title}</h3>
      <div class="column1 my-4">{column1}</div>
      {spanCols ? null : <div class="column2 my-4">{column2}</div>}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  spanCols: PropTypes.bool.isRequired,
  column1: PropTypes.array,
  column2: PropTypes.array,
};
