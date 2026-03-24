import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

interface RiskItem {
  text: string;
  level: "high" | "medium" | "low";
}

interface AppAnalysisCardProps {
  name: string;
  icon: string;
  riskScore: number;
  risks: RiskItem[];
}

const riskConfig = {
  high: {
    icon: AlertTriangle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    border: "border-destructive/20",
  },
  medium: {
    icon: AlertCircle,
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  low: {
    icon: CheckCircle,
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
};

const getRiskLabel = (score: number) => {
  if (score >= 75) return { text: "High Risk", color: "text-destructive", glow: "glow-danger" };
  if (score >= 50) return { text: "Medium Risk", color: "text-warning", glow: "" };
  return { text: "Low Risk", color: "text-success", glow: "" };
};

const AppAnalysisCard = ({ name, icon, riskScore, risks }: AppAnalysisCardProps) => {
  const riskLabel = getRiskLabel(riskScore);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        </div>
        <div className={`text-right ${riskLabel.glow}`}>
          <div className={`text-2xl font-bold font-mono ${riskLabel.color}`}>{riskScore}%</div>
          <div className={`text-xs font-medium ${riskLabel.color}`}>{riskLabel.text}</div>
        </div>
      </div>

      {/* Risk meter */}
      <div className="w-full h-2 bg-muted rounded-full mb-5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            riskScore >= 75 ? "bg-destructive" : riskScore >= 50 ? "bg-warning" : "bg-success"
          }`}
          style={{ width: `${riskScore}%` }}
        />
      </div>

      {/* Risk items */}
      <div className="space-y-2">
        {risks.map((risk, i) => {
          const config = riskConfig[risk.level];
          const Icon = config.icon;
          return (
            <div key={i} className={`flex items-start gap-2 p-2 rounded-md ${config.bg} border ${config.border}`}>
              <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${config.color}`} />
              <span className="text-sm text-foreground/80">{risk.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppAnalysisCard;
