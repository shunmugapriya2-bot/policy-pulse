import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, ScanSearch, BarChart3, FileWarning, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Privacy Policy",
    desc: "Enter an app name or paste the full privacy policy text. You can also upload a PDF document for analysis.",
    detail: "Our system accepts raw text, URLs, and PDF documents. The policy is preprocessed and cleaned for analysis.",
  },
  {
    icon: ScanSearch,
    step: "02",
    title: "AI Scans for Keywords",
    desc: "Our NLP engine scans the policy for risky keywords like 'third-party', 'tracking', 'retain', 'share', 'sell'.",
    detail: "Using natural language processing, we identify patterns and clauses that indicate data collection, sharing, and retention practices.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Risk Score Generation",
    desc: "Each detected risk is categorized and weighted. An overall risk score (0-100%) is computed.",
    detail: "Categories include Data Collection, Tracking, Third-Party Sharing, Data Retention, and Permission Scope. Each is scored 1-10.",
  },
  {
    icon: FileWarning,
    step: "04",
    title: "Report & Visualization",
    desc: "Results are presented with interactive charts, risk breakdowns, and actionable recommendations.",
    detail: "Pie charts show risk distribution, bar graphs show per-category scores, and a detailed list highlights each specific risk found.",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Methodology</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How PrivacyPulse Works</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A step-by-step breakdown of our privacy policy analysis pipeline.
          </p>
        </div>

        {/* Flowchart */}
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={step.step}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-primary mt-2">STEP {step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.desc}</p>
                    <div className="bg-secondary/50 border border-border rounded-md p-3">
                      <p className="text-sm text-secondary-foreground">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-5 h-5 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Summary */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Technology Stack</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Frontend", value: "React + TypeScript + Tailwind CSS" },
              { label: "AI Engine", value: "Google Gemini / OpenAI GPT" },
              { label: "Backend", value: "Lovable Cloud Edge Functions" },
              { label: "Visualization", value: "Recharts (Pie, Bar, Category)" },
            ].map((t) => (
              <div key={t.label} className="bg-secondary/30 rounded-md p-3">
                <span className="text-xs font-mono text-primary uppercase">{t.label}</span>
                <p className="text-sm text-foreground mt-1">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
