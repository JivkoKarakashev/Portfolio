import { type ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface Tooltip {
    id: string,
    content: string
}

interface TooltipType {
    [key: string]: Tooltip
}

interface TooltipWithProps {
    id: string,
    place?: 'top' | 'right' | 'bottom' | 'left',
    content: string,
    children: ReactNode
}

const tooltipTypes: TooltipType = {
    angular: {
        id: 'angular',
        content: 'Angular'
    },
    typescript: {
        id: 'typescript',
        content: 'TypeScript',
    },
    html: {
        id: 'html',
        content: 'HTML5'
    },
    css: {
        id: 'css',
        content: 'CSS'
    },
    fontawesome: {
        id: 'fontawesome',
        content: 'Font Awesome'
    },
    firebase: {
        id: 'firebase',
        content: 'Firebase',
    },
    'google-cloud': {
        id: 'google-cloud',
        content: 'Google Cloud'
    },
    cloudflare: {
        id: 'cloudflare',
        content: 'Cloudflare'
    },
    git: {
        id: 'git',
        content: 'Git'
    },
    'vs-code': {
        id: 'vs-code',
        content: 'VS Code'
    },
    eslint: {
        id: 'eslint',
        content: 'ESLint',
    },
    react: {
        id: 'react',
        content: 'React'
    },
    javascript : {
        id: 'javascript',
        content: 'JavaScript '
    },
    nodejs: {
        id: 'nodejs',
        content: 'Node.js'
    },
    expressjs: {
        id: 'expressjs',
        content: 'ExpressJS'
    },
    mongodb: {
        id: 'mongodb',
        content: 'MongoDB'
    },
    mongoosejs: {
        id: 'mongoosejs',
        content: 'Mongoose'
    },
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
    TooltipComposer,
    tooltipTypes
}
