import React from "react";
import "./Layout.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
      <Logo />
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
