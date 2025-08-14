import { type ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface TooltipWithProps {
    id: string,
    place?: 'top' | 'right' | 'bottom' | 'left',
    content: string,
    children: ReactNode
}

const TooltipComposer = ({ id, place = 'top', content, children }: TooltipWithProps): ReactNode => {
    return (
        <>
            {children}
            <Tooltip id={id} place={place} content={content} />
        </>
    );
};

export {
    TooltipComposer
}
