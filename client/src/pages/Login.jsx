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
  const [agree, setAgree] = useState(false);

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

    const checkboxHandler = () => {
      setAgree(!agree);
  };

  const btnHandler = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      setAgree(!agree);
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
      <Box>
      {/* <LogoImage src="./images/banner/2.png" alt="logo-Ayni" /> */}
        <h4>Entra y comienza a intercambiar con la comunidad de Factoria F5.</h4>
      </Box>
      <Box>
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
            <Link to="/passwordreset">Has olvidado tu contraseña?</Link>
          </div>

          <div className="terms-conditions">
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> Acepto los términos y condiciones.</label>
          </div>

          <div>
            <button disabled={!agree} className="btn" onClick={btnHandler}>
              Inicia Sesión
            </button>
          </div>
        </form>

        <p>
          No tienes cuenta todavía? <Link to="/">Contacta con Factoria F5</Link>
        </p>
      </Box>
    </Box>
  );
}