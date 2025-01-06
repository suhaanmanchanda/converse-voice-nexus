import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Converse.ai
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </Link>
            <Link to="/integration" className="text-muted-foreground hover:text-foreground transition-colors">
              Integration
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-muted-foreground p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};