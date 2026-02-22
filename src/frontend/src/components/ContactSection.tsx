import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { useContactInfo } from '@/hooks/useQueries';

export default function ContactSection() {
  const { data: contactInfo } = useContactInfo();

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone 1',
      value: contactInfo?.phone1 || '8329880055',
      href: `tel:${contactInfo?.phone1 || '8329880055'}`
    },
    {
      icon: Phone,
      label: 'Phone 2',
      value: contactInfo?.phone2 || '9765729905',
      href: `tel:${contactInfo?.phone2 || '9765729905'}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo?.email || 'b11082004@gmail.com',
      href: `mailto:${contactInfo?.email || 'b11082004@gmail.com'}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo ? `${contactInfo.address}, ${contactInfo.pincode}` : 'Nagpur Narendra Nagar, 440015',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground">
            Have questions or need a quote? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Card key={index} className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm font-semibold text-foreground hover:text-primary transition-colors break-words"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-foreground break-words">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
