import { motion } from 'framer-motion';
import { servicesData } from '../../models/servicesData';
import { Card } from '../ui/Card';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';

export const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <SectionHeading>
          <HoverText text="What We Do" />
        </SectionHeading>
        <BodyText className="mt-4 max-w-2xl mx-auto">
          We leverage modern technology and smart automation to build solutions that help your business grow.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverLift={true} className="h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} ${service.textColor || 'text-canvas'}`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-display font-bold text-2xl text-emerald-900 mb-3">
                  <HoverText text={service.title} />
                </h3>
                <p className="font-body text-emerald-900/70 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};