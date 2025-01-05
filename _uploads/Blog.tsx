const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12">Latest Updates</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg bg-secondary/50 overflow-hidden">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">March 15, 2024</p>
              <h2 className="text-xl font-semibold mb-4">The Future of AI Voice Technology</h2>
              <p className="text-muted-foreground mb-4">Exploring the latest developments in AI voice technology and its impact on business communication.</p>
              <button className="text-primary hover:text-primary/90">Read More →</button>
            </div>
          </div>

          <div className="rounded-lg bg-secondary/50 overflow-hidden">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">March 10, 2024</p>
              <h2 className="text-xl font-semibold mb-4">Customer Success Story: Global Tech</h2>
              <p className="text-muted-foreground mb-4">How Global Tech improved customer satisfaction by 45% using Converse.ai.</p>
              <button className="text-primary hover:text-primary/90">Read More →</button>
            </div>
          </div>

          <div className="rounded-lg bg-secondary/50 overflow-hidden">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">March 5, 2024</p>
              <h2 className="text-xl font-semibold mb-4">AI Voice Agents vs Traditional Support</h2>
              <p className="text-muted-foreground mb-4">Comparing the efficiency and cost-effectiveness of AI voice agents with traditional support methods.</p>
              <button className="text-primary hover:text-primary/90">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;