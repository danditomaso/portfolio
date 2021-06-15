import { Header, AboutMe, Portfolio, ContactMe } from "./components/index";

function Home() {
  return (
    <div className="border-24 border-solid border-white h-screen">
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default Home;
