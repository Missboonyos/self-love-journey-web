import React from "react";
import { Button } from "./components/ui/button";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
