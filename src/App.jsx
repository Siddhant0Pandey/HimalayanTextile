import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import About from "./pages/About";
import Fibers from "./pages/Fibers";
import Home from "./pages/Home";
import Yarn from "./pages/Yarn";

import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fabric from "./pages/Fabric";

import OurStory from "./pages/OurStory";
import Sustainable from "./pages/Sustainable";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/fiber" element={<Fibers />} />
          <Route path="/fabric" element={<Fabric />} />

          <Route path="/yarn" element={<Yarn />} />
          <Route path="/sustainable" element={<Sustainable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
