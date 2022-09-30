import React from 'react';
import { LeftContent, RightContent, Subtitle, View } from '../../styles/auth';
import { FaQtitle, FaQBox, FaQparraf } from '../../styles/footer';
import Footer from "../../components/footer/Footer";
import { Box } from '@mui/system';

export default function Faq() {
  return (
    <>
      <View sx={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
        <Subtitle sx={{ marginTop: "50px" }}>
          Preguntas frecuentes
        </Subtitle>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <LeftContent>
            <FaQBox>
              <FaQtitle>
                1. ¿QUÉ NECESITO PARA HACER TRUEQUES?
              </FaQtitle>
              <FaQparraf>
                Para hacer trueques, necesitas crear tu cuenta y al hacer tu perfil, agregar los conocimientos con los que quieres hacer trueque con el resto de la comunidad.
              </FaQparraf>
              <FaQtitle>
                2. ¿CÓMO HAGO TRUEQUES?
              </FaQtitle>
              <FaQparraf>
                Solo tienes que ir a la página inicio y en el buscador de trueques, puedes buscar por categoría, palabra clave, etc. Al introducir algún campo, te buscará a todas las personas que tienen servicios registrados a la búsqueda que has realizado.
                Para hacer trueque, solo tienes que ofrecer los conocimientos que has añadido a tu cuenta a la persona con la que quieres hacer trueque.
              </FaQparraf>
              <FaQtitle>
                3. ¿CÓMO ME COMUNICO CON QUIEN HAGO EL TRUEQUE?
              </FaQtitle>
              <FaQparraf>
                Una vez que hayas propuesto un trueque a otra persona, te llegarán mensajes a tu cuenta de AYNI y a tu correo cada vez que tengas respuesta de la contraparte. Los datos de contacto los puedes encontrar al buscar en su perfil.
              </FaQparraf>
            </FaQBox>
          </LeftContent>
          <RightContent>
            <FaQBox>
              <FaQtitle>
                4. ¿QUÉ PASA SI NO ESTOY CONFORME CON EL TRUEQUE?
              </FaQtitle>
              <FaQparraf>
                Muy buena pregunta! Si no estás conforme con el trueque realizado, ya sea con lo que recibiste, los tiempos u otro, puedes calificar a la persona con la que hiciste el trueque, calificando tu experiencia. De esta forma, ayudamos al resto de la comunidad a mejorar.
              </FaQparraf>
              <FaQtitle>
                5. ¿QUÉ ES BUENO TENER EN CUENTA PARA HACER TRUEQUES?
              </FaQtitle>
              <FaQparraf>
                Lo más importante es siempre buscar que el cambio de energías sea justo. Ambas partes deben percibir como un justo intercambio. La comunicación entre ambas partes es muy importante para llegar a un acuerdo, por lo que con la persona que hagas trueque aprovecha de sintonizar y buscar el mutuo apoyo y colaboración.
              </FaQparraf>
              <FaQtitle>
                6. ¿CÓMO PUEDO MEJORAR MI CALIFICACIÓN?
              </FaQtitle>
              <FaQparraf>
                Las calificaciones asociadas a tu cuenta corresponde a la percepción de trueque que tuvieron tus contrapartes en los trueques realizados. Una de las formas de mejorar la calificación es preguntar sobre los aspectos a mejorar, hacer más trueques para aumentar la cantidad de opiniones, revisar cuál es el aspecto que más puedes trabajar al ofrecer tus conocimientos.
              </FaQparraf>
            </FaQBox>
          </RightContent>
        </Box>
      </View>
      <Footer />
    </>
  )
}