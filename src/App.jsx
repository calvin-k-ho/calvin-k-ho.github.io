import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTracker from "./components/PageTracker";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SalesComp from "./pages/SalesComp";
import BoB from "./pages/BoB";
import STEMForKids from "./pages/STEMForKids";
import ProjectPlatform from "./pages/ProjectPlatform";
import TPI from "./pages/TPI";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTracker />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works/sales-compensation" element={<SalesComp />} />
        <Route path="/works/book-of-business" element={<BoB />} />
        <Route path="/works/the-pathway-initiative" element={<TPI />} />
        <Route path="/works/stem-for-kids" element={<STEMForKids />} />
        <Route path="/works/project-management-platform" element={<ProjectPlatform />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;