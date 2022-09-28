import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { LeftContent, RightContent, Subtitle, View, Text, LoginImage, XForm, FormDiv, InputForm, } from '../../styles/auth';

export default function Contact() {

    const [status, setStatus] = useState("Enviar");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
        const { name, surname, email, phone, message } = e.target.elements;
        let details = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Enviado!");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <View>
            <LeftContent>
                <Subtitle>¡Aquí estamos!</Subtitle>
                <Box sx={{ m: 2 }}>
                    <strong>Barcelona</strong><br></br>Avinguda Bogatell, 82 <br></br>08005 Barcelona<br></br>
                    <a href='info@factoriaf5.org'>info@factoriaf5.org</a>
                </Box>
                <LoginImage src="./images/banner/post-sign.png" alt="poste direcciones" />
            </LeftContent>
            <RightContent sx={{ justifyContent: "center", textAlign: "center" }}>
                <Text sx={{ paddingBottom: "5px" }}>
                    Si necesitas más información, rellena el siguiente formulario de contacto y te responderemos lo antes posible.
                </Text>
                <XForm component="form" onSubmit={handleSubmit} sx={{ width: "450px", justifyContent: "center" }}>
                    <FormDiv sx={{ height: "500px", width: "450px", justifyContent: "center" }}>
                        {/* <label htmlFor="name"> Nombre </label> */}
                        <InputForm
                            type="text"
                            name="name"
                            id="name"
                            label="Nombre"
                            placeholder="Nombre"
                            required
                        ></InputForm>

                        {/* <label htmlFor="surname"> Apellidos </label> */}
                        <InputForm
                            type="text"
                            name="surname"
                            id="surname"
                            label="Apellidos"
                            placeholder="Apellidos"
                            required
                        ></InputForm>

                        {/* <label htmlFor="email"> Email </label> */}
                        <InputForm
                            type="email"
                            name="email"
                            id="email"
                            label="Email"
                            placeholder="Email"
                            required
                        ></InputForm>

                        {/* <label htmlFor="phone"> Teléfono </label> */}
                        <InputForm
                            type="phone"
                            name="phone"
                            id="phone"
                            label="Teléfono"
                            placeholder="Teléfono"
                        ></InputForm>

                        <InputForm
                            type="text"
                            name="message"
                            id="message"
                            label="Tu mensaje"
                            multiline
                            rows={3}
                            placeholder="Explícanos qué necesitas."
                            required
                        />
                        <Box className="privacy" sx={{ padding: "20px 0px", fontSize: "14px" }}>
                            <input type="checkbox" id="privacy" />
                            <label htmlFor="agree"> He leído y acepto la <a href="https://factoriaf5.org/politica-de-privacidad/">Política de privacidad</a></label>
                        </Box>
                    </FormDiv>
                    <button type='submit'>
                        {status}
                    </button>
                </XForm>
                <Button sx={{ fontSize: "14px" }}><Link to="/login">
                    Volver a la página de inicio de sesión </Link>
                </Button>
            </RightContent>
        </View>
    )
}

