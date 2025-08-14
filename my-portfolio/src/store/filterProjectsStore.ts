import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import type { IconName } from "../components/svg-icon-provider/svg-icon-provider.tsx";

type FilterName = string | 'all' | 'react' | 'angular' | 'javascript' | 'typescript' | 'html' | 'css';
type FilterState = 'collapse' | 'expand';
interface Project {
    _id: string,
    techStack: Array<FilterName>
    key: string,
    show: boolean,
    title: [string, string],
    img: string,
    icon: IconName,
    desc: string,
    link: string
}

interface FilterProjectsStore {
    filterName: Record<FilterName, boolean>,
    filterState: FilterState,
    projectsState: Array<Project>

    toggleCheckbox: (fName: FilterName) => void,
    toggleFilterState: () => void,
    setProjectsState: () => void
}

const filterStoreInit: Record<FilterName, boolean> = {
    all: true,
    react: false,
    angular: false,
    javascript: false,
    typescript: false,
    html: false,
    css: false
};

const store: StateCreator<FilterProjectsStore> = (set, get) => ({
    filterName: filterStoreInit,
    filterState: 'expand',
    projectsState: [
        {
            techStack: ['all', 'angular', 'typescript', 'html', 'css'],
            show: true,
            title: ['Project 1', '// _clothes-ecommerce'],
            img: 'https://cdn-bucket.jivkokarakashev.work/file/jivko-portfolio/public/images/projects/project1.webp',
            icon: 'angular',
            desc: 'Clothes ECommerce Single Page Application (SPA) developed with Angular.',
            link: 'https://ecommerce-angular-spa.jivkokarakashev.dev/',
            get _id() {
                return this.key + this.icon
            },
            get key() {
                return this.title.join('-');
            }
        },
        {
            techStack: ['all', 'react', 'javascript', 'html', 'css'],
            show: true,
            title: ['Project 2', '// _used-cars-listings'],
            img: 'https://cdn-bucket.jivkokarakashev.work/file/jivko-portfolio/public/images/projects/project2.webp',
            icon: 'react',
            desc: 'Used cars listing Single Page Application (SPA) developed with React.',
            link: 'https://used-cars-react-spa.jivkokarakashev.dev/',
            get _id() {
                return this.title + this.icon
            },
            get key() {
                return this.title.join('-');
            }
        },
        {
            techStack: ['all', 'react', 'typescript', 'html', 'css'],
            show: true,
            title: ['Project 3', '// _portfolio-site'],
            img: 'https://cdn-bucket.jivkokarakashev.work/file/jivko-portfolio/public/images/projects/project3.webp',
            icon: 'react',
            desc: 'Portfolio (this App) Single Page Application (SPA) developed with React.',
            link: '/',
            get _id() {
                return this.title + this.icon
            },
            get key() {
                return this.title.join('-');
            }
        }
    ],

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
    },
    setProjectsState: () => {
        const currFilterNameState = get().filterName;
        set((state) => ({
            projectsState: state.projectsState.map(p => {
                const show = p.techStack.some(t => currFilterNameState[t]);
                return { ...p, show };
            })
        }));
    }
});

const useFilterProjectsStore =
    import.meta.env.DEV
        ? create(devtools(store, { name: 'FilterProjectsStore' }))
        : create(store);

export {
    useFilterProjectsStore
}