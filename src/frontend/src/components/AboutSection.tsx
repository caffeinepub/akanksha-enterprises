import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Committed to providing the highest quality scrap trading services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Fair Pricing',
      description: 'Competitive rates and transparent pricing for all materials'
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'Building long-term relationships based on trust and reliability'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            About Us
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground">
            Led by <span className="font-semibold text-foreground">Bhupendra Singh Chandel</span>, AKANKSHA ENTERPRISES has established itself as a trusted name in the scrap trading industry. We specialize in dealing with all types of scrap materials, providing comprehensive solutions for businesses and individuals alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
