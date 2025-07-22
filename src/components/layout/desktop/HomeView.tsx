'use client';

import { useTheme } from '@/app/hooks/useTheme';
import Aurora from '@/components/ui/AuroraBackground';
import BigProjectCard from '@/components/ui/cards/BigProjectCard';
import HeroSection from '@/components/ui/HeroSection';
import ThemedIcon from '@/components/ui/ThemedIcon';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  console.log(mousePosition);
  const skills = [
    {
      category: 'Languages & Markup',
      items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS'],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        'React',
        'Angular',
        'Tailwind CSS',
        'Shadcn UI',
        'RxJS',
        'Material UI',
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        'Git & GitHub',
        'BitBucket',
        'VS Code',
        'Zed',
        'Figma',
        'Vercel',
        'Supabase',
      ],
    },
  ];

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
    - get the image to work properly - check if finished
    - mail in the get in touch ----- check if it works
    - Navbar
    - aurora
    - kaupa lén
    - deploy?
  ================================================================
  */

  return (
    <>
      <HeroSection />
      <div className="relative min-h-screen transition-colors duration-500">
        <div className="relative z-10">
          <div className="pt-20 max-w-5xl mx-auto px-8 py-20">
            <section className="mb-20">
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-2">
                  <div className="sticky top-24">
                    <div
                      className={`text-6xl font-light mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      01
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      Introduction
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-4xl font-light tracking-tight mb-6">
                    About Me
                  </h3>
                  <p
                    className={`text-lg font-light mb-8 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Hey there! I&#39;m Fannar, a web development student from
                    Reykjavík, Iceland. I&#39;ve been diving into the world of
                    coding for about a year now, turning ideas into interactive,
                    functional websites. It&#39;s been an exciting journey, and
                    I&#39;m eager to keep learning and growing as I build my
                    skills.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <div
                className={`border-t pt-16 transition-colors duration-500 ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-2">
                    <div className="sticky top-24">
                      <div
                        className={`text-6xl font-light mb-2 ${
                          isDark ? 'text-gray-400' : 'text-gray-700'
                        }`}
                      >
                        02
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        Skills
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-4xl font-light tracking-tight mb-6">
                          Technical Skills
                        </h3>
                        <p className="text-lg leading-relaxed font-light mb-8">
                          Technologies and tools I use to bring ideas to life,
                          from frontend frameworks to development tools.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup) => (
                          <div key={skillGroup.category}>
                            <h3 className="font-medium mb-4">
                              {skillGroup.category}
                            </h3>
                            <ul className="space-y-2 text-sm">
                              {skillGroup.items.map((skill) => (
                                <li
                                  key={skill}
                                  className={`${
                                    isDark ? 'text-gray-400' : 'text-gray-600'
                                  }`}
                                >
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-20">
              <div
                className={`border-t border-b pt-16 transition-colors duration-500 ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-2">
                    <div className="sticky top-24">
                      <div
                        className={`text-6xl font-light mb-2 ${
                          isDark ? 'text-gray-400' : 'text-gray-700'
                        }`}
                      >
                        03
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        Projects
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-4xl font-light tracking-tight mb-6">
                          Featured Work
                        </h3>
                        <p className="text-lg leading-relaxed font-light mb-8">
                          Here are some projects I've built, a mix of what
                          I&#39;ve learned and loved doing.
                        </p>
                      </div>
                      <div className="flex flex-col gap-12">
                        <BigProjectCard
                          index={0} // Changed from 2 to 0 to avoid confusion with section numbering
                          title="Charity Finder"
                          description="A Charity Finder website for the icelandic we development championship made in 2 days / Won 1st place."
                          year="2025"
                          solo={false}
                          techstack={[
                            'React',
                            'TypeScript',
                            'TailwindCSS',
                            'Next.js',
                          ]}
                          links={{
                            code: 'https://github.com/ln0185/WebCompetition',
                            live: 'https://web-competition-lemon.vercel.app/',
                          }}
                        />
                        <BigProjectCard
                          index={1} // Changed from 3 to 1 to avoid confusion with section numbering
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
                          isLast
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="fixed inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
              <Aurora
                colorStops={['#7fffd4', '#66ffff', '#cc99ff']}
                blend={0.3}
                amplitude={0.8}
                speed={0.7}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center overflow-hidden mt-6">
        <h1 className="mr-10 lg:mr-20  whitespace-nowrap">Get In</h1>
        <h1 className="ml-10 mt-[-16px] md:mt-[-8px] lg:ml-20 lg:mt-[-48px] whitespace-nowrap">
          <span className="light">Touch</span>
        </h1>
      </div>

      <div className="my-8 flex flex-col gap-8 items-center">
        <a
          href="mailto:fannarjack@gmail.com"
          className="underline decoration-[#99999959] underline-offset-8 text-[var(--foreground-paragraph)] text-xl font-light md:text-2xl lg:text-3xl break-all"
        >
          Fannarjack@gmail.com
        </a>

        <div className="text-center space-x-8 pb-20">
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
    </>
  );
}
