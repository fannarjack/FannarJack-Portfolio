'use client';
import { ReactNode } from 'react';
import Navbar from '../ui/Navbar';

export default function CenteredLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col gap-7 py-6 items-center min-h-screen px-8 md:px-16">
      {children}
    </main>
  );
}
