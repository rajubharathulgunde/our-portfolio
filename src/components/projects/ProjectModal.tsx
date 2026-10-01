import React from 'react';
import { Modal } from '../ui/Modal';
import { ProjectItem } from '../../models/projectsData';
import { CheckCircle2, ArrowRight, ExternalLink, Calendar, User, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={!!project}
      onClose={onClose}
      title={project.title}
      subtitle={`${project.category} · Delivered in ${project.duration} (${project.year})`}
      maxWidth="xl"
    >
      <div className="space-y-6">
        {/* Tagline / Overview */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
          <p className="font-body text-sm font-semibold text-emerald-950">
            {project.tagline}
          </p>
          <p className="font-body text-xs sm:text-sm text-emerald-900/80 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-emerald-950/10 text-center shadow-xs"
            >
              <span className="font-display font-bold text-lg sm:text-2xl text-emerald-950 block">
                {m.value}
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-emerald-800/70 uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Business Outcome */}
        <div className="space-y-2">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Demonstrated Business Impact</span>
          </h4>
          <p className="font-body text-sm text-emerald-900/85 bg-accent-yellow/20 p-3 rounded-xl border border-yellow-400/30">
            {project.outcome}
          </p>
        </div>

        {/* Core Architecture Features */}
        <div className="space-y-2.5">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-950">
            Engineered Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 rounded-lg bg-emerald-50/40 text-xs text-emerald-950 font-body"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-800/80 font-bold">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-emerald-950/5 text-emerald-950 text-xs font-mono font-medium border border-emerald-950/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-emerald-950/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-emerald-800/80 hover:text-emerald-950 cursor-pointer"
          >
            Close
          </button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              onOpenContact(project.title);
            }}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Build Something Similar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
