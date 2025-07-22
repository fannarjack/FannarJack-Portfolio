import { motion, AnimatePresence } from 'framer-motion';

interface CircleButtonProps {
  text: string;
  colour: string;
  showText: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function CircleButton({
  text,
  colour,
  showText,
  style,
  className,
}: CircleButtonProps) {
  return (
    <div
      className={`relative flex flex-col items-center w-16  ${className}`}
      style={style}
    >
      <div className={`rounded-full p-2 h-10 w-10  ${colour}`}></div>

      <AnimatePresence>
        {showText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
            className="absolute top-4/5 left-1/2 transform -translate-x-1/2 text-white text-sm font-light mt-2 whitespace-nowrap"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
