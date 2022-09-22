import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import Footer from "../../components/footer/index";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element=
                {<Login />}
            />

            <Route path="/passwordreset" element=
                {<ForgotPassword />}
            />

            <Route path="/register" element=
                {<ProtectedRoute>
                    <Register />
                </ProtectedRoute>}
            />
            <Route path="/" element={<ProtectedRoute>
                <Home />
                <Footer/>
            </ProtectedRoute>}
            />
        </Routes>
    )
}