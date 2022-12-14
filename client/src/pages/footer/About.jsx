import { LeftContent, LogoAyni, RightContent, View, Text, Subtitle, SmallBox, MIcon } from '../../styles/auth';
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import biglogoAyni from "../../assets/banner/biglogoAyni.png"
import Appbar from "../../components/appbar/index";


export default function About() {
  return (
    <>
    <Appbar />
      <View>
        <LeftContent>
          <Subtitle>Misión, Visión y Valores</Subtitle>
        </LeftContent>
        <RightContent sx={{ justifyContent: "center", textAlign: "center" }}>
          <Link to="/"><LogoAyni src={biglogoAyni}alt="logo-Ayni" /></Link>
          <Text>
            <br /> <br />
            AYNI, proviene del quechua y significa <i>"reciprocidad"</i> o <i>"mutualismo"</i>.
            <br /> <br />Es una aplicación web de trueque, que sirve para intercambiar conocimientos dentro de la comunidad de Factoria F5.
            <br /> <br /> En Factoria F5 valoramos el respeto, la solidaridad, la inclusividad y creemos en el equilibrio entre dar y recibir.
            <br /> <br />
            Queremos que AYNI sea vuestra herramienta para compartir conocimientos, talentos y experiencias. De esta forma, crearemos un mundo más reciproco y construiremos redes de apoyo gracias a la programación y al desarrollo web.
          </Text>
          <SmallBox>
            <MIcon src="./images/footer/handshake.png" sx={{ width: "50px" }} />
            <MIcon src="./images/footer/idea.png" sx={{ width: "50px" }} />
            <MIcon src="./images/footer/share.png" sx={{ width: "50px" }} />
          </SmallBox>
          <Text sx={{ padding: "20px 0px" }}>
            <strong>"Hoy por ti, mañana por mi."</strong>
          </Text>
        </RightContent>
      </View>
      <Footer />
    </>
  )
}