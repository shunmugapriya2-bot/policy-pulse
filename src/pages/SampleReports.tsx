import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const getGrade = (score: number) => {
  if (score >= 85) return { grade: "E", color: "text-destructive", bg: "bg-destructive/10" };
  if (score >= 70) return { grade: "D", color: "text-destructive", bg: "bg-destructive/10" };
  if (score >= 55) return { grade: "C", color: "text-warning", bg: "bg-warning/10" };
  if (score >= 40) return { grade: "B", color: "text-primary", bg: "bg-primary/10" };
  return { grade: "A", color: "text-success", bg: "bg-success/10" };
};

const apps = [
  { name: "TikTok", icon: "🎵", score: 90, desc: "Aggressive data collection including keystroke patterns, clipboard data, and biometric information." },
  { name: "Facebook", icon: "📘", score: 85, desc: "Extensive tracking across sites, stores data even without an account, shares with third parties." },
  { name: "Google", icon: "🔍", score: 82, desc: "Cross-service data aggregation, location history, search tracking, voice recordings stored." },
  { name: "Instagram", icon: "📷", score: 80, desc: "Continuous location data collection, ad behavior tracking, retains deleted content." },
  { name: "Amazon", icon: "🛒", score: 75, desc: "Purchase history tracking, Alexa voice data retention, cross-device tracking." },
  { name: "Snapchat", icon: "👻", score: 72, desc: "Location tracking via Snap Map, facial recognition data, stores metadata of snaps." },
  { name: "X (Twitter)", icon: "🐦", score: 70, desc: "Tracks browsing behavior, shares data with advertisers, collects device identifiers." },
  { name: "WhatsApp", icon: "💬", score: 65, desc: "Shares metadata with Meta, collects contact lists, retains location sharing data." },
  { name: "LinkedIn", icon: "💼", score: 63, desc: "Tracks professional activity, shares data with recruiters and advertisers." },
  { name: "YouTube", icon: "▶️", score: 78, desc: "Watch history tracking, ad personalization, voice data from comments read aloud." },
  { name: "Reddit", icon: "🤖", score: 58, desc: "Tracks browsing within the app, collects device info, third-party ad tracking." },
  { name: "Pinterest", icon: "📌", score: 55, desc: "Collects browsing data for ad targeting, tracks pins and searches." },
  { name: "Spotify", icon: "🎧", score: 60, desc: "Listening habits tracked, shares data with advertisers, collects location." },
  { name: "Netflix", icon: "🎬", score: 50, desc: "Viewing history tracked, device info collected, minimal third-party sharing." },
  { name: "Uber", icon: "🚗", score: 73, desc: "Real-time location tracking, trip history stored, shares data with partners." },
  { name: "Telegram", icon: "✈️", score: 35, desc: "Minimal data collection, end-to-end encryption in secret chats, open-source client." },
  { name: "Signal", icon: "🔒", score: 15, desc: "Minimal metadata collection, end-to-end encryption, open-source, no ads." },
  { name: "Discord", icon: "🎮", score: 68, desc: "Collects message metadata, tracks activity, shares data with partners." },
  { name: "Zoom", icon: "📹", score: 62, desc: "Collects meeting metadata, device info, attention tracking controversy." },
  { name: "Microsoft", icon: "🪟", score: 70, desc: "Telemetry data collection, cross-service tracking, diagnostic data." },
];

const SampleReports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Sample Reports</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            App & Website Privacy Grades
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pre-analyzed privacy risk scores for the most popular apps and websites.
            Grades range from <span className="text-success font-bold">A (Safest)</span> to <span className="text-destructive font-bold">E (Most Dangerous)</span>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {apps.map((app) => {
            const { grade, color, bg } = getGrade(app.score);
            return (
              <div
                key={app.name}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{app.icon}</span>
                    <h3 className="font-semibold text-foreground">{app.name}</h3>
                  </div>
                  <div className={`text-2xl font-bold font-mono ${color} ${bg} w-10 h-10 rounded-lg flex items-center justify-center`}>
                    {grade}
                  </div>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mb-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      app.score >= 70 ? "bg-destructive" : app.score >= 50 ? "bg-warning" : "bg-success"
                    }`}
                    style={{ width: `${app.score}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-mono font-bold ${color}`}>{app.score}% Risk</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{app.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to analyze an app not listed here?</p>
          <Link to="/analyzer">
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors glow-box">
              🔍 Analyze Custom App
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SampleReports;
