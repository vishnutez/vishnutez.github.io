import { Github, Mail, Linkedin, Twitter, Landmark } from 'lucide-react';
import { SiGooglescholar } from 'react-icons/si';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { IconTextGrid } from './IconTextGrid';

interface ProfileSidebarProps {
  imageSrc: string;
  name: string;
  title: string;
  links: {
    github?: string;
    scholar?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
  theme: 'dark' | 'light';
}

export function ProfileSidebar({ imageSrc, name, title, links, theme }: ProfileSidebarProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-48 h-48 rounded-lg overflow-hidden">
        <ImageWithFallback
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-center">
        <div className="space-y-4">
          {/* Name + title */}
          <div>
            <h2
              className={`mb-1 text-2xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="font-bold">{name.split(' ')[0]}</span>
              {' '}{name.split(' ').slice(1).join(' ')}
            </h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              {title}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#FF4500]' : 'text-gray-600 hover:text-[#FF4500]'
                }`}
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            
            {links.scholar && (
              <a
                href={links.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#FF4500]' : 'text-gray-600 hover:text-[#FF4500]'
                }`}
              >
                <SiGooglescholar className="w-6 h-6" />
              </a>
            )}
            
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#FF4500]' : 'text-gray-600 hover:text-[#FF4500]'
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            
            {links.twitter && (
              <a
                href={links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#FF4500]' : 'text-gray-600 hover:text-[#FF4500]'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
          </div>

          {/* University and Email grid */}
          <div>
            <IconTextGrid
              rows={[
                {
                  icon: <Landmark className="w-6 h-6" />,
                  text: 'PhD at Texas A&M University',
                },
                ...(links.email
                  ? [
                      {
                        icon: <Mail className="w-6 h-6" />,
                        text: links.email.replace('mailto:', ''),
                        onClick: () => (window.location.href = links.email!),
                      },
                    ]
                  : []),
              ]}
              theme={theme}
              horizontalGap={16}
              verticalGap={8}
            />
          </div>
        </div>
      </div>
    </div>
  );
}