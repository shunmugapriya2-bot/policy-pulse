import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, AlertTriangle, Eye, Lock } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "What is a Privacy Policy?",
    content:
      "A privacy policy is a legal document that explains how a company collects, uses, stores, and shares your personal data. It's required by law in most countries, but very few users actually read them. Studies show that the average privacy policy takes 18 minutes to read — and most people just click 'Accept'.",
  },
  {
    icon: AlertTriangle,
    title: "Why Should You Read Privacy Policies?",
    items: [
      "Companies may sell your data to third-party advertisers",
      "Your location may be tracked 24/7 even when the app is closed",
      "Deleted content may still be stored on company servers",
      "Your contacts and call logs may be uploaded without explicit consent",
      "Voice recordings from smart assistants are often stored and reviewed",
      "Cross-app tracking builds a 'shadow profile' of your entire online identity",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Common Dangerous Permissions",
    items: [
      "📍 Location — Tracks your physical movements",
      "📷 Camera — Can access your camera at any time",
      "🎤 Microphone — Can listen to ambient audio",
      "📇 Contacts — Reads and uploads your entire contact list",
      "📂 Storage — Full access to your files and photos",
      "📞 Phone — Can read call logs and device identifiers",
    ],
  },
];

const tips = [
  "Review app permissions before installing",
  "Revoke unused permissions in your phone settings",
  "Use privacy-focused browsers like Firefox or Brave",
  "Enable 'Do Not Track' in your browser settings",
  "Use a VPN to protect your browsing data",
  "Regularly audit which apps have access to your accounts",
  "Read privacy policies of apps you use daily",
  "Use disposable email addresses for signups",
  "Turn off ad personalization in Google/Apple settings",
  "Delete old accounts you no longer use",
];

const PrivacyAwareness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Awareness</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Privacy Awareness</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Understanding your digital privacy rights is the first step toward protecting your personal data.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {sections.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
              </div>
              {s.content && <p className="text-muted-foreground leading-relaxed">{s.content}</p>}
              {s.items && (
                <ul className="space-y-2">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 bg-destructive/5 border border-destructive/10 rounded-md p-3">
                      <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Tips */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-success" />
            <h2 className="text-xl font-bold text-foreground">Tips to Protect Your Data</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <div key={i} className="bg-success/5 border border-success/15 rounded-lg p-4 text-sm text-foreground flex items-start gap-2">
                <span className="text-success font-bold">✓</span>
                {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyAwareness;
