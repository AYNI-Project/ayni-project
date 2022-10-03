import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { Link } from "react-router-dom";
import Alert from "../../components/reusables/Alert";
import { View, LeftContent, RightContent, Subtitle, LogoAyni, LoginImage, XForm, InputForm, FormDiv } from "../../styles/auth/index";
import { Button } from "@mui/material";

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
    <View>
      <LeftContent>
        <LogoAyni src="./images/banner/2.png" alt="logo-Ayni" />
        <LoginImage src="./images/banner/post-sign.png" alt="poste con flechas apuntando hacia distintas direcciones" />
      </LeftContent>
      <RightContent sx={{ alignItems: "center" }}>
        <Subtitle>¿HAS OLVIDADO TU CONTRASEÑA?</Subtitle>
        {error && <Alert message={error} />}
        <XForm>
          <FormDiv sx={{ height: "100px" }}>
            <label id="outlined-basic" label="Outlined" variant="outlined"
              htmlFor="email">
              Introduce tu correo electrónico:
            </label>
            <InputForm id="email" type="email"
              name="email" label="Email" variant="outlined" onChange={handleChange} />
          </FormDiv>

          <button className="btn" onClick={handleResetPassword}> Modificar contraseña </button>
        </XForm>

        <Button sx={{ fontSize: "14px" }}><Link to="/users/login">
          Volver a la página de inicio de sesión </Link>
        </Button>
      </RightContent>
    </View>
  );
}