import { AuthProvider } from "./context/useAuth";
import AppRoutes from "./components/routes/AppRoutes";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}
