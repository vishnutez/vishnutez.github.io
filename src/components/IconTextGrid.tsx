import { ReactNode } from 'react';

interface IconTextRow {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
}

interface IconTextGridProps {
  rows: IconTextRow[];
  theme: 'dark' | 'light';
  iconBorderColor?: string;
  iconColor?: string;
  horizontalGap?: number;
  verticalGap?: number;
}

export function IconTextGrid({
  rows,
  theme,
  iconBorderColor = '#FF4500',
  iconColor = '#FF4500',
  horizontalGap = 16,
  verticalGap = 8,
}: IconTextGridProps) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: `${horizontalGap}px`,
        rowGap: `${verticalGap}px`,
        alignItems: 'center',
        justifyItems: 'start',
      }}
    >
      {rows.map((row, index) => (
        <>
          {/* Icon cell */}
          <div
            key={`icon-${index}`}
            style={{
              border: `1px solid ${iconBorderColor}`,
              borderRadius: '8px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: iconColor,
            }}
          >
            {row.icon}
          </div>
          
          {/* Text cell */}
          <span
            key={`text-${index}`}
            onClick={row.onClick}
            style={{
              cursor: row.onClick ? 'pointer' : 'default',
              display: 'block',
              textAlign: 'left',
            }}
            className={`text-base ${
              row.onClick ? 'hover:text-[#FF4500] hover:underline transition-colors' : ''
            } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            {row.text}
          </span>
        </>
      ))}
    </div>
  );
}

