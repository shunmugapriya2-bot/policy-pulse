import { Upload, ScanSearch, BarChart3, FileWarning } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Enter App or Upload Policy",
    desc: "Type an app name or upload a privacy policy document for analysis.",
    step: "01",
  },
  {
    icon: ScanSearch,
    title: "AI Scans for Keywords",
    desc: "Our engine detects keywords like 'collect', 'share', 'track', 'retain', 'third-party' and scans permissions.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Risk Score Assigned",
    desc: "Each finding adds to the risk score. Third-party sharing +20, permanent storage +25, browsing tracking +30.",
    step: "03",
  },
  {
    icon: FileWarning,
    title: "Report Generated",
    desc: "View your risk percentage, pie chart, danger list, and explanation of how your data may be misused.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 cyber-grid relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How PrivacyPulse Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Four simple steps from upload to actionable privacy insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-card border border-border rounded-lg p-6 relative group hover:border-primary/40 transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-muted/50 font-mono">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-box transition-shadow duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
