import { ThemeProvider } from '@mui/system';
import theme from "./styles/theme";
import { AuthProvider } from "./context/useAuth";
import AppRoutes from './components/routes/AppRoutes';
import "./App.css";


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppRoutes>
        </AppRoutes>
      </AuthProvider>
    </ThemeProvider>
  );
}