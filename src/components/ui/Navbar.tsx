'use client';
import { useState } from 'react';
import CircleButton from './buttons/CircleButton';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/app/hooks/useTheme';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const router = useRouter();

  const buttons = [
    { text: 'Home', colour: 'bg-[#D5D5D5]', dark: 'bg-[#B0B0B0]', href: '/' },
    {
      text: 'About Me',
      colour: 'bg-[#909090]',
      dark: 'bg-[#5A5A5A]',
      href: '/about',
    },
    {
      text: 'Projects',
      colour: 'bg-[#797979]',
      dark: 'bg-[#4A4A4A]',
      href: '/projects',
    },
    {
      text: 'Contact',
      colour: 'bg-[#404040]',
      dark: 'bg-[#2A2A2A]',
      href: '/contact',
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>

      <div className="fixed top-4 right-3 z-50 flex flex-col items-center">
        <div className="relative flex flex-col items-center">
          <div className="flex flex-col items-center space-y-[-33px]">
            {buttons.map((btn, i) => (
              <motion.div
                key={i}
                animate={{
                  y: isOpen ? i * 60 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: isOpen ? i * 0.08 : (buttons.length - 1 - i) * 0.1,
                }}
              >
                {isOpen ? (
                  <Link
                    href={btn.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        router.push(btn.href);
                      }, 300); // Wait for close animation
                    }}
                  >
                    <CircleButton
                      text={btn.text}
                      colour={isDark ? btn.dark : btn.colour}
                      showText={isOpen}
                    />
                  </Link>
                ) : (
                  <div onClick={() => setIsOpen(true)}>
                    <CircleButton
                      text={btn.text}
                      colour={isDark ? btn.dark : btn.colour}
                      showText={isOpen}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {!isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className={` mt-1 cursor-pointer ${isDark ? 'text-[--foreground]' : 'text-[--foreground]'}`}
                onClick={() => setIsOpen(true)}
              >
                Menu
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
