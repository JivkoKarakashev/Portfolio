import { createContext, useState, type Dispatch, type ReactElement, type SetStateAction } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";

type sectionState = 'collapse' | 'expand';

interface ContactMeSectionsState {
    [key: string]: sectionState
}

const contactMeSectionsStateInit: ContactMeSectionsState = {
    contacts: 'collapse',
    'find-me-also-in': 'collapse'
}

interface ContactMeSectionsStateInterface {
    contactMeSectionsState: ContactMeSectionsState,
    setContactMeSectionsState: Dispatch<SetStateAction<ContactMeSectionsState>>,
    toggleSectionState: (section: string) => void
}

const contactMeSectionsStateInterfaceInit: ContactMeSectionsStateInterface = {
    contactMeSectionsState: { ...contactMeSectionsStateInit } as ContactMeSectionsState,
    setContactMeSectionsState: (_state: ContactMeSectionsState) => { },
    toggleSectionState: () => { }
} as ContactMeSectionsStateInterface;

const ContactMeSectionsStateContext = createContext<ContactMeSectionsStateInterface>(contactMeSectionsStateInterfaceInit);

function ContactMeSectionsStateContextProvider({ children }: ContextProps): ReactElement {
    const [contactMeSectionsState, setContactMeSectionsState] = useState<ContactMeSectionsState>(contactMeSectionsStateInit);

    const toggleSectionState = (section: string) => {
        console.log(section);
        const newSectionsState = { ...contactMeSectionsState };
        const oldState = newSectionsState[section];
        oldState === 'collapse' ? newSectionsState[section] = 'expand' : newSectionsState[section] = 'collapse';

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
    type sectionState,
    ContactMeSectionsStateContextProvider,
    ContactMeSectionsStateContext
}