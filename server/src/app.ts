import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import conocimientosRouter from "./route/conocimientosRoute";
import usuariosRouter from "./route/usuariosRoute";
import truequesRouter from "./route/truequesRoute";

dotenv.config();
const app = express();
// const nodemailer = require('nodemailer');
// const router = (express.Router());

app.use(cors());
app.use(express.json());
app.use(conocimientosRouter);
app.use(usuariosRouter);
app.use(truequesRouter);
// app.use("/", router);

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         pass: process.env.WORD,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     },
// });

// transporter.verify((error: any, success: any) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(`=== Server is ready to take messages: ${success} ===`);
//     }
// });

// router.post("/contact", (req: Request, res: Response) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     const mail = {
//         from: name,
//         to: process.env.EMAIL,
//         subject: "Formulario de Contacto",
//         html: `<p>Nombre: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Mensaje: ${message}</p>`,
//     };
//     transporter.sendMail(mail, (error: any, data: any) => {
//         if (error) {
//             res.json({ status: "ERROR" + error });
//         } else {
//             res.json({ status: "¡Correo enviado! Recibirás nuestra respuesta muy pronto." });
//         }
//     });
// });

app.get("/", (req: Request, res: Response) => {
    res.json("Hey there! Welcome to AYNI.");
});

export default app;