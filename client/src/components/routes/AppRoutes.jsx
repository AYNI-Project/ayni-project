import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import Home from "../../pages/Home";
import Profile  from "../../pages/Profile";
import Favorites from "../../pages/Favorites";
import Product from "../../pages/Product";
import DetailProduct from "../../pages/DetailProduct";
import UploadProduct from "../../pages/UploadProduct";
import Chat from "../../pages/Chat";


import  ProtectedRouteAdmin from "../../components/routes/ProtectecRouteAdmin";


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
                {<ProtectedRouteAdmin>
                    <Register />
                </ProtectedRouteAdmin>}
            />
            <ProtectedRoute>
                <Route path="/" element= {<Home />}/>
                <Route path="/favorites" element= {<Favorites />}/>
                <Route path="/products" element= {<Product />}/>
                <Route path="/profile" element= {<Profile />}/>
                <Route path="/detail" element= {<DetailProduct />}/>
                <Route path="/chat" element= {<Chat />}/>
                <Route path="/uploadProduct" element= {<UploadProduct />}/>

            </ProtectedRoute>
        </Routes>
    )
}