import { Link, Network, Plug, ArrowRight } from "lucide-react";

export const Integrations = () => {
  const integrations = [
    {
      title: "CRM Systems",
      description: "Seamlessly connect with popular CRM platforms to manage customer relationships effectively",
      icon: <Link className="w-6 h-6 text-primary" />,
      platforms: ["Salesforce", "HubSpot", "Zoho CRM"]
    },
    {
      title: "Communication Tools",
      description: "Integrate with your existing communication stack for unified customer interactions",
      icon: <Network className="w-6 h-6 text-primary" />,
      platforms: ["Slack", "Microsoft Teams", "Zoom"]
    },
    {
      title: "Business Systems",
      description: "Connect with your core business tools to streamline operations",
      icon: <Plug className="w-6 h-6 text-primary" />,
      platforms: ["SAP", "Oracle", "Microsoft Dynamics"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground">Integrations</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Connect With Your Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your workflow by integrating Converse.ai with your existing business tools and systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-secondary/50 rounded-lg p-8 hover:bg-secondary/70 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {integration.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{integration.title}</h3>
              <p className="text-muted-foreground mb-6">{integration.description}</p>
              <div className="space-y-2">
                {integration.platforms.map((platform, pIndex) => (
                  <div key={pIndex} className="text-sm text-muted-foreground">
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="primary-button">
            Explore All Integrations <ArrowRight className="w-4 h-4 ml-2 inline" />
          </button>
        </div>
      </div>
    </section>
  );
};