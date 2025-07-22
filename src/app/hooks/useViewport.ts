import { useState, useEffect } from 'react';

function useViewport() {
  const [width, setWidth] = useState<number | null>(null); // initially unknown

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // set initial width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width };
}

export default useViewport;
