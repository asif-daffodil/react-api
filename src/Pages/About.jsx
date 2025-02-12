import { Helmet } from "react-helmet";
import AboutBanner from "../Components/AboutPage/AboutBanner";
import OurTeam from "../Components/AboutPage/OurTeam";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <AboutBanner />
            <OurTeam />
        </>
    );
};

export default About;