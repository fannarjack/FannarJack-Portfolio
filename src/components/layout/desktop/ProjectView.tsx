import Aurora from '@/components/ui/AuroraBackground';
import BigProjectCard from '../../ui/cards/BigProjectCard';
import { useTheme } from '@/app/hooks/useTheme';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DesktopView() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <>
      <div className="relative min-h-screen transition-colors duration-500">
        <div className="relative z-10">
          <div className="pt-20 max-w-5xl mx-auto px-8 py-20">
            <header className="mb-20">
              <h1 className="text-6xl font-light tracking-tight mb-4">
                Projects
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
                A small collection of work that shows where I’ve been growing as
                a developer.
              </p>
            </header>
            <div className="space-y-13">
              <BigProjectCard
                index={0}
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
              <BigProjectCard
                index={1}
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
              <BigProjectCard
                index={2}
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
              <BigProjectCard
                index={3}
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
                isLast
              />
            </div>
            <section className="text-center">
              <div
                className={`border-t pt-16 transition-colors duration-500 ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <h3 className="text-4xl font-light mb-6">
                  Want to Collaborate?
                </h3>
                <p
                  className={`text-lg font-light mb-8 max-w-2xl mx-auto ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Let&#39;s build something amazing together
                </p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center space-x-3 px-8 py-3 border transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800'
                      : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span>Get in touch</span>
                  <ArrowRight size={18} />
                </Link>
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
    </>
  );
}
