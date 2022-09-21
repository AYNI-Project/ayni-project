import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../components/reusables/Alert";
import { Box } from '@mui/system';

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
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
        if (error.code === "auth/user-not-found") {
          setError("Este usuario no existe. Prueba con otro correo electrónico.");
        }
      }
    };
  }

  return (
    <Box>
      <h1>¡Te damos la bienvenida a AYNI!</h1>
      <h3>Inicia Sesión</h3>
      {error && <Alert message={error} />}
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

          <Link to="/passwordreset">Has olvidado tu contraseña?</Link>

        </div>
      </form>

      <p>
        No tienes ninguna cuenta todavia? <Link to="/">Contacta con Factoria F5</Link>
      </p>
    </Box>
  );
}