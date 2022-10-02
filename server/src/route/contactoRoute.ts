// import { Router, Request, Response } from "express";

// router.post("/contact", (req: Request, res:Response) => {
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