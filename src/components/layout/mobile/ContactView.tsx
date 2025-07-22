'use client';
import Aurora from '@/components/ui/AuroraBackground';
import {
  FormCard,
  IconBulletCard,
  IconOverTextCard,
} from '@/components/ui/cards';
import CenteredLayout from '../shared/CenteredLayout';

export default function Contact() {
  return (
    <CenteredLayout>
      <div className=" m w-full text-left">
        <h1>Get in Touch</h1>
      </div>

      <IconBulletCard
        header="Contact Info"
        sections={[
          {
            icon: 'Email',
            label: 'Email',
            content: 'Fannarjack@gmail.com',
          },
          {
            icon: 'Location',
            label: 'Location',
            content: 'Reykjavík, Iceland',
          },
          {
            icon: 'Clock',
            label: 'Response',
            content: 'Within 24H',
          },
        ]}
      ></IconBulletCard>

      <FormCard header="Start a Conversation"></FormCard>

      <IconOverTextCard
        header="Connect"
        section={[
          {
            icon: 'Github',
            text: 'Github',
            href: 'https://github.com/fannarjack',
          },
          {
            icon: 'Linkedin',
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/fannar-jack-995ab8268',
          },
          {
            icon: 'CV',
            text: ' My CV',
            href: '/img/FannarJack_CV.pdf',
          },
        ]}
      ></IconOverTextCard>
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
