import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type Stage = 'idle' | 'dropping' | 'loader' | 'raising';

interface TransitionStore {
    active: boolean,
    stage: 'idle' | 'dropping' | 'loader' | 'raising',
    displayLocation: string,
    nextLocation: string | null,
    hasMounted: boolean,
    start: (nextPath: string) => void,
    finish: () => void,
    setStage: (stage: Stage) => void,
    setDisplayLocation: () => void
}

const store: StateCreator<TransitionStore> = (set,) => ({
    active: false,
    stage: 'idle',
    displayLocation: window.location.pathname,
    nextLocation: null,
    hasMounted: false,
    start: (nextPath: string) => set(({ hasMounted, active }) => {
        if (!hasMounted) {
            return {
                hasMounted: true,
                displayLocation: nextPath
            };
        }
        if (active) {
            return {
                nextLocation: nextPath
            }
        }
        return ({ active: true, stage: 'dropping', nextLocation: nextPath });
    }),
    finish: () => set(({ nextLocation, displayLocation }) => {
        if (nextLocation && nextLocation !== displayLocation) {
            return {
                stage: 'dropping',
                active: true,
                displayLocation: nextLocation,
                nextLocation: null
            }
        }
        return {
            active: false,
            stage: 'idle',
            nextLocation: null
        }
    }),
    setStage: (stage) => set(() => ({ stage })),
    setDisplayLocation: () => set(({ nextLocation, displayLocation }) => ({ displayLocation: nextLocation ?? displayLocation }))
});

const useTransitionStore =
    import.meta.env.DEV
        ? create(devtools(store, { name: 'TransitionStore' }))
        : create(store); export { useTransitionStore }