import { useLocation, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Download, AlertTriangle, Target, ShoppingCart, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnalyzerResults from "@/components/AnalyzerResults";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dataMisuseItems = [
  { icon: Target, title: "Targeted Advertising", desc: "Your browsing habits and preferences are sold to advertisers who build detailed profiles to manipulate your purchasing decisions." },
  { icon: UserX, title: "Identity Profiling", desc: "Data from multiple sources is combined to create a shadow profile of your identity, habits, and vulnerabilities." },
  { icon: ShoppingCart, title: "Data Resale", desc: "Your personal information is packaged and sold to data brokers who trade in personal data on the open market." },
  { icon: AlertTriangle, title: "Behavioral Manipulation", desc: "Algorithms use your data to predict and influence your behavior, from political views to emotional states." },
];

const Results = () => {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) return <Navigate to="/analyzer" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <Link to="/analyzer">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Analyzer
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary glow-text">Risk Analysis</span>
          <span className="text-foreground"> — {result.name}</span>
        </h1>
        <p className="text-muted-foreground mb-10">Complete privacy risk assessment report</p>

        <AnalyzerResults result={result} />

        {/* How Your Data Can Be Misused */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            How Your Data Can Be Misused
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {dataMisuseItems.map((item) => (
              <div key={item.title} className="bg-destructive/5 border border-destructive/15 rounded-lg p-5 hover:border-destructive/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-destructive" />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
