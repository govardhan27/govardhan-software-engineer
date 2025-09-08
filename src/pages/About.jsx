import "./About.css";
import { AnimatedSection } from "../components/AnimatedSection";

export function About() {
  return (
    <div className="about-container">
      <AnimatedSection animationType="animate-fade-in">
        <h2 className="about-section-title">About</h2>
      </AnimatedSection>

      <AnimatedSection
        animationType="animate-slide-up"
        rootMargin="0px 0px -100px 0px"
      >
        <h1 className="about-heading">👋 Hi, I'm Govardhan</h1>
      </AnimatedSection>

      <AnimatedSection animationType="animate-fade-in">
        <div className="about-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>London, United Kingdom</span>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animationType="animate-slide-up"
        rootMargin="0px 0px -80px 0px"
      >
        <p className="about-description">
          I'm a Full-Stack Engineer with 5+ years of comprehensive
          development experience, spanning frontend interfaces, scalable backend
          systems, and cutting-edge AI implementations. I specialize in building
          end-to-end intelligent applications that combine exceptional user
          experiences with powerful AI capabilities.
        </p>
      </AnimatedSection>

      <div className="about-sections">
        <AnimatedSection
          animationType="animate-slide-left"
          rootMargin="0px 0px -50px 0px"
        >
          <div className="about-section">
            <h3 className="about-subheading">🎨 Frontend Excellence</h3>
            <p>
              Expert in modern React/TypeScript development with a focus on
              responsive, accessible user interfaces. I build intuitive
              frontends for complex AI systems - from real-time chat interfaces
              to interactive data visualization dashboards. Experienced in state
              management (Redux, Context), performance optimization, and
              component architecture that scales.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animationType="animate-slide-right"
          rootMargin="0px 0px -50px 0px"
        >
          <div className="about-section">
            <h3 className="about-subheading">⚙️ Full-Stack Architecture</h3>
            <p>
              Proven track record designing and implementing complete web
              applications using React frontends, Node.js/Python/JAVA backends, and
              cloud-native AWS infrastructure. I architect scalable systems
              handling everything from authentication and payments to real-time
              data processing and API integrations.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          animationType="animate-slide-up"
          rootMargin="0px 0px -50px 0px"
        >
          <div className="about-section">
            <h3 className="about-subheading">🤖 AI Integration Specialist</h3>
            <p>
              Bridge the gap between AI research and production systems through
              my Master's in Data Science research on RAG optimization (12%+
              accuracy improvements). Currently building intelligent platforms
              that achieve 80% performance improvements by integrating LLMs,
              vector databases, and semantic search into full-stack
              applications.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
