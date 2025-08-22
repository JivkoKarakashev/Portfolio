import { useEffect, useRef } from "react";

type usePreviousParam = string;

const usePrevious = (value: usePreviousParam): string | undefined => {
    // console.log(value);
    const ref = useRef<usePreviousParam>(undefined);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export {
    usePrevious
}