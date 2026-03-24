import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "High Risk", value: 60 },
  { name: "Medium Risk", value: 25 },
  { name: "Low Risk", value: 15 },
];

const PIE_COLORS = ["hsl(0, 72%, 55%)", "hsl(35, 90%, 55%)", "hsl(145, 60%, 45%)"];

const barData = [
  { category: "Data Collection", score: 9 },
  { category: "Tracking", score: 8 },
  { category: "3rd Party Sharing", score: 7 },
  { category: "Data Retention", score: 6 },
  { category: "Permission Scope", score: 7 },
];

const getBarColor = (score: number) => {
  if (score >= 8) return "hsl(0, 72%, 55%)";
  if (score >= 6) return "hsl(35, 90%, 55%)";
  return "hsl(145, 60%, 45%)";
};

const RiskCharts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Pie Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Overall Risk Distribution</h3>
        <p className="text-sm text-muted-foreground mb-6">Average across analyzed apps</p>
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 40%, 10%)",
                  border: "1px solid hsl(222, 30%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(190, 100%, 95%)",
                  fontFamily: "Space Grotesk",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          {pieData.map((entry, i) => (
            <div key={entry.name} className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
              <span className="text-muted-foreground">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Risk Category Breakdown</h3>
        <p className="text-sm text-muted-foreground mb-6">Score out of 10 per category</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" horizontal={false} />
            <XAxis type="number" domain={[0, 10]} tick={{ fill: "hsl(210, 20%, 55%)", fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fill: "hsl(190, 100%, 95%)", fontSize: 12, fontFamily: "Space Grotesk" }}
              width={120}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 40%, 10%)",
                border: "1px solid hsl(222, 30%, 18%)",
                borderRadius: "8px",
                color: "hsl(190, 100%, 95%)",
                fontFamily: "Space Grotesk",
              }}
            />
            <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={24}>
              {barData.map((entry, index) => (
                <Cell key={`bar-${index}`} fill={getBarColor(entry.score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskCharts;
