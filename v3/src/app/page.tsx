import { About, Work, Contact, Header, Footer } from "../components/";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-8 pb-8 h-full grid gap-4">
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
