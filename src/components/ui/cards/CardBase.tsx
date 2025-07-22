'use client';

import React, { ReactNode } from 'react';

interface CardBaseProps {
  header?: string;
  children: ReactNode;
}

export default function CardBase({ header, children }: CardBaseProps) {
  return (
    <div
      className="flex w-full max-w-[320px] md:max-w-[580px] lg:max-w-[900px] px-[21px] md:px-[28px] lg:px-[32px] py-[24px] md:py-[28px] lg:py-[32px] justify-center flex-shrink-0 flex-col rounded-lg border"
      style={{
        borderRadius: '8px',
        borderColor: 'rgba(255, 255, 255, 0.10)', // Same border in light and dark
        background:
          'linear-gradient(109deg, rgba(0, 0, 0, 0.00) 3.09%, rgba(255, 255, 255, 0.20) 97.06%)',
        boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.10)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // for Safari support
        color: 'var(--foreground-paragraph)', // text color adapts with theme
      }}
    >
      {header && (
        <h4 className="mb-4 font-heading text-[20px] font-semibold">
          {header}
        </h4>
      )}
      {children}
    </div>
  );
}
