import { Check, X } from "lucide-react";

export const ValueProposition = () => {
  return (
    <div className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Traditional vs converse.ai</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Approach */}
          <div className="bg-background/50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Traditional Approach</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <X className="text-red-500" size={20} />
                <span>Manual call scheduling and follow-ups</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="text-red-500" size={20} />
                <span>Limited availability and time zones</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="text-red-500" size={20} />
                <span>Inconsistent messaging</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="text-red-500" size={20} />
                <span>High operational costs</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="text-red-500" size={20} />
                <span>Language barriers</span>
              </div>
            </div>
          </div>

          {/* converse.ai Solution */}
          <div className="bg-background p-8 rounded-lg border border-primary">
            <h3 className="text-2xl font-semibold mb-6">converse.ai Solution</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="text-primary" size={20} />
                <span>24/7 AI-powered voice assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-primary" size={20} />
                <span>Global accessibility</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-primary" size={20} />
                <span>Consistent brand messaging</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-primary" size={20} />
                <span>Cost-effective scaling</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-primary" size={20} />
                <span>Multilingual support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};