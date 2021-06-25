import PropTypes from "prop-types";
import { Button } from "./index";

const handleClick = (scrollRef) => {
  return scrollRef.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
};

const Header = ({ scrollRef }) => {
  return (
    <header
      id="header"
      className="font-sans w-full xs:border-0 md:border-24 border-solid border-white h-screen">
      <div className="top-0 left-0">
        <img src="./assets/danlogo.svg" className="bg-black w-16 h-16" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-8 h-full">
        <h1 className="text-6xl md:text-6xl sm:text-5xl xs:text-4xl font-light text-white uppercase">
          dan ditomaso
        </h1>
        <h2 className="xl:text-7xl lg:text-6xl md:text-6xl xs:text-4xl font-serif font-light text-white">
          Front End Developer
        </h2>
        <Button title="Get In Touch" handleClick={() => handleClick(scrollRef)} />
        <svg
          className="animate-bounce w-9 h-9 text-white absolute bottom-10"
          fill="#fffe"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
};

Header.propTypes = {
  scrollRef: PropTypes.object.isRequired,
};

handleClick.propTypes = {
  scrollRef: PropTypes.object.isRequired,
};

export default Header;
