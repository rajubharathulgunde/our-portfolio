import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, ProjectItem } from '../../models/projectsData';
import { Card } from '../ui/Card';
import { SectionHeading, BodyText, HoverText } from '../ui/Typography';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Zap, Layers, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onOpenContact: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-yellow border border-yellow-500/30 text-emerald-950 text-xs font-bold font-mono tracking-wide uppercase mb-4">
          <Layers className="w-3.5 h-3.5 text-emerald-900" />
          <span>Curated Portfolio</span>
        </div>
        <SectionHeading>
          <HoverText text="Selected Works & Case Studies" />
        </SectionHeading>
        <BodyText className="mt-4 text-emerald-900/75">
          Real products built for real businesses. Take a look at recent engineering across web apps, native mobile tools, and automated pipelines.
        </BodyText>
      </div>

      {/* Dynamic Bento Box Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projectsData.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Card
                hoverLift={true}
                variant="material"
                onClick={() => setSelectedProject(project)}
                className="h-full flex flex-col p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-emerald-950/10 hover:border-emerald-600/40 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Top Info Bar */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-emerald-900/60 font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-900 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Project Title with Coolors.co dynamic hover effect */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-emerald-950 mb-3 tracking-tight group-hover:text-emerald-800 transition-colors">
                  <HoverText text={project.title} />
                </h3>

                {/* Description */}
                <p className="font-body text-emerald-900/75 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {project.tagline}
                </p>

                {/* Quantitative Metric Pill Strip */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/50 mb-6">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <span className="font-display font-bold text-base sm:text-lg text-emerald-950 block">
                        {metric.value}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-800/70 uppercase tracking-tight block truncate">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips & Action Link */}
                <div className="pt-4 border-t border-emerald-950/10 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-medium text-emerald-900/80 bg-neutral-100/80 px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-mono font-medium text-emerald-900/60 px-1 py-0.5">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="font-body text-xs font-semibold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1">
                    <span>Inspect Case Study</span>
                    <span className="text-sm">→</span>
                  </span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
