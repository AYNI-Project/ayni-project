import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/reusables/Alert";
import { Button } from "@mui/material";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      // verifyEmail(user.email);
      navigate('/');
      // setTimeActive(true);
      // navigate('/verify-email');
    }
    catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo inválido");
        // }
        // if (error.code === "auth/email-already-in-use") {
        //   setError("Correo en uso. Prueba otro.");
        // if (error.code === "auth/weak-password") {
        //   setError("Contraseña débil");
        //   }
      }
      // setError(error.message);
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}
      <h1>Registro - Admin -</h1>
      <p>Rellena los datos del nuevo usuario:</p>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label
            htmlFor="password"
          >
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
          <label
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          ></input>
        </div>

        <div>
          <label
            htmlFor="surname"
          >
            Apellidos
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Apellidos"
          ></input>
        </div>

        <div>
          <label
            htmlFor="role"
          >
            Rol
          </label>
          <select id="role" name="role" onChange={handleChange}>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </div>

        <button>
          Registrar
        </button>
      </form>
      <Button sx={{ fontSize: "14px" }}><Link to="/login">
        Volver a la página de inicio de sesión </Link>
      </Button>
    </div>
  );
}
