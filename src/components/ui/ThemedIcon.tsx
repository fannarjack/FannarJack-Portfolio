'use client';
import { useTheme } from '@/app/hooks/useTheme';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ThemedIconProps {
  name: string;
  alt?: string;
  className?: string;
}

export default function ThemedIcon({ name, alt, className }: ThemedIconProps) {
  const [mounted, setMounted] = useState(false);

  // Try to get theme, but handle the case where provider isn't ready
  let theme = 'dark';
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch (error) {
    console.warn('useTheme failed:', error);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use white icons until mounted, then use actual theme
  const iconColor = mounted && theme === 'light' ? 'black' : 'white';
  const iconSrc = `/icons/${iconColor}/${name}-${iconColor}.svg`;

  return (
    <Image
      src={iconSrc}
      alt={alt || name}
      className={className}
      width={28} // or whatever size you want
      height={28}
    />
  );
}
