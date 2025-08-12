import { type Variants } from "framer-motion";

const filterDropdownMenuVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2, ease: "easeInOut" },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    overflow: "visible",
    transition: {
      height: { duration: 0.4, ease: "easeInOut" },
      opacity: { duration: 0.25, ease: "easeInOut" },
    },
  },
};

export {
    filterDropdownMenuVariants
}