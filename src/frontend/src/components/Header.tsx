import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/logo-akanksha.dim_300x300.png" 
            alt="AKANKSHA ENTERPRISES Logo" 
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground">
              AKANKSHA ENTERPRISES
            </span>
            <span className="text-xs text-muted-foreground">Scrap Trading Solutions</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Services
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            size="sm"
            className="ml-2"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="w-full"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
