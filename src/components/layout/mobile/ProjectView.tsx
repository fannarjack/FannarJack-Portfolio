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
          description="Final Project for my studies, track trusted Telegram crypto callers, share memecoin/altcoin articles, and provide scam safety tips."
          year="2025"
          solo={true}
          techstack={[
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Contentful',
            'Lucide React',
          ]}
          links={{
            code: 'https://github.com/fannarjack/lokaverk',
            live: 'https://lokaverk.vercel.app/',
          }}
        />
        <ProjectCard
          title="Charity Finder"
          description="A Charity Finder website for the icelandic we development championship made in 2 days / Won 1st place."
          year="2025"
          solo={false}
          techstack={['React', 'TypeScript', 'TailwindCSS', 'Next.js']}
          links={{
            code: 'https://github.com/fannarjack/WebCompetition',
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
          title="Vefskólinn"
          description="Learning Management System (LMS) for Vefskóli at Tækniskóli. Features user registration, project tracking, feedback, and grading."
          year="2024"
          solo={false}
          techstack={[
            'Next.js',
            'React',
            'TypeScript',
            'Styled-Components',
            'Toast UI Calendar',
            'Framer Motion',
            'Lucide React',
          ]}
          links={{
            code: 'https://github.com/fannarjack/io.vefskoliv0',
            live: '',
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
