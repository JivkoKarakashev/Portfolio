import { createContext, useState, type Dispatch, type SetStateAction, type ReactElement } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";
import { desktopNavLinksStateInit, type DesktopNavLinksState } from "../constants/desktopNavLinksStateInit.ts";

interface DesktopNavLinksStateInterface {
    navLinksState: DesktopNavLinksState,
    setNavLinksState: Dispatch<SetStateAction<DesktopNavLinksState>>
}

const desktopNavLinksStateInterfaceInit: DesktopNavLinksStateInterface = {
    navLinksState: { ...desktopNavLinksStateInit } as DesktopNavLinksState,
    setNavLinksState: () => { }
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
    DesktopNavLinksStatesContext
}