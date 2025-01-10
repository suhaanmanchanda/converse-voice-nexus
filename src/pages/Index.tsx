import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { ValueProposition } from "@/components/ValueProposition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Hero />
      <ValueProposition />
      <Features />
      <Solutions />
      <Integrations />
    </div>
  );
};

export default Index;