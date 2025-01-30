import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const UserLayout = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
  }, []);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default UserLayout;
