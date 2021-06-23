import { Button } from "./Button";

const Header = () => {
  return (
    <header id="header" className="h-full flex flex-col font-sans relative">
      <nav className="relative top-0 left-0">
        <img src="./assets/danlogo.svg" className="bg-black w-16 h-16" alt="" />
      </nav>
      <div className="flex flex-col items-center justify-center space-y-12 h-full">
        <h1 className="text-6xl md:text-6xl sm:text-5xl xs:text-4xl font-light text-white uppercase">
          dan ditomaso
        </h1>
        <h2 className="text-8xl lg:text-8xl md:text-6xl xs:text-4xl font-serif font-light text-white">
          Front End Developer
        </h2>
        <Button title="Get In Touch" url="#contactMe" />
        <svg
          className="animate-bounce w-9 h-9 text-white absolute bottom-6"
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

export default Header;

Header.propTypes = {};
