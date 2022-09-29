import { ThemeProvider } from '@mui/system';
import theme from "./styles/theme";
import { AuthProvider } from "./context/useAuth";
import AppRoutes from './components/routes/AppRoutes';
import "./App.css";
import Footer from "./components/footer/Footer";



export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppRoutes>
          <Footer />
        </AppRoutes>
      </AuthProvider>
    </ThemeProvider>
  );
}