import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Cog, Users, Rocket, BookOpen } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Problem Statement",
    content:
      "In today's digital age, users accept privacy policies without reading them. These policies often contain clauses that allow companies to collect, share, and sell personal data. There is a lack of tools that simplify and visualize the risks hidden within these lengthy documents.",
  },
  {
    icon: Target,
    title: "Objective",
    content:
      "PrivacyPulse aims to bridge the gap between complex legal privacy policies and everyday users. By leveraging AI and NLP, we provide an instant, visual risk assessment that empowers users to make informed decisions about the apps and services they use.",
  },
  {
    icon: Cog,
    title: "Methodology",
    content:
      "Our system accepts privacy policy text or app names. Using natural language processing, we scan for risky keywords and clauses related to data collection, tracking, third-party sharing, and data retention. Each category is scored, and an overall risk percentage is calculated. Results are presented through interactive charts and actionable insights.",
  },
];

const technologies = [
  "React 18 with TypeScript",
  "Tailwind CSS for styling",
  "Recharts for data visualization",
  "Lovable Cloud for backend & AI",
  "Google Gemini AI for NLP analysis",
  "Vite for fast development",
];

const teamMembers = [
  { name: "Team Member 1", role: "Frontend Developer", emoji: "👨‍💻" },
  { name: "Team Member 2", role: "Backend Developer", emoji: "👩‍💻" },
  { name: "Team Member 3", role: "UI/UX Designer", emoji: "🎨" },
  { name: "Team Member 4", role: "Research & Documentation", emoji: "📝" },
];

const futureEnhancements = [
  "Browser extension for real-time policy analysis",
  "Mobile app for on-the-go privacy checks",
  "Machine learning model trained on 10,000+ policies",
  "Community-contributed policy ratings",
  "Integration with app stores for automatic scanning",
  "Multi-language policy analysis support",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">About</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About PrivacyPulse</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A mini project dedicated to empowering users with privacy awareness through AI-powered policy analysis.
          </p>
        </div>

        {/* Problem, Objective, Methodology */}
        <div className="space-y-6 mb-16">
          {sections.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Technologies Used</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {technologies.map((tech) => (
              <div key={tech} className="bg-secondary/30 border border-border rounded-lg p-4 text-sm text-foreground font-mono">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Team Members</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {teamMembers.map((m) => (
              <div key={m.name} className="bg-card border border-border rounded-lg p-5 flex items-center gap-4">
                <span className="text-3xl">{m.emoji}</span>
                <div>
                  <p className="font-semibold text-foreground">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Enhancements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Future Enhancements</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {futureEnhancements.map((e, i) => (
              <div key={i} className="bg-primary/5 border border-primary/15 rounded-lg p-4 text-sm text-foreground flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
