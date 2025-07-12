import { type Variants } from "framer-motion";

const otherPagesMobileVariants: Variants = {
    initial: {
        y: "100vh",
        opacity: 0,
        scale: .25
    },
    final: {
        y: "0vh",
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75,
            type: "tween",
            mass: 4,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
        scale: .25,
        transition: { when: "afterChildren", duration: 0.75, ease: "easeInOut" },
    }
};

const otherPagesDesktopVariants: Variants = {
    initial: {
        x: "100vw",
        opacity: 0,
        scale: .25
    },
    final: {
        x: "0vw",
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75,
            type: "tween",
            mass: 4,
        },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        scale: .25,
        transition: { when: "afterChildren", duration: 0.75, ease: "easeInOut" },
    }
};

export {
    otherPagesMobileVariants,
    otherPagesDesktopVariants
}