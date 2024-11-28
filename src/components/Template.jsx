import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";  // NavBar doğru şekilde import edilmiş mi?
import Footer from "./Footer";

const Template = () => {
  return (
    <>
      <NavBar />  {/* NavBar burada render ediliyor */}
      <div className="container">
        <Outlet />  {/* İçeriğin yer değiştireceği yer */}
        <Footer />
      </div>
    </>
  );
};

export default Template;
