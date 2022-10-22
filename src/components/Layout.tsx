import React from "react";
import Header from "./Header/Header";

interface IProps {
  children?: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <div>
    <Header />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
