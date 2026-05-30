// src/components/ProcessTimeline.tsx
import React, { useState } from 'react';
import { processSteps } from '../data/portfolioData';
import { CheckCircle2, ChevronRight } from 'lucide-react';



export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 border-t border-border-faint bg-neutral-50/50 relative">
      {/* Decorative dot background just for this section */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block">
            METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
            How I Ship Value
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-xl">
            A structured, repeatable approach built for velocity and reliability. I balance product strategy (PM thinking) with rigorous execution (engineering).
          </p>
        </div>

        {/* Process Timeline Block */}
        <div className="hidden lg:block relative mt-20">
          {/* Horizontal Connection Line */}
          <div className="absolute top-[27px] left-[50px] right-[50px] h-[2px] bg-border-faint z-0">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-hidden"
                >
                  {/* Step Bubble */}
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent border-accent text-surface shadow-md shadow-accent/20 scale-110' 
                        : isPassed 
                          ? 'bg-surface border-accent text-accent' 
                          : 'bg-surface border-border-faint text-text-secondary group-hover:border-neutral-400 group-hover:text-text-primary'
                    }`}
                  >
                    {isPassed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span className="text-sm font-bold font-mono">{step.number}</span>
                    )}
                  </div>

                  {/* Title & Micro tag */}
                  <span 
                    className={`mt-4 text-base font-semibold tracking-tight transition-colors duration-200 ${
                      isActive ? 'text-accent' : 'text-text-primary group-hover:text-accent'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Interactive Content Card */}
          <div className="mt-12 bg-surface border border-border-faint shadow-2xs rounded-xl p-8 max-w-3xl mx-auto transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-sm bg-accent/10 text-accent uppercase">
                Phase {processSteps[activeStep].number}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-text-secondary" />
              <h3 className="text-lg font-bold text-text-primary">
                {processSteps[activeStep].title}
              </h3>
            </div>
            <p className="text-text-secondary text-base leading-relaxed">
              {processSteps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8 mt-10">
          {processSteps.map((step, idx) => (
            <div key={step.title} className="flex gap-4">
              {/* Left Bar */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border border-border-faint bg-surface flex items-center justify-center shrink-0">
                  <span className="text-xs font-mono font-bold text-text-secondary">{step.number}</span>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="w-[1px] bg-border-faint grow my-2"></div>
                )}
              </div>

              {/* Right Content */}
              <div className="pb-4 space-y-1.5">
                <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
