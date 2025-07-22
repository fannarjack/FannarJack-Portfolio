'use client';

import CenteredLayout from '@/components/layout/shared/CenteredLayout';
import Aurora from '@/components/ui/AuroraBackground';
import SimpleTextCard from '@/components/ui/cards/SimpleTextCard';
import ThemedIcon from '@/components/ui/ThemedIcon';
import Image from 'next/image';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  console.log(mousePosition);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /*
  ================================================================
    ************** THINGS TO FIX BEFORE DEPLOYMENT **************
    - Navbar
    - aurora
    - kaupa lén
    - deploy?
  ================================================================
  */

  return (
    <CenteredLayout>
      {/* Add top spacing */}
      <div className="mt-[124px] lg:mt-[124px] flex flex-col items-center">
        <div className="w-[261px] h-[343px] md:w-[350px] md:h-[450px] lg:w-[438px] lg:h-[500px] mb-6">
          <Image
            priority
            src="/img/PicOfMe2.png"
            alt="Pic of me ;)"
            width={500}
            height={500}
            className="object-cover  z-10 aspect-3/2 h-full w-full"
          />
        </div>
      </div>
      <div className="text-center ">
        <h1 className="whitespace-nowrap transform -translate-x-6 lg:-translate-x-16">
          Fannar Hrafn
        </h1>
        <h1 className="whitespace-nowrap -mt-6 lg:-mt-12 transform translate-x-4  lg:translate-x-16">
          <span className="light">Jack Hilmarsson</span>
        </h1>
        <p className="mt-4">Frontend Web Developer based in Iceland</p>
      </div>

      <div className="mt-22">
        <h3 className="mb-5">About Me</h3>
        <SimpleTextCard
          text="Hey there! I'm Fannar, a web development student from Reykjavík, Iceland.
            I've been diving into the world of coding for about a year now, turning ideas into interactive, functional websites.
            It's been an exciting journey, and I'm eager to keep learning and growing as I build my skills."
        />
      </div>

      <div className="">
        <h3 className="mb-5">Skills & Focus</h3>
        <SimpleTextCard text="I'm currently working with JavaScript, TypeScript, React, Angular, HTML/SCSS and Tailwind and I'm excited to keep exploring new technologies as I go." />
      </div>

      <div>
        <h3 className="mb-5">Projects</h3>
        <div className="flex flex-col gap-4">
          <SimpleTextCard
            header="Charity Finder"
            text="A Charity Finder website for the icelandic we development championship made in 2 days / Won 1st place."
            link="https://web-competition-lemon.vercel.app/"
          />
          <SimpleTextCard
            header="Nordur"
            text="This project is an interactive and visually immersive website that explores the rich heritage of Norse mythology and Icelandic folklore. View in mobile preferably."
            link="https://nordur.netlify.app/"
          />
        </div>
      </div>

      <div className="text-center overflow-hidden mt-6">
        <h1 className="mr-10 lg:mr-20  whitespace-nowrap">Get In</h1>
        <h1 className="ml-10 mt-[-16px] md:mt-[-8px] lg:ml-20 lg:mt-[-48px] whitespace-nowrap">
          <span className="light">Touch</span>
        </h1>
      </div>

      <div className="my-8 flex flex-col gap-8">
        <a
          href="mailto:fannarjack@gmail.com"
          className="underline decoration-[#99999959] underline-offset-8 text-[var(--foreground-paragraph)] text-xl font-light md:text-2xl lg:text-3xl break-all"
        >
          Fannarjack@gmail.com
        </a>

        <div className="flex justify-between">
          <a
            href="https://www.linkedin.com/in/fannar-jack-995ab8268"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center text-[var(--foreground-paragraph)] md:text-xl lg:text-2xl"
          >
            <ThemedIcon
              name="Linkedin"
              alt="LinkedIn"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2"
            />
            LinkedIn
          </a>

          <a
            href="https://github.com/fannarjack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center text-[var(--foreground-paragraph)] md:text-xl lg:text-2xl"
          >
            <ThemedIcon
              name="Github"
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2"
            />
            GitHub
          </a>
        </div>
      </div>

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
