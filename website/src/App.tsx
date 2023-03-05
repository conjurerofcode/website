import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
