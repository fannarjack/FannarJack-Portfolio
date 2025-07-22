import CardBase from './CardBase';
interface Section {
  label?: string;
  content?: string;
}

interface ActionCardProps {
  header?: string;
  sections?: Section[];
  button?: string;
}
export default function ActionCard({
  header,
  sections,
  button,
}: ActionCardProps) {
  return (
    <>
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
        <div className="flex justify-center">
          <button
            style={{
              borderRadius: '32px',
              border: '1px solid var(--button-border-color)',
              background:
                'linear-gradient(109deg, rgba(0, 0, 0, 0) 3.09%, rgba(255, 255, 255, 0) 97.06%)',
              boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
            className="inline-flex py-2 px-4 md:px-6 lg:px-8 justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md hover:scale-105 transition-transform duration-200"
          >
            <a
              href="mailto:fannarjack@gmail.com"
              className="text-[var(--foreground-paragraph)] text-sm md:text-base lg:text-lg"
            >
              {button}
            </a>
          </button>
        </div>
      </CardBase>
    </>
  );
}
