import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteAdmin from "./ProtectecRouteAdmin";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites";
import KnowHow from "../../pages/KnowHow/Index";
import DetailProduct from "../../pages/detailProduct.js/DetailCard";
import UploadProduct from "../../pages/UploadProduct";
import About from "../../pages/footer/About";
import Contact from "../../pages/footer/Contact";
import Faq from "../../pages/footer/Faq";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/users/login" element={<Login />} />
            <Route path="/password-reset" element={<ForgotPassword />} />
            <Route path="/users/register" element={<ProtectedRouteAdmin><Register /></ProtectedRouteAdmin>} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="/knowledge" element={<ProtectedRoute><KnowHow /></ProtectedRoute>} />
            <Route path="/knowledge/detail" element={<ProtectedRoute><DetailProduct /></ProtectedRoute>} />
            <Route path="/profile/edit/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/detail" element={<ProtectedRoute><DetailProduct /></ProtectedRoute>} />
            <Route path="/knowledge/upload" element={<ProtectedRoute><UploadProduct /></ProtectedRoute>} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
    )
}