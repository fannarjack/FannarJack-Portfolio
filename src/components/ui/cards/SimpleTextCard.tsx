import CardBase from './CardBase';
import Link from 'next/link';

interface Section {
  label?: string;
  content?: string;
}

interface SimpleTextCardProps {
  header?: string;
  sections?: Section[];
  text?: string;
  link?: string; // Optional link
}

export default function SimpleTextCard({
  header,
  sections,
  text,
  link,
}: SimpleTextCardProps) {
  const cardInner = (
    <CardBase header={header}>
      {sections?.map((section, index) => (
        <p
          key={index}
          className="text-base text-[var(--foreground-paragraph)] font-sans text-[16px] mb-6"
        >
          <span className="font-extrabold">{section.label} </span>
          {section.content}
        </p>
      ))}

      {!sections && text && (
        <p className="text-base text-[var(--foreground-paragraph)] font-sans text-[16px]">
          {text}
        </p>
      )}
    </CardBase>
  );

  return link ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:pointer"
    >
      {cardInner}
    </Link>
  ) : (
    cardInner
  );
}
