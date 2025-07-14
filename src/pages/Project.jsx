import React, { useRef } from "react";
import "./Project.css";
import { AnimatedSection } from "../components/AnimatedSection";

export function Projects({ projects }) {
  const sectionRef = useRef(null);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">
        <AnimatedSection animationType="animate-fade-in">
          <h2 className="section-title">Featured Projects</h2>
        </AnimatedSection>

        <div className="projects-cards">
          {projects.map((project, index) => {
            const stickyTop = 80 + index * 30;

            return (
              <AnimatedSection
                key={project.name}
                animationType="animate-slide-up"
                rootMargin="0px 0px -100px 0px"
              >
                <div className="project-card" style={{ top: `${stickyTop}px` }}>
                  <div className="project-card-inner">
                    <div className="project-content">
                      <h3 className="project-title">{project.name}</h3>
                      <p className="project-description">{project.summary}</p>
                      <div className="project-links">
                        {project.linkSource && (
                          <a
                            href={project.linkSource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <span>Source</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 3C3.22386 3 3 2.77614 3 2.5C3 2.22386 3.22386 2 3.5 2H9.5C9.77614 2 10 2.22386 10 2.5V8.5C10 8.77614 9.77614 9 9.5 9C9.22386 9 9 8.77614 9 8.5V3.70711L2.85355 9.85355C2.65829 10.0488 2.34171 10.0488 2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L8.29289 3H3.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        )}
                        {project.linkPreview && (
                          <a
                            href={project.linkPreview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <span>Preview</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 3C3.22386 3 3 2.77614 3 2.5C3 2.22386 3.22386 2 3.5 2H9.5C9.77614 2 10 2.22386 10 2.5V8.5C10 8.77614 9.77614 9 9.5 9C9.22386 9 9 8.77614 9 8.5V3.70711L2.85355 9.85355C2.65829 10.0488 2.34171 10.0488 2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L8.29289 3H3.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <span>Demo</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 3C3.22386 3 3 2.77614 3 2.5C3 2.22386 3.22386 2 3.5 2H9.5C9.77614 2 10 2.22386 10 2.5V8.5C10 8.77614 9.77614 9 9.5 9C9.22386 9 9 8.77614 9 8.5V3.70711L2.85355 9.85355C2.65829 10.0488 2.34171 10.0488 2.14645 9.85355C1.95118 9.65829 1.95118 9.34171 2.14645 9.14645L8.29289 3H3.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="project-image">
                      {project.image && (
                        <img src={project.image} alt={project.name} />
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          <div className="projects-end-spacer" />
        </div>
      </div>
    </section>
  );
}
