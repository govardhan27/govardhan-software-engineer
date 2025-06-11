import "./Skills.css";

export function Skills() {
  const skills = {
    languagesAndFrameworks: [
      { name: "TypeScript", color: "3178C6", logo: "typescript" },
      {
        name: "JavaScript",
        color: "F7DF1E",
        logo: "javascript",
        logoColor: "black",
      },
      { name: "D3.js", color: "F9A03C", logo: "d3.js" },
      { name: "Python", color: "3776AB", logo: "python" },
      { name: "React", color: "20232A", logo: "react", logoColor: "61DAFB" },
      { name: "Next.js", color: "000000", logo: "next.js" },
      { name: "Node.js", color: "339933", logo: "node.js" },
      { name: "Flask", color: "000000", logo: "flask" },
      { name: "Express.js", color: "000000", logo: "express" },
      { name: "Svelte", color: "FF3E00", logo: "svelte" },
      { name: "Tailwind CSS", color: "06B6D4", logo: "tailwind-css" },
    ],
    aiAndData: [
      { name: "OpenAI", color: "412991", logo: "openai" },
      { name: "LangChain", color: "black", logo: "langchain" },
      { name: "LlamaIndex", color: "3A76F0", logo: "llama" },
      { name: "LangGraph", color: "121212", logo: "langgraph" },
      { name: "Pinecone", color: "4D3AFF", logo: "pinecone" },
      { name: "RAG", color: "FF6B6B" },
      { name: "Vector DB", color: "6E44FF" },
      { name: "SQL", color: "003B57", logo: "postgresql" },
      { name: "Redis", color: "DC382D", logo: "redis" },
    ],
    devOpsAndInfra: [
      { name: "AWS", color: "232F3E", logo: "amazonwebservice" },
      { name: "AWS Lambda", color: "FF9900", logo: "aws-lambda" },
      { name: "AWS EC2", color: "FF9900", logo: "amazonec2" },
      { name: "AWS S3", color: "569A31", logo: "amazon-s3" },
      { name: "AWS Cognito", color: "8C4FFF" },
      { name: "API Gateway", color: "FF4F00" },
      { name: "CDK", color: "4B0082" },
      { name: "Docker", color: "2496ED", logo: "docker" },
      { name: "Nginx", color: "009639", logo: "nginx" },
      { name: "GitHub Actions", color: "2088FF", logo: "github-actions" },
    ],
    toolsAndOther: [
      { name: "CI/CD", color: "303030", logo: "githubactions" },
      { name: "OAuth", color: "1572B6", logo: "auth0" },
      { name: "REST APIs", color: "005571" },
      { name: "Celery", color: "37814A" },
    ],
  };

  return (
    <div className="skills-container">
      <h2 className="section-title">🛠️ Skills</h2>

      <div className="skills-section">
        <h3 className="skills-category">💻 Languages & Frameworks</h3>
        <div className="skills-badges">
          {skills.languagesAndFrameworks.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <img
                src={`https://img.shields.io/badge/${skill.name
                  .replace(/\./g, "%2E")
                  .replace(/ /g, "_")}-${skill.color}?style=flat${
                  skill.logo ? `&logo=${skill.logo}` : ""
                }${
                  skill.logoColor
                    ? `&logoColor=${skill.logoColor}`
                    : "&logoColor=white"
                }`}
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-category">🤖 AI & Data</h3>
        <div className="skills-badges">
          {skills.aiAndData.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <img
                src={`https://img.shields.io/badge/${skill.name
                  .replace(/\./g, "%2E")
                  .replace(/ /g, "_")}-${skill.color}?style=flat${
                  skill.logo ? `&logo=${skill.logo}` : ""
                }${
                  skill.logoColor
                    ? `&logoColor=${skill.logoColor}`
                    : skill.logo
                    ? "&logoColor=white"
                    : ""
                }`}
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-category">☁️ DevOps & Infrastructure</h3>
        <div className="skills-badges">
          {skills.devOpsAndInfra.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <img
                src={`https://img.shields.io/badge/${skill.name
                  .replace(/\./g, "%2E")
                  .replace(/ /g, "_")}-${skill.color}?style=flat${
                  skill.logo ? `&logo=${skill.logo}` : ""
                }${
                  skill.logoColor
                    ? `&logoColor=${skill.logoColor}`
                    : skill.logo
                    ? "&logoColor=white"
                    : ""
                }`}
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-category">🧰 Tools & Other</h3>
        <div className="skills-badges">
          {skills.toolsAndOther.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <img
                src={`https://img.shields.io/badge/${skill.name
                  .replace(/\./g, "%2E")
                  .replace(/ /g, "_")}-${skill.color}?style=flat${
                  skill.logo ? `&logo=${skill.logo}` : ""
                }${
                  skill.logoColor
                    ? `&logoColor=${skill.logoColor}`
                    : skill.logo
                    ? "&logoColor=white"
                    : ""
                }`}
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
