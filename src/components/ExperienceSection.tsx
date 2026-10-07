import React from 'react';

interface Experience {
  role: string;
  organization: string;
  duration: string;
  description?: string;
}

interface ExperienceSectionProps {
  experience: Experience[];
  theme: 'dark' | 'light';
}

export function ExperienceSection({ experience, theme }: ExperienceSectionProps) {
  return (
    <div>
      <h2 className={`mb-6 text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</h2>

      <div>
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`relative pl-8 pb-6 last:border-l-0 ${
              theme === 'dark'
                ? 'border-l-1 border-gray-700'
                : 'border-l-1 border-gray-300'
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-0 w-4 h-4 rounded-full bg-[#FF4500] border-4 ${
                theme === 'dark' ? 'border-[#2d2d2d]' : 'border-gray-50'
              }`}
              style={{ left: '-8px' }}
            />

            <div>
              <h3 className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
              <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{exp.organization}</p>
              <p className="text-[#FF4500] mb-3">{exp.duration}</p>

              {exp.description && (
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
