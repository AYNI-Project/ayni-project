import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
import Alert from "../components/reusables/Alert";
import { Box } from '@mui/system';

export default function ForgotPassword() {

  const [user, setUser] = useState({
    email: "",
  });

  const { resetPassword } = useAuth();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(user.email);
      setError("Te hemos enviado un correo con un enlace para reestablecer tu contraseña.");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setError("Este usuario no existe. Prueba con otro correo electrónico.");
      }
    }
  };

  return (
    <>
      <Box>
        <h1>¿HAS OLVIDADO TU CONTRASEÑA?</h1>
        {error && <Alert message={error} />}
        <form>
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
            <button onClick={handleResetPassword}> Modificar contraseña </button>
          </div>
        </form>

        <button><Link to="/login">
          Volver a la página de inicio de sesión </Link>
        </button>
      </Box >
    </>
  );
}