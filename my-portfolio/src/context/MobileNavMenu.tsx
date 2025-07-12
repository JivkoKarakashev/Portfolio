import { createContext, useState, type Dispatch, type SetStateAction, type ReactElement } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";

type MobileNavMenuState = 'open' | 'closed';

interface MobileNavMenuStateInterface {
    menuState: MobileNavMenuState,
    setMenuState: Dispatch<SetStateAction<MobileNavMenuState>>
}

const mobileNavMenuStateInit: MobileNavMenuStateInterface = {
    menuState: 'closed',
    setMenuState: (state: MobileNavMenuState) => { }
} as MobileNavMenuStateInterface;

const MobileNavMenuStatesContext = createContext<MobileNavMenuStateInterface>(mobileNavMenuStateInit);

function MobileNavMenuStatesContextProvider({ children }: ContextProps): ReactElement {
    const [menuState, setMenuState] = useState<MobileNavMenuState>('closed');

    return (
        <MobileNavMenuStatesContext.Provider value={{ menuState, setMenuState }}>
            {children}
        </MobileNavMenuStatesContext.Provider>
    );
}

export {
    MobileNavMenuStatesContextProvider,
    MobileNavMenuStatesContext
}