import { createContext, useState, type Dispatch, type SetStateAction, type ReactNode } from "react";

type MenuState = 'open' | 'closed';

interface MenuStateContextInterface {
    menuState: MenuState,
    setMenuState: Dispatch<SetStateAction<MenuState>>
}

const menuStateContextInterfaceInit: MenuStateContextInterface = {
    menuState: 'closed',
    setMenuState: (state: MenuState) => { }
} as MenuStateContextInterface;

interface MenuStateContextProps {
    children: ReactNode
}

const MenuStateContext = createContext<MenuStateContextInterface>(menuStateContextInterfaceInit);

function MenuStateContextProvider({ children }: MenuStateContextProps) {
    const [menuState, setMenuState] = useState<MenuState>('closed');

    return (
        <MenuStateContext.Provider value={{ menuState, setMenuState }}>
            {children}
        </MenuStateContext.Provider>
    );
}

export {
    MenuStateContextProvider,
    MenuStateContext
}