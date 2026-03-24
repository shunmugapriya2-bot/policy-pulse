import { useState } from "react";
import { Shield, Search, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const simulatedApps: Record<string, {
  overallScore: number;
  risks: { text: string; level: "high" | "medium" | "low" }[];
  categories: { category: string; score: number }[];
  summary: string;
}> = {
  facebook: {
    overallScore: 85,
    risks: [
      { text: "Stores your data even without an account", level: "high" },
      { text: "Tracks browsing history across sites", level: "high" },
      { text: "Uses third-party cookies for ad targeting", level: "medium" },
      { text: "Tracks activity across websites and apps", level: "medium" },
      { text: "Shares data with affiliated companies", level: "high" },
    ],
    categories: [
      { category: "Data Collection", score: 9 },
      { category: "Tracking", score: 9 },
      { category: "3rd Party Sharing", score: 8 },
      { category: "Data Retention", score: 7 },
      { category: "Permission Scope", score: 8 },
    ],
    summary: "Facebook collects extensive personal data including browsing habits, location, and device information. Data is shared with third parties for advertising and may be retained indefinitely.",
  },
  instagram: {
    overallScore: 80,
    risks: [
      { text: "Collects location data continuously", level: "high" },
      { text: "Tracks ad behavior & preferences", level: "high" },
      { text: "Shares data with third parties", level: "medium" },
      { text: "Retains deleted content on servers", level: "medium" },
      { text: "Facial recognition on photos", level: "high" },
    ],
    categories: [
      { category: "Data Collection", score: 8 },
      { category: "Tracking", score: 9 },
      { category: "3rd Party Sharing", score: 7 },
      { category: "Data Retention", score: 7 },
      { category: "Permission Scope", score: 8 },
    ],
    summary: "Instagram tracks location, browsing, and ad interaction data extensively. Photos and deleted content may be retained on servers, and data is shared with Meta's advertising network.",
  },
  amazon: {
    overallScore: 75,
    risks: [
      { text: "Uses third-party advertising cookies", level: "medium" },
      { text: "Can modify terms without notice", level: "medium" },
      { text: "Extensive purchase history tracking", level: "high" },
      { text: "Voice data retention from Alexa", level: "high" },
      { text: "Cross-device tracking", level: "medium" },
    ],
    categories: [
      { category: "Data Collection", score: 8 },
      { category: "Tracking", score: 7 },
      { category: "3rd Party Sharing", score: 7 },
      { category: "Data Retention", score: 6 },
      { category: "Permission Scope", score: 7 },
    ],
    summary: "Amazon tracks purchase history, browsing behavior, and Alexa voice data. Terms can change without notice and data is shared with advertising partners.",
  },
  whatsapp: {
    overallScore: 65,
    risks: [
      { text: "Shares metadata with Meta/Facebook", level: "high" },
      { text: "Collects contact lists from your phone", level: "medium" },
      { text: "Stores message metadata (not content)", level: "medium" },
      { text: "Location sharing data retained", level: "medium" },
    ],
    categories: [
      { category: "Data Collection", score: 6 },
      { category: "Tracking", score: 7 },
      { category: "3rd Party Sharing", score: 8 },
      { category: "Data Retention", score: 5 },
      { category: "Permission Scope", score: 6 },
    ],
    summary: "WhatsApp encrypts messages end-to-end but shares metadata with Meta. Contact lists and location data are collected and retained.",
  },
  tiktok: {
    overallScore: 90,
    risks: [
      { text: "Collects device identifiers and keystroke patterns", level: "high" },
      { text: "Accesses clipboard data without consent", level: "high" },
      { text: "Extensive biometric data collection", level: "high" },
      { text: "Data transferred to servers in multiple countries", level: "high" },
      { text: "Tracks browsing within in-app browser", level: "medium" },
    ],
    categories: [
      { category: "Data Collection", score: 10 },
      { category: "Tracking", score: 9 },
      { category: "3rd Party Sharing", score: 8 },
      { category: "Data Retention", score: 8 },
      { category: "Permission Scope", score: 9 },
    ],
    summary: "TikTok has one of the most aggressive data collection practices, including keystroke patterns, clipboard data, and biometric information. Data may be transferred internationally.",
  },
  google: {
    overallScore: 82,
    risks: [
      { text: "Tracks search history and web activity", level: "high" },
      { text: "Location history always collected", level: "high" },
      { text: "Cross-service data aggregation", level: "high" },
      { text: "Ad personalization based on all activity", level: "medium" },
      { text: "Voice recordings from Assistant stored", level: "medium" },
    ],
    categories: [
      { category: "Data Collection", score: 9 },
      { category: "Tracking", score: 9 },
      { category: "3rd Party Sharing", score: 7 },
      { category: "Data Retention", score: 8 },
      { category: "Permission Scope", score: 8 },
    ],
    summary: "Google aggregates data across all its services to build detailed user profiles. Search history, location, and voice data are collected and used for ad targeting.",
  },
};

const Analyzer = () => {
  const [mode, setMode] = useState<"app" | "policy">("app");
  const [appName, setAppName] = useState("");
  const [policyText, setPolicyText] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAppSearch = () => {
    const key = appName.trim().toLowerCase();
    const data = simulatedApps[key];
    if (!data) {
      toast({
        title: "App not found",
        description: `Try: ${Object.keys(simulatedApps).join(", ")}. Or paste a privacy policy for custom analysis.`,
        variant: "destructive",
      });
      return;
    }
    navigate("/results", { state: { result: { name: appName.trim(), ...data } } });
  };

  const handlePolicyAnalysis = async () => {
    if (policyText.trim().length < 50) {
      toast({ title: "Too short", description: "Please paste at least 50 characters of policy text.", variant: "destructive" });
      return;
    }

    setLoading(true);

    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analyze-policy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ policyText: policyText.trim() }),
      });

      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || "Analysis failed");
      }

      const data = await resp.json();
      navigate("/results", { state: { result: { name: "Custom Policy", ...data } } });
    } catch (e) {
      toast({ title: "Analysis failed", description: e instanceof Error ? e.message : "Unknown error", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Analyzer</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary glow-text">Privacy</span>
            <span className="text-foreground"> Analyzer</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Search a popular app or paste a privacy policy for instant AI-powered risk analysis.
          </p>
        </div>

        {/* Mode Tabs */}
        <div className="flex gap-2 mb-8 max-w-md mx-auto">
          <Button
            variant={mode === "app" ? "hero" : "heroOutline"}
            onClick={() => setMode("app")}
            className="flex-1"
          >
            <Search className="w-4 h-4 mr-2" />
            Upload Screenshot
          </Button>
          <Button
            variant={mode === "policy" ? "hero" : "heroOutline"}
            onClick={() => setMode("policy")}
            className="flex-1"
          >
            <FileText className="w-4 h-4 mr-2" />
            Paste Policy
          </Button>
        </div>

        {/* Input Area */}
        {mode === "app" ? (
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-foreground font-semibold mb-2">Upload Screenshot</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Upload a screenshot of the privacy policy page for analysis.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="border border-border bg-secondary p-2 rounded"
              />
              <Button variant="hero" onClick={() => toast({ title: "Upload feature not implemented", description: "Screenshot analysis is coming soon.", variant: "warning" })}>
                <Search className="w-4 h-4 mr-2" />
                Upload and Analyze
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-foreground font-semibold mb-2">Paste Privacy Policy</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Paste the privacy policy text and our AI will analyze it for risks.
            </p>
            <Textarea
              placeholder="Paste privacy policy text here (minimum 50 characters)..."
              value={policyText}
              onChange={(e) => setPolicyText(e.target.value)}
              className="min-h-[200px] bg-secondary border-border mb-4 font-mono text-sm"
            />
            <Button variant="hero" onClick={handlePolicyAnalysis} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Analyze Policy
                </>
              )}
            </Button>
          </div>
        )}

        {/* Loading animation */}
        {loading && (
          <div className="flex flex-col items-center mt-12 gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <Shield className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-muted-foreground font-mono text-sm animate-pulse">Scanning privacy policy...</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Analyzer;
