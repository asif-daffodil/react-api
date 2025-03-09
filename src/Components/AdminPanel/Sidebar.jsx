import { NavLink } from "react-router";


const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold text-center my-4">Admin Panel</h2>
            <nav className="flex flex-col p-4 space-y-2">
                <NavLink to="/admin" className={({ isActive }) => isActive ? "p-2 hover:bg-gray-700 font-bold rounded":"p-2 hover:bg-gray-700 rounded"}>
                    Dashboard
                </NavLink>
                <NavLink to="/admin/products" className={({ isActive }) => isActive ? "p-2 hover:bg-gray-700 font-bold rounded":"p-2 hover:bg-gray-700 rounded"}>
                    Product
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? "p-2 hover:bg-gray-700 font-bold rounded":"p-2 hover:bg-gray-700 rounded"}>
                    Settings
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;