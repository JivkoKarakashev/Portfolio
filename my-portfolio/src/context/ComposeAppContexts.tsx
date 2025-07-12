import type { JSXElementConstructor, ReactNode } from "react"

interface ContextProps {
    children: ReactNode
}

interface Props {
    components: Array<JSXElementConstructor<{ children: ReactNode }>>
    children: ReactNode
}

function ComposeAppContexts(props: Props) {
    const { components = [], children } = props

    return (
        <>
            {components.reduce((PrevComp, CurrComp) => {
                return (
                    <CurrComp>{PrevComp}</CurrComp>
                );
            }, children)}
        </>
    );
}

export {
    type ContextProps,
    ComposeAppContexts
}