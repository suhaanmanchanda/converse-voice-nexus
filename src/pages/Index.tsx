import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Integrations } from "@/components/Integrations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Solutions />
      <Integrations />
    </div>
  );
};

export default Index;