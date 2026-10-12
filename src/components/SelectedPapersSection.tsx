import { useState } from 'react';

interface Paper {
  title: string;
  authors: string;
  venue: string;
  year: number;
  description: string;
  websiteLink?: string;
  pdfLink?: string;
  codeLink?: string;
  bibtex?: string;
  buttonOrder?: ('website' | 'code' | 'pdf' | 'bib')[];
}

interface SelectedPapersSectionProps {
  papers: Paper[];
  theme: 'dark' | 'light';
}

export function SelectedPapersSection({ papers, theme }: SelectedPapersSectionProps) {
  const [openBibtex, setOpenBibtex] = useState<number | null>(null);

  const toggleBibtex = (index: number) => {
    setOpenBibtex(openBibtex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <h3 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Selected Papers</h3>
      
      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border-l-4 border-[#FF4500] transition-colors ${
              theme === 'dark' 
                ? 'bg-[#2d2d2d] hover:bg-gray-750' 
                : 'bg-white hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <h4 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {paper.title}
            </h4>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {paper.authors}
            </p>
            <p className="text-[#FF4500] mb-3">
              {paper.venue} • {paper.year}
            </p>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {paper.description}
            </p>

            {/* Action buttons */}
            <div className="flex gap-3 mb-3">
              {((paper.buttonOrder ?? ['pdf', 'code', 'bib']) as string[]).map((kind) => {
                const buttonClass = `px-4 py-1.5 rounded-md border transition-colors font-mono text-sm ${
                    theme === 'dark'
                      ? 'border-white text-white hover:bg-[#FF4500] hover:border-[#FF4500]'
                      : 'border-gray-900 text-gray-900 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white'
                  }`;
                if (kind === 'website' && paper.websiteLink) {
                  return (
                    <a key={kind} href={paper.websiteLink} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                      WEBSITE
                    </a>
                  );
                }
                if (kind === 'code' && paper.codeLink) {
                  return (
                    <a key={kind} href={paper.codeLink} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                      CODE
                    </a>
                  );
                }
                if (kind === 'pdf' && paper.pdfLink) {
                  return (
                    <a key={kind} href={paper.pdfLink} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                      PDF
                    </a>
                  );
                }
                if (kind === 'bib' && paper.bibtex) {
                  return (
                    <button key={kind} onClick={() => toggleBibtex(index)} className={buttonClass}>
                      BIB
                    </button>
                  );
                }
                return null;
              })}
            </div>

            {/* Bibtex content */}
            {paper.bibtex && openBibtex === index && (
              <div className={`mt-3 p-4 rounded-lg ${
                theme === 'dark' ? 'bg-[#2d2d2d]' : 'bg-gray-100'
              }`}>
                <pre className={`text-sm overflow-x-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {paper.bibtex}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
