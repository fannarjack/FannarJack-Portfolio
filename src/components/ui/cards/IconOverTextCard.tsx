import Image from 'next/image';
import CardBase from './CardBase';
import ThemedIcon from '../ThemedIcon';

interface Section {
  icon: string;
  text?: string;
  href?: string;
}

interface IconOverTextCardProps {
  header?: string;
  section: Section[];
}

export default function IconOverTextCard({
  header,
  section,
}: IconOverTextCardProps) {
  return (
    <CardBase>
      {header && (
        <div className="flex justify-center mb-6">
          <h3>{header}</h3>
        </div>
      )}
      <div className="flex justify-between items-end text-center">
        {section.map((item, index) => {
          const baseSize = item.icon.includes('Dev') ? 'large' : 'normal';

          const content = (
            <>
              <div className="relative">
                <ThemedIcon
                  name={item.icon}
                  alt={item.text || `Icon ${index}`}
                  className={`object-contain ${
                    baseSize === 'large'
                      ? 'w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8'
                      : 'w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7'
                  }`}
                />
              </div>
              <span className="text-xs md:text-sm lg:text-base font-light text-[var(--foreground-paragraph)]">
                {item.text}
              </span>
            </>
          );

          if (item.href) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 md:space-y-3"
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 md:space-y-3"
            >
              {content}
            </div>
          );
        })}
      </div>
    </CardBase>
  );
}
