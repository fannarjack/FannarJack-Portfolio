'use client';
import MobileView from '@/components/layout/mobile/ProjectView';
import DesktopView from '@/components/layout/desktop/ProjectView';
import useViewport from '../hooks/useViewport';

export default function Projects() {
  const { width } = useViewport();
  if (width === null) {
    return <div>Loading...</div>;
  }
  return width > 1024 ? <DesktopView /> : <MobileView />;
}
