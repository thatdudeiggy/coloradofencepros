import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { Work } from "./Pages/Work";
import Info from "./Pages/Info";
import Project from "./Pages/Project";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen dark:bg-[#051504] font-mono bg-cover bg-no-repeat"
      >
        <Navbar />

        <main className=" ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Work />} />
            <Route path="/contact" element={<Info />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
