import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Analyzer from "./pages/Analyzer";
import Results from "./pages/Results";
import SampleReports from "./pages/SampleReports";
import HowItWorksPage from "./pages/HowItWorksPage";
import PrivacyAwareness from "./pages/PrivacyAwareness";
import Compare from "./pages/Compare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analyzer" element={<Analyzer />} />
          <Route path="/results" element={<Results />} />
          <Route path="/sample-reports" element={<SampleReports />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/privacy-awareness" element={<PrivacyAwareness />} />
          <Route path="/compare" element={<Compare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
