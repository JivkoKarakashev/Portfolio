import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigate from "../navigate/Navigate.tsx";
import Home from "../home/Home.tsx";
import AboutMe from "../about-me/About-me.tsx";
import ContactMe from "../contact-me/Contact-me.tsx";
import { Bio } from "../about-me/personal-info/bio/Bio.tsx";
import { LocationPathStateContextProvider } from "../../context/LocationPath.tsx";
import { Interests } from "../about-me/personal-info/interests/Interests.tsx";
import { SoftwareEngineering } from "../about-me/personal-info/education/software-engineering/SoftwareEngineering.tsx";
import { University } from "../about-me/personal-info/education/university/University.tsx";
import { Tech } from "../about-me/hobbies/tech/Tech.tsx";
import { Lifehacks } from "../about-me/hobbies/lifehacks/Lifehacks.tsx";
import { Unwind } from "../about-me/hobbies/unwind/Unwind.tsx";
import { Movies } from "../about-me/hobbies/movies/Movies.tsx";
import { Conversations } from "../about-me/hobbies/conversations/Conversations.tsx";
import { ThankYou } from "../contact-me/thank-you/Thank-you.tsx";
import { ViewModeStateContext } from "../../context/ViewMode.tsx";
import { MailMeMobile } from "../contact-me/contacts/mail-me/mobile/Mail-me-mobile.tsx";
import { MailMeDesktop } from "../contact-me/contacts/mail-me/desktop/Mail-me-desktop.tsx";
import { Projects } from "../projects/Projects.tsx";
import { useTransitionStore } from "../../store/pageTransitionStore.ts";

const RoutesWithAnimation = () => {
    const location = useLocation();
    const { displayLocation } = useTransitionStore();
    // console.log(location);
    const { viewModeState } = useContext(ViewModeStateContext);
    const topLevelKey = '/'.concat(location.pathname.split('/')[1]);
    // console.log(topLevelKey);

    return (
        <LocationPathStateContextProvider>
            <AnimatePresence mode='wait' initial={false}>
                <Routes location={{ ...location, pathname: displayLocation }} key={topLevelKey}>
                    <Route path="/" element={<Home />} />
                    <Route path="/navigate" element={<Navigate />} />
                    <Route path="/about-me" element={<AboutMe />}>
                        <Route path="bio" element={<Bio />} />
                        <Route path="interests" element={<Interests />} />
                        <Route path="education/software-engineering" element={<SoftwareEngineering />} />
                        <Route path="education/university" element={<University />} />
                        <Route path="hobbies/tech" element={<Tech />} />
                        <Route path="hobbies/lifehacks" element={<Lifehacks />} />
                        <Route path="hobbies/unwind" element={<Unwind />} />
                        <Route path="hobbies/movies" element={<Movies />} />
                        <Route path="hobbies/conversations" element={<Conversations />} />
                    </Route>
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact-me" element={<ContactMe />} >
                        {viewModeState === 'mobile' && <Route path="mail-me" element={<MailMeMobile />} />}
                        {viewModeState === 'desktop' && <Route path="mail-me" element={<MailMeDesktop />} />}
                        <Route path="thank-you" element={<ThankYou />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </LocationPathStateContextProvider>
    );
};

export default RoutesWithAnimation;