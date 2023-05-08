import Footer from "components/molecules/footer/Footer";
import Header from "components/molecules/header/Header";
import { FunctionComponent, PropsWithChildren } from "react";

export interface ILayout extends PropsWithChildren {}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
