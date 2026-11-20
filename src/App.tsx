
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Projects from "./pages/projects";
import Contact from "./pages/contacts";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
     <div className="app-layout">
      <Navbar />

      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>

      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
