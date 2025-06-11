import React, { useState, useEffect } from "react";
import "./Navbar.css";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Function to determine which section is currently in view
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for better detection
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    // Uncomment when Experience component is ready
    // { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"></div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
