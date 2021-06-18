import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";

function Home() {
  return (
    <div className="border-24 border-solid border-white h-screen">
      <Header />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Home;
