"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var nodemailer = require('nodemailer');
var app = (0, express_1["default"])();
var router = express_1["default"].Router();
app.use("/", router);
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("=== Server is ready to take messages: ".concat(success, " ==="));
    }
});
router.post("/contact", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var mail = {
        from: name,
        to: process.env.EMAIL,
        subject: "Formulario de Contacto",
        html: "<p>Nombre: ".concat(name, "</p>\n             <p>Email: ").concat(email, "</p>\n             <p>Mensaje: ").concat(message, "</p>")
    };
    transporter.sendMail(mail, function (error, data) {
        if (error) {
            res.json({ status: "ERROR" + error });
        }
        else {
            res.json({ status: "¡Correo enviado! Recibirás nuestra respuesta muy pronto." });
        }
    });
});
