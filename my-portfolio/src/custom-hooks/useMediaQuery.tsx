import { useEffect, useState } from 'react';

const useMediaQuery = (mobileQuery: string): boolean => {

    const mobileQueryMatches: boolean = window.matchMedia(mobileQuery).matches;
    const [matches, setMatches] = useState(mobileQueryMatches);

    // console.log(mobileQueryMatches);

    useEffect(() => {
        const media = window.matchMedia(mobileQuery);
        // const mobQueryMatches: boolean = media.matches;
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        // setMatches(mobQueryMatches);

        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [mobileQuery]);

    return matches;
};

export {
    useMediaQuery
} 