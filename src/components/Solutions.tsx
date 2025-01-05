import { ArrowRight } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      category: "E-commerce",
      title: "AI Post Order Review Voice System",
      description: "Our AI Automated Voice System that calls a customer after the product has been delivered to generate a review. If the review is positive, AI will use customer information to recommend a similar product for the user to purchase.",
      features: ["Gather Data", "Generate Sales", "Convince Customer"],
      image: "/lovable-uploads/f75e7f20-d8cd-4b35-a2cb-c9b1abe3432a.png"
    },
    {
      category: "Any Business",
      title: "AI Customer Support Team Voice System",
      description: "Our AI Customer team handles all parts of customer support via departments. If a customer asks 3 questions about a specific product, AI will recommend that product with a discount code.",
      features: ["24/7 Customer Support", "Multiple AI Voice Agents", "Free Sales"],
      image: "/lovable-uploads/0fe99ccb-fe6a-4364-8117-4a2f88dbb721.png"
    },
    {
      category: "Any Business",
      title: "AI Lead Nurturing Voice System",
      description: "Our AI Lead Nurturing Voice system isn't a regular AI Lead Generation Agent. A system that not only generates its own leads but also nurtures them through various messaging systems and outbound calls.",
      features: ["Automatically Books Meetings", "Fit For Any Business Out There", "Guaranteed Success In Booking Meetings"],
      image: "/lovable-uploads/ea4f7f0f-e432-44e4-a757-f1a109abbc77.png"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground">Services</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Example Solutions:</h2>
          <p className="text-muted-foreground">
            Discover Advanced AI Voice Systems that can handle every day tasks and save money!
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            View all solutions
          </button>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <span className="text-sm text-muted-foreground">{solution.category}</span>
                <h3 className="text-3xl font-bold">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className={`rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img src={solution.image} alt={solution.title} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};