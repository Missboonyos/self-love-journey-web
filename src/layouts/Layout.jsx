//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
