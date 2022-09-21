import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";

export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
                <Route path="/login" element={<Login />} />
            </Routes>
    )
}
