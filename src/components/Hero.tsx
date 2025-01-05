import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-up">
            Transform Your Business with
            <span className="text-primary block mt-2">AI-Powered Voice Agents</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Never miss a lead again. Our AI voice agents handle customer calls 24/7,
            schedule appointments, and convert inquiries into sales opportunities.
          </p>
          <div className="mt-10 flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};