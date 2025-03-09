import { Route, Routes } from 'react-router';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminLayout from './Layouts/AdminLayout';
import Dashboard from './Pages/AdminPanel/Dashboard';
import Products from './Pages/AdminPanel/Products';

const AllRoutes = () => {
    return (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path='/admin'>
              <Route index element={<Dashboard />} />
              <Route path='/admin/products' element={<Products />} />
            </Route>
          </Route>
        </Routes>
    );
};

export default AllRoutes;