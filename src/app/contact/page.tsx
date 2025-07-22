'use client';
import DefaultView from '@/components/layout/mobile/ContactView';
import DesktopView from '@/components/layout/desktop/ContactView';
import useViewport from '../hooks/useViewport';

export default function ContactPage() {
  const { width } = useViewport();

  if (width === null) {
    return <div>Loading...</div>;
  }
  return width > 1024 ? <DesktopView /> : <DefaultView />;
}
