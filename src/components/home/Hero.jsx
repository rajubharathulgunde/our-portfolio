import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { DisplayHeading, Highlight, BodyText } from '../ui/Typography';
import { Badge } from '../ui/Badge';

export const Hero = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge color="bg-accent-yellow" textColor="text-emerald-900">
          <span className="mr-2">✨</span> Launching Soon
        </Badge>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 mb-6"
      >
        <DisplayHeading>
          We build digital <br className="hidden md:block" />
          experiences that <Highlight>perform</Highlight>.
        </DisplayHeading>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <BodyText>
          From modern web development and high-performance apps to WhatsApp automation and Google Business setup. We help you establish and scale your online presence.
        </BodyText>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Button variant="primary">
          View Our Services <span className="ml-2">→</span>
        </Button>
        <Button variant="outline">
          Meet the Team
        </Button>
      </motion.div>

    </section>
  );
};