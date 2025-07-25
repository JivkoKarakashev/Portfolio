import { createContext, type ReactElement } from "react";

import type { ContextProps } from "./ComposeAppContexts.tsx";
import { useMediaQuery } from "../utils/useMediaQuery.tsx";

type ViewModeState = 'mobile' | 'desktop';

interface ViewModeStateInterface {
    viewModeState: ViewModeState
}

const viewModeStateInterfaceInit: ViewModeStateInterface = {
    viewModeState: 'mobile'
}

const ViewModeStateContext = createContext<ViewModeStateInterface>(viewModeStateInterfaceInit);

function ViewModeStateContextProvider({ children }: ContextProps): ReactElement {
    const isMobileView = useMediaQuery('(max-width: 1099px)');
    // console.log(isMobileView);
    const viewModeState: ViewModeState = isMobileView ? 'mobile' : 'desktop';

    return (
        <ViewModeStateContext.Provider value={{ viewModeState }}>
            {children}
        </ViewModeStateContext.Provider>
    );
}

export {
    ViewModeStateContextProvider,
    ViewModeStateContext
}