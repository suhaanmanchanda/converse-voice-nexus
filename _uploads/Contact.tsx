const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          <p className="text-muted-foreground text-center mb-12">
            Have questions about Converse.ai? Our team is here to help.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-secondary/50 rounded-md border border-muted"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-secondary/50 rounded-md border border-muted"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-secondary/50 rounded-md border border-muted"
                placeholder="How can we help?"
              ></textarea>
            </div>
            
            <button type="submit" className="w-full primary-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;