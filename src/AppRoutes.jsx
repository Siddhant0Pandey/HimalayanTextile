/* eslint-disable no-unused-vars */
// AppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import About from "./pages/About";
import Fibers from "./pages/Fibers";
import Home from "./pages/Home";
import Yarn from "./pages/Yarn";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import Sustainable from "./pages/Sustainable";

import OurBrand from "./components/About/OurBrand/OurBrand";

import Fabric from "./pages/Fabric";

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-brand" element={<OurBrand />   } />
          <Route path="/fiber" element={<Fibers />} />
          <Route path="/yarn" element={<Yarn />} />
          <Route path="/fabric" element={<Fabric />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/sustainable" element={<Sustainable />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
