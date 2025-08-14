import { createContext, useState, type Dispatch, type ReactElement, type SetStateAction } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";
import { contactMeSectionsStateInit, type ContactMeSectionsState } from "../constants/sectionsStateInit.ts";

interface ContactMeSectionsStateInterface {
    contactMeSectionsState: ContactMeSectionsState,
    setContactMeSectionsState: Dispatch<SetStateAction<ContactMeSectionsState>>,
    toggleSectionState: (section: string) => void
}

const contactMeSectionsStateInterfaceInit: ContactMeSectionsStateInterface = {
    contactMeSectionsState: { ...contactMeSectionsStateInit } as ContactMeSectionsState,
    setContactMeSectionsState: () => { },
    toggleSectionState: () => { }
} as ContactMeSectionsStateInterface;

const ContactMeSectionsStateContext = createContext<ContactMeSectionsStateInterface>(contactMeSectionsStateInterfaceInit);

function ContactMeSectionsStateContextProvider({ children }: ContextProps): ReactElement {
    const [contactMeSectionsState, setContactMeSectionsState] = useState<ContactMeSectionsState>(contactMeSectionsStateInit);

    const toggleSectionState = (section: string) => {
        // console.log(section);
        // const newSectionsState = { ...contactMeSectionsState };
        // const oldState = newSectionsState[section];
        // oldState === 'collapse' ? newSectionsState[section] = 'expand' : newSectionsState[section] = 'collapse';
        const newSectionsState = { ...contactMeSectionsState };
        for (const key in newSectionsState) {
            if (key === section) {
                newSectionsState[key] = contactMeSectionsState[section] === 'collapse' ? 'expand' : 'collapse';
            }
        }

        switch (section) {
            case 'contacts': {
                setContactMeSectionsState({ ...newSectionsState });
                break;
            }
            case 'find-me-also-in': {
                setContactMeSectionsState({ ...newSectionsState });
                break;
            }
        }
    };

    return (
        <ContactMeSectionsStateContext.Provider value={{ contactMeSectionsState, setContactMeSectionsState, toggleSectionState }}>
            {children}
        </ContactMeSectionsStateContext.Provider>
    );
}

export {
    ContactMeSectionsStateContextProvider,
    ContactMeSectionsStateContext
}