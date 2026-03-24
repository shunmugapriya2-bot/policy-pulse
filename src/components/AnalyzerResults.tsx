import AppAnalysisCard from "./AppAnalysisCard";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface AnalysisResult {
  name: string;
  overallScore: number;
  risks: { text: string; level: "high" | "medium" | "low" }[];
  categories: { category: string; score: number }[];
  summary: string;
}

const PIE_COLORS = ["hsl(0, 72%, 55%)", "hsl(35, 90%, 55%)", "hsl(145, 60%, 45%)"];

const getBarColor = (score: number) => {
  if (score >= 8) return "hsl(0, 72%, 55%)";
  if (score >= 6) return "hsl(35, 90%, 55%)";
  return "hsl(145, 60%, 45%)";
};

const AnalyzerResults = ({ result }: { result: AnalysisResult }) => {
  const highRisks = result.risks.filter(r => r.level === "high").length;
  const medRisks = result.risks.filter(r => r.level === "medium").length;
  const lowRisks = result.risks.filter(r => r.level === "low").length;

  const pieData = [
    { name: "High Risk", value: highRisks || 1 },
    { name: "Medium Risk", value: medRisks || 1 },
    { name: "Low Risk", value: lowRisks || 1 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Summary */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Analysis Summary</h3>
        <p className="text-muted-foreground">{result.summary}</p>
      </div>

      {/* Card */}
      <AppAnalysisCard
        name={result.name}
        icon="🔍"
        riskScore={result.overallScore}
        risks={result.risks.slice(0, 6)}
      />

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={4} dataKey="value" stroke="none">
                {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "hsl(222, 40%, 10%)", border: "1px solid hsl(222, 30%, 18%)", borderRadius: "8px", color: "hsl(190, 100%, 95%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-2">
            {pieData.map((entry, i) => (
              <div key={entry.name} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                <span className="text-muted-foreground">{entry.name} ({entry.value})</span>
              </div>
            ))}
          </div>
        </div>

        {result.categories.length > 0 && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Category Breakdown</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={result.categories} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" horizontal={false} />
                <XAxis type="number" domain={[0, 10]} tick={{ fill: "hsl(210, 20%, 55%)", fontSize: 12 }} />
                <YAxis type="category" dataKey="category" tick={{ fill: "hsl(190, 100%, 95%)", fontSize: 12 }} width={130} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(222, 40%, 10%)", border: "1px solid hsl(222, 30%, 18%)", borderRadius: "8px", color: "hsl(190, 100%, 95%)" }} />
                <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={20}>
                  {result.categories.map((entry, i) => <Cell key={i} fill={getBarColor(entry.score)} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyzerResults;
