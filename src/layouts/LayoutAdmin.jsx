//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

export const LayoutAdmin = () => {
  return (
    <main className="container">
      <Navbar />
      <Outlet />
    </main>
  );
};
