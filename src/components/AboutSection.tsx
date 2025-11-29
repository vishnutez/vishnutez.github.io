import ReactMarkdown from 'react-markdown';

interface Update {
  date: string;
  content: string;
}

interface AboutSectionProps {
  bio: string;
  updates: Update[];
  theme: 'dark' | 'light';
}

export function AboutSection({ bio, updates, theme }: AboutSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className={`mb-4 text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About</h2>
        <div className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4500] hover:underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {bio}
          </ReactMarkdown>
        </div>
      </div>
      
      <div>
        <h3 className={`mb-4 text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Updates</h3>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="flex gap-4">
              <span className="text-[#FF4500] flex-shrink-0">{update.date}</span>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{update.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}