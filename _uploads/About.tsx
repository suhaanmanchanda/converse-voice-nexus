const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">About Converse.ai</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Converse.ai is revolutionizing business communication through advanced AI voice systems. Our platform enables businesses to automate and enhance their customer interactions while maintaining a personal touch.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              To transform business communication by making AI voice technology accessible, efficient, and human-centric.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground">
              To become the global leader in AI voice solutions, enabling businesses to provide exceptional customer experiences 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;