import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/reusables/Alert";
import { Box } from '@mui/material';
import { View, LogoAyni, LeftContent, RightContent, LoginImage, LoginText, LoginForm, InputForm, FormDiv, Subtitle, SmallText } from "../../styles/auth";

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

  const checkboxHandler = () => setAgree(!agree);

  const btnHandler = () => { };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(e);
    try {
      await login(user.email, user.password);
      setAgree(!agree);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo inválido");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/user-not-found") {
        setError("Este usuario no existe. Prueba con otro correo electrónico.");
      }
    }
  }

  return (
    <View>
      <LeftContent>
        <LogoAyni src="./images/banner/2.png" alt="logo-Ayni" />
        <LoginText>Entra y comienza a intercambiar con nuestra comunidad.</LoginText>
        <LoginImage src="./images/banner/post-sign.png" alt="poste direcciones" />
      </LeftContent>
      <RightContent>
        <Subtitle>Inicia Sesión</Subtitle>
        {error && <Alert message={error} />}
        <LoginForm component="form"
          onSubmit={handleSubmit}>
          <FormDiv>
            <label id="outlined-basic" label="email" variant="outlined" htmlFor="email">
              Introduce tu correo electrónico:
            </label>
            <InputForm id="email" type="email"
              name="email" label="Email" variant="outlined" onChange={handleChange} />
            <label htmlFor="password">
              Introduce tu contraseña:
            </label>
            <InputForm id="password" type="password"
              name="password" label="Contraseña" variant="outlined" onChange={handleChange} />
            <SmallText><Link to="/password-reset" >Has olvidado tu contraseña?</Link></SmallText>
          </FormDiv>
          <Box className="terms-conditions" sx={{ padding: "20px 0px", fontSize: "14px" }}>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree"> Acepto los términos y condiciones.</label>
          </Box>
          <button disabled={!agree} className="btn" onClick={btnHandler}>
            Inicia Sesión
          </button>
        </LoginForm>
        <SmallText>
          No tienes cuenta todavía? <Link to="/contact">Contacta con Factoria F5</Link>
        </SmallText>
      </RightContent>
    </View>
  );
}