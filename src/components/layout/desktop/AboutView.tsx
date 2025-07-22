'use client';

import {
  ArrowRight,
  MapPin,
  Calendar,
  Code,
  LuggageIcon as Travel,
  MountainIcon as Outdoor,
  GlobeIcon as International,
  VideoIcon as Movie,
} from 'lucide-react';
import Link from 'next/link';

import Aurora from '@/components/ui/AuroraBackground';
import { useTheme } from '@/app/hooks/useTheme';
import PhotoCarousel from '@/components/ui/PhotoCarousel';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  const experiences = [
    {
      period: '2024 - Present',
      role: 'Intern at Kvikna Medical',
      description:
        'Currently interning where I quickly picked up Angular and contribute to real projects, gaining hands-on experience in a professional development environment.',
    },
    {
      period: '2024',
      role: 'National Skills Competition Winner',
      description:
        'Competed in Web Development category at the Icelandic National Skills Competition for Trades and Technical Professions, where my team took first place.',
    },
    {
      period: '2023 - 2024',
      role: 'Reykjavík Academy of Web Development',
      description:
        'Intensive study of web technologies and development practices, building several hands-on projects and collaborating with international teams.',
    },
  ];

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

  const personalInterests = [
    {
      icon: Travel,
      label: 'Love for Travel',
      content:
        "I enjoy exploring new cultures and hope to work abroad soon. I've collaborated with international teams from Denmark, Spain, and Senegal.",
    },
    {
      icon: Outdoor,
      label: 'Outdoor Lifestyle',
      content:
        "Hiking, golf, fishing, hunting. Nothing beats fresh air and offline time in Iceland's beautiful nature.",
    },
    {
      icon: International,
      label: 'Team Player',
      content:
        "I've worked with international teams and learned how to collaborate across cultures, including a project in Las Palmas.",
    },
    {
      icon: Movie,
      label: 'Relax & Recharge',
      content:
        "Whether it's at the cinema or on the couch, movies are my way to unwind after coding sessions.",
    },
  ];

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Aurora Background */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <Aurora
          colorStops={['#7fffd4', '#66ffff', '#cc99ff']}
          blend={0.3}
          amplitude={0.8}
          speed={0.7}
        />
      </div>

      <div className="relative z-10">
        <div className="pt-20 max-w-5xl mx-auto px-8 py-20">
          {/* Header */}
          <header className="mb-20">
            <h1 className="text-6xl font-light tracking-tight mb-4">
              About Me
            </h1>
            <div
              className={`h-px w-24 mb-8 transition-colors duration-500 ${
                isDark ? 'bg-gray-700' : 'bg-black'
              }`}
            />
            <p
              className={`text-lg font-light max-w-2xl ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              A deeper look into my journey from Iceland to international
              collaboration, competition wins, and professional growth.
            </p>
          </header>

          {/* Photo Gallery Section */}

          <section className="mb-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div
                    className={`text-6xl font-light mb-2 ${
                      isDark ? 'text-gray-700' : 'text-gray-400'
                    }`}
                  >
                    01
                  </div>
                  <div
                    className={`text-sm ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    Gallery
                  </div>
                </div>
              </div>
              <div className="lg:col-span-10">
                <h2 className="text-4xl font-light tracking-tight mb-6">
                  Life in Pictures
                </h2>
                <p
                  className={`text-lg font-light mb-8 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Moments from my journey - from competitions and travels to
                  outdoor adventures in Iceland.
                </p>

                {/* Simple Image Grid */}
                <PhotoCarousel
                  images={carouselImages}
                  slideWidth={250}
                  slideHeight={300}
                  speed={10}
                ></PhotoCarousel>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
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
                      Journey
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-light tracking-tight mb-6">
                        Growth Through Code
                      </h2>
                      <div className="space-y-6 text-lg leading-relaxed font-light">
                        <p>
                          <strong>Getting Started:</strong> I began learning web
                          development at Reykjavík Academy of Web Development,
                          building several hands-on projects along the way and
                          discovering my passion for creating digital
                          experiences.
                        </p>
                        <p>
                          <strong>Teamwork & Projects:</strong> I&#39;ve worked
                          in diverse teams, including a project where Danish
                          students visited Iceland. I traveled to Las Palmas to
                          collaborate with students from Denmark, Spain and
                          Senegal on a cross-cultural team project.
                        </p>
                        <p>
                          <strong>Competition Win:</strong> I competed in Web
                          Development category at the Icelandic National Skills
                          Competition for Trades and Technical Professions,
                          where my team took first place.
                        </p>
                        <p>
                          <strong>Internship & Growth:</strong> I am currently
                          interning at Kvikna Medical, where I quickly picked up
                          Angular and contribute to real projects, gaining
                          valuable professional experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="sticky top-24">
                    <div
                      className={`p-6 border transition-colors duration-500 ${
                        isDark
                          ? 'border-gray-700 bg-gray-800/30'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium mb-3">Quick Facts</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>Reykjavik, Iceland</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>1+ Year Coding</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Code size={14} />
                          <span>Web Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
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
                      03
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      Experience
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-light tracking-tight mb-6">
                        Professional Journey
                      </h2>
                      <p className="text-lg leading-relaxed font-light mb-8">
                        My path in web development, from learning fundamentals
                        to winning competitions and contributing to real
                        projects.
                      </p>
                    </div>
                    <div className="space-y-8">
                      {experiences.map((exp, index) => (
                        <article
                          key={exp.role}
                          className={`border-b pb-8 transition-colors duration-500 ${
                            isDark ? 'border-gray-700' : 'border-gray-200'
                          } ${
                            index === experiences.length - 1
                              ? 'border-b-0 pb-0'
                              : ''
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`text-sm ${
                                isDark ? 'text-gray-500' : 'text-gray-500'
                              }`}
                            >
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-2xl font-light tracking-tight mb-4">
                            {exp.role}
                          </h3>
                          <p
                            className={`font-light ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            {exp.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="sticky top-24">
                    <div
                      className={`p-6 border transition-colors duration-500 ${
                        isDark
                          ? 'border-gray-700 bg-gray-800/30'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium mb-3">Current Focus</h3>
                      <p
                        className={`text-sm mb-4 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Angular, React, TypeScript, and professional development
                      </p>
                      <div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></div>
                      <span className="text-xs">Available for projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
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
                      04
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
                      <h2 className="text-4xl font-light tracking-tight mb-6">
                        Technical Skills
                      </h2>
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

          {/* Beyond The Code Section */}
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
                      05
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      Personal
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-10">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl font-light tracking-tight mb-6">
                        Beyond The Code
                      </h2>
                      <p className="text-lg leading-relaxed font-light mb-8">
                        What drives me outside of development - from outdoor
                        adventures to international collaboration.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      {personalInterests.map((interest) => (
                        <div
                          key={interest.label}
                          className={`p-6 border transition-colors duration-500 ${
                            isDark
                              ? 'border-gray-700 bg-gray-800/30'
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <interest.icon size={20} />
                            <h3 className="font-medium">{interest.label}</h3>
                          </div>
                          <p
                            className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            {interest.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div
              className={`border-t pt-16 transition-colors duration-500 ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <h3 className="text-4xl font-light mb-6">Let&#39;s Connect</h3>
              <p
                className={`text-lg font-light mb-8 max-w-2xl mx-auto ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                I&#39;m always excited to meet fellow developers, designers, and
                anyone passionate about technology.
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center space-x-3 px-8 py-3 border transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                    : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
                }`}
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
