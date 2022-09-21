import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../components/reusables/Alert";
import { Box } from '@mui/system';

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo inválido");
        if (error.code === "auth/wrong-password") {
          setError("Contraseña incorrecta");
      }
      setError(error.message);
    }
  };
}

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Introduce tu correo electrónico.");
    try {
      await resetPassword(user.email);
      setError("Te hemos enviado un correo con un enlace para reestablecer tu contraseña.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box>
      {error && <Alert message={error} />}
      <h1>Inicia Sesión</h1>
      <form
        onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@empresa.ltd"
            onChange={handleChange}>
            </input>
        </div>

        <div>
          <label
            htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
          ></input>
        </div>

        <div>
          <button>
            Inicia Sesión
          </button>
          <a
            href="#!"
            onClick={handleResetPassword}
          >
            Has olvidado tu contraseña?
          </a>
        </div>
      </form>

      <p>
        No tienes ninguna cuenta todavia? <Link to="/">Contacta con Factoria F5</Link>
      </p>

      <button
        onClick={handleGoogleSignIn}>
        Inicia sesión con Google
      </button>
    </Box>
  );
}
