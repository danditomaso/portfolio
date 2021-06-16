import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
// import "./styles/Home.css";

function Home() {
  return (
    <div className="border-24 border-solid border-white h-screen">
      <Header />
      <AboutMe />
    </div>
  );
}

export default Home;
