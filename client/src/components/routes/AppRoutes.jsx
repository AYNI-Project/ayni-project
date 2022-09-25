import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteAdmin from "./ProtectecRouteAdmin";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites";
import Product from "../../pages/Product";
import DetailProduct from "../../pages/DetailProduct";
import UploadProduct from "../../pages/UploadProduct";
import Chat from "../../pages/Chat";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/password-reset" element={<ForgotPassword />} />
            <Route path="/register" element={<ProtectedRouteAdmin><Register /></ProtectedRouteAdmin>} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/detail" element={<ProtectedRoute><DetailProduct /></ProtectedRoute>} />
            <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
            <Route path="/upload-product" element={<ProtectedRoute><UploadProduct /></ProtectedRoute>} />
        </Routes>
    )
}