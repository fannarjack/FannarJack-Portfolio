import ThemedIcon from '@/components/ui/ThemedIcon';

interface ProjectButtonsProps {
  links: {
    code?: string;
    live?: string;
  };
}

export default function ProjectButtons({ links }: ProjectButtonsProps) {
  return (
    <div className="flex justify-center gap-2">
      <a
        href={links.code || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-8 py-1 rounded border  text-sm transition-all
    ${
      links.code
        ? ' border-[#bdbbbb] text-[var(--foreground)] hover:opacity-80 cursor-pointer'
        : 'border-[#666] text-[#999] opacity-20 cursor-not-allowed pointer-events-none'
    }`}
      >
        <ThemedIcon name="Github" alt="GitHub icon" className="w-4 h-4" />
        Code
      </a>

      <a
        href={links.live || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-8 py-1 rounded border text-sm transition-all
    ${
      links.live
        ? 'bg-transparent border-[#bdbbbb]  text-[var(--foreground)] hover:opacity-80 cursor-pointer'
        : 'border-[#666] text-[#999] opacity-20 cursor-not-allowed pointer-events-none'
    }`}
      >
        <ThemedIcon name="External-link" alt="Demo icon" className="w-4 h-4" />
        Demo
      </a>
    </div>
  );
}
