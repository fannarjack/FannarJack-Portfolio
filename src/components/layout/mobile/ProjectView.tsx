'use client';
import CenteredLayout from '@/components/layout/shared/CenteredLayout';
import Aurora from '@/components/ui/AuroraBackground';
import { ActionCard } from '@/components/ui/cards';
import ProjectCard from '@/components/ui/cards/ProjectCard';

export default function MobileView() {
  return (
    <>
      <CenteredLayout>
        <div className=" w-full text-left">
          <h1>Projects</h1>
        </div>

        <ProjectCard
          title="Patient Portal"
          description="During my internship, worked on a website for patients."
          year="2025"
          solo={true}
          techstack={[
            'Angular',
            'TypeScript',
            'Material UI',
            'SCSS',
            'Firebase',
          ]}
          links={{
            code: 'https://github.com/fannarjack/portfolio',
            live: '',
          }}
        />
        <ProjectCard
          title="Charity Finder"
          description="A Charity Finder website for the icelandic we development championship made in 2 days / Won 1st place."
          year="2025"
          solo={false}
          techstack={['React', 'TypeScript', 'TailwindCSS', 'Next.js']}
          links={{
            code: 'https://github.com/ln0185/WebCompetition',
            live: 'https://web-competition-lemon.vercel.app/',
          }}
        />
        <ProjectCard
          title="Nordur"
          description="This project is an interactive and visually immersive website that explores the rich heritage of Norse mythology and Icelandic folklore. View in mobile preferably."
          year="2024"
          solo={false}
          techstack={[
            'React',
            'TypeScript',
            'TailwindCSS',
            'Next.js',
            'Shadcn',
            'Animate.CSS',
          ]}
          links={{
            code: 'https://github.com/fannarjack/mod4-group-project',
            live: 'https://nordur.netlify.app/',
          }}
        />

        <ProjectCard
          title="My Portfolio"
          description="A personal portfolio site to showcase my projects and skills."
          year="2025"
          solo={true}
          techstack={[
            'React',
            'TypeScript',
            'TailwindCSS',
            'Next.js',
            'Framer Motion',
          ]}
          links={{
            code: 'https://github.com/fannarjack/portfolio',
            live: 'https://your-portfolio-site.com',
          }}
        />
        <ActionCard
          header="Want to Collaborate?"
          sections={[
            {
              content: "Let's build something amazing together",
            },
          ]}
          button="Get in touch"
        ></ActionCard>
        <div className="fixed inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <Aurora
            colorStops={['#7fffd4', '#66ffff', '#cc99ff']}
            blend={0.3}
            amplitude={0.8}
            speed={0.7}
          />
        </div>
      </CenteredLayout>
    </>
  );
}
