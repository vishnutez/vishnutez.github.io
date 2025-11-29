import { useState } from 'react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  description: string;
  pdfLink?: string;
  codeLink?: string;
  bibtex?: string;
}

interface PublicationsSectionProps {
  publications: Publication[];
  theme: 'dark' | 'light';
}

export function PublicationsSection({ publications, theme }: PublicationsSectionProps) {
  const [openBibtex, setOpenBibtex] = useState<number | null>(null);

  const toggleBibtex = (index: number) => {
    setOpenBibtex(openBibtex === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <h2 className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Publications</h2>
      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
        For the full list of publications, please refer to <a 
          href="https://scholar.google.com/citations?hl=en&user=eQwm1OUAAAAJ" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF4500] hover:underline"
        >
          Google Scholar
        </a>.
      </p>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        (* indicates equal contribution)
      </p>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-4 border-[#FF4500] pl-6 py-2">
            <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{pub.title}</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {pub.authors}
            </p>
            <p className="text-[#FF4500] mb-3">
              {pub.venue} • {pub.year}
            </p>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {pub.description}
            </p>
            
            {/* Action buttons */}
            <div className="flex gap-3 mb-3">
              {pub.pdfLink && (
                <a
                  href={pub.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-1.5 rounded-md border transition-colors font-mono text-sm ${
                    theme === 'dark'
                      ? 'border-white text-white hover:bg-[#FF4500] hover:border-[#FF4500]'
                      : 'border-gray-900 text-gray-900 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white'
                  }`}
                >
                  PDF
                </a>
              )}
              {pub.codeLink && (
                <a
                  href={pub.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-1.5 rounded-md border transition-colors font-mono text-sm ${
                    theme === 'dark'
                      ? 'border-white text-white hover:bg-[#FF4500] hover:border-[#FF4500]'
                      : 'border-gray-900 text-gray-900 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white'
                  }`}
                >
                  CODE
                </a>
              )}
              {pub.bibtex && (
                <button
                  onClick={() => toggleBibtex(index)}
                  className={`px-4 py-1.5 rounded-md border transition-colors font-mono text-sm ${
                    theme === 'dark'
                      ? 'border-white text-white hover:bg-[#FF4500] hover:border-[#FF4500]'
                      : 'border-gray-900 text-gray-900 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white'
                  }`}
                >
                  BIB
                </button>
              )}
            </div>

            {/* Bibtex content */}
            {pub.bibtex && openBibtex === index && (
              <div className={`mt-3 p-4 rounded-lg ${
                theme === 'dark' ? 'bg-[#2d2d2d]' : 'bg-gray-100'
              }`}>
                <pre className={`text-sm overflow-x-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {pub.bibtex}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}