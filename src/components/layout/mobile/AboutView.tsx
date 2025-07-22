'use client';
import CenteredLayout from '@/components/layout/shared/CenteredLayout';
import Aurora from '@/components/ui/AuroraBackground';
import {
  ActionCard,
  IconBulletCard,
  IconOverTextCard,
  SimpleTextCard,
} from '@/components/ui/cards';
import PhotoCarousel from '@/components/ui/PhotoCarousel';

export default function AboutPage() {
  const carouselImages = [
    '/img/Bodega.PNG',
    '/img/Fishing.JPG',
    '/img/SoloPic2.JPG',
    '/img/FishingLaughing.JPG',
    '/img/FiveGuardBW.JPG',
    '/img/FiveGuardGroup.JPG',
    '/img/Graduation.JPG',
    '/img/SoloPic_copy.JPG',
    '/img/FiveGuardSolo_fixed.JPG',
    '/img/LasPalmas_fixed.jpeg',
    '/img/Hiking_fixed.jpeg',
  ];

  return (
    <CenteredLayout>
      <div className=" m w-full text-left">
        <h1>About Me</h1>
      </div>

      <PhotoCarousel
        images={carouselImages}
        slideWidth={250}
        slideHeight={300}
        speed={10}
      ></PhotoCarousel>

      <IconOverTextCard
        section={[
          {
            icon: 'Working',
            text: '1+ Year Coding',
          },
          {
            icon: 'Location',
            text: 'Iceland',
          },
          {
            icon: 'Dev',
            text: 'Web Developer',
          },
        ]}
      ></IconOverTextCard>
      <SimpleTextCard
        header="Growth Through Code"
        sections={[
          {
            label: 'Getting Started:',
            content:
              ' I began learning web development at Reykjavík Academy of Web Development, building several hands on projects along the way.',
          },
          {
            label: 'Teamwork & Projects:',
            content:
              "I've worked in diverse teams, including a a project where Danish students visited Iceland I traveled to Las Palmas to collaborate with students from Denmark, Spain and Senegal on a cross-cultural team project.",
          },
          {
            label: 'Competition Win:',
            content:
              'I competed in Web Development category at the Icelandic National Skills Competition for Trades and Technical Professions, where my team took first place.',
          },
          {
            label: 'Internship & Growth:',
            content:
              ' I am currently interning at Kvikna Medical, where i quickly picked up Angular and contribute to real projects',
          },
        ]}
      ></SimpleTextCard>

      <IconBulletCard
        header="Beyond The Code"
        sections={[
          {
            icon: 'Travel',
            label: 'Love for travel',
            content:
              'I enjoy exploring new cultures and hope to work abroad soon.',
          },
          {
            icon: 'Outdoor',
            label: 'Outdoor Lifestyle',
            content:
              'Hiking, golf, fishing, hunting. Nothing beats fresh air and offline time',
          },
          {
            icon: 'International',
            label: 'Team Player',
            content:
              'I’ve worked with international teams and learned how to collaborate across cultures',
          },
          {
            icon: 'Movie',
            label: 'Relax & Recharge',
            content:
              'Whether it’s at the cinema or on the couch, movies are my way to unwind',
          },
        ]}
      ></IconBulletCard>

      <SimpleTextCard
        header="Technical Skills"
        sections={[
          {
            label: 'Languages & Markup:',
            content: ' Javascript, Typescript, HTML, CSS, SCSS',
          },
          {
            label: 'Frameworks & Libraries:',
            content:
              'React, Angular, Tailwind CSS, Shadcn UI, RxJS, Material UI',
          },
          {
            label: 'Tools & Platforms:',
            content:
              'Git & Github, BitBucket, VsCode, Zed, Figma, Slack, Teams, Vercel, Supabase',
          },
          {
            label: 'Concepts & Practices:',
            content:
              ' Responsive Design, Component based Architecture, Rest APIs, Reactive Programming, Version Control (Git), Accessibility (basic awareness)',
          },
          {
            label: 'Other Experience:',
            content: ' Contentful, Deployment (Vercel), SQL',
          },
        ]}
      ></SimpleTextCard>
      <ActionCard
        header="Let's Connect"
        sections={[
          {
            content:
              "I'm always excited to meet fellow developers, designers, and anyone passionate about technology.",
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
  );
}
