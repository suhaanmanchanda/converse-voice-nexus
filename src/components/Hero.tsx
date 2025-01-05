import { ArrowRight, MessageCircle, Headset, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary tracking-tight animate-fade-up">
            Transform Your Business with
            <span className="text-primary block mt-2">AI-Powered Voice Agents</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Never miss a lead again. Our AI voice agents handle customer calls 24/7,
            schedule appointments, and convert inquiries into sales opportunities.
          </p>
          <div className="mt-10 flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button className="primary-button">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="secondary-button">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Never miss a customer call, even outside business hours</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Headset className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart Conversations</h3>
            <p className="text-gray-600">Natural language processing for human-like interactions</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Multilingual Support</h3>
            <p className="text-gray-600">Communicate with customers in multiple languages</p>
          </div>
        </div>
      </div>
    </div>
  );
};