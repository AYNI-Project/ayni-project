import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/reusables/Alert";
import { Button, Box } from "@mui/material";
import { View, LogoAyni, LeftContent, RightContent, LoginImage, LoginText, LoginForm, InputForm, FormDiv, Subtitle} from "../../styles/auth";

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
    <View>
      <LeftContent>
      <Link to="/"><LogoAyni src="./images/banner/2.png" alt="logo-Ayni" /></Link>
        <LoginText>Registra y rellena los datos del nuevo usuario.</LoginText>
        <LoginImage src="./images/banner/post-sign.png" alt="poste direcciones"/>
      </LeftContent>
      <RightContent>
        <Subtitle>Registro de usuarios</Subtitle>
        {error && <Alert message={error} />}
        <LoginForm component="form"
          onSubmit={handleSubmit}
        >
          <FormDiv sx={{ height: "450px" }}>
            <label htmlFor="email"> Email </label>
            <InputForm
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}>
            </InputForm>

            <label htmlFor="password"> Contraseña </label>
            <InputForm
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="******"
            ></InputForm>

            <label htmlFor="name"> Nombre </label>
            <InputForm
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
            ></InputForm>

            <label htmlFor="surname"> Apellidos </label>
            <InputForm
              type="text"
              name="surname"
              id="surname"
              placeholder="Apellidos"
            ></InputForm>

            <Box>
              <label htmlFor="role"> Rol </label>
              <select id="role" name="role" onChange={handleChange} sx={{ color: "#FFA37F", width: "350px", margin: "10px 0px" }}>
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
              </select>
            </Box>
          </FormDiv>
          <button>
            Registrar
          </button>
        </LoginForm>
        <Button sx={{ fontSize: "14px" }}><Link to="/login">
          Volver a la página de inicio de sesión </Link>
        </Button>
      </RightContent>
    </View>
  );
}
