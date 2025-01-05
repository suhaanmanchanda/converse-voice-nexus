import { Bot, Brain, BarChart3, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Voice Agents",
      description: "Advanced conversational AI that handles customer interactions naturally and efficiently"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Learning",
      description: "Our AI continuously learns from interactions to improve response accuracy"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into customer interactions and business performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Integration",
      description: "Seamlessly connects with your existing business tools and workflows"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your business operations with our cutting-edge AI technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};