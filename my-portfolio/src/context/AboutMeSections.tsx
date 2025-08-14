import { createContext, useState, type Dispatch, type ReactElement, type SetStateAction } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";
import { aboutMeSectionsStateInit, type AboutMeSectionsState } from "../constants/sectionsStateInit.ts";
interface AboutMeSectionsStateInterface {
    aboutMeSectionsState: AboutMeSectionsState,
    setAboutMeSectionsState: Dispatch<SetStateAction<AboutMeSectionsState>>,
    toggleSectionState: (section: string) => void
}

const aboutMeSectionsStateInterfaceInit: AboutMeSectionsStateInterface = {
    aboutMeSectionsState: { ...aboutMeSectionsStateInit } as AboutMeSectionsState,
    setAboutMeSectionsState: () => { },
    toggleSectionState: () => { }
} as AboutMeSectionsStateInterface;

const AboutMeSectionsStateContext = createContext<AboutMeSectionsStateInterface>(aboutMeSectionsStateInterfaceInit);

function AboutMeSectionsStateContextProvider({ children }: ContextProps): ReactElement {
    const [aboutMeSectionsState, setAboutMeSectionsState] = useState<AboutMeSectionsState>(aboutMeSectionsStateInit);

    const toggleSectionState = (section: string) => {
        // console.log(section);
        // const newSectionsState = { ...aboutMeSectionsState };
        // const oldState = newSectionsState[section];
        // oldState === 'collapse' ? newSectionsState[section] = 'expand' : newSectionsState[section] = 'collapse';
        const newSectionsState = { ...aboutMeSectionsState };
        for (const key in newSectionsState) {
            if (key === section) {
                newSectionsState[key] = aboutMeSectionsState[section] === 'collapse' ? 'expand' : 'collapse';
            }
        }

        switch (section) {
            case 'personal-info': {
                setAboutMeSectionsState({ ...newSectionsState });
                break;
            }
            case 'hobbies': {
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