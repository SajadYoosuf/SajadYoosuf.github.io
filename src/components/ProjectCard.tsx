// src/components/ProjectCard.tsx
import React from 'react';
import { ArrowUpRight, Code, ShieldCheck, Target, User } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { title, period, problem, role, solution, outcome, stack, link } = project;

  return (
    <article className="group relative bg-surface border border-border-faint hover:border-accent hover:shadow-lg rounded-xl p-6 md:p-8 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 shadow-2xs">
      <div>
        {/* Header Block */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">
              {period}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-text-primary mt-1 group-hover:text-accent transition-colors duration-200">
              {title}
            </h3>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-50 border border-border-faint text-text-secondary hover:text-accent hover:bg-accent/5 group-hover:border-accent/30 transition-all duration-200 cursor-pointer shadow-3xs"
              aria-label={`Visit live project for ${title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Narrative Details */}
        <div className="space-y-4 text-sm leading-relaxed mb-6">
          {/* Business Problem */}
          <div className="flex gap-3">
            <Target className="w-4.5 h-4.5 text-text-secondary shrink-0 mt-0.5" />
            <p className="text-text-secondary">
              <strong className="text-text-primary font-semibold">Problem:</strong> {problem}
            </p>
          </div>

          {/* Engineer Role */}
          <div className="flex gap-3">
            <User className="w-4.5 h-4.5 text-text-secondary shrink-0 mt-0.5" />
            <p className="text-text-secondary">
              <strong className="text-text-primary font-semibold">My Role:</strong> {role}
            </p>
          </div>

          {/* Solution */}
          <div className="flex gap-3">
            <Code className="w-4.5 h-4.5 text-text-secondary shrink-0 mt-0.5" />
            <p className="text-text-secondary">
              <strong className="text-text-primary font-semibold">Solution:</strong> {solution}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Block */}
      <div>
        {/* Outcome Box */}
        <div className="flex gap-3 items-start p-4 rounded-lg bg-accent/3 border border-accent/10 mb-6 group-hover:bg-accent/5 transition-all duration-300">
          <ShieldCheck className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm font-semibold text-accent leading-relaxed">
            <span className="uppercase text-[9px] font-bold tracking-wider text-accent/70 block mb-0.5">Outcome</span>
            {outcome}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-md bg-neutral-100 border border-neutral-200/50 text-neutral-700 transition-colors hover:bg-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
