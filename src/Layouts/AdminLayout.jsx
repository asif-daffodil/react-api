import { Outlet } from "react-router";
import Header from "../Components/AdminPanel/Header";
import Sidebar from "../Components/AdminPanel/Sidebar";

const AdminLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="p-4 overflow-scroll" style={{ height: 'calc(100vh - 70px)' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;