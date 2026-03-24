import { AlertTriangle } from "lucide-react";

const dangers = [
  "Your location data can be used for targeted ads and surveillance.",
  "Your browsing history may be used for behavioral profiling.",
  "Your contacts may be stored and sold for marketing purposes.",
  "Deleted data may still be retained in backup servers indefinitely.",
  "Voice recordings can be analyzed and stored without clear consent.",
  "Cross-app tracking builds a shadow profile of your online identity.",
];

const DataMisuse = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-destructive font-mono text-sm tracking-widest uppercase mb-3">
            ⚠ Warning
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Your Data Can Be Misused
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Here's what companies can do with the permissions you grant them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {dangers.map((danger, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-destructive/5 border border-destructive/15 rounded-lg p-4 hover:border-destructive/30 transition-colors duration-300"
            >
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80">{danger}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataMisuse;
