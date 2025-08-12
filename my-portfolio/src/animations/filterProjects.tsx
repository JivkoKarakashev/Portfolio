import { type Variants } from "framer-motion";

const filterProjectsContainerVariants: Variants = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.3,
            delayChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    }
}

const filterProjectsVariants: Variants = {
    initial: {
        opacity: 0,
        scale: .25,
    },
    final: (custom: { index: number }) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75,
            delay: (custom.index || 0) * 0.1,
            // type: "tween",
            // mass: 4
        }
    }),
    exit: (custom: { index: number, total: number }) => ({
        opacity: 0,
        scale: .25,
        transition: {
            duration: 0.75,
            delay: ((custom.total || 1) - (custom.index || 0) - 1) * 0.1,
            ease: "easeInOut"
        },
    })
};

export {
    filterProjectsVariants,
    filterProjectsContainerVariants
}