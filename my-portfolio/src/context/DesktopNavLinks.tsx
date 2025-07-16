import { createContext, useState, type Dispatch, type SetStateAction, type ReactElement } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";

type NavLinkState = 'active' | 'inactive';

interface DesktopNavLinksState {
    [key: string]: NavLinkState
}

const desktopNavLinksStateInit: DesktopNavLinksState = {
    _hello: 'active',
    '_about-me': 'inactive',
    _projects: 'inactive',
    '_contact-me': 'inactive'
}

interface DesktopNavLinksStateInterface {
    navLinksState: DesktopNavLinksState,
    setNavLinksState: Dispatch<SetStateAction<DesktopNavLinksState>>
}

const desktopNavLinksStateInterfaceInit: DesktopNavLinksStateInterface = {
    navLinksState: { ...desktopNavLinksStateInit } as DesktopNavLinksState,
    setNavLinksState: (state: DesktopNavLinksState) => { }
} as DesktopNavLinksStateInterface;

const DesktopNavLinksStatesContext = createContext<DesktopNavLinksStateInterface>(desktopNavLinksStateInterfaceInit);

function DesktopNavLinksStatesContextProvider({ children }: ContextProps): ReactElement {
    const [navLinksState, setNavLinksState] = useState<DesktopNavLinksState>(desktopNavLinksStateInit);

    return (
        <DesktopNavLinksStatesContext.Provider value={{ navLinksState, setNavLinksState }}>
            {children}
        </DesktopNavLinksStatesContext.Provider>
    );
}

export {
    DesktopNavLinksStatesContextProvider,
    DesktopNavLinksStatesContext,
    desktopNavLinksStateInit
}