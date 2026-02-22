import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-6">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
