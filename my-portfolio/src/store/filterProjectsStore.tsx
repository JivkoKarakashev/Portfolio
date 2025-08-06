import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type FilterName = string | 'react' | 'angular' | 'html' | 'css';
type FilterState = 'collapse' | 'expand';

interface FilterProjectsStore {
    filterName: Record<FilterName, boolean>,
    filterState: FilterState,

    toggleCheckbox: (fName: FilterName) => void,
    toggleFilterState: () => void
}

const filterStoreInit: Record<FilterName, boolean> = {
    react: false,
    angular: false,
    html: false,
    css: false
};

const store: StateCreator<FilterProjectsStore> = (set, get) => ({
    filterName: filterStoreInit,
    filterState: 'collapse',

    toggleCheckbox: (fName) => {
        const changedState = !get().filterName[fName];
        set((state) => ({
            filterName: { ...state.filterName, [fName]: changedState }
        }))
    },
    toggleFilterState: () => {
        const changedState = get().filterState === 'collapse' ? 'expand' : 'collapse';
        set(() => ({
            filterState: changedState
        }))
    }
});

const useFilterProjectsStore =
    import.meta.env.DEV
        ? create(devtools(store, { name: 'FilterProjectsStore' }))
        : create(store);

export {
    useFilterProjectsStore
}