import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-primary" />
        <span className="font-semibold text-foreground">PrivacyPulse</span>
      </div>
      <p className="text-sm text-muted-foreground font-mono">
        © 2026 PrivacyPulse — Because Your Data Deserves Defense.
      </p>
    </div>
  </footer>
);

export default Footer;
