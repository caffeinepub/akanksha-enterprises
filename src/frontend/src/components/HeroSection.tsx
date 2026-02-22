import { Button } from '@/components/ui/button';
import { ArrowRight, Recycle } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div className="absolute inset-0 bg-[url('/assets/generated/hero-scrap.dim_1920x800.png')] bg-cover bg-center opacity-10" />
      
      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Recycle className="h-4 w-4" />
            <span>Trusted Scrap Trading Partner</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            AKANKSHA ENTERPRISES
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Your reliable partner for all types of scrap trading. We deal in metal, paper, plastic, electronic waste, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToContact} className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
