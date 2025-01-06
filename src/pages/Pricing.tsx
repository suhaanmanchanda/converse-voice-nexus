const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg bg-secondary/50 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Starter</h2>
            <p className="text-3xl font-bold mb-6">$99<span className="text-lg text-muted-foreground">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                1 AI Voice Agent
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Basic Analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                5 Integrations
              </li>
            </ul>
            <button className="w-full primary-button">Get Started</button>
          </div>
          
          <div className="p-8 rounded-lg bg-primary text-white">
            <h2 className="text-2xl font-semibold mb-4">Professional</h2>
            <p className="text-3xl font-bold mb-6">$299<span className="text-lg opacity-80">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span>✓</span>
                3 AI Voice Agents
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                Advanced Analytics
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                Unlimited Integrations
              </li>
            </ul>
            <button className="w-full bg-white text-primary hero-button">Get Started</button>
          </div>

          <div className="p-8 rounded-lg bg-secondary/50 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-3xl font-bold mb-6">Custom</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Unlimited AI Voice Agents
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Custom Analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Custom Solutions
              </li>
            </ul>
            <button className="w-full primary-button">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;