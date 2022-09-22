import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites";
import Product from "../../pages/Product";
import DetailProduct from "../../pages/DetailProduct";
import UploadProduct from "../../pages/UploadProduct";
import Chat from "../../pages/Chat";


import ProtectedRouteAdmin from "../../components/routes/ProtectecRouteAdmin";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<ForgotPassword />} />
            <Route path="/register" element={<ProtectedRouteAdmin><Register /></ProtectedRouteAdmin>} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/detail" element={<ProtectedRoute><DetailProduct /></ProtectedRoute>} />
            <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
            <Route path="/uploadProduct" element={<ProtectedRoute><UploadProduct /></ProtectedRoute>} />
        </Routes>
    )
}