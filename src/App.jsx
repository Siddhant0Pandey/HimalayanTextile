import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import About from "./pages/About";
import Fibers from "./pages/Fibers";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yarn from "./pages/Yarn";
import ScrollToTop from "./components/ScrollToTop";
import AboutOurStory from "./components/About/AboutOurStory";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<AboutOurStory />} />
          <Route path="*" element={<NoPage />} />
          {/* Fiber Page Routes */}
          <Route path="/fiber" element={<Fibers />} />
          {/* Yarn Page */}
          <Route path="/yarn" element={<Yarn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
