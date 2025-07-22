import CardBase from './CardBase';
import ThemedIcon from '../ThemedIcon';
import ProjectButtons from '../ProjectButtons';
import { useTheme } from '@/app/hooks/useTheme';

interface ProjectLinks {
  live?: string;
  code?: string;
}

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  year: string;
  solo: boolean;
  techstack: string[];
  links: ProjectLinks;
  isLast?: boolean;
}

export default function BigProjectCard({
  index,
  title,
  description,
  year,
  solo,
  techstack,
  links,
  isLast,
}: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <article
      className={`w-[95%] max-w-full flex flex-col lg:flex-row gap-6 lg:gap-12 pb-16 ${
        !isLast ? 'border-b border-[var(--border)]' : ''
      }
      ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
    >
      {/* Left Column - Index and Year */}
      <div className="flex-shrink-0 lg:w-24">
        <div className="sticky top-24">
          <div className="text-6xl font-light mb-2 text-muted">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="text-sm text-muted">{year}</div>
        </div>
      </div>

      {/* Main Content - Takes up remaining space */}
      <div className="flex-1 min-w-0 space-y-6">
        <header>
          <h3 className="text-3xl font-semibold mb-4">{title}</h3>
          <p className="text-base leading-relaxed min-h-[4.5rem] flex items-start">
            {description}
          </p>
        </header>

        {/* Tech Stack */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <ThemedIcon name="Dev" alt="Tech stack icon" className="w-4 h-4" />
            <span className="text-muted text-sm uppercase tracking-wider">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techstack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#EEE] bg-[#4C4C4C] text-white px-3 py-1 text-xs lg:px-3 lg:py-2 lg:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Solo / Group + Year Icons */}
        <section className="flex items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <ThemedIcon name="Travel" alt="Year icon" className="w-4 h-4" />
            <span className="text-muted">{year}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemedIcon name="Group" alt="Team icon" className="w-4 h-4" />
            <span className="text-muted">{solo ? 'Single' : 'Group'}</span>
          </div>
        </section>
      </div>

      {/* Right Column - Buttons */}
      <div className="flex-shrink-0 lg:w-64">
        <div className="sticky top-24">
          <ProjectButtons links={links} />
        </div>
      </div>
    </article>
  );
}

/*
<article
      className={`grid lg:grid-cols-12 gap-12 pb-16 ${
        !isLast ? 'border-b border-[var(--border)]' : ''
      }`}
    >

      <div className="lg:col-span-2">
        <div className="sticky top-24">
          <div className="text-6xl font-light mb-2 text-muted">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="text-sm text-muted">{year}</div>
        </div>
      </div>


      <div className="lg:col-span-7 space-y-6">
        <header>
          <h3 className="text-3xl font-semibold mb-4">{title}</h3>
          <p className="text-base leading-relaxed">{description}</p>
        </header>


        <section>
          <div className="flex items-center gap-2 mb-2">
            <ThemedIcon name="Dev" alt="Tech stack icon" className="w-4 h-4" />
            <span className="text-muted text-sm uppercase tracking-wider">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techstack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#EEE] bg-[#4C4C4C] text-white px-3 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>


        <section className="flex items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <ThemedIcon name="Travel" alt="Year icon" className="w-4 h-4" />
            <span className="text-muted">{year}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemedIcon name="Group" alt="Team icon" className="w-4 h-4" />
            <span className="text-muted">{solo ? 'Single' : 'Group'}</span>
          </div>
        </section>
      </div>


      <div className="lg:col-span-3">
        <div className="sticky top-24">
          <ProjectButtons links={links} />
        </div>
      </div>
    </article>
    */
