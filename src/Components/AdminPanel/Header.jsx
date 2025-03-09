import { Link } from "react-router";


const Header = () => {
    return (
        <header className="text-white bg-gray-800 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-300">Go to Home</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;