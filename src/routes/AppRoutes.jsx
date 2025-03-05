//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";
import Layout from "@/layouts/Layout";
import { LayoutAdmin } from "@/layouts/LayoutAdmin";
import Restaurant from "@/pages/admin/Restaurant";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route element={<Layout/>}>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route path="admin" element={ < LayoutAdmin />} >          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
          <Route path="restaurant" element={< Restaurant />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
