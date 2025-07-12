import { createContext, type ReactElement, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import type { ContextProps } from "./ComposeAppContexts";

type LocationPath = string | undefined;

interface LocationPathStateInterface {
    currPath: LocationPath,
    prevPath: LocationPath
}

const locationPathStateInterfaceInit: LocationPathStateInterface = {
    currPath: undefined,
    prevPath: undefined
} as LocationPathStateInterface;

const LocationPathStateContext = createContext<LocationPathStateInterface>(locationPathStateInterfaceInit);

function LocationPathStateContextProvider({ children }: ContextProps): ReactElement {
    const location = useLocation();
    const currPath  = location.pathname;
    
    const prevPathRef = useRef<LocationPath>(undefined);
    const prevPath = prevPathRef.current;

    useEffect(() => {
        // After render, update the ref to the current path
        prevPathRef.current = currPath;
    }, [currPath]);

    return (
        <LocationPathStateContext.Provider value={{ currPath, prevPath }}>
            {children}
        </LocationPathStateContext.Provider>
    );
};

export {
    LocationPathStateContextProvider,
    LocationPathStateContext
}