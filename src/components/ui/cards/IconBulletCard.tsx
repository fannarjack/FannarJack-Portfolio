import CardBase from './CardBase';
import ThemedIcon from '../ThemedIcon';

interface Section {
  label?: string;
  content?: string;
  icon?: string;
}

interface IconBulletCardProps {
  header?: string;
  sections?: Section[];
}

export default function IconBulletCard({
  header,
  sections,
}: IconBulletCardProps) {
  return (
    <CardBase header={header}>
      {sections?.map((section, index) => (
        <div key={index} className="flex flex-col gap-2 mb-6">
          <div className="flex items-start gap-4">
            {section.icon && (
              <div
                className="relative mt-1"
                style={{ width: '18px', height: '18px' }}
              >
                <ThemedIcon
                  name={section.icon}
                  alt={section.label || `Icon ${index}`}
                  className="object-contain w-[18px] h-[18px]"
                />
              </div>
            )}

            <span className="font-bold mt-0.5 text-[var(--foreground-paragraph)]">
              {section.label}
            </span>
          </div>
          <p className="text-base text-[var(--foreground-paragraph)] font-sans text-[16px]">
            {section.content}
          </p>
        </div>
      ))}
    </CardBase>
  );
}
