import { useToggle } from "../hooks/useToggle";
import "../styles/Nav.css";

export const Nav = (props) => {
  const [toggle, setToggle] = useToggle();

  return (
    <nav className=" bg-black relative top-0 left-0 h-14 w-14">
      <button id="menu" onClick={setToggle} className={toggle ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};
