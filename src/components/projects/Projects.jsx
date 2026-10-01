import { motion } from 'framer-motion';
import { projectsData } from '../../models/projectsData';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 bg-surface rounded-3xl my-12 border border-neutral-gray/10">
      <div className="text-center mb-16">
        <SectionHeading>
          <HoverText text="Featured Projects" />
        </SectionHeading>
        <BodyText className="mt-4 max-w-2xl mx-auto">
          A look at our recent work across web development, mobile applications, and automation.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hoverLift={true} bgColor="bg-canvas" className="h-full flex flex-col group">
              
              {/* Category & Title */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-emerald-900 cursor-default">
                  <HoverText text={project.title} />
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-emerald-900/70 mb-8 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-neutral-gray/20">
                {project.techStack.map(tech => (
                  <Badge key={tech} color="bg-neutral-whisper" textColor="text-emerald-900/80">
                    {tech}
                  </Badge>
                ))}
              </div>
              
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};