import { useState } from "react";

import { About } from "./pages/About";
import { MouseTrail } from "./components/MouseTrail";
import { Projects } from "./pages/Project";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Skills } from "./pages/Skills";
import { MouseTrailProvider } from "./context/MouseTrailContext";

import "./App.css";

const projects = [
  {
    name: "Formula 1 Constructors Data Visualization",
    summary:
      "Interactive visualization of Formula 1 constructor performance and statistics developed using D3.js.",
    linkPreview: "https://f1-data-visualization.vercel.app/",
    linkSource: "https://github.com/govardhan27/f1-data-visualization",
    demo: "",
    image: "/map-interaction.png",
  },
  {
    name: "AI PDF Chat Assistant",
    summary:
      "Upload pdf documents, ask questions, get intelligent answers. Features multi-session conversations, adaptive learning through user feedback, and real-time analytics..",
    linkPreview: "https://18.175.140.199.nip.io/",
    linkSource: "https://github.com/govardhan27/pdf-chat",
    demo: "https://vimeo.com/1073830913/a77eaadbd6?ts=0&share=copy",
    image: "/pdf-chat.png",
  },
];

function App() {
  return (
    <MouseTrailProvider>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          {/* <section id="experience">
          <Experience />
        </section> */}
          <section id="projects">
            <Projects projects={projects} />
          </section>
        </main>
        <Footer />
        <MouseTrail />
      </div>
    </MouseTrailProvider>
  );
}

export default App;
