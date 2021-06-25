import { Head } from "../components/";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Head />
      {children}
    </div>
  );
};

export default Layout;
