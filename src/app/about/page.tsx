'use client';
import AboutMobile from '@/components/layout/mobile/AboutView';
import AboutDesktop from '@/components/layout/desktop/AboutView';
import useViewport from '../hooks/useViewport';

export default function AboutPage() {
  const { width } = useViewport();

  if (width === null) {
    return <div>Loading...</div>;
  }

  return width > 1024 ? <AboutDesktop /> : <AboutMobile />;
}
