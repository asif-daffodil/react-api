import { Helmet } from "react-helmet";
import HeroSection from "../Components/HomePage/HeroSection";
import LatestBlogs from "../Components/HomePage/LatestBlogs";
import { ToastContainer } from "react-toastify";

const Home = () => {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSection />
            <LatestBlogs />
        </>
    );
};

export default Home;