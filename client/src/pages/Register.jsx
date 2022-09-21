import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "../components/reusables/Alert";

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
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
        // }
        // if (error.code === "auth/email-already-in-use") {
        //   setError("Correo en uso. Prueba otro.");
        // if (error.code === "auth/weak-password") {
        //   setError("Contraseña débil");
        //   }
      }
      setError(error.message);
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

        <button>
          Registrar
        </button>
      </form>
      <p>
        Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
}
