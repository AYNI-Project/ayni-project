import React from 'react';
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../components/reusables/Alert";
import { Box } from '@mui/system';
import Login  from '../pages/Login'; 

export default function ForgotPassword() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, resetPassword } = useAuth();
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
      <h1>¿HAS OLVIDADO TU CONTRASEÑA?</h1>
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
          <button>
            Modificar contraseña
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
        onClick={Login}>
        Volver a la página de inicio de sesión
      </button>
    </Box>
  );
}