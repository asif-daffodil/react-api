import { Helmet } from "react-helmet";
import HeroSection from "../Components/HomePage/HeroSection";
import LatestBlogs from "../Components/HomePage/LatestBlogs";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSection />
            <LatestBlogs />
        </>
    );
};

export default Home;