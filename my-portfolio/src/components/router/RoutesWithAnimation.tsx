import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import Home from "../home/Home.tsx";
import Navigate from "../navigate/Navigate.tsx";
import AnimatedHome from "../home/Home.tsx";
import AnimatedAboutMe from "../about-me/About-me.tsx";
import AnimatedContactMe from "../contact-me/Contact-me.tsx";
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

const RoutesWithAnimation = () => {
    const location = useLocation();
    // console.log(location);
    const topLevelKey = '/'.concat(location.pathname.split('/')[1]);
    // console.log(topLevelKey);

    return (
        <LocationPathStateContextProvider>
            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={topLevelKey}>
                    <Route path="/" element={<AnimatedHome />} />
                    <Route path="/navigate" element={<Navigate />} />
                    <Route path="/about-me" element={<AnimatedAboutMe />}>
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
                    <Route path="/contact-me" element={<AnimatedContactMe />} />
                </Routes>
            </AnimatePresence>
        </LocationPathStateContextProvider>
    );
};

export default RoutesWithAnimation;