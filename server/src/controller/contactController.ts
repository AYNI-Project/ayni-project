// import transporter from '../model/contactModel';
// import { Request, Response } from 'express';

// const contactController = {

//     sendMail: async (req: Request, res: Response) => {
//         try {

//             if (!req.body.email || !req.body.message) {
//                 res.status(400).json({ error: "Ha ocurrido un error. Rellena los campos obligatorios." });
//             }

//             const name = req.body.name;
//             const email = req.body.email;
//             const message = req.body.message;
//             const mail = {
//                 from: name,
//                 to: process.env.EMAIL,
//                 subject: "Formulario de Contacto",
//                 html: `<p>Nombre: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Mensaje: ${message}</p>`,
//             };
//             res.status(201).json({ status: "¡Correo enviado! Recibirás nuestra respuesta muy pronto." });
//         } catch (error) {
//             res.status(500).json({ status: "ERROR" + error });
//         }
//     }
// };

// export default contactController;