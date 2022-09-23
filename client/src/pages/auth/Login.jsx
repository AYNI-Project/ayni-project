import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/reusables/Alert";
import { View, ActiveButton, LogoAyni, LeftContent, RightContent, LoginImage, LoginText, LoginForm, InputForm, FormDiv, Subtitle, SmallText } from "../../styles/auth";
import { Box } from "@mui/system";

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

  const btnHandler = () => { };

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
    <View>
      <LeftContent>
        <LogoAyni src="./images/banner/2.png" alt="logo-Ayni" />
        <LoginText>Entra y comienza a intercambiar con nuestra comunidad.</LoginText>
        <LoginImage src="./images/banner/post-sign.png" alt="poste direcciones" />
      </LeftContent>
      <RightContent>
        {error && <Alert message={error} />}
        <Subtitle>Inicia Sesión</Subtitle>
        <LoginForm component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}>
          <FormDiv>
            <label id="outlined-basic" label="email" variant="outlined"
              htmlFor="email" sx={{ padding: "1em", backgroundColor: "pink" }}>
              Introduce tu correo electrónico:
            </label>
            <InputForm id="email" type="email"
              name="email" label="Email" variant="outlined" onChange={handleChange} />
            <label
              htmlFor="password">
              Introduce tu contraseña:
            </label>
            <InputForm type="password"
              name="password"
              id="password" variant="outlined" label="Contraseña" onChange={handleChange} />
            <SmallText><Link to="/password-reset" >Has olvidado tu contraseña?</Link></SmallText>
          </FormDiv>
          <Box className="terms-conditions" sx={{ padding: "20px 0px", fontSize: "14px" }}>
            <input type="checkbox" id="agree" onChange={checkboxHandler} sx={{ width: "400px" }} />
            <label htmlFor="agree"> Acepto los términos y condiciones.</label>
          </Box>
          <ActiveButton disabled={!agree} className="btn" onClick={btnHandler}>
            Inicia Sesión
          </ActiveButton>
        </LoginForm>
        <SmallText>
          No tienes cuenta todavía? <Link to="/">Contacta con Factoria F5</Link>
        </SmallText>
      </RightContent>
    </View>
  );
}