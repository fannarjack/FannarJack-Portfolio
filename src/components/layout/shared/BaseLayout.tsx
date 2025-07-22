import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center px-[35px] w-full max-w-screen-sm mx-auto">
      {children}
    </main>
  );
}
