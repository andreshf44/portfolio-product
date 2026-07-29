import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="app">
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <Intro
            key="intro"
            onEnter={() => setHasEntered(true)}
          />
        )}
      </AnimatePresence>

      {hasEntered && (
        <>
          <Navbar />
          <Hero />
          <Projects/>
          <Experience/>
          <About/>
          <Contact/>
          <Footer/>
        </>
      )}
    </main>
  );
}

export default App;