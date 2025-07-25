import { useContext } from "react";

import { DesktopNavLinksStatesContext, desktopNavLinksStateInit } from "../context/DesktopNavLinks.tsx";

const useNavLinkState = () => {

    const { navLinksState, setNavLinksState } = useContext(DesktopNavLinksStatesContext);

    const toggleActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        // console.log(e.currentTarget.textContent);
        const activetedLink = e.currentTarget.textContent || '';
        let currState = { ...navLinksState };

        for (const key in currState) {
            // console.log(`KEY: ${key}`);
            // console.log(`ActivatedLink: ${activetedLink}`);
            if (key === activetedLink) {
                currState[key] = 'active';
            } else if (activetedLink === 'jivko-karakashev') {
                currState = { ...desktopNavLinksStateInit };
            } else {
                currState[key] = 'inactive';
            }
        }

        // console.log(currState);

        setNavLinksState((state) => ({
            ...state,
            ...currState
        }));
    };

    return {
        toggleActive
    };
};

export {
    useNavLinkState
}