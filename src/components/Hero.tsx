import { ArrowRight, Check } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background flex items-center">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-up">
          AI Voice Solutions for
          <span className="block mt-2">forward-thinking businesses</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Boost sales, meetings, and more with our AI Voice System Solutions
        </p>
        
        <div className="mt-8 flex justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2">
            <Check className="text-primary" size={20} />
            <span className="text-foreground">AI Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-primary" size={20} />
            <span className="text-foreground">24/7 support</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-primary" size={20} />
            <span className="text-foreground">Lifetime updates</span>
          </div>
        </div>

        <div className="mt-10 flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors">
            Free AI Demo Call
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-md font-medium hover:bg-secondary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};