import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./pages/contact";
import Game from "./components/Game";
import "./App.css";

function HomePage() {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      <Navbar onOpenGame={() => setShowGame(true)} />
      <Hero />
      <Skills />
      <Projects />

      {showGame && (
        <Game onClose={() => setShowGame(false)} />
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;