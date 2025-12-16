import { type Variants } from "framer-motion";

const topCurtainVariants: Variants = {
  initial: { y: '-100%' },
  drop: { y: '0%', transition: { duration: 0.4, ease: 'easeInOut' } },
  raise: { y: '-100%', transition: { duration: 0.4, ease: 'easeInOut' } },
};

const bottomCurtainVariants: Variants = {
  initial: { y: '100%' },
  drop: { y: '0%', transition: { duration: 0.4, ease: 'easeInOut' } },
  raise: { y: '100%', transition: { duration: 0.4, ease: 'easeInOut' } },
};

export {
    topCurtainVariants,
    bottomCurtainVariants
}