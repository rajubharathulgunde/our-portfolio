import React from 'react';
import { Modal } from '../ui/Modal';
import { TeamMember } from '../../models/teamData';
import { GraduationCap, Briefcase, Award, CheckCircle2, Mail, ExternalLink, Code } from 'lucide-react';
import { Button } from '../ui/Button';

interface TeamCredentialsModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const TeamCredentialsModal: React.FC<TeamCredentialsModalProps> = ({
  member,
  isOpen,
  onClose,
  onOpenContact
}) => {
  if (!member) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${member.name} — Credentials & Track Record`}
      subtitle={`${member.role} · Verified Background & Capabilities`}
      maxWidth="xl"
    >
      <div className="space-y-6">
        {/* Bio & Philosophy Banner */}
        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60">
          <p className="font-body text-sm text-emerald-950 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Professional Experience Section */}
        {member.experience && member.experience.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-950 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span>Industry & Professional Experience</span>
            </h4>
            <div className="space-y-3">
              {member.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-emerald-950/10 space-y-1 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display font-bold text-base text-emerald-950">
                      {exp.title}
                    </h5>
                    <span className="font-mono text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="font-body text-xs font-semibold text-emerald-800">
                    {exp.company}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-emerald-900/80 pt-1 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {member.education && member.education.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-950 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>Formal Education & Degrees</span>
            </h4>
            <div className="space-y-2.5">
              {member.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-emerald-950/10 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-display font-bold text-sm sm:text-base text-emerald-950">
                      {edu.degree}
                    </h5>
                    {edu.year && (
                      <span className="font-mono text-xs text-emerald-700/80 font-medium">
                        {edu.year}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-emerald-800/80 mt-0.5">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="font-body text-xs text-emerald-900/75 mt-1 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Achievements */}
        {member.achievements && member.achievements.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-emerald-950 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Key Milestones & Achievements</span>
            </h4>
            <div className="space-y-2">
              {member.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200/40 text-xs sm:text-sm text-emerald-950 font-body"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Full Spectrum */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-800/80 font-bold flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-emerald-600" />
            <span>Technical Capabilities</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-lg bg-emerald-100/70 text-emerald-950 text-xs font-mono font-medium border border-emerald-300/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-emerald-950/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-emerald-800/80 hover:text-emerald-950 cursor-pointer"
          >
            Close Profile
          </button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
          >
            Discuss Project with {member.name.split(' ')[0]}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
