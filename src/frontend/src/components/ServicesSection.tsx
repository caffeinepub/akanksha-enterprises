import ServiceCard from './ServiceCard';
import { 
  Wrench, 
  FileText, 
  Trash2, 
  Cpu, 
  Car, 
  Boxes,
  Factory,
  Zap
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: 'Metal Scrap',
      description: 'Iron, steel, aluminum, copper, brass, and all ferrous and non-ferrous metals'
    },
    {
      icon: FileText,
      title: 'Paper Scrap',
      description: 'Newspapers, cardboard, office paper, books, and all paper-based materials'
    },
    {
      icon: Trash2,
      title: 'Plastic Scrap',
      description: 'PET, HDPE, PVC, LDPE, PP, PS, and other plastic materials'
    },
    {
      icon: Cpu,
      title: 'Electronic Waste',
      description: 'Computers, mobile phones, circuit boards, and electronic components'
    },
    {
      icon: Car,
      title: 'Automotive Scrap',
      description: 'Vehicle parts, batteries, tires, and automotive components'
    },
    {
      icon: Boxes,
      title: 'Industrial Scrap',
      description: 'Manufacturing waste, machinery parts, and industrial materials'
    },
    {
      icon: Factory,
      title: 'Construction Waste',
      description: 'Building materials, concrete, wood, and construction debris'
    },
    {
      icon: Zap,
      title: 'Electrical Scrap',
      description: 'Wires, cables, transformers, and electrical equipment'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground">
            We deal in all types of scrap materials. Whatever your scrap trading needs, we have the expertise and resources to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
