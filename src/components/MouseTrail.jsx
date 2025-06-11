import React, { useEffect, useRef, useContext } from "react";
import "./MouseTrail.css";
import { MouseTrailContext } from "../context/MouseTrailContext";

export function MouseTrail() {
  const coordsRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]); // Use a ref to store the circle DOM elements
  const { isTrailPaused } = useContext(MouseTrailContext);

  useEffect(() => {
    // Get all circle elements after the component has rendered
    circlesRef.current = document.querySelectorAll(".trail-circle");

    const circles = circlesRef.current; // Shorthand for easier access

    // Light color palette with subtle gradient
    const colors = [
      "rgba(255, 255, 255, 0.9)", // Almost pure white
      "rgba(255, 255, 255, 0.85)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(255, 255, 255, 0.75)",
      "rgba(255, 255, 255, 0.7)",
      "rgba(255, 255, 255, 0.65)",
      "rgba(240, 240, 255, 0.6)", // Slight blue tint
      "rgba(235, 235, 255, 0.55)",
      "rgba(230, 230, 255, 0.5)",
      "rgba(225, 225, 255, 0.45)",
      "rgba(220, 220, 255, 0.4)",
      "rgba(215, 215, 255, 0.35)",
    ];

    // Initialize circles with their properties (x, y, and background color)
    circles.forEach((circle, index) => {
      // Add x and y properties directly to the DOM element for easier tracking
      // This is a common pattern when directly manipulating DOM elements in animations.
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];

      circle.style.zIndex = 9999 - index;

      circle.style.filter = `blur(${index * 0.2}px)`;

      circle.style.boxShadow = `0 0 ${8 + index}px rgba(255, 255, 255, 0.7)`;
    });

    const handleMouseMove = (e) => {
      coordsRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation function
    function animateCircles() {
      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circles.forEach((circle, index) => {
        if (index === 0) {
          // First circle follows the cursor directly
          circle.x += (x - circle.x) * 0.2;
          circle.y += (y - circle.y) * 0.2;
        } else {
          // Other circles follow the previous circle
          const prevCircle = circles[index - 1];
          // Ensure prevCircle.x and prevCircle.y are defined
          if (prevCircle) {
            circle.x += (prevCircle.x - circle.x) * 0.2;
            circle.y += (prevCircle.y - circle.y) * 0.2;
          }
        }

        // Update visual positions
        // Subtracting 10 here accounts for half the circle's width/height (20px)
        // to center it on the cursor.
        circle.style.left = circle.x - 10 + "px";
        circle.style.top = circle.y - 10 + "px";

        // Apply scaling for visual effect
        const scale = 1 - index * 0.05;
        circle.style.transform = `scale(${scale})`;
      });

      requestAnimationFrame(animateCircles);
    }

    // Add event listener and start animation when the component mounts
    window.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animateCircles);

    // Cleanup function: remove event listener and stop animation when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="mouse-trail">
      {/* Render 20 circles with the class "trail-circle" */}
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="trail-circle"></div>
      ))}
    </div>
  );
}
