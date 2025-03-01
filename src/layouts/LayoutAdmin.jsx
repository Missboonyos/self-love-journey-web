//rafce
import React from "react";
import { Outlet } from "react-router";

export const LayoutAdmin = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Outlet />
    </div>
  );
};
