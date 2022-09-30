import express, { Request, Response } from "express";

const nodemailer = require('nodemailer');

const app = express();
const router = express.Router();
app.use("/", router);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((error: any, success: any) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`=== Server is ready to take messages: ${success} ===`);
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.EMAIL,
        subject: "Formulario de Contacto",
        html: `<p>Nombre: ${name}</p>
             <p>Email: ${email}</p>
             <p>Mensaje: ${message}</p>`,
    };
    transporter.sendMail(mail, (error: any, data: any) => {
        if (error) {
            res.json({ status: "ERROR" + error });
        } else {
            res.json({ status: "¡Correo enviado! Recibirás nuestra respuesta muy pronto." });
        }
    });
});