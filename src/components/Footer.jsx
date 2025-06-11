import React, { useState, useContext } from "react";
import "./Footer.css";
import { MouseTrailContext } from "../context/MouseTrailContext";

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { setIsTrailPaused } = useContext(MouseTrailContext);

  const socialLinks = [
    {
      name: "Home",
      url: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    // {
    //   name: "Resume",
    //   url: "/resume",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="20"
    //       height="20"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    //       <polyline points="14 2 14 8 20 8"></polyline>
    //       <line x1="16" y1="13" x2="8" y2="13"></line>
    //       <line x1="16" y1="17" x2="8" y2="17"></line>
    //       <polyline points="10 9 9 9 8 9"></polyline>
    //     </svg>
    //   ),
    // },
    {
      name: "GitHub",
      url: "https://github.com/govardhan27",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/govardhan-narayana-swamy/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:27.govardhan@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    // {
    //   name: "Theme",
    //   url: "#",
    //   onClick: (e) => {
    //     e.preventDefault();
    //     console.log("Toggle theme");
    //   },
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="20"
    //       height="20"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    //     </svg>
    //   ),
    // },
  ];

  const handleMouseEnter = () => {
    setIsTrailPaused(true);
  };

  const handleMouseLeave = () => {
    setIsTrailPaused(false);
  };

  return (
    <footer className="footer">
      <div className="social-container">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            onClick={link.onClick}
            className="social-icon"
            aria-label={link.name}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={
              link.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {link.icon}
            <span className="tooltip">{link.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
