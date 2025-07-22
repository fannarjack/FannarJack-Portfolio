'use client';

import DefaultView from '@/components/layout/desktop/HomeView';
import DesktopView from '@/components/layout/mobile/HomeView';
import useViewport from './hooks/useViewport';

export default function ContactPage() {
  const { width } = useViewport();

  if (width === null) {
    return <div>Loading...</div>;
  }

  return width > 1024 ? <DefaultView /> : <DesktopView />;
}
