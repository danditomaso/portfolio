export const Footer = ({ links }) => {
  const renderLinks = (arr) => {
    return arr
      ? arr.map(({ url, label }) => {
          return (
            <li key={url} className="mb-[1.5rem]">
              <a href={url} target="_blank" rel="noopener">
                {label}
              </a>
            </li>
          );
        })
      : null;
  };

  return (
    <footer className="max-w-7xl container h-auto">
      <section className="grid-container" id="footer">
        <div>
          <ul className="flex flex-col">{renderLinks(links)}</ul>
        </div>
        <div className="cta">
          <h3 className="text-6xl font-bold">Ready to take the next step and work together? </h3>
          <a className="cta-btn" href="mailto:dan.ditomaso@gmail.com" id="contactme">
            Contact Me
          </a>
        </div>
      </section>
      <p className="flex items-center justify-center">
        Built with NextJS and lots of ❤️ by Dan Ditomaso
      </p>
    </footer>
  );
};
