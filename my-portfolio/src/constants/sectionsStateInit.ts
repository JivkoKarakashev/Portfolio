type sectionState = 'collapse' | 'expand';

interface AboutMeSectionsState {
    [key: string]: sectionState
}

type ContactMeSectionsState = AboutMeSectionsState;

const aboutMeSectionsStateInit: AboutMeSectionsState = {
    'personal-info': 'collapse',
    // 'professional-info': 'collapse',
    hobbies: 'collapse',
    // contacts: 'collapse'
}

const contactMeSectionsStateInit: ContactMeSectionsState = {
    contacts: 'collapse',
    'find-me-also-in': 'collapse'
}

export {
    type sectionState,
    type AboutMeSectionsState,
    type ContactMeSectionsState,
    aboutMeSectionsStateInit,
    contactMeSectionsStateInit
}