// App.jsx
import React from "react";
// import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./AppRoutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fabric from "./pages/Fabric";




function App() {
  return (
  
    <BrowserRouter>

      <ScrollToTop />
      <AppRoutes />

    </BrowserRouter>
   
  );
}

export default App;
