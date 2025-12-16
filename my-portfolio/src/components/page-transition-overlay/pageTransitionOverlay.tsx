import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import styles from './pageTransitionOverlay.module.css'

import { useTransitionStore } from "../../store/pageTransitionStore.ts";
import { topCurtainVariants, bottomCurtainVariants } from "../../animations/curtains.ts";

const PageTransitionOverlay = () => {
    const { pathname } = useLocation();
    const { active, stage, start, finish, setStage, setDisplayLocation } = useTransitionStore();
    const iterationCount = useRef(0);

    useEffect(() => {
        start(pathname);
    }, [pathname, start]);

    const onLoaderIteration = () => {
        iterationCount.current += 1;
        if (iterationCount.current >= 2) {
            iterationCount.current = 0;
            setDisplayLocation();
            setStage('raising');
        }
    };

    const handleAnimationComplete = () => {
        if (stage === 'dropping') {
            setStage('loader');
        } if (stage === 'raising') {
            finish();
        }
    };

    if (!active) {
        return null;
    }
    return (
        <AnimatePresence>
            <>
                {/* TOP CURTAIN */}
                <motion.div
                    className={`${styles.curtain} ${styles.top}`}
                    variants={topCurtainVariants}
                    initial="initial"
                    animate={stage === 'raising' ? 'raise' : 'drop'}
                    onAnimationComplete={handleAnimationComplete}
                />

                {/* BOTTOM CURTAIN */}
                <motion.div className={`${styles.curtain} ${styles.bottom}`}
                    variants={bottomCurtainVariants}
                    initial="initial"
                    animate={stage === 'raising' ? 'raise' : 'drop'}
                />

                {/* LOADER */}
                {stage === 'loader' && (
                    <div className={styles.loader}>
                        <div className={styles.bar1} onAnimationIteration={onLoaderIteration} />
                        <div className={styles.bar2} />
                        <div className={styles.bar3} />
                        <div className={styles.bar4} />
                        <div className={styles.bar5} />
                        <div className={styles.bar6} />
                    </div>
                )}
            </>
        </AnimatePresence>
    );
};

export { PageTransitionOverlay }