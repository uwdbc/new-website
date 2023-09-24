import React from "react";
import NavBar from "../components/nav/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
