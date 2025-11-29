import React from 'react';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  relevantCourses?: string[];
}

interface EducationSectionProps {
  education: Education[];
  theme: 'dark' | 'light';
}

export function EducationSection({ education, theme }: EducationSectionProps) {
  return (
    <div>
      <h2 className={`mb-6 text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Education</h2>
      
      <div>
        {education.map((edu, index) => (
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
              <h3 className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
              <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
              <p className="text-[#FF4500] mb-3">{edu.duration}</p>
              
              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                <div className="mt-3">
                  <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Relevant Courses:</p>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {edu.relevantCourses.join(' | ')}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
