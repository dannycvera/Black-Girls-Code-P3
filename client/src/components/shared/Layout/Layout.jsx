import React from "react";
import "./Layout.css";
// import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
      {/* <Header /> */}
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
