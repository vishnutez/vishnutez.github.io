interface Article {
  title: string;
  date: string;
  description: string;
  link?: string;
}

interface TechnicalArticlesSectionProps {
  articles: Article[];
  theme: 'dark' | 'light';
}

export function TechnicalArticlesSection({ articles, theme }: TechnicalArticlesSectionProps) {
  return (
    <div className="space-y-8">
      <h2 className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Technical Articles</h2>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'bg-[#2d2d2d] hover:bg-[#2d2d2d]' 
                : 'bg-white hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className={`flex-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{article.title}</h3>
              <span className="text-[#FF4500] flex-shrink-0">{article.date}</span>
            </div>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{article.description}</p>
            {article.link && (
              <a
                href={article.link}
                className="text-[#FF4500] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more ...
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}