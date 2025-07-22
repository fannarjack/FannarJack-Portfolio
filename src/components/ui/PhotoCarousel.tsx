'use client';
import React from 'react';

import { AnimationPlaybackControls, useAnimate } from 'framer-motion';
import Image from 'next/image';

interface PhotoCarouselProps {
  images: string[];
  slideWidth?: number;
  slideHeight?: number;
  speed?: number;
  showFadeEffect?: boolean;
}
const PhotoCarousel = ({
  images,
  slideWidth = 250,
  slideHeight = 300,
}: PhotoCarouselProps) => {
  const [scope, animate] = useAnimate();
  const controlsRef = React.useRef<AnimationPlaybackControls | null>(null);

  const duplicatedImages = [...images, ...images];

  // Calculate the exact distance one set of images takes up
  // slideWidth + margins (mx-2 md:mx-3 lg:mx-4 = roughly 16px total margin per image)
  const imageWidth = slideWidth + 32; // 16px left + 16px right margin
  const totalSetWidth = images.length * imageWidth;
  const moveDistance = totalSetWidth; // Move exactly one set width

  React.useEffect(() => {
    controlsRef.current = animate(
      scope.current,
      { x: ['0%', -moveDistance] },
      {
        duration: 50,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }
    );
    return () => controlsRef.current?.stop();
  }, [animate, scope]);

  const handleMouseEnter = () => {
    controlsRef.current?.pause();
  };

  const handleMouseLeave = () => {
    controlsRef.current?.play();
  };

  return (
    <div
      className={`overflow-hidden w-full `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scope} className="flex flex-nowrap w-max overflow-hidden">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="mx-2 md:mx-3 lg:mx-4 flex-shrink-0"
            style={{
              width: slideWidth,
              height: slideHeight,
              position: 'relative',
            }}
          >
            <Image
              priority
              src={src}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100px, (max-width: 1024px) 140px, 180px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
