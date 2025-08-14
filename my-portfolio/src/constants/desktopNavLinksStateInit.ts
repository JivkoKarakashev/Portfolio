type NavLinkState = 'active' | 'inactive';

interface DesktopNavLinksState {
    [key: string]: NavLinkState
}

const desktopNavLinksStateInit: DesktopNavLinksState = {
    _hello: 'active',
    '_about-me': 'inactive',
    _projects: 'inactive',
    '_contact-me': 'inactive'
}

export {
    type DesktopNavLinksState,
    desktopNavLinksStateInit
}