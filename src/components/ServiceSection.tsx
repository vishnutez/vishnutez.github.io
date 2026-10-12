import React from 'react';

interface ServiceItem {
  title: string;
  detail: string;
}

interface ServiceSectionProps {
  service: ServiceItem[];
  theme: 'dark' | 'light';
}

export function ServiceSection({ service, theme }: ServiceSectionProps) {
  return (
    <div>
      <h2 className={`mb-6 text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Professional Service &amp; Honors</h2>

      <div>
        {service.map((item, index) => (
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
              <h3 className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
