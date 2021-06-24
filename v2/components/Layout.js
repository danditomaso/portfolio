import { Head, Footer } from "../components/";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Head />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
