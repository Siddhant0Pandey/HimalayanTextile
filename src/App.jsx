// App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./AppRoutes";


function App() {
  return (
  
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
   
  );
}

export default App;
