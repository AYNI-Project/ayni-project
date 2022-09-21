import { ThemeProvider } from '@mui/system';
import theme from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Footer from "./components/footer";

export default function App() {

  return (

    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Register />
                <Home />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
