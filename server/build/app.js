"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var conocimientosRoute_1 = __importDefault(require("./route/conocimientosRoute"));
var usuariosRoute_1 = __importDefault(require("./route/usuariosRoute"));
var truequesRoute_1 = __importDefault(require("./route/truequesRoute"));
var categoriasRoute_1 = __importDefault(require("./route/categoriasRoute"));
var favoritosRoute_1 = __importDefault(require("./route/favoritosRoute"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var nodemailer = require('nodemailer');
var mailer = express_1["default"].Router();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(conocimientosRoute_1["default"]);
app.use(usuariosRoute_1["default"]);
app.use(truequesRoute_1["default"]);
app.use(categoriasRoute_1["default"]);
app.use(favoritosRoute_1["default"]);
app.use("/", mailer);
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
        console.log("=== Server is ready to receive emails: ".concat(success, " ==="));
    }
});
mailer.post("/contact", function (req, res) {
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
app.get("/", function (req, res) {
    res.json("Hey there! Welcome to AYNI.");
});
exports["default"] = app;
