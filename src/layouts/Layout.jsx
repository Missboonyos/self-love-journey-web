//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="container">
      <Navbar />
      <hr />
      <Outlet />
    </main>
  );
};

export default Layout;
