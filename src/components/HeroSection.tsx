import { Shield, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Shield Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shield className="w-20 h-20 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-primary">Privacy</span>
          <span className="text-foreground">Pulse</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
          Measure the Risk. Protect Your Identity.
        </p>
        <p className="text-sm md:text-base text-secondary-foreground/70 max-w-xl mx-auto mb-10 font-mono">
          "We Read The Policy So You Don't Risk Your Privacy."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/analyzer">
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-white">
              <Search className="w-5 h-5 mr-2" />
              Analyze App
            </Button>
          </Link>
          <Link to="/sample-reports">
            <Button variant="outline" size="lg" className="text-base px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Sample Reports
            </Button>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-sm">
          {[
            { label: "Apps Analyzed", value: "12,400+" },
            { label: "Policies Scanned", value: "8,200+" },
            { label: "Threats Detected", value: "45,000+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary glow-text font-mono">{stat.value}</div>
              <div className="text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
