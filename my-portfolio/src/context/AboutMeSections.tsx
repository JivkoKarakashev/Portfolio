import { createContext, useState, type Dispatch, type ReactElement, type SetStateAction, useContext } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";

type sectionState = 'collapse' | 'expand';

interface AboutMeSectionsState {
    [key: string]: sectionState
}

const aboutMeSectionsStateInit: AboutMeSectionsState = {
    'personal-info': 'collapse',
    'professional-info': 'collapse',
    hobbies: 'collapse',
    contacts: 'collapse'
}

interface AboutMeSectionsStateInterface {
    aboutMeSectionsState: AboutMeSectionsState,
    setAboutMeSectionsState: Dispatch<SetStateAction<AboutMeSectionsState>>,
    toggleSectionState: (section: string) => void
}

const aboutMeSectionsStateInterfaceInit: AboutMeSectionsStateInterface = {
    aboutMeSectionsState: { ...aboutMeSectionsStateInit } as AboutMeSectionsState,
    setAboutMeSectionsState: (state: AboutMeSectionsState) => { },
    toggleSectionState: () => { }
} as AboutMeSectionsStateInterface;

const AboutMeSectionsStateContext = createContext<AboutMeSectionsStateInterface>(aboutMeSectionsStateInterfaceInit);

function AboutMeSectionsStateContextProvider({ children }: ContextProps): ReactElement {
    const [aboutMeSectionsState, setAboutMeSectionsState] = useState<AboutMeSectionsState>(aboutMeSectionsStateInit);

    const toggleSectionState = (section: string) => {
        console.log(section);

        switch (section) {
            case 'personal-info': {
                const newSectionsState = { ...aboutMeSectionsState };
                const oldState = newSectionsState[section];
                oldState === 'collapse' ? newSectionsState[section] = 'expand' : newSectionsState[section] = 'collapse';
                setAboutMeSectionsState({ ...newSectionsState });
                break;
            }
        }
    };

    return (
        <AboutMeSectionsStateContext.Provider value={{ aboutMeSectionsState, setAboutMeSectionsState, toggleSectionState }}>
            {children}
        </AboutMeSectionsStateContext.Provider>
    );
}

export {
    AboutMeSectionsStateContextProvider,
    AboutMeSectionsStateContext
}