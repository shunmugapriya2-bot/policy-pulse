import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

const appsData: Record<string, {
  icon: string;
  score: number;
  dataCollection: number;
  tracking: number;
  thirdParty: number;
  retention: number;
  permissions: number;
  risks: string[];
}> = {
  Facebook: { icon: "📘", score: 85, dataCollection: 9, tracking: 9, thirdParty: 8, retention: 7, permissions: 8, risks: ["Stores data without account", "Cross-site tracking", "Shares with affiliates"] },
  Instagram: { icon: "📷", score: 80, dataCollection: 8, tracking: 9, thirdParty: 7, retention: 7, permissions: 8, risks: ["Continuous location tracking", "Facial recognition", "Retains deleted content"] },
  TikTok: { icon: "🎵", score: 90, dataCollection: 10, tracking: 9, thirdParty: 8, retention: 8, permissions: 9, risks: ["Keystroke patterns", "Clipboard access", "Biometric collection"] },
  WhatsApp: { icon: "💬", score: 65, dataCollection: 6, tracking: 7, thirdParty: 8, retention: 5, permissions: 6, risks: ["Metadata shared with Meta", "Contact list collection", "Location data retained"] },
  Amazon: { icon: "🛒", score: 75, dataCollection: 8, tracking: 7, thirdParty: 7, retention: 6, permissions: 7, risks: ["Purchase history tracking", "Alexa voice retention", "Cross-device tracking"] },
  Google: { icon: "🔍", score: 82, dataCollection: 9, tracking: 9, thirdParty: 7, retention: 8, permissions: 8, risks: ["Search history tracked", "Location always collected", "Cross-service aggregation"] },
  Snapchat: { icon: "👻", score: 72, dataCollection: 7, tracking: 7, thirdParty: 6, retention: 6, permissions: 7, risks: ["Snap Map location", "Facial data collection", "Metadata storage"] },
  Signal: { icon: "🔒", score: 15, dataCollection: 2, tracking: 1, thirdParty: 1, retention: 1, permissions: 2, risks: ["Minimal metadata only"] },
  Telegram: { icon: "✈️", score: 35, dataCollection: 3, tracking: 3, thirdParty: 2, retention: 3, permissions: 3, risks: ["Cloud chats not E2E encrypted", "Phone number required"] },
  Discord: { icon: "🎮", score: 68, dataCollection: 7, tracking: 6, thirdParty: 6, retention: 6, permissions: 7, risks: ["Message metadata", "Activity tracking", "Partner data sharing"] },
};

const appNames = Object.keys(appsData);

const getScoreColor = (score: number) => {
  if (score >= 8) return "text-destructive";
  if (score >= 5) return "text-warning";
  return "text-success";
};

const Compare = () => {
  const [app1, setApp1] = useState("Facebook");
  const [app2, setApp2] = useState("Signal");

  const d1 = appsData[app1];
  const d2 = appsData[app2];

  const categories = [
    { label: "Data Collection", k: "dataCollection" as const },
    { label: "Tracking", k: "tracking" as const },
    { label: "3rd Party Sharing", k: "thirdParty" as const },
    { label: "Data Retention", k: "retention" as const },
    { label: "Permission Scope", k: "permissions" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Compare</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Compare Apps</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how two apps stack up against each other in privacy risk.
          </p>
        </div>

        {/* Selectors */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
          <select
            value={app1}
            onChange={(e) => setApp1(e.target.value)}
            className="bg-card border border-border rounded-lg px-4 py-3 text-foreground font-semibold w-48"
          >
            {appNames.map((n) => <option key={n} value={n}>{appsData[n].icon} {n}</option>)}
          </select>
          <ArrowLeftRight className="w-6 h-6 text-primary" />
          <select
            value={app2}
            onChange={(e) => setApp2(e.target.value)}
            className="bg-card border border-border rounded-lg px-4 py-3 text-foreground font-semibold w-48"
          >
            {appNames.map((n) => <option key={n} value={n}>{appsData[n].icon} {n}</option>)}
          </select>
        </div>

        {/* Score Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[{ data: d1, name: app1 }, { data: d2, name: app2 }].map(({ data, name }) => (
            <div key={name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{data.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
              </div>
              <div className="text-center mb-4">
                <div className={`text-5xl font-bold font-mono ${data.score >= 70 ? "text-destructive" : data.score >= 40 ? "text-warning" : "text-success"}`}>
                  {data.score}%
                </div>
                <div className="text-sm text-muted-foreground mt-1">Risk Score</div>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full rounded-full ${data.score >= 70 ? "bg-destructive" : data.score >= 40 ? "bg-warning" : "bg-success"}`}
                  style={{ width: `${data.score}%` }}
                />
              </div>
              <div className="space-y-1">
                {data.risks.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/80 bg-destructive/5 rounded p-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-destructive mt-0.5 shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Category Comparison Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary/30 p-4 font-semibold text-sm">
            <div className="text-foreground">Category</div>
            <div className="text-center text-foreground">{app1}</div>
            <div className="text-center text-foreground">{app2}</div>
          </div>
          {categories.map((cat) => (
            <div key={cat.label} className="grid grid-cols-3 p-4 border-t border-border items-center">
              <div className="text-sm text-muted-foreground">{cat.label}</div>
              <div className={`text-center font-bold font-mono ${getScoreColor(d1[cat.k])}`}>{d1[cat.k]}/10</div>
              <div className={`text-center font-bold font-mono ${getScoreColor(d2[cat.k])}`}>{d2[cat.k]}/10</div>
            </div>
          ))}
          <div className="grid grid-cols-3 p-4 border-t border-border bg-secondary/20 items-center">
            <div className="text-sm font-semibold text-foreground">Overall Risk</div>
            <div className={`text-center font-bold font-mono text-lg ${d1.score >= 70 ? "text-destructive" : d1.score >= 40 ? "text-warning" : "text-success"}`}>{d1.score}%</div>
            <div className={`text-center font-bold font-mono text-lg ${d2.score >= 70 ? "text-destructive" : d2.score >= 40 ? "text-warning" : "text-success"}`}>{d2.score}%</div>
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">🏆 Verdict</h3>
          {d1.score === d2.score ? (
            <p className="text-muted-foreground">Both apps have equal risk scores.</p>
          ) : (
            <p className="text-muted-foreground">
              <span className="text-success font-bold">{d1.score < d2.score ? app1 : app2}</span> is safer with a{" "}
              <span className="font-mono font-bold">{Math.abs(d1.score - d2.score)}%</span> lower risk score than{" "}
              <span className="text-destructive font-bold">{d1.score >= d2.score ? app1 : app2}</span>.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
