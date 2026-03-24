import AppAnalysisCard from "./AppAnalysisCard";
import RiskCharts from "./RiskCharts";

const sampleApps = [
  {
    name: "Facebook",
    icon: "📘",
    riskScore: 85,
    risks: [
      { text: "Stores your data even without an account", level: "high" as const },
      { text: "Tracks browsing history across sites", level: "high" as const },
      { text: "Uses third-party cookies", level: "medium" as const },
      { text: "Tracks activity across websites", level: "medium" as const },
    ],
  },
  {
    name: "Instagram",
    icon: "📷",
    riskScore: 80,
    risks: [
      { text: "Collects location data continuously", level: "high" as const },
      { text: "Tracks ad behavior & preferences", level: "high" as const },
      { text: "Shares data with third parties", level: "medium" as const },
      { text: "Retains deleted content on servers", level: "medium" as const },
    ],
  },
  {
    name: "Amazon",
    icon: "🛒",
    riskScore: 75,
    risks: [
      { text: "Uses third-party advertising cookies", level: "medium" as const },
      { text: "Can modify terms without notice", level: "medium" as const },
      { text: "Extensive purchase history tracking", level: "high" as const },
      { text: "Voice data retention from Alexa", level: "high" as const },
    ],
  },
];

const SampleAnalysis = () => {
  return (
    <section id="sample-reports" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Sample Reports
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular App Risk Analysis
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            See how major apps score on our privacy risk assessment. Real policies, real dangers.
          </p>
        </div>

        {/* App cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {sampleApps.map((app) => (
            <AppAnalysisCard key={app.name} {...app} />
          ))}
        </div>

        {/* Charts */}
        <RiskCharts />
      </div>
    </section>
  );
};

export default SampleAnalysis;
