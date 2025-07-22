'use client';
import { useTheme } from '@/app/hooks/useTheme';
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
    // ThemeProvider not ready yet, use default
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use white icons until mounted, then use actual theme
  const iconColor = mounted && theme === 'light' ? 'black' : 'white';
  const iconSrc = `/icons/${iconColor}/${name}-${iconColor}.svg`;

  return <img src={iconSrc} alt={alt || name} className={className} />;
}
