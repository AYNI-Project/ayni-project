import { Link } from "react-router-dom";
import { LeftContent, LogoAyni, RightContent, View, Text, Subtitle, SmallBox, MIcon } from "../styles/auth/";
import { BannerButton } from "../styles/banner";
import Appbar from "../components/appbar";
import Footer from "../components/footer/Footer";

export default function Favorites() {

  return (
    <>
      <Appbar />
      <View sx={{ display: "flex", flexDirection: "column" }}>
        <LeftContent sx={{height:"50px"}}>
          <Subtitle>Mis trueques favoritos</Subtitle>
        </LeftContent>
        <RightContent sx={{ justifyContent: "center", textAlign: "center" }}>
          <Text>
            ¡Oops! Ahora mismo no tienes ningún trueque favorito. <br/>
             Haz click en el botón para entrar en el catálogo. <br />
          </Text>
          <Link to="/knowledge/" sx={{ textDecoration: "none" }}>
            <br />
            <button className="btn" color="primary" >Buscar Trueque</button>
            <br />
          </Link>
          <br />
          <br />
          <Text sx={{ padding: "20px 0px" }}>
            <strong>"Hoy por ti, mañana por mi."</strong>
          </Text>
          <SmallBox>
              <MIcon src="./images/footer/handshake.png" sx={{ width: "50px" }} />
              <MIcon src="./images/footer/idea.png" sx={{ width: "50px" }} />
              <MIcon src="./images/footer/share.png" sx={{ width: "50px" }} />
            </SmallBox>
        </RightContent>
      </View>
      <Footer />
    </>
  )
}