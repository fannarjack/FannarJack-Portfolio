import CardBase from './CardBase';
import ThemedIcon from '../ThemedIcon';
import ProjectButtons from '../ProjectButtons';

interface ProjectLinks {
  live?: string;
  code?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  solo: boolean;
  techstack: string[];
  links: ProjectLinks;
}

export default function ProjectCard({
  title,
  description,
  year,
  solo,
  techstack,
  links,
}: ProjectCardProps) {
  return (
    <CardBase header={title}>
      <p className="mb-3">{description}</p>

      <div className="flex items-center gap-8 text-sm ">
        <div className="flex items-center gap-2">
          <ThemedIcon name="Travel" alt="Year icon" className="w-4 h-4" />
          <p className="text-[var(--foreground-paragraph)] text-">{year}</p>
        </div>
        <div className="flex items-center gap-2">
          <ThemedIcon name="Group" alt="Team icon" className="w-4 h-4" />
          <p className="text-[var(--foreground-paragraph)]">
            {solo ? 'Single' : 'Group'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 my-2">
        <ThemedIcon name="Dev" alt="Tech stack icon" className="w-4 h-4" />
        <p className="text-[var(--foreground-paragraph)]">Tech Stack</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {techstack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#EEE] bg-[#4C4C4C] text-white px-3 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <ProjectButtons links={links} />
    </CardBase>
  );
}
