import type { Metadata } from 'next';

import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import { ThemeProvider } from './hooks/useTheme';
import ThemeToggle from '@/components/ui/ThemeToggle';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // <- import multiple weights
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // <- import multiple weights
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fannar | Portfolio',
  description:
    'Frontend developer with a passion for building clean, accessible, and engaging web experiences.',
  keywords: ['Web Developer', 'Frontend', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Fannar Hrafn Jack Hilmarsson' }],
  creator: 'Fannar Hrafn Jack Hilmarsson',
  openGraph: {
    title: 'Your Name | Portfolio',
    description:
      'Check out my portfolio showcasing projects built with React, TypeScript, and more.',
    url: 'https://yourdomain.com', //replace when hosting
    siteName: 'Fannar | Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${inter.variable} ${montserrat.variable} antialiased `}>
        <ThemeProvider>
          <Navbar />
          {children}
          <div className="fixed bottom-5 right-4 z-40 opacity-70 hover:opacity-100 transition-opacity">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
